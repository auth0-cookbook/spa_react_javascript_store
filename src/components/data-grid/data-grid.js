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

const DataBox = (props) => (
  <div className="data-box">
    <h3 className="data-box__title">{props.title}</h3>
    {props.children}
  </div>
);

DataBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export const DataGrid = ({ data }) => {
  return (
    <div className="data-grid">
      {data.map((dataBox) => {
        return (
          <DataBox key={dataBox.title} title={dataBox.title}>
            {dataBox.fields.map((field) => (
              <DataField key={field.label} {...field} />
            ))}
          </DataBox>
        );
      })}
    </div>
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          verified: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
};
