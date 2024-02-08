import React from "react";
import { CONTACT_DETAILS, CONTACT_INFO, googleMapsLink } from "../constants";

export const Contact = () => {
  return (
    <div className="mt-4 pt-5 content container">
      <div className="d-flex flex-column justify-content-around flex-wrap">
        <ul className="p-4 text-center">
          <h2 className="font-weight-bold">Kontakt</h2>
          <li>
            <h5
              className="font-weight-light adress"
              dangerouslySetInnerHTML={{ __html: CONTACT_DETAILS.address }}
            />
          </li>
          <li>
            <h5 className="font-weight-light">{CONTACT_INFO.phone}</h5>
          </li>
        </ul>
        <ul className="justify-content-center p-4 d-flex">
          {CONTACT_DETAILS.socialLinks.map((link, index) => (
            <li key={index} className={index === 0 ? "mr-3" : "ml-3"}>
              <a href={link.href}>
                <img alt={link.alt} width="50" height="50" src={link.img} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex pb-5 justify-content-center mb-5">
        <iframe
          title="iframe"
          src={googleMapsLink}
          className="border mt-4 rounded"
          width="90%"
          height="450"
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    </div>
  );
};
