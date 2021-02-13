import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../button";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="outline"
      label="Create an account"
      handleClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
          appState: { returnTo: "/account" },
        })
      }
    />
  );
};
