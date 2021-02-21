import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export const Button = ({
  variant,
  label,
  handleClick,
  customClass,
  enabled,
}) => {
  let className = `button ${variant}-button ${customClass} ${
    enabled || `${variant}-button--disabled`
  }`;

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["solid", "text", "outline"]),
  customClass: PropTypes.string,
  enabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "outline",
  enabled: true,
};
