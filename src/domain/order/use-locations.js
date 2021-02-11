import { useEffect, useState } from "react";
import locationsData from "./locations.json";

export const useLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(Object.values(locationsData));
  }, []);

  return locations;
};
