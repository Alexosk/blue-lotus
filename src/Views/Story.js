import React, { Component } from "react";
import images from "../images";
let { fridaOchCecilia } = images;

class Story extends Component {
  render() {
    return (
      <div className="content container mt-4 mb-5 p-4">
        <h1 className="text-center mt-4">Historia</h1>
        <div className="d-flex flex-column justify-content-center">
          <div className="row d-flex align-items-center flex-column">
            <img
              className="col-lg-6 col-md-8 rounded mt-2"
              src={fridaOchCecilia}
              alt="Frida och Cecilia"
            />
          </div>
          <div>
            <p className="text-center mt-2 m-0">Frida och Cecilia</p>
            <p className="text-center">
              Fotograf:
              <a href="https://www.instagram.com/sarajosefin_fotografi_/">
                Josefin Hasselberg
              </a>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="history d-flex flex-column">
            <p>
              Det började på dansgolvet i början av 90-talet. Vi, Frida och
              Cecilia, träffades där i myllret och bestämde oss snart för att
              öppna ett mysigt café inspirerat av våra egna upplevelser av mat,
              möten och musik från när och fjärran.
              <br />
              <br />Den 7e augusti 1995 öppnade vi för första gången dörrarna
              till
              <em> Café Blå Lotus </em>
              och under de två decennier som har gått sedan dess har vi haft
              glädjen att arbeta med fantastiska människor och servera otaliga
              gäster. I vårt lilla, lilla kök bakar och lagar vi allt från
              grunden av bra råvaror. Vår ambition är att alla ska hitta något
              som passar deras tycke och smak.
              <br />
              <br />
              I vårat färgglada och brokiga café bland gudinnor och gudar från
              världens alla hörn har många möten och relationer skapats under
              åren som gått. Vi vill att Katarina bangata 21 ska få vara ett
              eget litet universum där vi kan förmedla medmänsklighet och värme.
            </p>
            <p className="text-center">Välkomna till oss! Cecilia & Frida</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
