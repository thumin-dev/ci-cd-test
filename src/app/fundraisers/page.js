"use client";

import { useCallback, useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRouter } from "next/navigation";
import FundraiserCard from "./components/FundraiserCard";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid2,
  InputAdornment,
  Modal,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import FundraiserDetails from "./components/FundraiserDetails";
import CustomButton from "../components/Button";

const FundraisingFormPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [fundraisers, setFundraisers] = useState([]);
  const [filteredFundraisers, setFilteredFundraisers] = useState([]);
  const [fundraiserDetails, setFundraiserDetails] = useState(null);
  const [fundraiserID, setFundraiserID] = useState(null);
  const [fetchFundraiserLoading, setFetchFundraiserLoading] = useState(false);
  const [fundraiserDetailLoading, setFundraiserDetailLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openFundraiserDetailsModal, setOpenFundraiserDetailsModal] =
    useState(false);
  const [openFundraiserDeleteModal, setOpenFundraiserDeleteModal] =
    useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    getAllFundraisers();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredFundraisers(fundraisers);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = fundraisers.filter((fundraiser) => {
      const nameMatch =
        typeof fundraiser.FundraiserName === "string" &&
        fundraiser.FundraiserName.toLowerCase().includes(query);

      const idMatch = String(fundraiser.FundraiserCentralID).includes(query);

      return nameMatch || idMatch;
    });

    setFilteredFundraisers(filtered);
  }, [searchQuery, fundraisers]);

  const getAllFundraisers = useCallback(async () => {
    if (fetchFundraiserLoading) return;

    setFetchFundraiserLoading(true);

    try {
      const response = await fetch("/api/v1/fundraisers");

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Failed to fetch data (${response.status})`
        );
      }

      const data = await response.json();
      const fundraisersList = data.fundraisers || [];
      setFundraisers(fundraisersList);
      setFilteredFundraisers(fundraisersList);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchFundraiserLoading(false);
    }
  }, []);

  const getFundraiserDetails = useCallback(async (fundraiserId) => {
    if (!fundraiserId) return;

    setFundraiserDetailLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/v1/fundraisers/details/${fundraiserId}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to fetch fundraiser details (${response.status})`
        );
      }

      const details = await response.json();

      setFundraiserDetails(details.data);
    } catch (error) {
      console.error("Error fetching fundraiser details:", err);
      setError(`Failed to load fundraiser details: ${err.message}`);

      setFundraiserDetails(null);
    } finally {
      setFundraiserDetailLoading(false);
    }
  }, []);

  const handleOpenFundraiserDetailsModal = useCallback((id) => {
    getFundraiserDetails(id);
    setOpenFundraiserDetailsModal((prev) => !prev);
  }, []);

  const handleCloseFundraiserDetailsModal = useCallback(
    () => setOpenFundraiserDetailsModal((prev) => !prev),
    []
  );
  const handleEdit = (id) => {
    router.push(`/fundraisers/${id}/edit`);
  };

  const handleOpenFundraiserDeleteModal = useCallback((id) => {
    setFundraiserID(id);
    setOpenFundraiserDeleteModal((prev) => !prev);
  }, []);

  const handleCloseFundraiserDeleteModal = useCallback(() => {
    setOpenFundraiserDeleteModal((prev) => !prev);
  }, []);

  const handleDeleteFundraiserConfirm = useCallback(async () => {
    if (!fundraiserID) return;

    try {
      const response = await fetch(
        `api/v1/fundraisers/delete/${fundraiserID}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to delete fundraiser (${response.status})`
        );
      }
      const result = await response.json();

      await getAllFundraisers();
      setOpenSnackbar(true);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenFundraiserDeleteModal(false);
      setOpenFundraiserDetailsModal(false);
    }
  }, [fundraiserID, getAllFundraisers]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (fetchFundraiserLoading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Typography sx={{ color: "#000000", fontSize: 34, fontWeight: 600 }}>
          Fundraiser
        </Typography>
        <TextField
          name="search"
          placeholder="Search"
          sx={{ width: 642 }}
          value={searchQuery}
          onChange={handleSearchQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 20,
              height: 40,
            },
          }}
        />
        <CustomButton
          onClick={() => {
            router.push("/fundraisers/create", { scroll: false });
          }}
          text="Create New"
          icon={<AddCircleOutlineOutlinedIcon />}
        />
      </Box>
      <Divider sx={{ mb: 3, mt: 1, backgroundColor: "#E2E8F0", height: 3 }} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {filteredFundraisers.length > 0 ? (
          <Container maxWidth="xl">
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            >
              {filteredFundraisers.map((fundraiser, index) => (
                <Grid2 xs={12} sm={6} md={3} lg={3} key={index}>
                  <FundraiserCard
                    fundraiser={fundraiser}
                    onClick={handleOpenFundraiserDetailsModal}
                    onEdit={handleEdit}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              {searchQuery
                ? "No fundraisers match your search criteria!"
                : "There are no fundraisers!"}
            </Typography>
          </Box>
        )}

        <Modal
          open={openFundraiserDetailsModal}
          onClose={handleCloseFundraiserDetailsModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ alignSelf: "center", justifyItems: "center" }}
        >
          {fundraiserDetailLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <FundraiserDetails
              fundraiserDetails={fundraiserDetails}
              onClose={handleCloseFundraiserDetailsModal}
              onEdit={handleEdit}
              onDelete={handleOpenFundraiserDeleteModal}
            />
          )}
        </Modal>
        <Modal
          open={openFundraiserDeleteModal}
          onClose={handleCloseFundraiserDeleteModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ alignSelf: "center", justifyItems: "center" }}
        >
          <Paper
            sx={{
              backgroundColor: "#F8FAFC",
              width: 280,
              height: 146,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Are you sure you want to delete?
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                color="primary"
                onClick={handleCloseFundraiserDeleteModal}
                sx={{
                  minWidth: 80,
                  borderColor: "#DC2626",
                  borderRadius: 10,
                  color: "#DC2626",
                }}
              >
                No
              </Button>

              <Button
                startIcon={<CheckIcon />}
                variant="contained"
                color="error"
                onClick={handleDeleteFundraiserConfirm}
                sx={{
                  color: "#F8FAFC",
                  minWidth: 80,
                  backgroundColor: "#DC2626",
                  borderRadius: 10,
                  "&:hover": {
                    backgroundColor: "#DC2626",
                  },
                }}
              >
                Yes
              </Button>
            </Box>
          </Paper>
        </Modal>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Fundraiser deleted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
export default FundraisingFormPage;
