import React from "react";

import { PageContent } from "components/page-content/page-content";

export const ErrorPage = ({ errorMessage }) => {
  return (
    <PageContent
      title="Oops! Something went wrong..."
      description="There's seems to be a problem loading this page."
      documentTitle="Something Went Wrong"
    >
      <>
        <h1>Please try again later</h1>
        {errorMessage && <p>Error: {errorMessage}</p>}
      </>
    </PageContent>
  );
};
