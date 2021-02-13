import React from "react";
import PropTypes from "prop-types";

export const CategoryCard = ({ id, items }) => {
  return (
    <div className="category-card">
      <h2 className="category-card__title">{id}</h2>
      {items && items.length === 0 && <span>Coming soon!</span>}
      {items && items.length > 0 && (
        <div className="category-card__content">
          <div className="category-card__items">
            {items.map((item) => {
              return (
                <div key={item.name} className="category-card-item">
                  <div className="category-card-item__image-wrapper">
                    <img
                      className="category-card-item__image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h3 className="category-card-item__name">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

CategoryCard.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
