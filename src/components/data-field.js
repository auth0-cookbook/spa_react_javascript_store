import React from "react";
import PropTypes from "prop-types";

export const DataField = (props) => (
  <div className="data-field">
    <span className="data-field__key">
      {props.name}
      {props.verified && (
        <span className="data-field__verified">(Verified)</span>
      )}
    </span>
    <span className="data-field__value">{props.value}</span>
  </div>
);

DataField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  verified: PropTypes.bool,
};
