import React, { useEffect } from "react";
import { Banner } from "../components/banner/banner";
import { WelcomeBar } from "../components/welcome-bar/welcome-bar";

export const HomePage = () => {
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

      <WelcomeBar />
    </>
  );
};
