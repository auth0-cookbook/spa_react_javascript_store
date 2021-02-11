import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "./components/layout/layout";
import { Loading } from "./components/common/loading";
import { HomeView } from "./domain/home/home-view";
import { OrderView } from "./domain/order/order-view";
import { MenuView } from "./domain/menu/menu-view";
import { AccountView } from "./domain/account/account-view";
import { ProtectedRoute } from "./domain/security/protected-route";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="app">
        <Layout>
          <Loading />
        </Layout>
      </div>
    );
  }

  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route component={HomeView} exact path="/" />
          <Route component={OrderView} path="/order" />
          <Route component={MenuView} path="/menu" />
          <ProtectedRoute component={AccountView} path="/account" />
        </Switch>
      </Layout>
    </div>
  );
};
