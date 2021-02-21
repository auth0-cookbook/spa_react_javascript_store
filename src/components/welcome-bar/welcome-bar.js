import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SignupButton } from "../../security/signup-button";

import "./action-bar.css";

export const WelcomeBar = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();

  return (
    <div className="action-bar">
      <div className="action-bar__message">
        <span>Join auth0Eats Rewards.</span>
        <span>Earn Points On Every Order.</span>
      </div>
      <div className="action-bar__buttons">
        {isAuthenticated ? (
          <button
            onClick={() => history.push("/account")}
            className="button solid-button"
          >
            Visit Your Account
          </button>
        ) : (
          <SignupButton />
        )}
      </div>
    </div>
  );
};
