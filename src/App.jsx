import { useEffect, useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = [...tempSet];

// console.log(tempItems);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [searhFiled, setSearchField] = useState("");
  useEffect(() => {
    filterItemsByname();
  }, [searhFiled]);
  console.log(Categories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    console.log(category);
    const newItems = menu.filter((item) => {
      const cateo = item.category === category;

      return cateo;
    });
    setMenuItem(newItems);
  };
  const filterItemsByname = () => {
    const newItem = menu.filter((item) => {
      const name = item.title.toLowerCase().includes(searhFiled.toLowerCase());
      return name;
    });
    setMenuItem(newItem);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />

        <Categories categories={categories} filterItems={filterItems} />
        <input
          type="text"
          id="search"
          placeholder="search by name "
          className="form_input"
          value={searhFiled}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
