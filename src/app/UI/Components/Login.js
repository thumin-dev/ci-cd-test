// components/Login.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";

function Login({ user }) {
  useEffect(() => {
    console.log("This is running");
    console.log(user);
    if (user) {
      redirect("/createForm");
    }
  }, [user]);
  return null;
}

export default withAuthenticator(Login);
