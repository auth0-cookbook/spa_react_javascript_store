import React from "react";
import PropTypes from "prop-types";

export const FooterCell = ({ children, size, align }) => (
  <div
    className={`footer__cell ${size ? `footer__cell--${size}` : ``} ${
      align ? `footer__cell--${align}` : ``
    }`}
  >
    {children}
  </div>
);

FooterCell.propTypes = {
  size: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
