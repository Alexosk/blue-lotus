import React, { Component } from "react";
import Media from "react-media";
import images from "../images";
let { indexLotus, indexLotusMobile } = images;

class Home extends Component {
  render() {
    return (
      <div className="index-photo">
        <Media query="(max-width: 1000px)">
          {matches =>
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
  }
}

export default Home;
