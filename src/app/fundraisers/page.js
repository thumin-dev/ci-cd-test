"use client";

import { useCallback, useEffect, useState } from "react";
import CustomButton from "../components/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { set } from "date-fns";
import { useRouter } from "next/navigation";
import FundraiserCard from "./components/FundraiserCard";
import { Box, CircularProgress, Container, Grid2 } from "@mui/material";

const FundraisingFormPage = () => {
  const router = useRouter();
  const [fetchFundraiserLoading, setFetchFundraiserLoading] = useState(false);
  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    fetchAllFundraisers();
  }, []);

  const fetchAllFundraisers = useCallback(async () => {
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
      setFundraisers(data.fundraisers || []);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchFundraiserLoading(false);
    }
  }, []);

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
      <CustomButton
        onClick={() => {
          router.push("/fundraisers/create", { scroll: false });
        }}
        text="Create New"
        icon={<AddCircleOutlineOutlinedIcon />}
      />
      <Box
        sx={{
          flexGrow: 1,
          pt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          >
            {fundraisers.map((fundraiser, index) => (
              <Grid2 xs={12} sm={6} md={3} lg={3} key={index}>
                <FundraiserCard fundraiser={fundraiser} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
export default FundraisingFormPage;
