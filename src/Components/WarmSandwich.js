import React, { Component } from "react";
import { Badge } from "reactstrap";
import Media from "react-media";
import images from "../images";
let { warmsandwich, warmSandwichMobile } = images;

class WarmSandwich extends Component {
  render() {
    let veganBefore = <span className="font-weight-bold">(V)</span>;
    let veganAfter = <span className="font-weight-bold">(V)</span>;

    return (
      <div>
        <h2 className="text-center mt-2 p-2 font-weight-bold">Varma Mackor</h2>
        <div className="menu-image-padding">
          <Media query="(max-width: 630px)">
            {matches =>
              matches ? (
                <img
                  className="rounded img-fluid"
                  width="100%"
                  alt="Café Blå Lotus"
                  src={warmSandwichMobile}
                />
              ) : (
                <img
                  className="rounded"
                  width="100%"
                  src={warmsandwich}
                  alt="Warm Sandwich"
                />
              )
            }
          </Media>
        </div>
        <div className="p-4 pt-0 d-flex justify-content-center">
          <ul className="menu-list">
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold menu-item">Athena</span>{" "}
                Skinka, dijon, dragon, purjo, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Freja</span> Persiljeröra,
                chèvre, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Hermes</span> Skinka, feta,
                purjo, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Hugin</span> Salami, chèvre,
                rödlök, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Shiva</span> Vitlökssmör,
                feta, champinjon, rödlök, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Pan</span> Kalkon, soltorkade
                tomater, rödlök, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Abdallah</span> Tonfiskröra,
                rödlök, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold">Lotus special</span> Pesto,
                feta, tomat & ost
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light menu-item">
                <span className="font-weight-bold veganMenuItem">
                  Lilith <span className="veganBefore">{veganBefore}</span>
                </span>
                Persiljeröra, soltorkade tomater, champinjon,<br /> rödlök,
                tomat, rostade frön & ruccola{" "}
                <span className="veganAfter">{veganAfter}</span>
              </h5>
            </li>
            <h6 className="font-weight-light px-2 text-center my-4">
              <em>
                Alla mackor serveras på surdegsbröd och <br /> går att få på
                glutenfritt bröd
              </em>
            </h6>
          </ul>
        </div>
      </div>
    );
  }
}

export default WarmSandwich;
