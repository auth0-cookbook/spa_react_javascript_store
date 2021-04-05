import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import { NavBarTab } from "../nav-bar-tab/nav-bar-tab";

import { useAuth0 } from "@auth0/auth0-react";

import "./nav-bar.css";
import { AuthenticationButton } from "../../security/authentication-button";

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
