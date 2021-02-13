import React from "react";

import { LogoutButton } from "./logout-button";
import { Button } from "../button";
import { ActionsBar } from "../actions-bar";

export const LogoutBar = () => {
  return (
    <ActionsBar
      message={
        <>
          <span>Update your information.</span>
          <span>Cash Your Reward Points.</span>
        </>
      }
      primaryAction={
        <Button variant="outline" label="Save Changes" handleClick={() => {}} />
      }
      secondaryAction={<LogoutButton />}
    />
  );
};
