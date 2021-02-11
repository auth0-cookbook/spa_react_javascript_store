import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Loading = () => (
  <div className="spinner">
    <FontAwesomeIcon icon={faSpinner} size="4x" spin />
  </div>
);
