"use client";

import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Modal,
  Paper,
  Snackbar,
  TextField,
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
import EditHistory from "./components/EditHistory";
import CustomerInfoEdit from "./components/CustomerInfoEdit";
import { set } from "date-fns";
import { useAgent } from "../context/AgentContext";

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

const CustomerListPage = () => {
  const theme = useTheme();
  const agentId = useAgent();
  const [searchText, setSearchText] = useState("");
  const [selectedEditId, setSelectedEditId] = useState(null);
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
  const [openEditHistoryModal, setOpenEditHistoryModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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

  const handleOpenEditHistoryModal = (id) => {
    setSelectedEditId(id);
    setOpenEditHistoryModal((prev) => !prev);

    if (profileDetailData) {
      setCustomerInfo({
        name: profileDetailData.Name || "",
        email: profileDetailData.Email || "",
        country: profileDetailData.UserCountry || "",
      });
    }
  };

  const handleSave = useCallback(
    async (data) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({
        agentId,
        updates: [
          {
            field: "Name",
            newValue: data.name,
          },
          {
            field: "Email",
            newValue: data.email,
          },
        ],
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        let response = await fetch(
          `api/customers/${selectedEditId}/edit`,
          requestOptions
        );

        if (response.ok) {
          const responseData = await response.json();

          setSnackbarMessage(responseData.message);
          setSnackbarSeverity("success");
          setSnackbarOpen(true);

          fetchProfileDetails(selectedProfileId);
        } else {
          setSnackbarMessage("Failed to update customer information");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.log(error);
        setSnackbarMessage(
          "An error occurred while updating customer information"
        );
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } finally {
        setOpenEditHistoryModal((prev) => !prev);
      }
    },
    [selectedEditId, agentId, fetchProfileDetails, selectedProfileId]
  );

  const handleCancel = () => {
    setOpenEditHistoryModal((prev) => !prev);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen((prev) => !prev);
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
              onEdit={handleOpenEditHistoryModal}
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
          <EditHistory historyData={editHistory.data} />
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
      </Modal>
      <Modal
        open={openEditHistoryModal}
        onClose={() => setOpenEditHistoryModal((prev) => !prev)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignSelf: "center", justifyItems: "center" }}
      >
        <CustomerInfoEdit
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CustomerListPage;
