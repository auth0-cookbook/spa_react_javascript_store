import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./button";

export const OrderBar = () => {
  const history = useHistory();
  return (
    <div className="action-bar">
      <div className="action-bar__message">
        <span>From breakfast to lunch,</span>
        <span>We've got you covered.</span>
      </div>
      <div className="action-bar__buttons">
        <Button
          variant="solid"
          label="Order Now"
          handleClick={() => history.push("/order")}
        />

        <div className="action-bar__button-separator">or</div>
        <Button
          variant="text"
          label="See our Menu"
          handleClick={() => history.push("/menu")}
        />
      </div>
    </div>
  );
};
