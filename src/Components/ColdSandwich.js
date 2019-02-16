import React, { Component } from "react";
import Media from "react-media";
import { Badge } from "reactstrap";
import images from "../images";
let { coldsandwich, coldsandwichMobile } = images;

class ColdSandwich extends Component {
  render() {
    let veganBefore = <span className="font-weight-bold">(V)</span>;
    let veganAfter = <span className="font-weight-bold">(V)</span>;

    return (
      <div className="content">
        <h2 className="text-center mt-2 p-2 font-weight-bold">Kalla Mackor</h2>
        <div className="menu-image-padding">
          <Media query="(max-width: 630px)">
            {matches =>
              matches ? (
                <img
                  className="rounded img-fluid"
                  height="auto"
                  width="100%"
                  alt="Café Blå Lotus"
                  src={coldsandwichMobile}
                />
              ) : (
                <img
                  className="rounded img-fluid"
                  height="auto"
                  width="100%"
                  alt="Café Blå Lotus"
                  src={coldsandwich}
                />
              )
            }
          </Media>
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center mt-2">
          <div className="p-4 mx-2">
            <h4 className="pb-2 text-center font-weight-bold">Surdegsmackor</h4>
            <hr className="mt-0" />
            <ul className="mt-4 mb-4 menu-list">
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Allahs gåva</span> Ost
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold veganMenuItem">
                    Kali<span className="veganBefore">{veganBefore}</span>
                  </span>{" "}
                  Persiljeröra & soltorkade tomater{" "}
                  <span className="veganAfter">{veganAfter}</span>
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Hades hämnd</span> Skinka,
                  ost & dijon
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold veganMenuItem">
                    Nirvana <span className="veganBefore">{veganBefore}</span>
                  </span>
                  Hummus <span className="veganAfter">{veganAfter}</span>
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Magre Memeth</span> Feta,
                  pesto & soltorkade tomater
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Maya</span> Tonfiskröra
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Fatimas drömmar</span>{" "}
                  Persiljeröra, feta, tomat & rödlök
                </h5>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="pb-2 text-center font-weight-bold">
                Knäckemackor
              </h4>
              <hr className="mt-0" />
            </div>
            <ul className="mt-4 menu-list">
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Ra’s skörd</span> Ägg,
                  purjo & kaviar
                </h5>
              </li>
              <li className="mb-3">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold">Isis synd</span>{" "}
                  Persiljeröra, feta, tomat & rödlök
                </h5>
              </li>
              <li className="">
                <h5 className="font-weight-light menu-item">
                  <span className="font-weight-bold veganMenuItem">
                    Artemis <span className="veganBefore">{veganBefore}</span>
                  </span>
                  Hummus <span className="veganAfter">{veganAfter}</span>
                </h5>
              </li>
            </ul>
          </div>
          <h6 className="font-weight-light text-center mb-5">
            <em>
              Alla mackor innehåller grönsaker.<br /> Går att få på glutenfritt
              knäckebröd.
            </em>
          </h6>
        </div>
      </div>
    );
  }
}

export default ColdSandwich;
