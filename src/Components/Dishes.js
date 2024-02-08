import React from "react";
import Media from "react-media";
import images from "../images";
import { MenuItem } from "./MenuItem";

let { food, foodMobile } = images;

export const Dishes = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-2">
      <div className="p-4 text-center mx-2">
        <h2 className="text-center mt-2 p-2 font-weight-bold">Maträtter</h2>
        <Media query="(max-width: 630px)">
          {(matches) =>
            matches ? (
              <img
                className="rounded mb-2 img-fluid"
                height="auto"
                width="100%"
                alt="Café Blå Lotus"
                src={foodMobile}
              />
            ) : (
              <img
                className="rounded mt-4 mb-4"
                width="100%"
                src={food}
                alt="dinner"
              />
            )
          }
        </Media>
        <ul className="mt-4">
          <MenuItem name="&#3866; Dagens special" />
          <MenuItem name="&#3866; Paj med sallad och snittar" />
          <MenuItem name="&#3866; Soppa med ostmacka" />
          <MenuItem
            name="&#3866; Blandsallad med hummus och soltorkade tomater"
            isVegan
          />
          <MenuItem name="&#3866; Blandsallad med feta och honungsrostade mandlar" />
          <MenuItem name="&#3866; Blandsallad med tonfiskröra & kokt ägg" />
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
