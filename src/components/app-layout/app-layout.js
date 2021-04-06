import React from "react";

import { NavBar } from "components/nav-bar/nav-bar";
import { Footer } from "components/footer/footer";

import "components/app-layout/app-layout.css";

export const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <NavBar name="AUTH0 EATS" />
      <main className="app-layout__content">{children}</main>
      <Footer />
    </div>
  );
};
