import React from "react";
import PropTypes from "prop-types";

export const FooterCell = ({ children, size, align }) => (
  <div className={`footer__cell footer__cell--${size} footer__cell--${align}`}>
    {children}
  </div>
);

FooterCell.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "xl"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FooterCell.defaultProps = {
  size: "sm",
  align: "center",
};
