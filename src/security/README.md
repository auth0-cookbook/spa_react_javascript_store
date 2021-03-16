# Auth0 Security Features For React

## Building Blocks

A basic authentication strategy for a single-page application has the following building blocks:

- A login button.
- A logout button.
- A routing system that supports blocking access to a protected route.
- A way to obtain an access token to make calls to secure APIs.

Let's see examples on how you can implement these building blocks in your React application.

## Create a Login Button

You can use the [`loginWithRedirect()`](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#loginwithredirect) method to trigger a login transaction using a button:

```js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect({ appState: { returnTo: "/" } })}
      className="button solid-button"
    >
      Log In
    </button>
  );
};
```

> [View the `loginWithRedirect` document for more details on how to use and configure this method.](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#loginwithredirect)

## Create a Sign-Up Button

You can configure the [`loginWithRedirect()`](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#loginwithredirect) method to create a button that triggers a sign-up transaction:

```js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
          appState: { returnTo: "/account" },
        })
      }
      className="button solid-button"
    >
      Create an account
    </button>
  );
};
```

## Create a Logout Button

You can use the [`logout()`](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#logout) method to trigger a logout transaction:


```js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="button solid-button"
    >
      Log Out
    </button>
  );
};
```

> [View the `logout` document for more details on how to use and configure this method.](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#logout)

## Protect a Route

You can create a custom `Auth0ProviderWithHistory` to integrate React Router correctly with Auth0:

```js
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
```

> [View the `Auth0ProviderOptions` document for more details on how to configure the `Auth0Provider`.](https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html)

Wrap any component tree with `Auth0ProviderWithHistory` to gain access to the `Auth0Context`:

```js
import React from "react";
import ReactDOM from "react-dom";
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
```

## Make a Secure Call to an API

You can use the `getAccessTokenSilently()` method in any React component to get an access token in your React application to make API calls to protected API endpoints:

```js
// src/views/external-api.js

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      {/*  Use the data from the API in your component */}
    </div>
  );
};

export default ExternalApi;
```

> [View the `getAccessTokenSilently` document for more details on how to configure this method.](https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#getaccesstokensilently)

