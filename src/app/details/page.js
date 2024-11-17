"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
import ActionButtons from "../UI/Components/ActionButton";
import AmountDetails from "../UI/Components/AmountDetails";
import CardsIssuedList from "../UI/Components/CardIssuedList";
import CreatorInfo from "../UI/Components/CreatorInfo";
import SupportRegion from "../UI/Components/SupportRegion";
import UserInfo from "../UI/Components/UserInfo";
import HopeFuelIdStatus from "../UI/Components/HopeIdStatus";
import SearchBarForm from "../search/page";



export default function PaymentDetails() {
  const searchParams = useSearchParams();
  const HopeFuelID = searchParams.get("HopeFuelID");
  const router = useRouter();
  const [data, setData] = useState(null);

  // Fetch data based on HopeFuelID
  useEffect(() => {
    if (HopeFuelID) {
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
    }
  }, [HopeFuelID]);

  // Handle case where no HopeFuelID is selected
  if (!HopeFuelID) {
    return (
      <>
       
        <Box sx={{ display: "flex", height: "100vh" }}>
          {/* Left Section: Search Bar */}
          <Box sx={{ width: 300, marginRight: 3, border: "none" }}>
            <SearchBarForm />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">
              Please select a transaction to view details
            </Typography>
          </Box>
        </Box>
      </>
    );
  }

  if (!data) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left Section: Search Bar */}
      <Box sx={{ width: 300, marginRight: 3, border: "none" }}>
        <SearchBarForm />
      </Box>

      {/* Right Section: Payment Details */}
      <Box sx={{ flex: 1, padding: 4, backgroundColor: "#f5f5f5" }}>
        <Card sx={{ padding: 3, flex: 1, borderRadius: 5 }}>
          <Stack spacing={2}>
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
                <Card variant="outlined" sx={{ padding: 2 }}>
                  <UserInfo user={data} />
                </Card>

                <Card variant="outlined" sx={{ padding: 2 }}>
                  <AmountDetails amount={data} />
                </Card>

                <Card variant="outlined" sx={{ padding: 2 }}>
                  <SupportRegion region={data} />
                </Card>

                <Card variant="outlined" sx={{ padding: 2 }}>
                <CreatorInfo creator={data} />
                </Card>
                
                <TextField
                  fullWidth
                  label="Note"
                  multiline
                  rows={3}
                  defaultValue={data.Note}
                />
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select defaultValue={data.Status || 1}>
                    <MenuItem value={1}>၁ - ဖောင်တင်သွင်း</MenuItem>
                    <MenuItem value={2}>၂ - စစ်ဆေးပြီး</MenuItem>
                    <MenuItem value={3}>၃ - ပြီးစီး</MenuItem>
                  </Select>
                </FormControl>
                <ActionButtons />
              </Stack>
            </Stack>

            <CardsIssuedList />
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
