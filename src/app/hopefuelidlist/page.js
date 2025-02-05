"use client";

import { Box, Divider, TextField } from "@mui/material";
import React from "react";
import HopeFuelIDListItem from "./components/HopeFuelIDListItem";
import { HOPEFUEL_ID_LISTS } from "../variables/const";

const HopeFuelIdListPage = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 445,
          margin: "0 auto",
          padding: "14px",
          backgroundColor: "#F1F5F9",
          borderRadius: 20,
          mt: 3,
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search..."
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
      <Divider
        sx={{
          mx: "5rem",
          my: "2rem",
          borderColor: "#CBD5E1",
        }}
      />
      <HopeFuelIDListItem data={HOPEFUEL_ID_LISTS} />
    </>
  );
};

export default HopeFuelIdListPage;
