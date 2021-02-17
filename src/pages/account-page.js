import React from "react";

import { View } from "../components/layout/view";

import { DataGrid } from "../components/data-grid";

import { LogoutBar } from "../security/logout-bar";
import { Loading } from "../components/loading";
import { useCustomerData } from "../utils/use-customer-data";
import { useAuth0User } from "../utils/use-auth0-user";

export const AccountPage = () => {
  const customerId = 9087654321;

  const { isLoading, customerData } = useCustomerData(customerId);
  const auth0User = useAuth0User();

  if (isLoading || !auth0User) {
    return <Loading />;
  }

  const { firstName, lastName, email, emailVerified } = auth0User;
  const { rewards, alerts } = customerData;

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
        value: alerts.textAlerts ? "Enrolled" : "Not Enrolled",
      },
      {
        label: "Email Alerts",
        value: alerts.emailAlerts ? "Enrolled" : "Not Enrolled",
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
      <LogoutBar />
    </View>
  );
};
