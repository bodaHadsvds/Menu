import React from "react";

const MenuItem = ({ img, title, desc, price }) => {
  return (
    <div>
      <article className="menu-item">
        <img src={img} alt={title} className="item_img" />
        <div className="itemInfo">
          <header>
            <h5>{title}</h5>
            <span className="item_price">${price}</span>
          </header>
          <p className="itemText">{desc}</p>
        </div>
      </article>
    </div>
  );
};

export default MenuItem;
