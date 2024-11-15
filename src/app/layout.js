"use client";
import * as React from "react";
//import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "./UI/AppBar/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./UI/theme";
import { UserProvider } from "./context/UserContext";
import { AgentProvider } from "./context/AgentContext";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AgentProvider>
            <UserProvider>
              <ResponsiveAppBar />
              {children}
            </UserProvider>
          </AgentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
