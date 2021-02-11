import React from "react";
import { FooterRow } from "./footer-row";
import { FooterCell } from "./footer-cell";
import { Hyperlink } from "../common/hyperlink";
import { Button } from "../common/button";
import { useAuth0 } from "@auth0/auth0-react";

export const Footer = () => {
  const { loginWithRedirect } = useAuth0();
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
            action={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
          />
        </FooterCell>
        <FooterCell align="right">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Hyperlink path="https://auth0.com/why-auth0/">
                Why Auth0
              </Hyperlink>
            </li>
            <li className="footer__list-item">
              <Hyperlink path="https://auth0.com/docs/get-started">
                How It Works
              </Hyperlink>
            </li>
            <li className="footer__list-item">
              <Hyperlink path="https://auth0.com/blog/developers/">
                Developer Blog
              </Hyperlink>
            </li>
            <li className="footer__list-item">
              <Hyperlink path="https://auth0.com/contact-us">
                Contact an Expert
              </Hyperlink>
            </li>
          </ul>
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
