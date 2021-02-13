# Auth0 Eats Store: React + JavaScript

This repository hosts a React project that defines a Single-Page Application (SPA). The project uses Auth0 to implement user authentication and secure access to some of its routes.

## Get Started

You can launch this project on CodeSandbox to edit it and see its live preview. You can also clone the project and run it locally in your system.

### CodeSandbox

Click on the link below to launch this project on CodeSandbox:

[https://githubbox.com/auth0-cookbook/spa_react_javascript_store](https://githubbox.com/auth0-cookbook/spa_react_javascript_store)

Once CodeSandbox completes the project setup, you'll see a live preview on the right-hand side and a full code editor on the left-hand side. Making any changes to the code will update the live preview right away.

### Local Repo

Clone the repo:

```bash
git@github.com:auth0-cookbook/spa_react_javascript_store.git
```

Make the repo folder your current directory:

```bash
cd spa_react_javascript_store
```

Install project dependencies:

```bash
npm i
```

Run the project:

```bash
npm start
```

## Register a Client Application with Auth0

In this section, you'll setup an authentication service with Auth0 so that you can create users, logs in, and access pages that make requests to protected API endpoints.

You'll need to create a Single-Page Application register with Auth0. This register will provide you with the configuration values that you need to connect the demo client application with Auth0, namely the Auth0 Domain and Auth0 Client ID. Once configured, the client application can communicate with the Auth0 authentication server and get [access tokens](https://auth0.com/docs/tokens/access-tokens) for your logged-in users.

The process of creating an Auth0 Single-Page Application register is straightforward:

- Open the [Auth0 Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button.

- Provide a **Name** value such as _Auth0 Eats Store_.

- Choose _Single Page Web Applications_ as the **application type**.

- Click on the **Create** button.

A new page loads with details about your Auth0 application register. Click on its _Settings_ tab to access its configuration values. 

Next, create a `.env` file under your project directory using the CodeSandbox Editor or your local code editor.

Populate `.env` with the following:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_SERVER_URL=
```

Head back to the Auth0 application "Settings" page and use its configuration values to populate the missing values in your `.env` file:

- The value of `REACT_APP_AUTH0_DOMAIN` is the value of your Auth0 Domain.

- The value of `REACT_APP_AUTH0_CLIENT_ID` is the value of your Auth0 Client ID.

Later on, you'll learn how to set up a secure API server to communicate with your React application using the values of `REACT_APP_AUTH0_AUDIENCE` and `REACT_APP_SERVER_URL`.

### Connect a client application with Auth0

Head back to the _Settings_ tab of your Auth0 application register page and update the following fields:

#### Allowed Callback URLs

If you are using CodeSandbox, use the URL of your application. You can find that URL in the in-page browser that renders the live preview. It follows this pattern:

```bash
https://<CODESANDBOX-ID>.csb.app/
```

If you are working on a local repo, use the following value:

```bash
http://localhost:4040/
```

After a user authenticates, Auth0 only calls back any of the URLs listed in this field. You can specify multiple valid URLs by comma-separating them (typically to handle different environments like QA or testing). Make sure to specify the protocol, `http://` or `https://`; otherwise, the callback may fail in some cases.

#### Allowed Web Origins

If you are using CodeSandbox, use the URL of your application:

```bash
https://<CODESANDBOX-ID>.csb.app/
```

If you are working on a local repo, use the following value:

```bash
http://localhost:4040/
```

A client application will make requests under the hood to an Auth0 URL to handle authentication requests. As such, you need to add your the application's [origin URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) to avoid [Cross-Origin Resource Sharing (CORS)](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/) issues.
    
#### Allowed Logout URLs

If you are using CodeSandbox, use the URL of your application:

```bash
https://<CODESANDBOX-ID>.csb.app/
```

If you are working on a local repo, use the following value:

```bash
http://localhost:4040/
```

This field holds a set of URLs that Auth0 can redirect to after a user logs out of your application. The default configuration of the demo client uses the provided value for redirecting users.
    
With these values in place, you can scroll to the bottom of the "Settings" page and click on the _Save Changes_ button.