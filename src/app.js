import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { PageLayout } from "components/page-layout/page-layout";
import { Loader } from "components/loader/loader";
import { AccountPage } from "pages/account-page";
import { ProtectedRoute } from "security/protected-route";
import { HomePage } from "pages/home-page";
import { NotFoundPage } from "pages/not-found-page";

import "./app.css";

export const App = () => {
  const { isLoading } = useAuth0();

  return (
    <div className="app">
      <PageLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <Switch>
            <Route component={HomePage} exact path="/" />
            <ProtectedRoute component={AccountPage} path="/account" />
            <Route component={NotFoundPage} />
          </Switch>
        )}
      </PageLayout>
    </div>
  );
};
