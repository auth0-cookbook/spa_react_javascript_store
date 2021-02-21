import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      audience={auth0Audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
