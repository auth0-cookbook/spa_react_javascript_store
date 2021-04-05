import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Logo } from "components/logo/logo";
import { NavBarTab } from "components/nav-bar-tab/nav-bar-tab";
import { AuthenticationButton } from "security/authentication-button";

import "./nav-bar.css";

export const NavBar = () => {
  const { isLoading } = useAuth0();

  return (
    <nav className="nav-bar">
      <Link to="/">
        <Logo />
      </Link>

      {!isLoading && (
        <div className="nav-bar__tabs">
          <NavBarTab label="MyByte" path="/account" />
          <AuthenticationButton />
        </div>
      )}
    </nav>
  );
};
