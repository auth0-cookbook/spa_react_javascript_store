import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../components/common/button";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="text"
      label="Log In"
      action={() => loginWithRedirect({ appState: { returnTo: "/account" } })}
    />
  );
};
