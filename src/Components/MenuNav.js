import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom';
import routes from '../routes'

class MenyNav extends Component {
  render() {
    const subMenu = routes.subMenu.map(route => (
      <Route path={route.path}
        exact={route.exact}
        component={route.component}
        key={route.name}
      />
    ))
    return (
      <div>
        <div className='mt-4 bg-light border'>
          <div className='p-4 d-flex justify-content-center align-content-center flex-wrap'>
            <Link className='mx-1 btn btn-outline-info' to={'/meny/breakfast'}>Frukost</Link>
            <Link className='mx-1 btn btn-outline-info' to={'/meny/coldsandwich'}>Kalla Mackor</Link>
            <Link className='mx-1 btn btn-outline-info' to={'/meny/warmsandwich'}>Varma Mackor</Link>
            <Link className='mx-1 btn btn-outline-info' to={'/meny/snacksanddishes'}>Snacks And Dishes</Link>
            <Link className='mx-1 btn btn-outline-info' to={'/meny/drinks'}>Dryck</Link>
          </div>
          <div className='d-flex justify-content-center'>
            {subMenu}
          </div>
        </div>
      </div>
        )
      }
    }

    export default MenyNav
