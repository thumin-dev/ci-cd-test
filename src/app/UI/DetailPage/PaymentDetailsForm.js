import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled} from "@mui/system";
import ActionButtons  from "./ActionButton";
import  AmountDetails  from "./AmountDetails";
import  CardsIssuedList  from "./CardIssuedList";
import  CreatorInfo from "./CreatorInfo";
import  SupportRegion  from "./SupportRegion";
import UserInfo  from "./UserInfo";
import HopeFuelIdStatus from "./HopeIdStatus";
import { Divider } from "@aws-amplify/ui-react";
import SearchBarForm from "../SearchForm/searchPage";


const PaymentDetails = () => {


  return (
    <>
      <SearchBarForm />
      <Stack>
        <HopeFuelIdStatus />
      </Stack>
      <Divider />
      <Card sx={{ padding: 3, margin: 4, borderRadius: 5 }}>
        <Stack direction="row" spacing={4}>
          {/* Image Placeholder */}
          <Box sx={{ width: 250, height: 250, bgcolor: "#f0f0f0" }} />

          {/* Right Section */}
          <Stack spacing={3} sx={{ flex: 1 }}>
            {/* User Info Section */}
            <UserInfo />

            {/* Amount and Currency Section */}
            <AmountDetails />

            {/* Support Region Section */}
            <SupportRegion />

            {/* Creator Information Section */}
            <CreatorInfo />

            {/* Notes Input */}
            <TextField fullWidth label="Note" multiline rows={2} />

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
      </Card>
    </>
  );
};


export default PaymentDetails;
