import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import images from '../images'
let {logo, flowerLogo} = images

class MainNav extends Component {
  constructor (props) {
    super(props)
    this.state =
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
  <div id='pattern' className='mainNav d-flex my-auto'>
    <ul className='Nav' width='100%'>
      <li className='ml-5'><img className='' src={flowerLogo} width='50' height='40'/></li>
        <li className='font-weight-bold text-uppercase text-dark ml-4'>Café&nbsp;Blå&nbsp;Lotus</li>
    </ul>
    <ul className='Nav mainMenu justify-content-end mr-5'>
      <li className=''>
        <Link exact='exact' to='/' className='a mr-4 ml-2 text-uppercase text-dark active' activeClassName="active">Hem</Link>
      </li>
      <li>
        <Link to='/meny/breakfast' className='a mr-4 ml-2 text-uppercase text-dark'>Meny</Link>
      </li>
      <li>
        <Link to='/gallery' className='a mr-4 ml-2 text-uppercase text-dark'>Galleri</Link>
      </li>
      <li>
        <Link to='/historia' className='a mr-4 ml-2 text-uppercase text-dark'>Historia</Link>
      </li>
      <li>
        <Link to='/contact' className='a mr-4 ml-2 text-uppercase text-dark'>Kontakt</Link>
      </li>
    </ul>
    </div>)
  }
}

export default MainNav
