import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "./components/page-layout/page-layout";
import { Loader } from "./components/loader/loader";
import { AccountPage } from "./pages/account-page";
import { ProtectedRoute } from "./security/protected-route";
import { HomePage } from "./pages/home-page";
import { Reminder } from "./components/reminder/reminder";

import "./app.css";

export const App = () => {
  const { isLoading } = useAuth0();

  // const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;

  // if (!(auth0Domain && auth0ClientId)) {
  //   return (
  //     <div className="app">
  //       <Reminder />
  //     </div>
  //   );
  // }

  return (
    <div className="app">
      <PageLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <Switch>
            <Route component={HomePage} exact path="/" />
            <ProtectedRoute component={AccountPage} path="/account" />
          </Switch>
        )}
      </PageLayout>
    </div>
  );
};
