import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { App } from "./app";
import { BrowserRouter as Router } from "react-router-dom";

import { Auth0ProviderWithHistory } from "./security/auth0-provider-with-history";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
