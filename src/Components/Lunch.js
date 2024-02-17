import React from "react";
import images from "../images";
import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";

export const Lunch = () => {
  return (
    <div className="content">
      <h2 className="text-center mt-2 p-2 font-weight-bold">Lunch</h2>
      <div className="d-flex justify-content-center">
        <h6 className="font-weight-light">
          <p className="text-center d-flex">
            <span className="font-weight-bold mr-2">Mån-Fre</span> 11:00-14:00
          </p>
        </h6>
      </div>
      <MenuImage src={images.lunch} alt="Lunch" useMarginBottom />
      <div className="d-flex justify-content-around flex-column">
        <ul className="d-flex flex-column align-items-center flex-wrap">
          <MenuItem useDot name="Soppa med ostmacka" />
          <MenuItem useDot name="Paj med sallad och snittar" />
          <MenuItem useDot name="Dagens special" />
          <MenuItem useDot name="Valfri varm macka med sallad" />
          <h6 className="text-center font-weight-bold">
            Citrondryck & kaffe/te/espresso ingår
          </h6>
        </ul>
        <h6 className="font-weight-light text-center mb-5">
          <em>
            De flesta rätter går att göra veganska eller glutenfria, <br />
            fråga gärna personalen
          </em>
        </h6>
      </div>
    </div>
  );
};
