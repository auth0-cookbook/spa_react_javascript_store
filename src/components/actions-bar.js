import React from "react";
import { PropTypes } from "prop-types";

export const ActionsBar = ({ message, primaryAction, secondaryAction }) => {
  return (
    <div className="action-bar">
      <div className="action-bar__message">{message}</div>
      <div className="action-bar__buttons">
        {primaryAction}
        {secondaryAction && (
          <>
            <div className="action-bar__button-separator">or</div>
            {secondaryAction}
          </>
        )}
      </div>
    </div>
  );
};

ActionsBar.propTypes = {
  message: PropTypes.element.isRequired,
  primaryAction: PropTypes.element.isRequired,
  secondaryAction: PropTypes.element,
};
