import React from "react";

import { LoginButton } from "./login-button";
import { SignupButton } from "./signup-button";

export const LoginBar = () => {
  return (
    <div className="action-bar">
      <div className="action-bar__message">
        <span>Join auth0Eats Rewards.</span>
        <span>Earn Points On Every Order.</span>
      </div>
      <div className="action-bar__buttons">
        <SignupButton />
        <div className="action-bar__button-separator">or</div>
        <LoginButton />
      </div>
    </div>
  );
};
