import React, { Component } from "react";
import Media from "react-media";
import images from "../images";
let { breakfast, breakfastMobile } = images;

class Breakfast extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="text-center mt-2 p-2">
          <b>Frukost</b>
        </h2>
        <div className="d-flex justify-content-center">
          <p className="font-weight-light">
            <span className="font-weight-bold">Mån-Fre</span> 8:30-12:00 <br />{" "}
            <span className="font-weight-bold">Lör-Sön</span> 9:30-14:00
          </p>
        </div>
        <div className="menu-image-padding">
          <Media query="(max-width: 630px)">
            {(matches) =>
              matches ? (
                <img
                  className="rounded img-fluid"
                  width="100%"
                  alt="Café Blå Lotus"
                  src={breakfastMobile}
                />
              ) : (
                <img
                  className="rounded img-fluid align-self-center"
                  width="100%"
                  height="auto"
                  alt="Café Blå Lotus"
                  src={breakfast}
                />
              )
            }
          </Media>
        </div>
        <div className="breakfast-parent d-flex flex-column align-items-center mt-4 d-flex flex-wrap text-center">
          <div className="breakfast mb-2">
            <h4 className="text-center mb-2 font-weight-bold">Paket 1</h4>
            <p className="mb-0 font-weight-light">
              &#3866; Ostmacka <br /> &#3866; Kaffe/te
            </p>
          </div>
          <div className="breakfast mb-2">
            <h4 className="text-center font-weight-bold">Paket 2</h4>
            <p className="mb-0 font-weight-light">
              &#3866; Yoghurt med nötkross, <br /> honung & blåbär <br />{" "}
              &#3866; Kaffe/te
            </p>
          </div>
          <div className="breakfast mb-2">
            <h4 className="text-center font-weight-bold">Paket 3</h4>
            <p className="mb-0 font-weight-light">
              &#3866; Ostmacka <br /> &#3866; Yoghurt med nötkross, <br />
              honung & blåbär <br /> &#3866; Juice <br /> &#3866; Kaffe/te
            </p>
          </div>
          <div className="breakfast mb-2">
            <h4 className="text-center font-weight-bold">Paket 4</h4>
            <p className="mb-0 font-weight-light">
              &#3866; Ägg och kaviarmacka <br />
              &#3866; Yoghurt med nötkross, <br />
              honung & blåbär <br />
              &#3866; Juice <br />
              &#3866; Kaffe/te
            </p>
          </div>
        </div>
        <p className="extras text-center font-weight-light mb-4">
          <span className="font-weight-bold">Tillägg:</span> <br /> Cappuccino,
          Chai eller Kaffe latte <br /> Kokt ägg <br /> Kokt ägg med kaviar
        </p>
        <h6 className="font-weight-light text-center mb-5">
          <em>För vegan alternativ finns havreghurt och hummusmacka</em>
        </h6>
      </div>
    );
  }
}

export default Breakfast;
