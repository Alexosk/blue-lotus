import React from "react";
import Media from "react-media";
import images from "../images";
import { MenuItem } from "./MenuItem";

let { lunch1, lunchMobile } = images;

export const Lunch = () => {
  return (
    <div className="content">
      <h2 className="text-center mt-2 p-2 font-weight-bold">Lunch</h2>
      <div className="d-flex justify-content-center">
        <h6 className="font-weight-light">
          <p className="text-center lunch-time">
            <span className="font-weight-bold">Mån-Fre:</span> 11:00-14:00
          </p>
        </h6>
      </div>
      <div className="menu-image-padding">
        <Media query="(max-width: 630px)">
          {(matches) =>
            matches ? (
              <img
                className="rounded mb-4 img-fluid"
                width="100%"
                alt="Café Blå Lotus"
                src={lunchMobile}
              />
            ) : (
              <img
                className="rounded mb-4"
                src={lunch1}
                width="100%"
                alt="Lunch"
              />
            )
          }
        </Media>
      </div>
      <div className="d-flex justify-content-around flex-column">
        <ul className="d-flex flex-column align-items-center flex-wrap">
          <MenuItem name="&#3866; Soppa med ostmacka" />
          <MenuItem name="&#3866; Paj med sallad och snittar" />
          <MenuItem name="&#3866; Dagens special" />
          <MenuItem name="&#3866; Valfri varm macka med sallad" />
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
