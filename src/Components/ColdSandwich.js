import React from "react";
import Media from "react-media";
import images from "../images";
import { MenuItem } from "./MenuItem";

const { coldsandwich, coldsandwichMobile } = images;

export const ColdSandwich = () => (
  <div className="content">
    <h2 className="text-center mt-2 p-2 font-weight-bold">Kalla Mackor</h2>
    <div className="menu-image-padding">
      <Media query="(max-width: 630px)">
        {(matches) => (
          <img
            className="rounded img-fluid"
            height="auto"
            width="100%"
            alt="Café Blå Lotus"
            src={matches ? coldsandwichMobile : coldsandwich}
          />
        )}
      </Media>
    </div>
    <div className="d-flex flex-wrap flex-column align-items-center mt-2">
      <div className="p-4 mx-2">
        <h4 className="pb-2 text-center font-weight-bold">Surdegsmackor</h4>
        <h6 className="pb-2 text-center">
          Välj mellan en skiva surdegsbröd eller knäckebröd
        </h6>
        <hr className="mt-0" />
        <ul className="mt-4 mb-4 menu-list">
          <MenuItem useBoldName name="Allahs gåva" description="Ost & grönt" />
          <MenuItem
            useBoldName
            name="Kali"
            description="Persiljeröra & soltorkade tomater och grönt"
            isVegan
          />
          <MenuItem
            useBoldName
            name="Hades hämnd"
            description="Skinka, ost & dijon"
          />
          <MenuItem
            useBoldName
            name="Nirvana"
            description="Hummus & grönt"
            isVegan
          />
          <MenuItem
            useBoldName
            name="Magre Memeth"
            description="Fetaost, pesto & soltorkade tomater"
          />
          <MenuItem useBoldName name="Maya" description="Het Tonfiskröra" />
          <MenuItem
            useBoldName
            name="Fatimas drömmar"
            description="Persiljeröra, fetaost, tomat & rödlök"
          />
        </ul>
      </div>
      <h6 className="font-weight-light text-center mb-5">
        <em>Går att få på glutenfritt knäckebröd.</em>
      </h6>
    </div>
  </div>
);
