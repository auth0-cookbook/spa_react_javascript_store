# Auth0 Eats Store App

You can use this sample to learn how to secure a React Single-Page Application (SPA). This application uses Auth0 to implement user authentication and secure access to some of its routes.

You can also use this client application to practice making secure API calls to any of the Auth0 Eats Rewards APIs.

## 1. Get Started

There are two ways to get started: you can work with a local repository or you can work with a cloud project using CodeSandbox.

### 1.A. Use a local repository

Clone the repository:

```bash
git clone git@github.com:auth0-cookbook/spa_react_javascript_store.git
```

Make the project directory your current directory:

```bash
cd spa_react_javascript_store
```

Install the project dependencies:

```bash
npm i
```

Create a `.env` file under the project directory:

```bash
touch .env
```

Finally, run the project:

```bash
npm start
```

Visit [http://localhost:4040/](http://localhost:4040/) to access the sample application.

### 1.B. Use CodeSandbox, an online IDE

Click on the link below to launch this project on CodeSandbox:

[https://githubbox.com/auth0-cookbook/spa_react_javascript_store](https://githubbox.com/auth0-cookbook/spa_react_javascript_store)

Once CodeSandbox completes the project setup, you'll see a live preview on the right-hand side and a full code editor on the left-hand side. CodeSandbox creates a project fork for you once you make a change on any of the template project files. Your project fork has its own unique URL as seen in the embedded browser address bar.

Making any changes to your project code will update the live preview right away.

To complete the set up, create a `.env` file under the project directory.

## 2. Register a Client Application with Auth0

In this section, you'll setup an authentication service with Auth0 so that you can create users, log in, and access pages that make requests to protected API endpoints.

You'll need to create a Single-Page Application register with Auth0. This register will provide you with the configuration values that you need to connect the demo client application with Auth0, namely the **Auth0 Domain** and **Auth0 Client ID**. Once configured, the client application can communicate with the Auth0 authentication server and get [access tokens](https://auth0.com/docs/tokens/access-tokens) for your logged-in users.

The process of creating an Auth0 Single-Page Application register is straightforward:

- Open the [Auth0 Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **"Create Application"** button.

- Provide a **Name** value such as _Auth0 Eats Store_.

- Choose _Single Page Web Applications_ as the **application type**.

- Click on the **"Create"** button.

A new page loads with details about your Auth0 application register. Click on its **"Settings"** tab to access its configuration values.

Next, open the `.env` file under your project directory and populate with the following:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_API_SERVER_ROOT_URL=
```

Head back to the Auth0 application "Settings" page and use its configuration values to populate the missing values in your `.env` file:

- The value of `REACT_APP_AUTH0_DOMAIN` is the value of your Auth0 Domain.

- The value of `REACT_APP_AUTH0_CLIENT_ID` is the value of your Auth0 Client ID.

The values of `REACT_APP_AUTH0_AUDIENCE` and `REACT_APP_API_SERVER_ROOT_URL` require that you have set up any version of the Auth0 Eats Rewards API server.

- The value of `REACT_APP_AUTH0_AUDIENCE` is the value of your Auth0 API **Identifier**.

  - If you used the prescribed value, the Auth0 API Identifier value is `https://rewards.example.com`.

- The value of `REACT_APP_API_SERVER_ROOT_URL` is the value of your Auth0 Eats Rewards API server root URL.
  - If you are using a local repository to run the Auth0 Eats Rewards API server, the value is `http://localhost:6060`.
  - If you are using a cloud IDE, such a Glitch, or any live server, use the server URL that the platform provides.

**To complete this setup, restart the React development server**. Locally, you can do that by stopping the server and running it again. In CodeSandbox, the server should restart automatically once you update `.env` &mdash; If not, refresh your project page.

## 3. Connect a Client Application with Auth0

Head back to the **"Settings"** tab of your Auth0 application register page and update the following fields with your application root URL.

If you are using the local repository, your application root URL is the following:

```bash
http://localhost:4040/
```

If you are using CodeSandbox, you can find that URL in the in-page browser that renders the live preview. It follows this pattern:

```bash
https://<CODESANDBOX-ID>.csb.app/
```

### Allowed Callback URLs

After a user authenticates, Auth0 only calls back any of the URLs listed in this field. You can specify multiple valid URLs by comma-separating them (typically to handle different environments like QA or testing). Make sure to specify the protocol, `http://` or `https://`; otherwise, the callback may fail in some cases.

A client application will make requests under the hood to an Auth0 URL to handle authentication requests. As such, you need to add your the application's [origin URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) to avoid [Cross-Origin Resource Sharing (CORS)](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/) issues.

### Allowed Logout URLs

This field holds a set of URLs that Auth0 can redirect to after a user logs out of your application. The default configuration of the demo client uses the provided value for redirecting users.

With these values in place, you can scroll to the bottom of the **"Settings"** page and click on the **"Save Changes"** button.

## 4. Testing the User Authentication Flow

Click the **"LOG IN"** button located in the upper-right corner. Your React application should redirect you to the Auth0 Universal Login page.

Once you log in, you should return to the home page.

To trigger a login transaction, you can also click on the **"MYBYTE"** button, which requires a successful user login for access. **"MYBYTE"** is an account page that presents you with all your user information. Under the hood, this page calls the Auth0 Eats Rewards API to obtain your rewards data. This transaction requires a valid access token to be successful.

Click on the **"LOG OUT"** button. You should return to the home page.

Once logged out, click on the **"SIGN UP TODAY"** button to trigger a sign up transaction. This transaction is similar to a login transaction but the language present in the Auth0 Universal Login page encourages users to sign up.
