import React from "react";
import PropTypes from "prop-types";

export const DataPoint = (props) => (
  <div className="data-point">
    <span className="data-point__key">{props.name}</span>
    <span className="data-point__value">{props.value}</span>
  </div>
);

DataPoint.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
