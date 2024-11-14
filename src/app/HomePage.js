"use client";

import {
  Box,
  Container,
  CircularProgress,
  CssBaseline,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "./UI/AppBar/AppBar";
import CreateOrExtend from "./UI/CreateOrExtend/CreateOrExtend";
import ExtendUser from "./UI/ExtendUser/ExtendUser";
import OpenCloseForm from "./UI/OpenCloseForm";
import PaymentTeam from "./UI/PaymentTeam/PaymentTeam";
import SearchPage from "./UI/SearchForm/searchPage";
import PaymentDetails from "./UI/DetailPage/PaymentDetailsForm";
import { useUser } from "./context/UserContext";
import { useAgent } from "./context/AgentContext";

function HomePage({ signOut }) {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("loading");
  const [userRole, setUserRole] = useState("pending");
  const [isSettingUpDone, setIsSettingUpDone] = useState(false);

  const user = useUser();
  const agentId = useAgent();

  // Fetch user role
  const getAgentRole = async (userId) => {
    try {
      const response = await fetch(`/api/checkAgent?awsId=${userId}`);
      const data = await response.json();
      if (data.user && data.user.UserRole) {
        setUserRole(data.user.UserRole);
      }
    } catch (error) {
      console.error("Error fetching agent role:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getAgentRole(user.userId);
    }
  }, [user]);

  useEffect(() => {
    if (userRole !== "pending") {
      setIsSettingUpDone(true);
    }
  }, [userRole]);

  if (!isSettingUpDone) {
    return <h1>Loading... Please wait a moment</h1>;
  }

  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <ResponsiveAppBar
        setPage={setPage}
        signOut={signOut}
        userRole={userRole}
      />
      <CssBaseline />

      <Container component="section" maxWidth="xs">
        {status === "loading" && <CircularProgress />}
        {status === "enable" && page === 1 && (
          <CreateOrExtend userRole={userRole} />
        )}
        {status === "enable" && page === 2 && (
          <ExtendUser userRole={userRole} />
        )}
        {userRole === "admin" && page === 3 && (
          <OpenCloseForm status={status} />
        )}
      </Container>

      {page === 4 && <PaymentTeam />}
      {page === 5 && <SearchPage />}
      {page === 6 && <PaymentDetails />}
    </Container>
  );
}

export default HomePage;
