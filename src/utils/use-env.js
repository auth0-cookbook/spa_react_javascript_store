import { useState } from "react";

export const useEnv = () => {
  const [auth0Domain] = useState(process.env.REACT_APP_AUTH0_DOMAIN);
  const [auth0ClientId] = useState(process.env.REACT_APP_AUTH0_CLIENT_ID);
  const [auth0CustomerApiAudience] = useState(
    process.env.REACT_APP_AUTH0_CUSTOMER_API_AUDIENCE
  );
  const [auth0MenuApiAudience] = useState(
    process.env.REACT_APP_AUTH0_MENU_API_AUDIENCE
  );
  const [menuApiServerRootUrl] = useState(
    process.env.REACT_APP_MENU_API_SERVER_ROOT_URL
  );
  const [customerApiServerRootUrl] = useState(
    process.env.REACT_APP_CUSTOMER_API_SERVER_ROOT_URL
  );

  return {
    auth0Domain,
    auth0ClientId,
    auth0CustomerApiAudience,
    auth0MenuApiAudience,
    menuApiServerRootUrl,
    customerApiServerRootUrl,
  };
};
