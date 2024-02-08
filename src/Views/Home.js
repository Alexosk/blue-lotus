import React from "react";
import Media from "react-media";
import images from "../images";
let { indexLotus, indexLotusMobile } = images;

export const Home = () => {
  return (
    <div className="index-photo">
      <Media query="(max-width: 1300px)">
        {(matches) =>
          matches ? (
            <img
              className="img-fluid"
              height="auto"
              width="100%"
              alt="Café Blå Lotus"
              src={indexLotusMobile}
            />
          ) : (
            <img
              className="img-fluid"
              height="auto"
              width="100%"
              alt="Café Blå Lotus"
              src={indexLotus}
            />
          )
        }
      </Media>
    </div>
  );
};
