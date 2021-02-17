import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "./components/layout/layout";
import { Loading } from "./components/loading";
import { HomePage } from "./pages/home-page";
import { AccountPage } from "./pages/account-page";
import { ProtectedRoute } from "./security/protected-route";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export const App = () => {
  const { isLoading } = useAuth0();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Layout>
          {isLoading ? (
            <Loading />
          ) : (
            <Switch>
              <Route component={HomePage} exact path="/" />
              <ProtectedRoute component={AccountPage} path="/account" />
            </Switch>
          )}
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
