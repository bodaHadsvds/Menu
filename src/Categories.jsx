import React from "react";

const Categories = ({
  categories,
  filterItems,
  searhFiled,
  setSearchField,
}) => {
  return (
    <div>
      <div className="category">
        <input
          type="text"
          id="search"
          placeholder="search by name "
          value={searhFiled}
          onChange={(e) => setSearchField(e.target.value)}
        />
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
