import React from "react";

import { LogoutButton } from "./logout-button";
import { Button } from "../../components/common/button";

export const LogoutBar = () => {
  return (
    <div className="action-bar">
      <div className="action-bar__message">
        <span>Update your information.</span>
        <span>Cash Your Reward Points.</span>
      </div>
      <div className="action-bar__buttons">
        <Button variant="outline" label="Save Changes" action={() => {}} />
        <div className="action-bar__button-separator">or</div>
        <LogoutButton />
      </div>
    </div>
  );
};
