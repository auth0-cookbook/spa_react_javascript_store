import React from "react";

import { LoginButton } from "./login-button";
import { SignupButton } from "./signup-button";
import { ActionsBar } from "../actions-bar";

export const LoginBar = () => {
  return (
    <ActionsBar
      message={
        <>
          <span>Join auth0Eats Rewards.</span>
          <span>Earn Points On Every Order.</span>
        </>
      }
      primaryAction={<SignupButton />}
      secondaryAction={<LoginButton />}
    />
  );
};
