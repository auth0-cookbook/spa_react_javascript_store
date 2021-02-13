import React from "react";
import { Link } from "react-router-dom";
import { NavBarTab } from "./nav-bar-tab";
import { Logo } from "../logo";

export const NavBar = () => (
  <nav className="nav-bar">
    <Link to="/">
      <Logo />
    </Link>

    <div className="nav-bar__tabs">
      <NavBarTab label="Order" path="/order" />
      <NavBarTab label="Menu" path="/menu" />
      <NavBarTab label="MyByte" path="/account" />
    </div>
  </nav>
);
