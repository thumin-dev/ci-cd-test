"use client";

import React, { useState, useEffect } from "react";
import CheckUser from "./checkUser";
import CreateForm from "./createForm";
import ExtendForm from "./extendForm";
import ExtendOrNot from "./extendOrNot";
import { UserProvider } from "../context/UserContext";
import { AgentProvider } from "../context/AgentContext";
import { Avatar, Typography, Box, Modal, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import getAuthCurrentUser from "../utilites/getAuthCurrentUser";
import { withAuthenticator } from "@aws-amplify/ui-react";

function CreateOrExtendPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showExtendOrNot, setShowExtendOrNot] = useState(false);
  const [showExtendForm, setShowExtendForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Fetch the current authenticated user and their role
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getAuthCurrentUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  const userRole = currentUser?.role || "user";

  // Handle showing the form based on user check
  const handleUserCheck = (user, isExistingUser) => {
    setUserInfo(user);
    if (isExistingUser) {
      setShowExtendOrNot(true); // Show the confirmation step
    } else {
      setShowCreateForm(true);
    }
  };

  const handleExtendOrNot = (proceed) => {
    setShowExtendOrNot(false);
    if (proceed) {
      setShowExtendForm(true);
    }
  };

  return (
    <AgentProvider>
      <UserProvider user={currentUser}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" sx={{ fontSize: '23px' }} variant="h5" fontWeight="bold">
            Customer Membership Registration
          </Typography>
          {loading ? (
            <Typography variant="body1">Loading...</Typography>
          ) : showExtendOrNot ? (
            <ExtendOrNot userInfo={userInfo} onConfirm={handleExtendOrNot} />
          ) : !showCreateForm && !showExtendForm ? (
            <CheckUser onUserCheck={handleUserCheck} userRole={userRole} />
          ) : showCreateForm ? (
            <CreateForm
              userInfo={userInfo}
              setloading={setLoading}
              onSuccess={() => setIsSuccessModalOpen(true)}
            />
          ) : (
            <ExtendForm userInfo={userInfo} setloading={setLoading} />
          )}
        </Box>

        <Modal
          open={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          aria-labelledby="success-modal"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "white",
              borderRadius: "12px",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: "50px", color: "green" }} />
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 2, mb: 2 }}>
              Membership Registration Successful.
            </Typography>

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setIsSuccessModalOpen(false);
                window.location.reload();
              }}
            >
              OK
            </Button>
          </Box>
        </Modal>
      </UserProvider>
    </AgentProvider>
  );
}

export default CreateOrExtendPage;
