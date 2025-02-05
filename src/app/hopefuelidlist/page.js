"use client";

import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import HopeFuelIDListItem from "./components/HopeFuelIDListItem";
import { HOPEFUEL_ID_LISTS } from "../variables/const";

const HopeFuelIdListPage = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = useMemo(() => {
    return HOPEFUEL_ID_LISTS.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Email.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
      {filteredData.length > 0 ? (
        <>
          <HopeFuelIDListItem data={filteredData} />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#334155",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            No Result Found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default HopeFuelIdListPage;
