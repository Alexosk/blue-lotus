import React, {Component} from 'react'
import MenuNav from '../Components/MenuNav'
import images from '../images'
let {menuPhoto} = images



class Meny extends Component {
  render () {

    return (
      <div className='menu-container'>
    <div className='content mb-5 container'>
      <MenuNav className='' />
        <div>
        <img src={menuPhoto} width='100%' height='auto'/>
        </div>
    </div>
  </div>)
  }
}

export default Meny
