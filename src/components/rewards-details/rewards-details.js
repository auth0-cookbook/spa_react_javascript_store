import { useSecureApi } from "../../security/hooks/use-secure-api";
import { DataBox } from "../data-grid/data-grid";
import { Loader } from "../loader/loader";
import React from "react";

export const RewardsDetails = ({ customerId }) => {
  const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const apiServerRootUrl = process.env.REACT_APP_API_SERVER_ROOT_URL;
  const auth0ConfigReady = auth0Audience && apiServerRootUrl;

  const resource = "accounts";
  const resourceUrl = `${apiServerRootUrl}/api/rewards/${resource}/${customerId}`;

  const { isLoading, isFetching, data, error } = useSecureApi(
    resourceUrl,
    resource,
    {
      audience: auth0Audience,
    }
  );

  if (!auth0ConfigReady) {
    return (
      <DataBox
        title="MyByte Rewards"
        error={
          "You need to set up an Auth0 Audience value to allow your client application to request resources from a protected endpoint."
        }
      />
    );
  }

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (data) {
    const { id, balance, createdAt } = data;

    const dateObject = new Date(parseInt(createdAt, 10));

    const rewardsDetails = {
      title: "MyByte Rewards",
      fields: [
        {
          label: "Member ID",
          value: id,
        },
        {
          label: "Points Balance",
          value: balance,
        },
        {
          label: "Member Since",
          value: dateObject.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      ],
    };

    return <DataBox {...rewardsDetails} />;
  }

  if (error) {
    return (
      <DataBox
        title="MyByte Rewards"
        error={error || "Unable to retrieve rewards data"}
      />
    );
  }

  return null;
};
