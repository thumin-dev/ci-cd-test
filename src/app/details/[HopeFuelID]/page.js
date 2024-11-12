"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import ActionButtons from "../../UI/Components/ActionButton";
import AmountDetails from "../../UI/Components/AmountDetails";
import CardsIssuedList from "../../UI/Components/CardIssuedList";
import CreatorInfo from "../../UI/Components/CreatorInfo";
import SupportRegion from "../../UI/Components/SupportRegion";
import UserInfo from "../../UI/Components/UserInfo";
import HopeFuelIdStatus from "../../UI/Components/HopeIdStatus";
import SearchBarForm from "../../UI/SearchForm/searchPage";
import ResponsiveAppBar from "../../UI/AppBar/AppBar";


export default function PaymentDetails() {
  const { HopeFuelID } = useParams();
  const [data, setData] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/paymentDetails?HopeFuelID=${HopeFuelID}`
        );
        const result = await response.json();
        setData(result[0]);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    fetchData();
  }, [HopeFuelID]);

  if (!data) return <Typography>Loading...</Typography>;

  return (
    <>
    <ResponsiveAppBar />
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 4 }}>
        <Stack direction="row" spacing={3} alignItems="flex-start">
          {/* Left Section: Search Bar */}
          <Box sx={{ width: 300, marginRight: 3, border: "none" }}>
            <SearchBarForm />
          </Box>

          {/* Right Section: Payment Details */}
          <Card sx={{ padding: 3, flex: 1, borderRadius: 5 }}>
            <Stack spacing={2}>
              {/* Status Header */}
              <HopeFuelIdStatus data={data} />
              <Divider />

              <Stack direction="row" spacing={4}>
                {/* Image Placeholder */}
                {data.ScreenShotLink && (
                  <Box
                    component="img"
                    src={data.ScreenShotLink}
                    alt="Payment Screenshot"
                    sx={{ width: 200, height: 200, borderRadius: 2 }}
                  />
                )}

                {/* Right Section */}
                <Stack spacing={2} sx={{ flex: 1 }}>
                  {/* User Info Section */}
                  <UserInfo user={data} />

                  {/* Amount and Currency Section */}
                  <AmountDetails amount={data} />

                  {/* Support Region Section */}
                  <SupportRegion region={data} />

                  {/* Creator Information Section */}
                  <CreatorInfo creator={data} />

                  {/* Notes Input */}
                  <TextField
                    fullWidth
                    label="Note"
                    multiline
                    rows={3}
                    defaultValue={data.Note}
                  />

                  {/* Status Selection */}
                  <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select defaultValue={data.Status || 1}>
                      <MenuItem value={1}>၁ - ဖောင်တင်သွင်း</MenuItem>
                      <MenuItem value={2}>၂ - စစ်ဆေးပြီး</MenuItem>
                      <MenuItem value={3}>၃ - ပြီးစီး</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Confirm and Deny Buttons */}
                  <ActionButtons />
                </Stack>
              </Stack>

              {/* List of Cards Issued */}
              <CardsIssuedList />
            </Stack>
          </Card>
        </Stack>
      </Box>
    </>
  );
}
