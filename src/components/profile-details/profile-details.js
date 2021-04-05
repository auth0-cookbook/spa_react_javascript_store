import React from "react";

import { DataBox } from "components/data-grid/data-grid";
import { useAuth0User } from "security/hooks/use-auth0-user";

export const ProfileDetails = () => {
  const { auth0User } = useAuth0User();

  if (!auth0User) {
    return null;
  }

  const { name, email, emailVerified } = auth0User;

  const customerDetails = {
    title: "Your Details",
    fields: [
      {
        label: "Full Name",
        value: name,
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

  return <DataBox {...customerDetails} />;
};
