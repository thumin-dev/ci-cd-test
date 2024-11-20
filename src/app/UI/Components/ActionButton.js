import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const ActionButtons = ({ data }) => {
  const [confirmDenyFlag, setConfirmDenyFlag] = React.useState(null); // `null` indicates no action yet

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
        setConfirmDenyFlag("confirmed"); // Set state to "confirmed"
      } else {
        console.error("Failed to confirm payment");
        setConfirmDenyFlag("error");
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      setConfirmDenyFlag("error");
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
        setConfirmDenyFlag("denied"); // Set state to "denied"
      } else {
        console.error("Failed to deny payment");
        setConfirmDenyFlag("error");
      }
    } catch (error) {
      console.error("Error denying payment:", error);
      setConfirmDenyFlag("error");
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

      {/* Display message based on `confirmDenyFlag` */}
      {confirmDenyFlag === "confirmed" && (
        <Typography variant="body2" color="success.main">
          Payment Confirmed
        </Typography>
      )}
      {confirmDenyFlag === "denied" && (
        <Typography variant="body2" color="error">
          Payment Denied
        </Typography>
      )}
      {confirmDenyFlag === "error" && (
        <Typography variant="body2" color="error">
          An error occurred. Please try again.
        </Typography>
      )}
    </Stack>
  );
};

export default ActionButtons;
