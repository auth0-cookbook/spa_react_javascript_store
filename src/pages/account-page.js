import React from "react";
import { View } from "../components/view/view";
import { useSecureApi } from "../security/use-secure-api";
import { useAuth0User } from "../security/use-auth0-user";
import { Loader } from "../components/loader/loader";
import { DataGrid } from "../components/data-grid/data-grid";

export const AccountPage = () => {
  const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const apiServerRootUrl = process.env.REACT_APP_API_SERVER_ROOT_URL;

  const customerId = 9087654321;
  const resource = "rewards";
  const resourceUrl = `${apiServerRootUrl}/api/customers/${resource}/${customerId}`;

  const auth0User = useAuth0User();
  const { data: rewards, isLoading } = useSecureApi(resourceUrl, {
    audience: auth0Audience,
  });

  if (isLoading || !rewards || !auth0User) {
    return <Loader />;
  }

  const { firstName, lastName, email, emailVerified } = auth0User;

  const customerDetails = {
    title: "Your Details",
    fields: [
      {
        label: "Full Name",
        value: `${firstName} ${lastName}`,
      },
      {
        label: "Email Address",
        value: email,
        verified: emailVerified,
      },
      {
        label: "Phone Number",
        value: "(000) 000-0000",
      },
    ],
  };

  const rewardsDetails = {
    title: "MyByte Rewards",
    fields: [
      {
        label: "Membership",
        value: customerId,
      },
      {
        label: "Balance",
        value: rewards.balance,
      },
      {
        label: "Text Alerts",
        value: rewards.alerts.text ? "Enrolled" : "Not Enrolled",
      },
      {
        label: "Email Alerts",
        value: rewards.alerts.email ? "Enrolled" : "Not Enrolled",
      },
    ],
  };

  return (
    <View
      title="Manage Your Rewards Membership"
      description="Access your reward points and profile information"
      documentTitle="MyByte"
    >
      <DataGrid data={[customerDetails, rewardsDetails]} />
    </View>
  );
};