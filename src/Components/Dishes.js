import React, { Component } from "react";
import { Badge } from "reactstrap";
import Media from "react-media";
import images from "../images";
let { food, foodMobile } = images;

class Dishes extends Component {
  render() {
    let badge = <span className="font-weight-bold">(V)</span>;
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center mt-2">
          <div className="p-4 text-center mx-2">
            <h2 className="text-center mt-2 p-2 font-weight-bold">Maträtter</h2>
            <Media query="(max-width: 630px)">
              {matches =>
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
              <li className="mb-3">
                <h5 className="font-weight-light">&#3866; Dagens special</h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light">
                  &#3866; Paj med sallad och snittar
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light">
                  &#3866; Soppa med ostmacka
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light">
                  &#3866; Blandsallad med hummus och soltorkade tomater{" "}
                  <span>{badge}</span>
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light">
                  &#3866; Blandsallad med feta och honungsrostade mandlar
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light">
                  &#3866; Blandsallad med tonfiskröra & kokt ägg
                </h5>
              </li>
            </ul>
          </div>
          <h6 className="font-weight-light text-center mt-2 mb-5">
            <em>
              De flesta rätter går att göra veganska eller glutenfria, <br />
              fråga gärna personalen
            </em>
          </h6>
        </div>
      </div>
    );
  }
}

export default Dishes;
