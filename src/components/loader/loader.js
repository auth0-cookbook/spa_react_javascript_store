import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./loader.css";

export const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon icon={faSpinner} size="4x" spin />
  </div>
);
