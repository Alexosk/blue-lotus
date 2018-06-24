import React, {Component} from 'react'
import './MainNavigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import images from '../../images'
let {logo, flowerLogo} = images


const MainNavigation = props => (
    <div>
      <header className='navigation__bar'>
        <nav className='main__Navigation'>
          <div className='navigation__toggle-button'>
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className='navigation__logo'>
              <a href='/'>
                  <img className='logo' src={flowerLogo} width='50' height='40'/>
                  <h5>Café Blå Lotus</h5>
              </a>
          </div>
          <div className='spacer' />
          <div className='navigation-items'>
            <ul>
              <li><a href='/'>Hem</a></li>
              <li><a href='/meny/breakfast'>Meny</a></li>
              <li><a href='/gallery'>Galleri</a></li>
              <li><a href='/historia'>Historia</a></li>
              <li><a href='/contact'>Kontakt</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    )


export default MainNavigation
