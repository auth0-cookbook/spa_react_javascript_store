import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./view.css";

export const View = ({
  children,
  title,
  description,
  bgImg,
  documentTitle,
}) => {
  useEffect(() => {
    if (documentTitle) {
      document.title = `${documentTitle} | Auth0 Eats`;
    }
  }, [documentTitle]);

  return (
    <div
      className="view"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <header className="view__header">
        <h2 className="view__title">{title}</h2>
        <small className="view__description">{description}</small>
      </header>
      <article className="view__content">{children}</article>
    </div>
  );
};

View.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  documentTitle: PropTypes.string,
};
