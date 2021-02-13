import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../button";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="text"
      label="Log Out"
      handleClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};
