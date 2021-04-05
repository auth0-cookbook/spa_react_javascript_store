import { useRef, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { useAccessToken } from "security/hooks/use-access-token";

export const useSecureApi = (
  url,
  resource,
  auth0Config = {},
  requestConfig = {}
) => {
  const [error, setError] = useState(null);

  const { audience, scope } = auth0Config;
  const { current: axiosConfig } = useRef(requestConfig);

  const { accessToken, accessTokenError } = useAccessToken(audience, scope);

  const { isLoading, data, isFetching } = useQuery(
    resource,
    async () => {
      if (accessTokenError) {
        throw accessTokenError;
      }

      axiosConfig.headers = {
        ...axiosConfig.headers,
        Authorization: `Bearer ${accessToken}`,
      };

      return axios(url, axiosConfig);
    },
    {
      enabled: accessToken !== null || !!accessTokenError,
      select: (response) => {
        return response.data;
      },
      onError: (error) => {
        let errorMessage = "unable to load data";

        if (error.response) {
          const { data } = error.response;

          errorMessage = data.message || error.message;
        }

        if (!error.response && error.message) {
          errorMessage = error.message;
        }

        setError(errorMessage);
      },
    }
  );

  return { isLoading, isFetching, data, error };
};
