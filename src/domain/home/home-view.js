import React, { useEffect } from "react";

import { Banner } from "./banner";

import { LoginBar } from "../security/login-bar";
import { useAuth0 } from "@auth0/auth0-react";
import { OrderBar } from "../order/order-bar";
import { Button } from "../../components/common/button";

export const HomeView = () => {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    document.title = "Auth0 Eats";
  });

  return (
    <>
      <Banner>
        <Button variant="solid" label="Order Now" action={() => {}} />
      </Banner>
      {isAuthenticated ? <OrderBar /> : <LoginBar />}
    </>
  );
};
