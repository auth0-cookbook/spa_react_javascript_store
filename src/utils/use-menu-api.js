import { useEnv } from "./use-env";
import { useQuery } from "react-query";

export const useCustomerApi = (resource) => {
  const { menuApiServerRootUrl } = useEnv();
  const url = `${menuApiServerRootUrl}/api/menu/${resource}/`;

  const { data, isLoading } = useQuery(
    resource,
    async () => {
      const response = await fetch(url);

      return await response.json();
    },
    { staleTime: 1000 * 60 * 10 }
  );

  if (isLoading) {
    return { alerts: undefined };
  }

  return { data };
};
