import React from "react";
import { View } from "../components/layout/view";

import { LocationGrid } from "../components/location-grid";
import locationsData from "../data/locations.json";

export const OrderView = () => {
  const locations = Object.values(locationsData);

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
