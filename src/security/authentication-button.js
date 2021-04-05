import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "security/logout-button";
import { LoginButton } from "security/login-button";

export const AuthenticationButton = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
