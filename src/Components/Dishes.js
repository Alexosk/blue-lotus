import React from "react";
import images from "../images";
import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";

export const Dishes = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-2">
      <div className="text-center mx-2">
        <h2 className="text-center mt-2 p-2 font-weight-bold">Maträtter</h2>
        <MenuImage src={images.food} alt="Dishes" />
        <ul className="mt-4">
          <MenuItem useDot name="Dagens special" />
          <MenuItem useDot name=" Paj med sallad och snittar" />
          <MenuItem useDot name=" Soppa med ostmacka" />
          <MenuItem
            useDot
            name=" Blandsallad med hummus och soltorkade tomater"
            isVegan
          />
          <MenuItem
            useDot
            name=" Blandsallad med feta och honungsrostade mandlar"
          />
          <MenuItem useDot name=" Blandsallad med tonfiskröra & kokt ägg" />
        </ul>
      </div>
      <h6 className="font-weight-light text-center mt-2 mb-5">
        <em>
          De flesta rätter går att göra veganska eller glutenfria, <br />
          fråga gärna personalen
        </em>
      </h6>
    </div>
  );
};
