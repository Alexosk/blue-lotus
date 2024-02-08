import React from "react";
import images from "../images";
let { facebook2, instagram2 } = images;

export const Contact = () => {
  return (
    <div className="mt-4 pt-5 content container">
      <div className="d-flex flex-column justify-content-around flex-wrap">
        <ul className="p-4 text-center">
          <h2 className="font-weight-bold">Kontakt</h2>
          <li>
            <h5 className="font-weight-light adress">
              Katarina Bangata 21 <br /> 116 39 Stockholm
            </h5>
          </li>
          <li>
            <h5 className="font-weight-light">+46 864 450 43</h5>
          </li>
        </ul>
        <ul className="justify-content-center p-4 d-flex">
          <li className="mr-3">
            <a href="https://www.facebook.com">
              <img alt="facebook" width="50" height="50" src={facebook2} />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://www.instagram.com/cafeblalotus/?hl=en">
              <img alt="instagram" width="50" height="50" src={instagram2} />
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex pb-5 justify-content-center mb-5">
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.2532463362224!2d18.074458116093847!3d59.312028081652755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f74ad3e621%3A0xb1bddf97161a4a39!2sCafe+Bl%C3%A5+Lotus!5e0!3m2!1sen!2sse!4v1523131257345"
          className="border mt-4 rounded"
          width="90%"
          height="450"
          frameBorder="0"
        >
          .
        </iframe>
      </div>
    </div>
  );
};
