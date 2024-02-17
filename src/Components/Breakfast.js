import React from "react";
import images from "../images";
import { MenuImage } from "./MenuImage";
import { MenuItem } from "./MenuItem";

const BreakfastItem = ({ title, children, useSmallerFont }) => (
  <div className="breakfast mb-2">
    <h4
      className="text-center mb-2 font-weight-bold"
      style={{ fontSize: useSmallerFont ? "16px" : "" }}
    >
      {title}
    </h4>
    <p className="mb-0 font-weight-light">{children}</p>
  </div>
);

export const Breakfast = () => {
  return (
    <div className="content">
      <h2 className="text-center mt-2 p-2">
        <b>Frukost</b>
      </h2>
      <div className="d-flex justify-content-center">
        <p className="font-weight-light">
          <span className="font-weight-bold">Vardag</span> 9:00-11:00 <br />{" "}
          <span className="font-weight-bold">Helg</span> 10:00-12:00
        </p>
      </div>
      <MenuImage src={images.breakfast} alt="Breakfast" />
      <div className="breakfast-parent d-flex flex-column  align-items-center d-flex flex-wrap text-center">
        <BreakfastItem title="Liten">
          <MenuItem useDot name="Valfri kall macka" />
          <MenuItem useDot name="Kaffe/Te" />
        </BreakfastItem>
        <BreakfastItem title="Stor">
          <MenuItem useDot name="Valfri kall macka" />
          <MenuItem
            useDot
            name="Yoghurt med granola, nötter, hallon och honung"
          />
          <MenuItem useDot name="Juice" />
          <MenuItem useDot name="Kaffe/Te" />
        </BreakfastItem>
        <BreakfastItem title="Tillägg" useSmallerFont>
          <MenuItem useDot name="Valfri Kaffe/Chai" useSmallerFont />
          <MenuItem useDot name="Kokt ägg EKO" useSmallerFont />
          <MenuItem useDot name="Kokt ägg med kaviar" useSmallerFont />
        </BreakfastItem>
      </div>
      <h6 className="font-weight-light text-center mb-5">
        <em>Vegan alternativ finns</em>
      </h6>
    </div>
  );
};
