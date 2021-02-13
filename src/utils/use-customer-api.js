import { useEnv } from "./use-env";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";

export const useCustomerApi = (resource, customerId) => {
  const { customerApiServerRootUrl, auth0CustomerApiAudience } = useEnv();
  const url = `${customerApiServerRootUrl}/api/customers/${resource}/${customerId}`;

  const { getAccessTokenSilently } = useAuth0();

  const { data, isLoading } = useQuery(
    resource,
    async () => {
      const accessToken = await getAccessTokenSilently({
        audience: auth0CustomerApiAudience,
      });

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return await response.json();
    },
    { staleTime: 1000 * 60 * 10 }
  );

  return { data, isLoading };
};
