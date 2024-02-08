import React from "react";
import "./DrawerToggleButton.css";
import "./SideDrawer.css";
import images from "../../images";

let { logo } = images;

const NavigationItem = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
);

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <img src={logo} width="150" height="150" alt="restaurant logo" />
        </li>
        <NavigationItem href="/">Hem</NavigationItem>
        <NavigationItem href="/meny/breakfast">Meny</NavigationItem>
        <NavigationItem href="/gallery">Galleri</NavigationItem>
        <NavigationItem href="/historia">Historia</NavigationItem>
        <NavigationItem href="/contact">Kontakt</NavigationItem>
      </ul>
    </nav>
  );
};

export default SideDrawer;
