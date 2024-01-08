import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div>
      <div className="category">
        {categories.map((category) => {
          return (
            <button
              type="button"
              className=" btn btnCategory"
              key={category}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
