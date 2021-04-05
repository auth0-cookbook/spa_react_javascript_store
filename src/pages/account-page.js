import React from "react";

import { PageContent } from "components/page-content/page-content";
import { DataGrid } from "components/data-grid/data-grid";
import { ProfileDetails } from "components/profile-details/profile-details";
import { RewardsDetails } from "components/rewards-details/rewards-details";

export const AccountPage = () => {
  const customerId = 1617480104622;

  return (
    <PageContent
      title="Manage Your Rewards Membership"
      description="Access your reward points and profile information"
      documentTitle="MyByte"
    >
      <DataGrid>
        <ProfileDetails />
        <RewardsDetails customerId={customerId} />
      </DataGrid>
    </PageContent>
  );
};
