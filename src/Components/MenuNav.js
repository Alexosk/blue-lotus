import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../routes";

const menuItems = [
  { path: "/meny/breakfast", name: "Frukost" },
  { path: "/meny/lunch", name: "Lunch" },
  { path: "/meny/dishes", name: "Maträtter" },
  { path: "/meny/coldsandwich", name: "Kalla Mackor" },
  { path: "/meny/warmsandwich", name: "Varma Mackor" },
  { path: "/meny/snacks", name: "Smått & Gott" },
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

  return (
    <div className="mt-4">
      <div className="content p-4 d-flex justify-content-center flex-wrap">
        {menuItems.map((item) => (
          <Link className="btn m-1" to={item.path} key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="content d-flex justify-content-center">{subMenu}</div>
    </div>
  );
};
