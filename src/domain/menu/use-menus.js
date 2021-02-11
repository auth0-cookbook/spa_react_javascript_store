import { useEffect, useState } from "react";

export const useMenus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const menusUrl =
      process.env.NODE_ENV === "dev"
        ? "http://localhost:7000/api/menu/menus"
        : "http://localhost:7000/api/menu/menus";

    const fetchMenusData = async () => {
      const response = await fetch(menusUrl);
      const menusData = await response.json();

      if (!menusData) {
        setMenus([]);
      }

      if (menusData) {
        setMenus(menusData);
      }
    };

    fetchMenusData();
  }, []);

  return menus;
};
