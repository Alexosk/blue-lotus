import React from "react";
import Media from "react-media";
import images from "../images";

let { drinks, drinksMobile } = images;

const DrinkCategory = ({ title, drinks }) => (
  <div className="drinks mb-2">
    <h6 className="text-uppercase font-weight-bold">{title}</h6>
    {drinks.map((drink, index) => (
      <p key={index}>{drink}</p>
    ))}
  </div>
);

export const Drinks = () => {
  const warmDrinks = [
    "Kaffe",
    "Te",
    "Espresso",
    "Americano",
    "Caffe latte/Flat White",
    "Cappuccino",
    "Cortado",
    "Caffe Macchiato",
    "Mocca",
    "Varmt choklad",
    "Hemkokt Chai",
  ];

  const coldDrinks = ["Läsk", "Lassi", "Alkaholfri öl"];
  const alchaholicDrinks = ["Öl", "Rött vin", "Vitt vin", "Cider"];

  return (
    <div className="p-4">
      <h2 className="text-center mt-2 p-0 font-weight-bold">Dryck</h2>
      <div className="menu-image-padding">
        <Media query="(max-width: 630px)">
          {(matches) =>
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
      </div>
      <div className="d-flex flex-wrap justify-content-around mt-2 mb-5">
        <DrinkCategory title="Varma drycker" drinks={warmDrinks} />
        <DrinkCategory title="Kalla drycker" drinks={coldDrinks} />
        <DrinkCategory title="Alkohol" drinks={alchaholicDrinks} />
      </div>
    </div>
  );
};
