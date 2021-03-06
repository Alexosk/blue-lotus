import React, { Component } from "react";
import images from "../images";
let { facebook2, instagram2 } = images;

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content p-4 d-flex justify-content-around align-items-center flex-wrap">
          <div className="one">
            <p className="m-0 font-weight-bold">Kontakt</p>
            <p className="m-0">Katarina Bangata 21</p>
            <p className="m-0">116 39 Stockholm</p>
            <p>08-644-50-43</p>
          </div>
          <div className="two d-flex flex-column">
            <p className="mb-1 text-center font-weight-bold">Café Blå Lotus</p>
            <div className="mb-2 d-flex justify-content-center">
              <a href="https://www.facebook.com/cafeblalotusstockholm/">
                <img
                  className="mr-1"
                  src={facebook2}
                  width="30"
                  height="30"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/cafeblalotus/?hl=en">
                <img
                  className="ml-1"
                  src={instagram2}
                  width="30"
                  height="30"
                  alt="instagram"
                />
              </a>
            </div>
            <h6 className="copyright">© 2019 ALL RIGHTS RESERVED</h6>
          </div>
          <div className="three">
            <p className="m-0 font-weight-bold">Öppettider</p>
            <p className="m-0"> Mån-Fre 8:30-20:00</p>
            <p className="m-0"> Lör 9:30-19:00</p>
            <p className="m-0">Sön 9:30-18:00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
