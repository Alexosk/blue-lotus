import React from "react";
import Media from "react-media";
import images from "../images";

const { breakfast, breakfastMobile } = images;

const BreakfastItem = ({ title, children }) => (
  <div className="breakfast mb-2">
    <h4 className="text-center mb-2 font-weight-bold">{title}</h4>
    <p className="mb-0 font-weight-light">{children}</p>
  </div>
);

export const Breakfast = () => {
  return (
    <div className="content">
      <h2 className="text-center mt-2 p-2">
        <b>Frukost</b>
      </h2>
      <div className="d-flex justify-content-center">
        <p className="font-weight-light">
          <span className="font-weight-bold">Vardag</span> 9:00-11:00 <br />{" "}
          <span className="font-weight-bold">Helg</span> 10:00-12:00
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
        <BreakfastItem title="Liten">
          &#3866; Valfri kall macka <br /> &#3866; Kaffe/Te
        </BreakfastItem>
        <BreakfastItem title="Stor">
          &#3866; Valfri kall macka <br /> &#3866; Yoghurt med granola,
          <br />
          nötter, hallon och honung <br /> &#3866; Juice <br /> &#3866; Kaffe/Te
        </BreakfastItem>
      </div>
      <p className="extras text-center font-weight-light mb-4">
        <span className="font-weight-bold">Tillägg:</span> <br /> &#3866; Valfri
        Kaffe/Chai <br /> &#3866; Kokt ägg EKO <br /> &#3866; Kokt ägg med
        kaviar
      </p>
      <h6 className="font-weight-light text-center mb-5">
        <em>Vegan alternativ finns</em>
      </h6>
    </div>
  );
};
