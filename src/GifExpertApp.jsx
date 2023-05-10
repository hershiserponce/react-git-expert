import { useState } from "react";
import { AddCategorie, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategorie = (newCategory) => {
    //   setCategories([...categories, "valorant"]);
    // setCategories(cat=>[...cat,"pepe123"])
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  };
  return (
    <>
      <div>GifExpertApp</div>
      <AddCategorie
        //   setCategorie={setCategories}
        onNewCategory={onAddCategorie}
      />
      {/* <button onClick={() => onAddCategorie()}>agregar</button> */}
      {categories.map((categories) => (
        <GifGrid key={categories} category={categories} />
      ))}
    </>
  );
};
