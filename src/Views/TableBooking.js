import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Media from "react-media";

const TextSection = ({ children, className }) => (
  <div className={`${className ?? ""} history d-flex flex-column`}>
    {children}
  </div>
);
export const TableBooking = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="content container mb-5">
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center mt-4">Boka Bord</h1>
        <TextSection className="pt-4">
          <p>
            Hos oss kan du boka bord för matgäster, <br /> förutom vardagar kl
            12-14 och helger kl 13-15.
          </p>
        </TextSection>
        <h1 className="text-center mt-4">Privat Rum</h1>
        <TextSection className="pt-4">
          <p>
            Hos oss kan du boka bord för matgäster. <br /> Dock ej på vardagar
            mellan 12-14 eller helger mellan 13-15.
          </p>
          <p>
            Vi har även ett privat rum som kan bokas för minimum 12 matgäster.{" "}
            <br /> <br /> Om sällskapet vill stanna längre än 2 timmar tar vi en
            aboneringsavgift på 900kr per påbörjad timme.
          </p>
        </TextSection>

        <TextSection className="my-4">
          <p>
            För att boka, vänligen ring oss på
            <Media query="(max-width: 1300px)">
              {(matches) =>
                matches ? (
                  <a href="tel:+4686445043" className="font-weight-bold">
                    {" "}
                    +46 864 450 43
                  </a>
                ) : (
                  <span className="font-weight-bold"> +46 864 450 43</span>
                )
              }
            </Media>
          </p>
        </TextSection>
      </div>
    </div>
  );
};
