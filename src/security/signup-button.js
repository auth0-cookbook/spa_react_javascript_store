import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
          appState: { returnTo: "/account" },
        })
      }
      className="button solid-button"
    >
      Sign Up Today
    </button>
  );
};
