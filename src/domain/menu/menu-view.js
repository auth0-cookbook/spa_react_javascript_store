import React from "react";
import { View } from "../../components/layout/view";

import { CategoryGrid } from "./category-grid";
import { useMenus } from "./use-menus";

export const MenuView = () => {
  const categories = useMenus();

  return (
    <View
      title="Power your Day with Delicious Food!"
      description="Menu items vary by location. Start an online order to view the specific menu of a store near you."
      documentTitle="Menu"
    >
      <CategoryGrid categories={categories} />
    </View>
  );
};
