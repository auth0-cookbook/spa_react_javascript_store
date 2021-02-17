import React from "react";

import { NavBar } from "./nav-bar";
import { Footer } from "../footer/footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar name="AUTH0 EATS" />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};
