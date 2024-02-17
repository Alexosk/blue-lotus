import React from "react";
import images from "../images";
import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";

export const Snacks = () => {
  return (
    <div className="text-center mx-2 mb-4">
      <h2 className="text-center mt-2 p-2 font-weight-bold">Smått & Gott</h2>
      <MenuImage src={images.snacks} alt="Snacks" />
      <ul className="mt-4">
        <MenuItem name="&#3866; Vitlöksbröd" isVegan />
        <MenuItem name="&#3866; Hummus med bröd" isVegan />
        <MenuItem name="&#3866; Liten blandsallad" isVegan />
        <MenuItem name="&#3866; Liten soppa med bröd" isVegan />
        <MenuItem name="&#3866; Yogurt med nötkross, honung & blåbär" />
        <MenuItem name="&#3866; Havreghurt med nötkross & blåbär" isVegan />
      </ul>
    </div>
  );
};
