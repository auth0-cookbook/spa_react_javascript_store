import React from "react";
import { View } from "../../components/layout/view";

import { LocationGrid } from "./location-grid";
import { useLocations } from "./use-locations";

export const OrderView = () => {
  const locations = useLocations();

  return (
    <>
      <View
        title="Free Delivery on Every Order Over $10!"
        description="Choose a location near you"
        documentTitle="Order"
      >
        <LocationGrid locations={locations} />
      </View>
    </>
  );
};
