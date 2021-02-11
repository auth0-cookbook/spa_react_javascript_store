import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { View } from "../../components/layout/view";
import { DataBox } from "../../components/data-box";
import { DataField } from "../../components/data-field";
import { DataPoint } from "../../components/data-point";

import { DataGrid } from "../../components/data-grid";

import { LogoutBar } from "../security/logout-bar";

export const AccountView = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const customerId = 9087654321;

  const [customer, setCustomer] = useState(null);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getRewardsDetails = async () => {
      const accessToken = await getAccessTokenSilently();

      const rewardsResponse = await fetch(
        `${serverUrl}/api/customers/rewards/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const alertsResponse = await fetch(
        `${serverUrl}/api/customers/alerts/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const rewardsData = await rewardsResponse.json();
      const alertsData = await alertsResponse.json();

      setCustomer({
        balance: rewardsData.balance,
        textAlerts: alertsData.text,
        emailAlerts: alertsData.email,
      });
    };

    getRewardsDetails();
  }, [serverUrl, getAccessTokenSilently]);

  const {
    given_name: firstName,
    family_name: lastName,
    email,
    email_verified: emailVerified,
  } = user;

  return (
    <View
      title="Manage Your Rewards Membership"
      description="Access your reward points and profile information"
      documentTitle="MyByte"
    >
      <DataGrid>
        <DataBox title="Your Details">
          <DataField
            id="profileName"
            name="Full Name"
            value={`${firstName} ${lastName}`}
          />
          <DataField
            id="profileEmail"
            name="Email Address"
            value={email}
            verified={emailVerified}
          />
          <DataField
            id="profilePhone"
            name="Phone Number"
            value={"(000) 000-0000"}
          />
        </DataBox>
        {customer !== null && (
          <DataBox title="MyByte Rewards">
            <DataPoint name="Membership" value={customerId} />
            <DataPoint name="Balance" value={customer.balance} />
            <DataPoint
              name="Text Alerts"
              value={customer.textAlerts ? "Enrolled" : "Not Enrolled"}
            />
            <DataPoint
              name="Email Alerts"
              value={customer.emailAlerts ? "Enrolled" : "Not Enrolled"}
            />
          </DataBox>
        )}
      </DataGrid>
      <LogoutBar />
    </View>
  );
};
