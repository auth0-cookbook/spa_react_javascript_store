import React from "react";
import PropTypes from "prop-types";

export const Button = ({ variant, label, action, customClass, enabled }) => {
  let className = `button ${variant}-button`;

  if (customClass !== undefined) {
    className += ` ${customClass}`;
  }

  if (enabled !== undefined && !enabled) {
    className += ` ${variant}-button--disabled`;
  }

  return (
    <button onClick={action} className={className}>
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["solid", "text", "outline"]).isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
  customClass: PropTypes.string,
  enabled: PropTypes.bool,
};
