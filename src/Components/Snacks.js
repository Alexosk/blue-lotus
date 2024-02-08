import React, { Component } from "react";
import Media from "react-media";
import images from "../images";
let { snacks, snacksMobile } = images;

class Snacks extends Component {
  render() {
    let veganAfter = <span className="font-weight-bold">(V)</span>;
    return (
      <div>
        <div className="p-4 text-center mx-2">
          <h2 className="text-center mt-2 p-2 font-weight-bold">
            Smått & Gott
          </h2>
          <div className="menu-image-padding">
            <Media query="(max-width: 630px)">
              {(matches) =>
                matches ? (
                  <img
                    className="rounded img-fluid"
                    width="100%"
                    alt="Café Blå Lotus"
                    src={snacksMobile}
                  />
                ) : (
                  <img
                    className="rounded"
                    width="100%"
                    src={snacks}
                    alt="Snacks"
                  />
                )
              }
            </Media>
          </div>
          <ul className="mt-4">
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Vitlöksbröd <span>{veganAfter}</span>
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Hummus med bröd <span>{veganAfter}</span>
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Liten blandsallad <span>{veganAfter}</span>
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Liten soppa med bröd <span>{veganAfter}</span>
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Yogurt med nötkross, honung & blåbär
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Havreghurt med nötkross & blåbär
                <span>{veganAfter}</span>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Snacks;
