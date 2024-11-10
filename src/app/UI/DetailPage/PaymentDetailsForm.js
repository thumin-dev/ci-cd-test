import React from "react";
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
  Chip,
  Divider,
} from "@mui/material";
import ActionButtons from "./ActionButton";
import AmountDetails from "./AmountDetails";
import CardsIssuedList from "./CardIssuedList";
import CreatorInfo from "./CreatorInfo";
import SupportRegion from "./SupportRegion";
import UserInfo from "./UserInfo";
import HopeFuelIdStatus from "./HopeIdStatus";
import SearchBarForm from "../SearchForm/searchPage";

const PaymentDetails = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 4 }}>
      <Stack direction="row" spacing={3} alignItems="flex-start">
        {/* Left Section: Search Bar */}
        <Box sx={{ width: 300, marginRight: 3,border:'none' }}>
          <SearchBarForm />
        </Box>

      

        {/* Right Section: Payment Details */}
        <Card sx={{ padding: 3, flex: 1, borderRadius: 5 }}>
          <Stack spacing={2}>
            {/* Status Header */}
            <HopeFuelIdStatus />
            <Divider />

            <Stack direction="row" spacing={4}>
              {/* Image Placeholder */}
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: "#f0f0f0",
                  borderRadius: 2,
                }}
              />

              {/* Right Section */}
              <Stack spacing={2} sx={{ flex: 1 }}>
                {/* User Info Section */}
                <UserInfo />

                {/* Amount and Currency Section */}
                <AmountDetails />

                {/* Support Region Section */}
                <SupportRegion />

                {/* Creator Information Section */}
                <CreatorInfo />

                {/* Notes Input */}
                <TextField fullWidth label="Note" multiline rows={3} />

                {/* Status Selection */}
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select defaultValue={1}>
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
  );
};

export default PaymentDetails;
