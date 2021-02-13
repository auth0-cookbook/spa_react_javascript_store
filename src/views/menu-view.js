import React from "react";
import { View } from "../components/layout/view";

import { CategoryGrid } from "../components/category-grid";
import { Loading } from "../components/loading";

import { useEnv } from "../utils/use-env";
import { useQuery } from "react-query";

export const MenuView = () => {
  const { menuApiServerRootUrl } = useEnv();
  const menuApiUrl = `${menuApiServerRootUrl}/api/menu/menus`;

  const { isLoading, data: categories } = useQuery(
    "menuData",
    () => fetch(menuApiUrl).then((res) => res.json()),
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (categories) {
    return (
      <View
        title="Power your Day with Delicious Food!"
        description="Menu items vary by location. Start an online order to view the specific menu of a store near you."
        documentTitle="Menu"
      >
        <CategoryGrid categories={categories} />
      </View>
    );
  }

  return null;
};
