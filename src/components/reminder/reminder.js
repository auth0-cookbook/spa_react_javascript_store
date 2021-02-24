import React from "react";

import "./reminder.css";

export const Reminder = () => {
  const origin = window.location.origin;

  return (
    <div className="reminder">
      <h1>Auth0 Configuration Missing</h1>
      <p>
        You have not yet set up this application to connect with Auth0. Check
        that your <code>.env</code> file has the right configuration values.
      </p>
      <p>
        Follow these steps to set up an Authentication service with Auth0 and to
        connect your React application with it.
      </p>
      {origin.includes("csb.app") && (
        <>
          <h2>Set Up CodeSandbox</h2>
          <li>
            <strong>
              Open the CodeSandbox Live Site Preview (<code>{origin}</code>) in
              a new window or tab to login successfully later on.
            </strong>
            <ul>
              <li>
                Using the browser embedded in the IDE will throw an error.
              </li>
              <li>
                Any changes you make to the project source code using the editor
                will still update the new window or tab automatically.
              </li>
              <li>
                You can copy and paste <code>{origin}</code> in a new tab or
                window. Alternatively, you can click the "Open in New Window"
                button of the embedded browser.
              </li>
            </ul>
          </li>
        </>
      )}
      <h2>Register a Client Application with Auth0</h2>
      <ul>
        <li>
          Open the <strong>Auth0 Applications</strong> section of the Auth0
          Dashboard.
        </li>
        <li>
          Click on the <strong>Create Application</strong> button.
        </li>
        <li>
          Provide a <strong>Name</strong> value such as <i>Auth0 Eats Store</i>.
        </li>
        <li>
          Choose <i>Single Page Web Applications</i> as the{" "}
          <strong>application type</strong>.
        </li>
        <li>
          Click on the <strong>Create</strong> button.
        </li>
        <p>
          A new page loads with details about your Auth0 application register.
          Click on its <i>Settings</i> tab to access its configuration values.
        </p>
      </ul>
      <h2>Connect React with Auth0</h2>
      <ul>
        <li>
          Create a <code>.env</code> file under your project directory.
        </li>
        <li>
          Populate <code>.env</code> with the following:
        </li>
        <pre>
          {`REACT_APP_AUTH0_DOMAIN=\nREACT_APP_AUTH0_CLIENT_ID=\nREACT_APP_AUTH0_AUDIENCE=\nREACT_APP_SERVER_URL=`}
        </pre>
        <li>
          Head back to the Auth0 application <i>Settings</i> page and use its
          configuration values to populate the missing values in your{" "}
          <code>.env</code> file:
          <ul>
            <li>
              The value of <code>REACT_APP_AUTH0_DOMAIN</code> is the value of
              your Auth0 Domain.
            </li>
            <li>
              The value of <code>REACT_APP_AUTH0_CLIENT_ID</code> is the value
              of your Auth0 Client ID.
            </li>
            <li>
              (Optional) The value of <code>REACT_APP_AUTH0_AUDIENCE</code> is
              the value of the Auth0 Audience of an API that you have registered
              with Auth0.
            </li>
            <li>
              (Optional) The value of <code>REACT_APP_SERVER_URL</code> is the
              root URL where you are hosting your API server.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Save your <code>.env</code> file changes.
          </strong>
        </li>
        <li>
          Head back to the <i>Settings</i> tab of your Auth0 application
          register page and update the following fields:
          <ul>
            <li>Allowed Callback URLs:</li>
            <pre>{origin}</pre>
            <li>Allowed Web Origins:</li>
            <pre>{origin}</pre>
            <li>Allowed Logout URLs:</li>
            <pre>{origin}</pre>
          </ul>
        </li>
        <li>
          Scroll to the bottom of the <i>Settings</i> page and click on the{" "}
          <strong>Save Changes</strong> button.
        </li>
        {origin.includes("localhost") && (
          <li>
            Restart your React application server for it to recognize the
            changes you made to <code>.env</code>..
          </li>
        )}
      </ul>
    </div>
  );
};
