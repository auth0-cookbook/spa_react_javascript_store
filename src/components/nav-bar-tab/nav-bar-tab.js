import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Link } from "react-router-dom";

import "./nav-bar-tab.css";

export const NavBarTab = ({ label, path }) => {
  let match = useRouteMatch({
    path,
    strict: true,
    sensitive: true,
  });

  const matchClass = match ? " nav-bar__tab--active " : "";
  const className = `nav-bar__tab` + matchClass;

  return (
    <div className={className}>
      <Link to={path}>{label}</Link>
    </div>
  );
};

NavBarTab.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
