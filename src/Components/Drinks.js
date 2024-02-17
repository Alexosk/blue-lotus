import React from "react";
import images from "../images";
import { MenuImage } from "./MenuImage";

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
    <div>
      <h2 className="text-center mt-2 p-0 font-weight-bold">Dryck</h2>
      <MenuImage src={images.drinks} alt="Drinks" />
      <div className="d-flex flex-wrap justify-content-around mt-2 mb-5">
        <DrinkCategory title="Varma drycker" drinks={warmDrinks} />
        <DrinkCategory title="Kalla drycker" drinks={coldDrinks} />
        <DrinkCategory title="Alkohol" drinks={alchaholicDrinks} />
      </div>
    </div>
  );
};
