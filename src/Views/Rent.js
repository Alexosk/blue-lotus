import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import images from "../images";
import { RENTAL_IMAGES } from "../constants";
import Media from "react-media";

const TextSection = ({ children, className }) => (
  <div className={`${className ?? ""} rentSections d-flex flex-column`}>
    {children}
  </div>
);

const InfoBox = ({ title, subtitle, prices, note }) => (
  <div
    className="py-2"
    style={{
      border: "1px solid black",
      backgroundColor: "#c2f0c2",
      width: "325px",
      marginBottom: "20px",
    }}
  >
    <p style={{ textAlign: "center" }}>
      <span style={{ fontSize: "25px" }}>{title}</span> <br />{" "}
      <span>{subtitle}</span>
    </p>
    {prices.map(({ time, price }) => (
      <p key={price} style={{ textAlign: "center" }}>
        <span>{time}</span> <br /> <span>{price}</span>
      </p>
    ))}
    {note && (
      <p className="text-center" style={{ fontSize: "14px" }}>
        <em>{note}</em>
      </p>
    )}
  </div>
);

export const Rent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="content container">
      <div className="d-flex flex-column justify-content-around flex-wrap mb-5">
        <h2 className="text-center mt-2">Abbonering av Café Blå Lotus</h2>
        <div className="d-flex flex-column align-items-center">
          <TextSection>
            <p className="pt-4">
              På kvällar går det att abbonera hela vårt mysiga café för event
              och fest. Vi har alltid 2 personal som sköter mat och bar.
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

          <h5 className="mb-5 text-center" style={{ fontSize: "25px" }}>
            Festavgifter:
          </h5>
          <div className="infobox-container mb-4" style={{ width: "80%" }}>
            <InfoBox
              title="Hel kväll"
              subtitle="från 18-24"
              prices={[{ time: "", price: "10.000 kr" }]}
              note="Städning ingår i priset."
            />
            <InfoBox
              title={"Timhyra"}
              subtitle={"Minimum 3 timmar"}
              prices={[
                { time: "Kl. 18-19:", price: "2750:- /tim" },
                { time: "Kl. 19-:", price: "1760:- /tim" },
              ]}
            />
          </div>
          <div className="rentSections d-flex flex-column">
            <h4>Mat:</h4>
            <p className="pb-4">
              Vid abbonering ska minimum 30 personer äta en måltid, antingen
              från vår vanliga meny alternativt plocktallrik.
            </p>
            <p className="pb-2">
              <span className="font-weight-bold mr-3">Pris:</span>
              <span>149 kr/st (med kallskuret 159 kr/st)</span>
            </p>
            <div className="plock-tallrik-image-container pb-4">
              <img
                style={{ maxHeight: "100%", objectFit: "cover" }}
                src={images.plocktallrik}
                width="100%"
              />
            </div>
            <div
              className="py-2"
              style={{
                border: "1px solid black",
                backgroundColor: "#c2f0c2",
                width: "100%",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <h6 className="mt-2 font-weight-bold">Plocktallrik:</h6>
              <Media query="(max-width: 1300px)">
                {(matches) => {
                  return matches ? (
                    <ul className="mt-2 mb-4 menu-list">
                      <li className="mb-2">&#3866; Hummus</li>
                      <li className="mb-2">&#3866; Fetoströra</li>
                      <li className="mb-2"> &#3866; Muhamra</li>
                      <li className="mb-2">&#3866; Brieosttårta</li>
                      <li className="mb-2">&#3866; Marinerade oliver</li>
                      <li className="mb-2">&#3866; Kallskuret</li>
                      <li className="mb-2">&#3866; Frukt och grönsaksstavar</li>
                      <li>&#3866; Ost, bröd, kex</li>
                      <li>(inkl. glutenfria alternativ)</li>
                    </ul>
                  ) : (
                    <ul className="mt-2 mb-4 menu-list">
                      <li className="mb-2">
                        &#3866; Hummus &#3866; Fetoströra &#3866; Muhamra
                      </li>
                      <li className="mb-2">
                        &#3866; Brieosttårta &#3866; Marinerade oliver
                      </li>
                      <li className="mb-2">
                        &#3866; Kallskuret &#3866; Frukt och grönsaksstavar
                      </li>
                      <li>
                        &#3866; Ost, bröd, kex (inkl. glutenfria alternativ)
                      </li>
                    </ul>
                  );
                }}
              </Media>
            </div>
          </div>

          <TextSection className="mt-4">
            <h4>Dryck:</h4>
            <p>All dryck inhandlas i baren</p>
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

        <div className="rental-gallery container content flex-column align-items-center p-2">
          <div className="row">
            {RENTAL_IMAGES.map((item, index) => {
              const isVideo = item.endsWith(".MP4");
              return (
                <div className="col-lg-6 col-md-6 p-2" key={index}>
                  {isVideo ? (
                    <video
                      src={item}
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item}
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt={`rental ${index}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
