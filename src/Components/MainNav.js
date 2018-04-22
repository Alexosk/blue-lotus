import React, {Component} from 'react'
import {
  Navbar,
  Collapse,
  NavItem,
  NavbarToggler,
  Nav,
  NavLink,
} from 'reactstrap'
import images from '../images'
let {logo} = images

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
  <div>
    <div className='d-flex justify-content-center'>
      <img className='p-3 mx-auto' src={logo} width='200' height='200' alt='logo'/>
      </div>
      <Navbar className='border-top border-bottom' width='100%' color='light' light={true} expand='md'>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar={true} >
          <Nav className='mx-auto text-uppercase' navbar={true}>
            <NavItem>
              <NavLink exact='exact' href='/' className='mr-2 ml-2 font-weight-light text-dark active' activeClassName="active">Hem</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/meny/breakfast' className='mr-2 ml-2 font-weight-light text-dark'>Meny</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/gallery' className='mr-2 ml-2 font-weight-light text-dark '>Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/historia' className='mr-2 ml-2 font-weight-light text-dark '>Historia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about' className='mr-2 ml-2 font-weight-light text-dark '>Om Oss</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>)
  }
}

export default MainNav
