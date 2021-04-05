import React from "react";
import PropTypes from "prop-types";

import { Button } from "components/button/button";

import "./banner.css";

export const Banner = ({ title, description, label, handleClick }) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__wrapper">
          <h1 className="banner__title">{title}</h1>
          <h3 className="banner__description">{description}</h3>
        </div>
        <Button variant="solid" label={label} handleClick={handleClick} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
