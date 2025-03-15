"use client";

import {
  Box,
  CircularProgress,
  Grid,
  Modal,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import UserInfoCard from "./components/UserInfoCard";
import CardInfo from "./components/CardInfo";
import DetailModal from "../UI/Components/Modal";
import SubscriptionCard from "../UI/Components/SubscriptionCard";
import { SUBSCRIPTION_DATA } from "../variables/const";
import CardDisplay from "./components/CardDisplay";
import { useDebounce } from "use-debounce";
import { useAgent } from "../context/AgentContext";
import EditHistory from "./components/EditHistory";

const mockCards = [
  {
    id: "HOPEID-12345",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
  {
    id: "HOPEID-67890",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
  {
    id: "HOPEID-24680",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
];

const PAGE_SIZE = 10;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 800,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
};

const CustomerListPage = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [hoveredProfileId, setHoveredProfileId] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [profileDetailData, setProfileDetailData] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [editHistoryLoading, setEditHistoryLoading] = useState(false);
  const [editHistory, setEditHistory] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [openDetailModal, setOpenDetailModal] = useState(false);

  const initialLoadRef = useRef(false);
  const [debouncedSearch] = useDebounce(searchText, 100);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!initialLoadRef.current) {
      initialLoadRef.current = true;
      fetchCustomerData(1, true);
    } else if (debouncedSearch !== undefined) {
      setPage(1);
      setHasMore(true);
      fetchCustomerData(1, true);
    }
  }, [debouncedSearch]);

  const fetchCustomerData = useCallback(
    async (pageNumber, isNewSearch = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const url = debouncedSearch
          ? `/api/customers/search?term=${encodeURIComponent(debouncedSearch)}`
          : `/api/customers/?page=${pageNumber}&limit=${PAGE_SIZE}`;

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Failed to fetch data (${response.status})`
          );
        }

        const result = await response.json();
        const newCustomers = result.customers || [];

        if (isNewSearch) {
          setCustomerData(newCustomers);
          setPage(pageNumber);

          if (newCustomers.length > 0) {
            const firstCustomerId = newCustomers[0].CustomerId;
            setSelectedProfileId(firstCustomerId);
            setHoveredProfileId(firstCustomerId);
            fetchProfileDetails(firstCustomerId);
          } else {
            setSelectedProfileId(null);
            setHoveredProfileId(null);
            setProfileDetailData(null);
          }
        } else {
          setCustomerData((prevData) => [...prevData, ...newCustomers]);
          setPage(pageNumber + 1);
        }

        setHasMore(newCustomers.length >= PAGE_SIZE);
      } catch (err) {
        console.error(err);
        setError(err.message);
        if (isNewSearch) {
          setCustomerData([]);
          setSelectedProfileId(null);
          setHoveredProfileId(null);
          setProfileDetailData(null);
        }
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [debouncedSearch, loading]
  );

  const fetchProfileDetails = useCallback(async (profileId) => {
    if (!profileId) return;

    setProfileLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers/${profileId}`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to fetch profile details (${response.status})`
        );
      }

      const profileDetails = await response.json();
      setProfileDetailData(profileDetails.customer);
    } catch (err) {
      console.error("Error fetching profile details:", err);
      setError(`Failed to load profile details: ${err.message}`);

      setProfileDetailData(null);
    } finally {
      setProfileLoading(false);
    }
  }, []);

  const fetchEditHistory = useCallback(async (id) => {
    setEditHistoryLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers/${id}/edit/history`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to fetch profile details (${response.status})`
        );
      }

      const editHistory = await response.json();
      setEditHistory(editHistory);
    } catch (error) {
      console.log(error);
    } finally {
      setEditHistoryLoading(false);
    }
  }, []);

  const handleProfileSelect = useCallback(
    (profileId) => {
      setSelectedProfileId(profileId);
      setHoveredProfileId(profileId);
      fetchProfileDetails(profileId);
    },
    [fetchProfileDetails]
  );

  const handleProfileHover = useCallback((profileId) => {
    setHoveredProfileId(profileId);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchCustomerData(page, false);
    }
  }, [loading, hasMore, page, fetchCustomerData]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleViewEditHistory = (id) => {
    fetchEditHistory(id);
    setOpenDetailModal((prev) => !prev);
  };

  const handleCloseDetailModal = () => {
    setOpenDetailModal((prev) => !prev);
  };

  return (
    <Box sx={{ p: 2, bgcolor: "background.default", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Sidebar
            profiles={customerData}
            selectedProfileId={selectedProfileId}
            hoveredProfileId={hoveredProfileId}
            onSelectedProfile={handleProfileSelect}
            onHoverProfile={handleProfileHover}
            onLoadMore={handleLoadMore}
            searchValue={searchText}
            onSearch={handleSearchChange}
            loading={loading}
            hasMore={hasMore}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          {profileDetailData ? (
            <UserInfoCard
              data={profileDetailData}
              isMobile={isMobile}
              // onEdit={handleEdit}
              onViewEditHistory={handleViewEditHistory}
            />
          ) : (
            <Box sx={{ p: 2, border: "1px solid #E2E8F0", borderRadius: 1 }}>
              <Typography variant="body1" align="center">
                {profileLoading ? "Loading profile..." : "No profile selected"}
              </Typography>
            </Box>
          )}

          {profileDetailData ? (
            <Box sx={{ mt: theme.spacing(2), mx: theme.spacing(3) }}>
              <CardInfo data={profileDetailData} />
            </Box>
          ) : (
            <Box sx={{ p: 2, border: "1px solid #E2E8F0", borderRadius: 1 }}>
              <Typography variant="body1" align="center">
                {profileLoading ? "Loading profile..." : "No profile selected"}
              </Typography>
            </Box>
          )}

          {/* <Box sx={{ mt: theme.spacing(2) }}>
            <SubscriptionCard cards={SUBSCRIPTION_DATA} />
          </Box>

          <Grid container spacing={2} sx={{ px: 2, pt: theme.spacing(3) }}>
            {mockCards.map((card, index) => (
              <Grid item key={card.id || index}>
                <CardDisplay
                  id={card.id}
                  name={card.name}
                  status={card.status}
                />
              </Grid>
            ))}
          </Grid> */}
        </Grid>
      </Grid>
      <Modal
        open={openDetailModal}
        onClose={handleCloseDetailModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignSelf: "center", justifyItems: "center" }}
      >
        {editHistoryLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : editHistory ? (
          <Typography>Hi</Typography>
        ) : (
          // <EditHistory historyData={editHistory} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              No Edit History Found
            </Typography>
          </Box>
        )}
      </Modal>
      {/* <DetailModal
        direction="center"
        open={openDetailModal}
        onClose={handleCloseDetailModal}
      >
        <Paper
          sx={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "100%",
            maxWidth: "600px",
            height: "100vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            overflow: "auto",
            zIndex: 1300,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          {editHistoryLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : editHistory ? (
            <Typography>Edit History Go Here</Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                No Edit History Found
              </Typography>
            </Box>
          )}
        </Paper>
      </DetailModal> */}
    </Box>
  );
};

export default CustomerListPage;
