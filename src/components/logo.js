import React from "react";

import logo from "../assets/auth0-eats-logo.svg";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__image">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="logo__text-wrapper">
        <div className="logo__text-left">auth0</div>
        <div className="logo__text-right">eats</div>
      </div>
    </div>
  );
};
