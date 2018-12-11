import React, { Component } from "react";
import { Badge } from "reactstrap";
import Media from "react-media";
import images from "../images";
let { snacks, snacksMobile } = images;

class Snacks extends Component {
  render() {
    let badge = (
      <Badge className="pill" pill={true}>
        Vegan
      </Badge>
    );
    return (
      <div>
        <div className="p-4 text-center mx-2">
          <h2 className="text-center mt-2 p-2 font-weight-bold">
            Smått Och Gott
          </h2>
          <ul className="mt-4">
            <li className="mb-3">
              <h5 className="font-weight-light">&#3866; Vitlöksbröd</h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Hummus med bröd <span>{badge}</span>
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Blandade honungsrostade nötter
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">&#3866; Oliv Mix</h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">&#3866; Liten blandsallad</h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Liten soppa med bröd
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Yogurt med nötkross, honung & blåbär
              </h5>
            </li>
            <li className="mb-3">
              <h5 className="font-weight-light">
                &#3866; Havreghurt med nötkross & blåbär <span>{badge}</span>
              </h5>
            </li>
          </ul>
        </div>
        <Media query="(max-width: 630px)">
          {matches =>
            matches ? (
              <img
                className="rounded mb-4 img-fluid"
                width="100%"
                alt="Café Blå Lotus"
                src={snacksMobile}
              />
            ) : (
              <img
                className="rounded mb-4"
                width="100%"
                src={snacks}
                alt="Snacks"
              />
            )
          }
        </Media>
      </div>
    );
  }
}

export default Snacks;
