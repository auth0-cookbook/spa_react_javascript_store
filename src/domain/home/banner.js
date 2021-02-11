import React from "react";
import PropTypes from "prop-types";

export const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__wrapper">
          <h1 className="banner__title">Develop an Appetite</h1>
          <h3 className="banner__description">
            Get your favorites delivered for FREE on every order over $10!*
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
