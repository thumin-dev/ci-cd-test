import React from "react";
import { Stack, Button } from "@mui/material";

const ActionButtons = ({ data }) => {
  // Ensure `data` is defined before accessing its properties
  if (!data || !data.HopeFuelID) {
    console.error("Invalid data passed to ActionButtons:", data);
    return null;
  }

  const handleConfirm = async () => {
    console.log("Confirm clicked for HopeFuelID:", data.HopeFuelID);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      denied: 0,
      HopeFuelID: data.HopeFuelID,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "/api/paymentConfirmOrDeined",
        requestOptions
      );
      if (response.ok) {
        console.log("Payment Confirmed");
      } else {
        console.error("Failed to confirm payment");
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
    }
  };

  const handleDenied = async () => {
    console.log("Deny clicked for HopeFuelID:", data.HopeFuelID);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      denied: 1,
      HopeFuelID: data.HopeFuelID,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "/api/paymentConfirmOrDeined",
        requestOptions
      );
      if (response.ok) {
        console.log("Payment Denied");
      } else {
        console.error("Failed to deny payment");
      }
    } catch (error) {
      console.error("Error denying payment:", error);
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "150px" }}
        onClick={handleConfirm}
      >
        Confirm
      </Button>
      <Button
        variant="outlined"
        color="error"
        sx={{ width: "150px" }}
        onClick={handleDenied}
      >
        Deny
      </Button>
    </Stack>
  );
};

export default ActionButtons;
