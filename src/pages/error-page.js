import React from "react";

import { Page } from "components/page/page";

export const ErrorPage = ({ errorMessage }) => {
  return (
    <Page
      title="Oops! Something went wrong..."
      description="There's seems to be a problem loading this page."
      documentTitle="Something Went Wrong"
    >
      <>
        <h1>Please try again later</h1>
        {errorMessage && <p>Error: {errorMessage}</p>}
      </>
    </Page>
  );
};
