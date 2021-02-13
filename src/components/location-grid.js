import React from "react";
import PropTypes from "prop-types";
import { LocationCard } from "./location-card";

export const LocationGrid = ({ locations }) => (
  <div className="location-grid">
    {locations.map((location) => (
      <LocationCard key={location.id} location={location} />
    ))}
  </div>
);

LocationGrid.propTypes = {
  locations: PropTypes.arrayOf(LocationCard.propTypes.location).isRequired,
};
