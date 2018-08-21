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
        <div className='mt-4'>
          <div className='content p-4 d-flex justify-content-center align-content-center flex-wrap'>
            <Link className='m-1 btn' to={'/meny/breakfast'}>Frukost</Link>
            <Link className='m-1 btn' to={'/meny/lunch'}>Lunch</Link>
            <Link className='m-1 btn' to={'/meny/dishes'}>Maträtter</Link>
            <Link className='m-1 btn' to={'/meny/coldsandwich'}>Kalla Mackor</Link>
            <Link className='m-1 btn' to={'/meny/warmsandwich'}>Varma Mackor</Link>
            <Link className='m-1 btn' to={'/meny/snacks'}>Smått Och Gott</Link>
            <Link className='m-1 btn' to={'/meny/drinks'}>Dryck</Link>
          </div>
          <div className='content d-flex justify-content-center'>
            {subMenu}
          </div>
        </div>
      </div>
        )
      }
    }

    export default MenyNav
