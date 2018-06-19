import React, {Component} from 'react'
import Helmet from 'react-helmet'
import images from '../images'
let {facebook2, instagram2} = images

class Footer extends Component {
  render () {
    return (
      <div className='footer border-top'>
        <div className='p-4 d-flex justify-content-around align-items-center flex-wrap'>
          <div>
            <p className='m-0 font-weight-bold'>Kontakt</p><p className='m-0'>Katarina Bangata 21</p><p className='m-0'>116 39 Stockholm</p><p>08-644-50-43</p>
        </div>
          <div className='d-flex flex-column'>
            <p className='mb-1 text-center font-weight-bold'>Café Blå Lotus</p>
              <div className='mb-2 d-flex justify-content-center'>
              <a href='https://www.facebook.com'><img className='mr-1' src={facebook2} width='30' height='30' alt='facebook' /></a>
              <a href='https://www.instagram.com/explore/locations/735396/'><img className='ml-1' src={instagram2 } width='30' height='30' alt='instagram'/></a>
              </div>
            <h6 className='copyright'>© 2018 ALL RIGHTS RESERVED</h6>
        </div>
          <div>
            <p className='m-0 text-right font-weight-bold'>Öppettider</p><p className='m-0'> Mån-Tis: 8:30-20:00</p><p className='m-0'>Ons-Fre: 8:30-21:00</p><p className='m-0 text-right'> Lör: 9:30-21:00</p><p className='text-right m-0'>Sön: 9:30-19:00</p>
        </div>
        </div>
      </div>
    )
  }
}

export default Footer
