import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./page-content.css";

export const PageContent = ({
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

  const hasHeader = title && description;

  return (
    <div
      className="page-content"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      {hasHeader && (
        <>
          <div className="page-content__header-container">
            <header className="page-content__header">
              <h2 className="page-content__title">{title}</h2>
              <small className="page-content__description">{description}</small>
            </header>
          </div>
        </>
      )}

      <div className="page-content__content-container">
        <article className="page-content__content page-content__content--padded">
          {children}
        </article>
      </div>
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgImg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  documentTitle: PropTypes.string.isRequired,
};
