import React from "react";
import "./MainNavigation.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import images from "../../images";

let { flowerLogo } = images;

const NavigationItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

export const MainNavigation = (props) => (
  <div>
    <header className="navigation__bar">
      <nav className="main__Navigation">
        <div className="navigation__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navigation__logo">
          <a href="/">
            <img
              className="logo"
              src={flowerLogo}
              width="50"
              height="40"
              alt="Restaurant logo"
            />
            <h5 className="">Café Blå Lotus</h5>
          </a>
        </div>
        <div className="spacer" />
        <div className="navigation-items">
          <ul className="main-navigation-list">
            <NavigationItem to="/">Hem</NavigationItem>
            <NavigationItem to="/meny/breakfast">Meny</NavigationItem>
            <NavigationItem to="/gallery">Galleri</NavigationItem>
            <NavigationItem to="/historia">Historia</NavigationItem>
            <NavigationItem to="/contact">Kontakt</NavigationItem>
            <NavigationItem to="/rent">Hyra</NavigationItem>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);
