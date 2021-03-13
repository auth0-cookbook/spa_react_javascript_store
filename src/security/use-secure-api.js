import { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const useSecureApi = (url, options = {}) => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiCallError, setApiCallError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const { current: callOptions } = useRef(options);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const { audience, scope } = callOptions;

    if (!audience) {
      return;
    }

    const getAccessToken = async () => {
      try {
        setAccessToken(await getAccessTokenSilently({ audience, scope }));
      } catch (e) {
        setApiCallError(e);
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, callOptions]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const fetchData = async () => {
      const { audience, scope, headers, ...configOptions } = callOptions;

      try {
        const { data } = await axios(url, {
          ...configOptions,
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(data);

        setDataFromApi(data);
        setIsLoading(false);
      } catch (error) {
        let errorMessage = "An error occurred.";

        if (error.response) {
          errorMessage = "Unable to load data.";
        }

        if (!error.response && error.message) {
          errorMessage = error.message;
        }

        setApiCallError(errorMessage);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken, url, callOptions]);

  return { dataFromApi, isLoading, apiCallError };
};
