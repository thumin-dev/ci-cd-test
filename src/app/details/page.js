"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
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
  const [data, setData] = useState(null);

  // Fetch data based on HopeFuelID
  useEffect(() => {
    const fetchData = async () => {
      if (!HopeFuelID) return;

      try {
        const response = await fetch(
          `/api/paymentDetails?HopeFuelID=${HopeFuelID}`
        );
        const result = await response.json();

        if (result && result.length > 0) {
          console.log("Fetched Data:", result[0]);
          setData(result[0]);
          console.log("set data done");
        } else {
          console.error("No data found");
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching payment details:", error);
        setData(null);
      }
    };
    fetchData();
  }, [HopeFuelID]);

  // Log `data` whenever it changes
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  // Handle case where no HopeFuelID is selected
  if (!HopeFuelID) {
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: 300, marginRight: 3 }}>
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
    );
  }

  // Handle loading state
  if (data === null) return <Typography>Loading...</Typography>;

  // Handle case where data is not found
  if (!data) {
    
    return (
      <Typography variant="h6" color="error">
        No data found for the given HopeFuelID.
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: 300, marginRight: 3 }}>
        <SearchBarForm />
      </Box>
      <Box sx={{ flex: 1, padding: 4, backgroundColor: "#f5f5f5" }}>
        <Card sx={{ padding: 3, borderRadius: 5 }}>
          <Stack spacing={2}>
            <HopeFuelIdStatus data={data} />
            <Divider />

            <Stack direction="row" spacing={4}>
              {data.ScreenShotLink && (
                <Box
                  component="img"
                  src={data.ScreenShotLink}
                  alt="Payment Screenshot"
                  sx={{ width: 200, height: 200, borderRadius: 2 }}
                />
              )}
              <Stack spacing={2} sx={{ flex: 1 }}>
                <Card variant="outlined" sx={{ padding: 2 }}>
                  <UserInfo user={data} />
                </Card>

                <Card variant="outlined" sx={{ padding: 2 }}>
                  <AmountDetails amount={data} />
                </Card>

                {/* Ensure `region` is passed only if `data` is defined */}
                <Card variant="outlined" sx={{ padding: 2 }}>
                  {data.Region ? (
                    <SupportRegion region={data} />
                  ) : (
                    <Typography variant="body1">
                      No Region Data Available
                    </Typography>
                  )}
                </Card>

                <Card variant="outlined" sx={{ padding: 2 }}>
                  <CreatorInfo creator={data} />
                </Card>

                <TextField
                  fullWidth
                  label="Note"
                  multiline
                  rows={3}
                  value={data.Note}
                  defaultValue={data.Note}
                />

                <FormControl fullWidth>
                  <Label>Status</Label>
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
