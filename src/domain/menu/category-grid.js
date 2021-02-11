import React from "react";
import PropTypes from "prop-types";
import { CategoryCard } from "./category-card";

export const CategoryGrid = ({ categories }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      ...CategoryCard.propTypes,
    })
  ).isRequired,
};
