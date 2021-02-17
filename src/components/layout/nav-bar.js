import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { LoginButton } from "../../security/login-button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../security/logout-button";

export const NavBar = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    <nav className="nav-bar">
      <Link to="/">
        <Logo />
      </Link>

      <div className="nav-bar__tabs">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};
