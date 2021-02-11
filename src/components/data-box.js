import React from "react";
import PropTypes from "prop-types";

export const DataBox = (props) => (
  <div className="data-box">
    <h3 className="data-box__title">{props.title}</h3>
    {props.children}
  </div>
);

DataBox.propTypes = {
  title: PropTypes.string.isRequired,
};
