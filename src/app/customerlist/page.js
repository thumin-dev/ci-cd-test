"use client";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import UserInfoCard from "./components/UserInfoCard";
import CardInfo from "./components/CardInfo";
import SubscriptionCard from "../UI/Components/SubscriptionCard";
import { SUBSCRIPTION_DATA } from "../variables/const";
import CardDisplay from "./components/CardDisplay";

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

const cards = [
  {
    label: "Expire Date",
    value: profileData.expiryDate,
  },
  {
    label: "Myanmar ID",
    value: profileData.myanmarId,
  },
  {
    label: "Card ID",
    value: profileData.cardId,
  },
  {
    label: "Expire Date Backup",
    value: profileData.expiryDateBackup,
    isSmallText: true,
  },
];

const mockCards = [
  {
    id: "HOPEID-12345",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
  {
    id: "HOPEID-67890",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
  {
    id: "HOPEID-24680",
    name: "Geek Squad Studio",
    status: "၁ - ဖောင်တင်သွင်း",
  },
];

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

          <Box sx={{ mt: theme.spacing(2), mx: theme.spacing(3) }}>
            <CardInfo cards={cards} />
          </Box>

          <Box sx={{ mt: theme.spacing(2) }}>
            <SubscriptionCard cards={SUBSCRIPTION_DATA} />
          </Box>

          <Grid container spacing={2} sx={{ px: 2, pt: theme.spacing(3) }}>
            {mockCards.map((card, index) => (
              <Grid item key={card.id || index}>
                <CardDisplay
                  id={card.id}
                  name={card.name}
                  status={card.status}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerListPage;
