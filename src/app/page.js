"use client";
import React from "react";
import HomePage from "./HomePage";
import { UserProvider } from "./context/UserContext";
import { AgentProvider } from "./context/AgentContext";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <AgentProvider>
      <UserProvider user={user}>
        {/* <HomePage signOut={signOut} user={user} /> */}
        
      </UserProvider>
    </AgentProvider>
  );
}

export default withAuthenticator(App);
