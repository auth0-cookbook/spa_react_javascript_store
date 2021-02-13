import React from "react";
import PropTypes from "prop-types";
import { Button } from "./button";

export const LocationCard = ({ location }) => {
  return (
    <div className="location-card">
      <div className="location-card__content">
        <img
          className="location-card__image"
          src={location.image}
          alt={location.city}
        />
        <div className="location-card__info">
          <div className="location-card__title-wrapper">
            <span className="location-card__title">{location.name}</span>
          </div>
          <span className="location-card__data-point location-card__hours">
            {location.hours}
          </span>
          <span className="location-card__data-point">{location.street}</span>
          <span className="location-card__data-point location-card__city">{`${location.city}, ${location.country}`}</span>
          <span className="location-card__data-point">{location.phone}</span>
        </div>
      </div>
      <div className="location-card__actions">
        <Button
          variant="outline"
          customClass="location-card__order-button"
          label="Order"
          handleClick={() => {}}
        />
        <Button
          variant="text"
          customClass="location-card__directions-button"
          label="Directions"
          handleClick={() => {}}
        />
        <Button
          variant="text"
          customClass="location-card__details-button"
          label="More Details"
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
