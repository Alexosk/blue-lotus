import React from "react";
import images from "../images";
import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";

const lilithDescription = (
  <div>
    Persiljeröra, soltorkade tomater, champinjon,
    <br />
    rödlök, tomat, rostade frön & ruccola
  </div>
);

export const WarmSandwich = () => (
  <div>
    <h4 className="pb-2 text-center font-weight-bold">Varma Mackor</h4>
    <MenuImage src={images.warmsandwich} alt="Warm sandwiches" />
    <div className="p-4 pt-0 d-flex flex-column align-items-center ">
      <ul className="menu-list">
        <MenuItem
          useBoldName
          name="Athena"
          description="Skinka, dijon, dragon, purjo, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Freja"
          description="Persiljeröra, chèvre, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Hermes"
          description="Skinka, feta, purjo, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Hugin"
          description="Salami, chèvre, rödlök, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Shiva"
          description="Vitlökssmör, feta, champinjon, rödlök, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Abdallah"
          description="Tonfiskröra, rödlök, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Lotus special"
          description="Pesto, feta, tomat & ost"
        />
        <MenuItem
          useBoldName
          name="Lilith"
          description={lilithDescription}
          isVegan
        />
      </ul>
      <h6 className="font-weight-light px-2 text-center my-4">
        <em>
          Alla mackor serveras på surdegsbröd och <br /> går att få på
          glutenfritt bröd
        </em>
      </h6>
    </div>
  </div>
);
