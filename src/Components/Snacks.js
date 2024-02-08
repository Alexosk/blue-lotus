import React from "react";
import Media from "react-media";
import images from "../images";
import { MenuItem } from "./MenuItem"; // import MenuItem component

let { snacks, snacksMobile } = images;

export const Snacks = () => {
  return (
    <div className="p-4 text-center mx-2">
      <h2 className="text-center mt-2 p-2 font-weight-bold">Smått & Gott</h2>
      <div className="menu-image-padding">
        <Media query="(max-width: 630px)">
          {(matches) =>
            matches ? (
              <img
                className="rounded img-fluid"
                width="100%"
                alt="Café Blå Lotus"
                src={snacksMobile}
              />
            ) : (
              <img className="rounded" width="100%" src={snacks} alt="Snacks" />
            )
          }
        </Media>
      </div>
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
