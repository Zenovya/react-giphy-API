import { useState } from "react";
import { AddCategory, GridGif } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GridGif key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
