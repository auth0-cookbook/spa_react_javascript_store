import React from "react";
import { FooterRow } from "./footer-row";
import { FooterCell } from "./footer-cell";
import { Hyperlink } from "../hyperlink";
import { Button } from "../button";
import { useAuth0 } from "@auth0/auth0-react";

const FooterList = ({ data }) => {
  return (
    <ul className="footer__list">
      {data.map((listItem) => (
        <li key={listItem.label} className="footer__list-item">
          <Hyperlink path={listItem.path}>{listItem.label}</Hyperlink>
        </li>
      ))}
    </ul>
  );
};

export const Footer = () => {
  const { loginWithRedirect } = useAuth0();

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
            <Hyperlink path="https://auth0.com/">Auth0</Hyperlink>
          </p>
          <p className="footer__small-text-block">
            <Hyperlink path="https://auth0.com/docs/quickstarts/">
              <span>
                Securely implement authentication using Auth0 on any stack and
                any device&nbsp;
              </span>
              <u>in less than 10 minutes</u>
            </Hyperlink>
          </p>
        </FooterCell>
        <FooterCell>
          <Button
            variant="solid"
            customClass="footer__cta-button"
            label="Create Free Account"
            handleClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
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
            <Hyperlink path="https://auth0.com/">Auth0 Inc</Hyperlink>
          </div>
        </FooterCell>
      </FooterRow>
    </footer>
  );
};
