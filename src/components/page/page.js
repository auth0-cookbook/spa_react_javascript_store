import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "components/page/page.css";

export const Page = ({
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
      className="page"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      {hasHeader && (
        <>
          <div className="page-header__container">
            <header className="page-header">
              <h2 className="page-header__title">{title}</h2>
              <small className="page-header__description">{description}</small>
            </header>
          </div>
        </>
      )}

      <div className="page-content__container">
        <article className="page-content page-content--padded">
          {children}
        </article>
      </div>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgImg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  documentTitle: PropTypes.string.isRequired,
};
