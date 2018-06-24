import React, {Component} from 'react'
import './DrawerToggleButton.css'
import './SideDrawer.css'


const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
  <nav className={drawerClasses} >
    <ul>
      <li><a href='/'>Hem</a></li>
      <li><a href='/meny/breakfast'>Meny</a></li>
      <li><a href='/gallery'>Galleri</a></li>
      <li><a href='/historia'>Historia</a></li>
      <li><a href='/contact'>Kontakt</a></li>
    </ul>
  </nav>
  );
};


export default SideDrawer
