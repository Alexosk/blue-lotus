import React, {Component} from 'react'
import Helmet from 'react-helmet'
import images from '../images'
let {facebook2, instagram2} = images

class Footer extends Component {
  render () {
    return (
      <div className='footer border border-top'>
        <div className='mt-4 text-uppercase'>
      <ul className='d-flex justify-content-around font-weight-light'>
        <li className='align-self-center'><p className='m-0 font-weight-bold'>Café Blå Lotus</p><p className='m-0'>Katarina Bangata 21</p><p className='m-0'>116 39 Stockholm</p><p>08-644-50-43</p></li>
        <li className='align-self-center'>
          <img src={facebook2} width='30' height='30' alt='facebook' />
          </li>
          <li className='align-self-center'>
          <img src={instagram2 } width='30' height='30' alt='instagram'/>
          </li>
        <li className='text-right'><p className='m-0 font-weight-bold'>Öppettider</p><p className='m-0'> Mån-Tis: 8:30-20:00</p><p className='m-0'>Ons-Fre: 8:30-21:00</p><p> Lör-Sön: 9:30-21:00</p></li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Footer
