import React from "react";
import { View } from "../view/view";

import "./error-view.css";

export const ErrorView = ({ errorMessage }) => {
  return (
    <View
      title="Oops! Something went wrong..."
      description="There's seems to be a problem loading this page."
      documentTitle="Something Went Wrong"
    >
      <div className="error-content">
        <h1>Please try again later</h1>
        {errorMessage && <p>Error: {errorMessage}</p>}
      </div>
    </View>
  );
};
