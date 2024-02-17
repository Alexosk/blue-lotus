import React from "react";
import { CONTACT_DETAILS, CONTACT_INFO, OPEN_HOURS } from "../constants";

const FooterItem = ({ className, title, content }) => (
  <div className={className}>
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
  return (
    <div className="footer p-4">
      <div className="footer-parent ">
        <div className="footer-container">
          <FooterItem
            className="footer-contact"
            title="Kontakt"
            content={[
              CONTACT_INFO.address,
              CONTACT_INFO.postCode,
              CONTACT_INFO.phone,
            ]}
          />
          <div className="footer-social two d-flex flex-column">
            <p className="mb-1 text-center font-weight-bold">Café Blå Lotus</p>
            <div className="mb-2 d-flex justify-content-center">
              {CONTACT_DETAILS.socialLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <img
                    className="mr-2"
                    src={link.img}
                    width="40"
                    height="40"
                    alt={link.alt}
                  />
                </a>
              ))}
            </div>
            <h6 className="copyright">© 2019 ALL RIGHTS RESERVED</h6>
          </div>
          <FooterItem
            className="footer-hours"
            title="Öppettider"
            content={OPEN_HOURS}
          />
        </div>
      </div>
    </div>
  );
};
