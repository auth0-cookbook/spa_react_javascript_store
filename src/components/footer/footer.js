import React from "react";
import PropTypes from "prop-types";

import { Button } from "components/button/button";

import "./footer.css";

const FooterCell = ({ children, size, align }) => (
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

const FooterRow = ({ children }) => (
  <div className="footer__row">{children}</div>
);

const FooterList = ({ data }) => {
  return (
    <ul className="footer__list">
      {data.map((listItem) => (
        <li key={listItem.label} className="footer__list-item">
          <FooterHyperlink path={listItem.path}>
            {listItem.label}
          </FooterHyperlink>
        </li>
      ))}
    </ul>
  );
};

const FooterHyperlink = ({ children, path }) => {
  return (
    <a
      className="footer-hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

FooterHyperlink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const Footer = () => {
  const footerLinkList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="footer">
      <FooterRow>
        <FooterCell size="xl" align="left">
          <p className="footer__text-block">
            <span>Auth0 Eats is brought to you by&nbsp;</span>
            <FooterHyperlink path="https://auth0.com/">Auth0</FooterHyperlink>
          </p>
          <p className="footer__small-text-block">
            <FooterHyperlink path="https://auth0.com/docs/quickstarts/">
              <span>
                Securely implement authentication using Auth0 on any stack and
                any device&nbsp;
              </span>
              <u>in less than 10 minutes</u>
            </FooterHyperlink>
          </p>
        </FooterCell>
        <FooterCell>
          <Button
            variant="solid"
            customClass="footer__cta-button"
            label="Create Free Auth0 Account"
            handleClick={() =>
              window.open(
                "https://auth0.com/signup",
                "_blank",
                "noopener noreferrer"
              )
            }
          />
        </FooterCell>
        <FooterCell align="right">
          <FooterList data={footerLinkList} />
        </FooterCell>
      </FooterRow>
      <FooterRow>
        <FooterCell>
          <div className="footer__logo">
            <img
              className="footer__logo-image"
              src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png"
              alt="Auth0"
            />
            <FooterHyperlink path="https://auth0.com/">
              Auth0 Inc
            </FooterHyperlink>
          </div>
        </FooterCell>
      </FooterRow>
    </footer>
  );
};
