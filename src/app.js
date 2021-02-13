import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "./components/layout/layout";
import { Loading } from "./components/loading";
import { HomeView } from "./views/home-view";
import { OrderView } from "./views/order-view";
import { MenuView } from "./views/menu-view";
import { AccountView } from "./views/account-view";
import { ProtectedRoute } from "./components/security/protected-route";
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
              <Route component={HomeView} exact path="/" />
              <Route component={OrderView} path="/order" />
              <Route component={MenuView} path="/menu" />
              <ProtectedRoute component={AccountView} path="/account" />
            </Switch>
          )}
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
