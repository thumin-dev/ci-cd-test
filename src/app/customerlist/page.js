"use client";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import UserInfoCard from "./components/UserInfoCard";

const userProfiles = Array(8).fill({
  name: "Geek Squad Studio",
  email: "geeksquadstudio@gmail.com",
  id: "888888",
});

const profileData = {
  name: "Geek Squad Studio",
  email: "geeksquadstudio@gmail.com",
  country: "Myanmar",
  expiryDate: "12/31/2024",
  myanmarId: "33.0",
  cardId: "888888",
  expiryDateBackup: "2024-10-31T00:00:00.000Z, 2024-12-31T00:00:00.000Z",
};

const CustomerListPage = () => {
  const theme = useTheme();
  const [selectedProfile, setSelectedProfile] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: 2, bgcolor: "background.default", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Sidebar
            profiles={userProfiles}
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <UserInfoCard profileData={profileData} isMobile={isMobile} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerListPage;
