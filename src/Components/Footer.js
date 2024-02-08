import React from "react";
import { CONTACT_DETAILS, CONTACT_INFO, OPEN_HOURS } from "../constants";

const FooterItem = ({ title, content }) => (
  <div className="footer-item">
    <p className="m-0 font-weight-bold">{title}</p>
    {Object.values(content).map((item, index) => {
      return (
        <div key={index}>
          <p className="m-0">{item}</p>
        </div>
      );
    })}
  </div>
);

export const Footer = () => {
  const { address, postCode, phone } = CONTACT_INFO;

  return (
    <div className="footer">
      <div className="footer-content p-4 d-flex justify-content-around align-items-center flex-wrap">
        <FooterItem title="Kontakt" content={[address, postCode, phone]} />
        <div className="two d-flex flex-column">
          <p className="mb-1 text-center font-weight-bold">Café Blå Lotus</p>
          <div className="mb-2 d-flex justify-content-center">
            {CONTACT_DETAILS.socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <img
                  className="mr-1"
                  src={link.img}
                  width="30"
                  height="30"
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
          <h6 className="copyright">© 2019 ALL RIGHTS RESERVED</h6>
        </div>
        <FooterItem title="Öppettider" content={OPEN_HOURS} />
      </div>
    </div>
  );
};
