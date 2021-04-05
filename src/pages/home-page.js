import React from "react";
import { Banner } from "../components/banner/banner";
import { WelcomeBar } from "../components/welcome-bar/welcome-bar";
import { PageContent } from "../components/page-content/page-content";

export const HomePage = () => {
  return (
    <PageContent documentTitle="Home">
      <Banner
        title="Develop an Appetite"
        description="Get your favorites delivered for FREE on every order over $10!*"
        label="Order Now"
        handleClick={() => {}}
      />

      <WelcomeBar />
    </PageContent>
  );
};
