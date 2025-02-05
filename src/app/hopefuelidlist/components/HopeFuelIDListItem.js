import { Box } from "@mui/material";
import React from "react";

const HopeFuelIDListItem = () => {
  return (
    <>
      {["", "", "", "", "", "", "", "", "", ""].map((item) => (
        <Box
          sx={{
            padding: "14px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            mx: "4rem",
            py: "4rem",
            boxShadow: 2,
            my: "2rem",
          }}
        >
          {item}
        </Box>
      ))}
    </>
  );
};

export default HopeFuelIDListItem;
