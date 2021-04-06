import React from "react";
import { Link } from "react-router-dom";

import { Page } from "components/page/page";

export const NotFoundPage = () => {
  return (
    <Page
      title="Oops! Something went wrong..."
      description="The page that you want to access doesn't exist... yet"
      documentTitle="Not Found"
    >
      <Link to="/">
        <h3 style={{ textDecoration: "underline" }}>Go back to home page</h3>
      </Link>
    </Page>
  );
};
