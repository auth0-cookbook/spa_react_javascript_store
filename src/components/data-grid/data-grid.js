import React from "react";
import PropTypes from "prop-types";

import "./data-grid.css";

const DataField = (props) => (
  <div className="data-field">
    <span className="data-field__key">
      {props.label}
      {props.verified && (
        <span className="data-field__verified">(Verified)</span>
      )}
    </span>
    <span className="data-field__value">{props.value}</span>
  </div>
);

DataField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  verified: PropTypes.bool,
};

export const DataBox = ({ title, fields, error }) => (
  <div className="data-box">
    <h3 className="data-box__title">{title}</h3>
    {fields &&
      fields.map((field) => <DataField key={field.label} {...field} />)}
    {error && <div className="data-box__error">{error}</div>}
  </div>
);

DataBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export const DataGrid = ({ children }) => {
  return <div className="data-grid">{children}</div>;
};
