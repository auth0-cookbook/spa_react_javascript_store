import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import { NavBarTab } from "../nav-bar-tab/nav-bar-tab";

import { LogoutButton } from "../../security/logout-button";
import { LoginButton } from "../../security/login-button";
import { useAuth0 } from "@auth0/auth0-react";

import "./nav-bar.css";

export const NavBar = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className="nav-bar">
      <Link to="/">
        <Logo />
      </Link>

      {!isLoading && (
        <div className="nav-bar__tabs">
          <NavBarTab label="MyByte" path="/account" />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      )}
    </nav>
  );
};
