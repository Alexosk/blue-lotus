import React, { useState } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import { MainNavigation } from "./Components/MainNavigation/MainNavigation";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const DrawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const BackdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={BackdropClickHandler} />;
  }

  const pageRoutes = routes.pageRoutes.map((route) => (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      key={route.name}
    />
  ));

  return (
    <div style={{ height: "100%" }} className="d-flex flex-column">
      <MainNavigation drawerClickHandler={DrawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "56px" }}>{pageRoutes}</main>
      <Footer />
    </div>
  );
};
