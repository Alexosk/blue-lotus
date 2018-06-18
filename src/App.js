import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Route} from 'react-router-dom'
import routes from './routes';
import MainNav from './Components/MainNav';
import Footer from './Components/Footer';


class App extends Component {

  render () {
    const pageRoutes = routes.pageRoutes.map(route => (
      <Route path={route.path}
           exact={route.exact}
           component={route.component}
           key={route.name}
      />
))
    return (
      <div className='d-flex flex-column'>
        <MainNav/>
        <main className='pt-5'>
          {pageRoutes}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
