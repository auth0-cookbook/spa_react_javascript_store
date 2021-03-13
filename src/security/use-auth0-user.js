import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const useAuth0User = () => {
  const { user } = useAuth0();
  const [auth0User, setAuth0User] = useState(undefined);

  useEffect(() => {
    const {
      given_name: firstName,
      family_name: lastName,
      email,
      email_verified: emailVerified,
    } = user;

    setAuth0User({ firstName, lastName, email, emailVerified });
  }, [user]);

  return { auth0User };
};
