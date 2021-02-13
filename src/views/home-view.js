import React, { useEffect } from "react";

import { Banner } from "../components/banner";

import { LoginBar } from "../components/security/login-bar";
import { OrderBar } from "../components/order-bar";
import { useAuth0 } from "@auth0/auth0-react";

export const HomeView = () => {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    document.title = "Auth0 Eats";
  });

  return (
    <>
      <Banner
        title="Develop an Appetite"
        description="Get your favorites delivered for FREE on every order over $10!*"
        label="Order Now"
        handleClick={() => {}}
      />

      {isAuthenticated ? <OrderBar /> : <LoginBar />}
    </>
  );
};
