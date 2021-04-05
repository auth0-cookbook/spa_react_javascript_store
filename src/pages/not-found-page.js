import React from "react";
import { Link } from "react-router-dom";
import { PageContent } from "../components/page-content/page-content";

export const NotFoundPage = () => {
  return (
    <PageContent
      title="Oops! Something went wrong..."
      description="The page that you want to access doesn't exist... yet"
      documentTitle="Not Found"
    >
      <Link to="/">
        <h3 style={{ textDecoration: "underline" }}>Go back to home page</h3>
      </Link>
    </PageContent>
  );
};
