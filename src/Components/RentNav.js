import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import routes from "../routes";

const rentItems = [
  { path: "/rent/abbonera", name: "Abbonera" },
  { path: "/rent/bokabord", name: "Boka Bord" },
];

export const RentNav = () => {
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
        {rentItems.map((item) => (
          <Link
            className="btn m-3"
            style={{ fontSize: "20px" }}
            to={item.path}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="content d-flex justify-content-center">
        <Route
          exact
          path="/rent"
          render={() => <Redirect to="/rent/abbonera" />}
        />
        {subMenu}
      </div>
    </div>
  );
};
