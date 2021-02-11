import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button";

export const OrderBar = () => {
  return (
    <div className="action-bar">
      <div className="action-bar__message">
        <span>From breakfast to lunch,</span>
        <span>We've got you covered.</span>
      </div>
      <div className="action-bar__buttons">
        <Link to="/order">
          <Button variant="solid" label="Order Now" />
        </Link>

        <div className="action-bar__button-separator">or</div>
        <Link to="/menu">
          <Button variant="text" label="See our Menu" />
        </Link>
      </div>
    </div>
  );
};
