import React from "react";
import PropTypes from "prop-types";

import "./action-bar.css";

export const ActionBar = ({ message, actionButton }) => {
  return (
    <div className="action-bar">
      <div className="action-bar__message">{message}</div>
      <div className="action-bar__buttons">{actionButton}</div>
    </div>
  );
};

ActionBar.propTypes = {
  message: PropTypes.node,
  actionButton: PropTypes.node,
};
