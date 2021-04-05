import React from "react";

import { NavBar } from "components/nav-bar/nav-bar";
import { Footer } from "components/footer/footer";

import "./page-layout.css";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar name="AUTH0 EATS" />
      <main className="page-layout__content">{children}</main>
      <Footer />
    </div>
  );
};
