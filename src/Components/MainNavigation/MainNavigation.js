import React from "react";
import "./MainNavigation.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import images from "../../images";
let { flowerLogo } = images;

const MainNavigation = props => (
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
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/meny/breakfast">Meny</Link>
            </li>
            <li>
              <Link to="/gallery">Galleri</Link>
            </li>
            <li>
              <Link to="/historia">Historia</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default MainNavigation;
