import React from "react";
import MenuItem from "./menuItem";

const Menu = ({ items }) => {
  return (
    <div className="item_center">
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
