import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../routes";

const menuItems = [
  { path: "/meny/breakfast", name: "Frukost" },
  { path: "/meny/lunch", name: "Lunch" },
  { path: "/meny/dishes", name: "Maträtter" },
  { path: "/meny/snacks", name: "Smått & Gott" },
  { path: "/meny/coldsandwich", name: "Kalla Mackor" },
  { path: "/meny/warmsandwich", name: "Varma Mackor" },
  { path: "/meny/drinks", name: "Dryck" },
];

export const MenuNav = () => {
  const subMenu = routes.subMenu.map((route) => (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      key={route.name}
    />
  ));

  const firstFourItems = menuItems.slice(0, 4);
  const remainingItems = menuItems.slice(4);

  return (
    <div className="mt-4">
      <div className="content pt-4 pb-2 d-flex justify-content-center flex-wrap">
        {firstFourItems.map((item) => (
          <Link
            className="btn m-1"
            style={{ fontSize: "18px" }}
            to={item.path}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="content pb-4 d-flex justify-content-center flex-wrap">
        {remainingItems.map((item) => (
          <Link
            className="btn m-1"
            style={{ fontSize: "18px" }}
            to={item.path}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="content d-flex justify-content-center">{subMenu}</div>
    </div>
  );
};
