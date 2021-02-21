import React from "react";

import { NavBar } from "../nav-bar/nav-bar";
import { Footer } from "../footer/footer";

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
