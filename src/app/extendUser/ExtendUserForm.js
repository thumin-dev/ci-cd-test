"use client";

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useAgent } from "../context/AgentContext";
import { MuiOtpInput } from "mui-one-time-password-input";
import checkPrfSubmit from "../utilites/ExtendUser/checkPrfSubmit";
import extendUserSubmit from "../utilites/ExtendUser/extendUserSubmit";

const ExtendUserForm = () => {
  const user = useUser();
  const agent = useAgent();

  const [otp, setOtp] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [checkInputComplete, setCheckInputComplete] = useState(false);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");

  const formFillingPerson = user?.username || "Unknown User";
  const agentId = agent || "No Agent";

  const handleOtpComplete = async (value) => {
    setCheckInputComplete(true);
    await checkPrfSubmit(value, setUserExist, setIsChecking, setUserInfo);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await extendUserSubmit(userInfo, amount, month, formFillingPerson, agentId);
  };

  if (user === null || agent === null) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <MuiOtpInput
        value={otp}
        length={7}
        onComplete={handleOtpComplete}
        onChange={setOtp}
      />

      {isChecking && <CircularProgress />}
      {userExist && (
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
      {!userExist && checkInputComplete && (
        <Alert severity="warning" sx={{ mt: 3 }}>
          <AlertTitle>User Not Found</AlertTitle>
          Please register this user before extending membership.
        </Alert>
      )}
    </Box>
  );
};

export default ExtendUserForm;
