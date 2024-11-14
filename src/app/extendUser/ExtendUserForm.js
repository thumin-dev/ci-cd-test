"use client";

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Alert,
  AlertTitle,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useAgent } from "../context/AgentContext";
import { MuiOtpInput } from "mui-one-time-password-input";
import checkPrfSubmit from "../utilites/ExtendUser/checkPrfSubmit";
import extendUserSubmit from "../utilites/ExtendUser/extendUserSubmit";
import ExtendOrNot from "../createForm/extendOrNot";

const ExtendUserForm = () => {
  const user = useUser();
  const agent = useAgent();

  const [otp, setOtp] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [hasPermissionThisMonth, setHasPermissionThisMonth] = useState(true);
  const [checkInputComplete, setCheckInputComplete] = useState(false);
  const [hasContinue, setHasContinue] = useState(false);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");

  const formFillingPerson = user?.username || "Unknown User";
  const agentId = agent || "No Agent";

  // Handle OTP completion and check if the user exists
  const handleOtpComplete = async (value) => {
    setCheckInputComplete(true);
    setIsChecking(true); // Start loading indicator
    await checkPrfSubmit(
      value,
      setUserExist,
      setHasPermissionThisMonth,
      setIsChecking,
      setUserInfo
    );
    setIsChecking(false); // Stop loading indicator
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await extendUserSubmit(userInfo, amount, month, formFillingPerson, agentId);
  };

  if (user === null || agent === null) {
    return <CircularProgress />;
  }
const handleDecline = () => {
  console.log("User clicked decline");
  setOtp("");
  setUserInfo({});
  setHasContinue(false);
  setUserExist(false);
  setCheckInputComplete(false);
  // You can redirect or reset state here if needed
};
  return (
    <Box sx={{ mt: 4, marginLeft: 15, marginRight: 15 }}>
      {/* OTP Input Field */}
      <MuiOtpInput
        value={otp}
        length={7}
        onComplete={handleOtpComplete}
        onChange={setOtp}
      />

      {/* Loading Spinner for checking user */}
      {isChecking && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Checking user...</Typography>
        </Box>
      )}

      {/* If the user exists, show ExtendOrNot component for confirmation */}
      {!isChecking && userExist && !hasContinue && (
        <ExtendOrNot
          userInfo={userInfo}
          onConfirm={(confirm) => setHasContinue(confirm)}
          onDecline={handleDecline}
        />
      )}

      {/* If the user confirms to proceed, show the extension form */}
      {hasContinue && (
        <Box component="form" onSubmit={handleFormSubmit}>
          <TextField
            label="Amount"
            fullWidth
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Month"
            fullWidth
            required
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      )}

      {/* If user does not exist and OTP is complete */}
      {!isChecking && !userExist && checkInputComplete && (
        <Alert severity="warning" sx={{ mt: 3 }}>
          <AlertTitle>User Not Found</AlertTitle>
          Please register this user before extending membership.
        </Alert>
      )}
    </Box>
  );
};

export default ExtendUserForm;
