import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom';
import routes from '../routes'
import images from '../images'
let {food} = images

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
          <div className='content btn-group p-4 d-flex justify-content-center align-content-center flex-wrap'>
            <Link className=' btn btn-outline-dark' to={'/meny/breakfast'}>Frukost</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/lunch'}>Lunch</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/coldsandwich'}>Kalla Mackor</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/warmsandwich'}>Varma Mackor</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/dishes'}>Maträtter</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/snacks'}>Smått Och Gott</Link>
            <Link className=' btn btn-outline-dark' to={'/meny/drinks'}>Dryck</Link>
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
