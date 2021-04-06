import React from "react";

import { Banner } from "components/banner/banner";
import { Page } from "components/page/page";
import { ActionBar } from "components/action-bar/action-bar";
import { SignupButton } from "security/signup-button";

import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "components/button/button";

const AccountButton = () => {
  const history = useHistory();

  return (
    <Button
      label="Visit Your Account"
      handleClick={() => history.push("/account")}
    />
  );
};

const SignupBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <ActionBar
      message={
        <span>
          Join auth0Eats Rewards.
          <br />
          Earn Points On Every Order.
        </span>
      }
      actionButton={isAuthenticated ? <AccountButton /> : <SignupButton />}
    />
  );
};

export const HomePage = () => {
  return (
    <Page documentTitle="Home">
      <Banner
        title="Develop an Appetite"
        description="Get your favorites delivered for FREE on every order over $10!*"
        label="Order Now"
        handleClick={() => {}}
      />
      <SignupBar />
    </Page>
  );
};
