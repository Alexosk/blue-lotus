import React from 'react'
import './DrawerToggleButton.css'
import './SideDrawer.css'
import images from '../../images'
let {logo} = images


const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
  <nav className={drawerClasses} >
    <ul>
      <li><img src={logo} width='150' height='150' alt='restaurant logo'/></li>
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
