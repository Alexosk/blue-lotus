import React, { Component } from "react";
import Media from "react-media";
import images from "../images";
let { drinks, drinksMobile } = images;

class Drinks extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mt-2 p-0 font-weight-bold">Dryck</h2>
        <Media query="(max-width: 630px)">
          {matches =>
            matches ? (
              <img
                className="rounded mb-4 img-fluid"
                width="100%"
                alt="Café Blå Lotus"
                src={drinksMobile}
              />
            ) : (
              <img
                className="rounded mb-4"
                width="100%"
                src={drinks}
                alt="drinks"
              />
            )
          }
        </Media>
        <div className="d-flex flex-wrap justify-content-around mt-2 mb-5">
          <div className="drinks mb-2">
            <h6 className="text-uppercase font-weight-bold">Varma drycker</h6>
            <p>Bryggkaffe</p>
            <p>Espresso</p>
            <p>Americano</p>
            <p>Kaffe latte</p>
            <p>Cappuccino</p>
            <p>Cortado</p>
            <p>Macchiato</p>
            <p>Mocca</p>
            <p>Varmt choklad</p>
            <p>Chai</p>
          </div>
          <div className="drinks mb-2">
            <h6 className="text-uppercase font-weight-bold">Te</h6>
            <p>Rooibos</p>
            <p>Grönt jasmin</p>
            <p>Grönt lime</p>
            <p>Pepparmynta</p>
            <p>Flamenco</p>
            <p>Earl Grey</p>
            <p>Kanel</p>
            <p>Lapsang</p>
            <p>Söder</p>
            <p>Assam</p>
          </div>
          <div className="drinks mb-2">
            <h6 className="text-uppercase font-weight-bold">Kalla drycker</h6>
            <p>Läsk</p>
            <p>Apelsinjuice</p>
            <p>Citron lemonade</p>
            <p>San Pellegrino</p>
            <p>Äppelmust</p>
            <p>
              Päron & ingefära <br /> lemonade
            </p>
            <p>Lättöl</p>
            <p>Lassi</p>
          </div>
          <div className="drinks mb-2">
            <h6 className="text-uppercase font-weight-bold">Öl</h6>
            <p>Starobrno</p>
            <p>Brooklyn lager</p>
            <p>Brooklyn IPA</p>
            <p>Nils Oscar god lager</p>
            <p>ESB</p>
            <p>London pride</p>
            <p>Alkaholfri öl</p>
          </div>
          <div className="drinks mb-2">
            <h6
              style={{ borderBottom: "1px solid black" }}
              className="text-uppercase font-weight-bold"
            >
              Vin
            </h6>
            <p className="font-weight-bold">Rött</p>
            <p>Vinistella</p>
            <p className="font-weight-bold">Vitt</p>
            <p>Kleine zalze</p>
            <p className="font-weight-bold">Rosé</p>
            <p>Moncaro</p>
            <p className="font-weight-bold">Bubbel</p>
            <p>Charles de Fère</p>
            <p className="font-weight-bold">Cider</p>
            <p>Magners</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Drinks;
