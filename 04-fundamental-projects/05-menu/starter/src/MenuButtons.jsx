import React from "react";

const MenuButtons = ({ categories, selectCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className="btn"
            onClick={() => {
              selectCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuButtons;
