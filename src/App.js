import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Route} from 'react-router-dom'
import routes from './routes';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import Footer from './Components/Footer';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  DrawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  BackdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render () {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.BackdropClickHandler} />;
    }

    const pageRoutes = routes.pageRoutes.map(route => (
      <Route path={route.path}
           exact={route.exact}
           component={route.component}
           key={route.name}
      />
))
    return (
      <div style={{height: '100%'}} className='d-flex flex-column'>
        <MainNavigation drawerClickHandler={this.DrawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>
          {pageRoutes}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
