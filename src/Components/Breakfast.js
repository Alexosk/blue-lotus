import React, { Component } from "react";
import { Badge } from "reactstrap";
import Media from "react-media";
// import BreakfastPackage from './BreakfastPackage'
import images from "../images";
let { breakfast, breakfastMobile } = images;

class Breakfast extends Component {
  render() {
    let badge = (
      <Badge className="pill" pill={true}>
        Vegan
      </Badge>
    );
    return (
      <div className="content">
        <h2 className="text-center mt-2 p-2">
          <b>Frukost</b>
        </h2>
        <div className="d-flex justify-content-center">
          <h6 className="font-weight-light">
            <span className="font-weight-bold">Mån-Fre:</span> 8:30-12:00 <br />{" "}
            <span className="font-weight-bold">Lör-Sön:</span> 9:30-14:00
          </h6>
        </div>
        <div className="breakfast-parent mt-4 mb-4 px-5 d-flex flex-wrap text-center">
          <div className="breakfast rounded mb-2">
            <h4 className="text-center mb-2 font-weight-bold">Paket 1</h4>
            <h6 className="font-weight-light">
              &#3866; Ostmacka <br /> &#3866; Kaffe/te
            </h6>
            <hr />
            <span>{badge}</span>
            <h6 className="font-weight-light">
              &#3866; Hummusmacka <br /> &#3866; Kaffe/te
            </h6>
          </div>
          <div className="breakfast rounded mb-2">
            <h4 className="text-center font-weight-bold">Paket 2</h4>
            <h6 className="font-weight-light">
              &#3866; Yogurt med nötkross, <br /> honung & blåbär <br /> &#3866;
              Kaffe/te
            </h6>
            <hr />
            <span>{badge}</span>
            <h6 className="font-weight-light">
              &#3866; Havregurt med nötkross, <br /> honung & blåbär <br />{" "}
              &#3866; Kaffe/te
            </h6>
          </div>
          <div className="breakfast rounded mb-2">
            <h4 className="text-center font-weight-bold">Paket 3</h4>
            <h6 className="font-weight-light">
              &#3866; Ostmacka <br /> &#3866; Yogurt med nötkross, <br />honung
              & blåbär <br /> &#3866; Juice <br /> &#3866; Kaffe/te
            </h6>
            <hr />
            <span>{badge}</span>
            <h6 className="font-weight-light">
              &#3866; Hummusmacka <br /> &#3866; Havregurt med nötkross, <br />honung
              & blåbär <br />&#3866; Juice <br /> &#3866; Kaffe/te
            </h6>
          </div>
          <div className="breakfast rounded mb-2">
            <h4 className="text-center font-weight-bold">Paket 4</h4>
            <h6 className="font-weight-light">
              &#3866; Ägg och kaviarmacka <br />&#3866; Yogurt med nötkross,{" "}
              <br />honung & blåbär <br />&#3866; Juice <br />&#3866; Kaffe/te
            </h6>
            <hr />
            <span>{badge}</span>
            <h6 className="font-weight-light">
              &#3866; Hummusmacka <br />&#3866; Havregurt med nötkross, <br />honung
              & blåbär <br />&#3866; Juice <br />&#3866; Kaffe/te
            </h6>
          </div>
        </div>
        <p className="extras text-center font-weight-light mb-4">
          <b>Extras:</b> <br /> Cappucino, Chai or Caffe latte <br /> Kokt ägg{" "}
          <br /> Kokt ägg med kaviar
        </p>
        <Media query="(max-width: 630px)">
          {matches =>
            matches ? (
              <img
                className="rounded mb-4 img-fluid"
                width="100%"
                alt="Café Blå Lotus"
                src={breakfastMobile}
              />
            ) : (
              <img
                className="rounded img-fluid mb-4 align-self-center"
                width="100%"
                height="auto"
                alt="Café Blå Lotus"
                src={breakfast}
              />
            )
          }
        </Media>
      </div>
    );
  }
}

export default Breakfast;
