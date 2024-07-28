import { useState } from "react";
import data from "./data";
import Title from "./Title";
import MenuButtons from "./MenuButtons";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const selectCategory = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    let newMenu = data.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <MenuButtons categories={categories} selectCategory={selectCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
