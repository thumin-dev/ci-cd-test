"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  typographyClasses,
} from "@mui/material";
import getAuthCurrentUser from "../utilites/getAuthCurrentUser";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function AccountDetailPage() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    userId: "",
    email: "",
    userRole: "",
  });
  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getAuthCurrentUser();
        setUserDetails(userData);
        console.log("User data:", userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);
   const { userId, email, userRole } = userDetails;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
          p: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            width: "100%",
            boxShadow: 3,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <CardContent sx={{ p: 2, lineHeight: 2 }}>
            <Typography
              variant="h5"
              color="primary.red600"
              component="div"
              gutterBottom
            >
              Account Details
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>UserId:</strong> {userId || "Loading..."}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Email:</strong> {email || "Loading..."}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>UserRole:</strong> {userRole ? userRole[0] : "Loading..."}
            </Typography>
          </CardContent>
        </Card>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          onClick={() => router.push("/")}
        >
          Back To Home
        </Button>
      </Box>
    </>
  );
}
