import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useSecureApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const { getAccessTokenSilently } = useAuth0();

  const { audience, scope, ...fetchOptions } = options;

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        setAccessToken(await getAccessTokenSilently({ audience, scope }));
      } catch (e) {
        setError(e);
      }
    };

    getAccessToken();
  }, [audience, scope, getAccessTokenSilently]);

  useEffect(() => {
    const fetchData = async () => {
      const { headers, ...configOptions } = fetchOptions;
      try {
        const response = await fetch(url, {
          ...configOptions,
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const responseData = await response.json();

        setData(responseData);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [url, accessToken, fetchOptions]);

  return { data, isLoading, error };
};
