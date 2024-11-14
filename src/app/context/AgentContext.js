"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import getAuthCurrentUser from "../utilites/getAuthCurrentUser";


const AgentContext = createContext();

export const useAgent = () => {
  const context = useContext(AgentContext);
  return context;
};

export const AgentProvider = ({ children }) => {
  const [agentId, setAgentId] = useState(null);

  useEffect(() => {
    const checkAgentStatus = async () => {
      try {
        const currentUser = await getAuthCurrentUser();
        if (!currentUser) return;

        const response = await fetch(
          `/api/checkAgent?awsId=${currentUser.userId}`
        );
        const data = await response.json();
        if (data.code === 1) {
          setAgentId(data.user.AgentID);
          console.log("Agent ID from AgentContext: ", data.user.AgentID);
        }
      } catch (error) {
        console.error("Error checking agent status:", error);
      }
    };
    checkAgentStatus();
  }, []);

  return (
    <AgentContext.Provider value={agentId}>
      {children}
    </AgentContext.Provider>
  );
};
