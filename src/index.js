import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "app";
import { Auth0ProviderWithHistory } from "security/auth0-provider-with-history";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
