import React from "react";

import { SignupButton } from "./signup-button";
import { ActionsBar } from "../components/actions-bar";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

export const WelcomeBar = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  return (
    <ActionsBar
      message={
        <>
          <span>Join auth0Eats Rewards.</span>
          <span>Earn Points On Every Order.</span>
        </>
      }
      primaryAction={
        isAuthenticated ? (
          <button
            onClick={() => history.push("/account")}
            className="button solid-button"
          >
            Visit Your Account
          </button>
        ) : (
          <SignupButton />
        )
      }
    />
  );
};
