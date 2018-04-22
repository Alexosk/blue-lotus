import React, {Component} from 'react'
import images from '../images'
let {logo, facebook2, instagram2} = images

class About extends Component {
  render () {
    return (
      <div>
        <div className='jumbotron jumbotron-fluid bg-light border mt-4'>
          <div className='container bg-light'>
            <div className='d-flex justify-content-center mb-4'>
              <img alt='Blue Lotus logo' src={logo} width='250' height='250' />
            </div>
            <div className='d-flex flex-column justify-content-around flex-wrap' width='100%'>
              <ul className='p-4 text-center'>
                <h2>Om Oss</h2>
                <li>
                  <h5 className='font-weight-light'><b>Adress:</b> Katarina&nbsp;Bangata 21</h5>
                </li>
                <li>
                  <h5 className='font-weight-light'><b>Tel:</b> +4686445043</h5>
                </li>
              </ul>
              <ul className=' text-center p-4'>
                <h2>Öppettider</h2>
                <li>
                  <h5 className='font-weight-light'><b>Mån-fre:</b> 08:30 - 20:00</h5>
                </li>
                <li>
                  <h5 className='font-weight-light'><b>Lör-Sön:</b> 09:30 - 19:00</h5>
                </li>
              </ul>
              <ul className='justify-content-center p-4 d-flex'>
                <li className='mr-3'>
                  <a href='https://www.facebook.com'><img alt='facebook' width='50' height='50' src={facebook2} /></a>
                </li>
                <li className='ml-3'>
                  <a href='https://www.instagram.com/explore/locations/735396/'><img alt='instagram' width='50' height='50' src={instagram2} /></a>
                </li>
              </ul>
            </div>
            <div className='d-flex justify-content-center'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.2532463362224!2d18.074458116093847!3d59.312028081652755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f74ad3e621%3A0xb1bddf97161a4a39!2sCafe+Bl%C3%A5+Lotus!5e0!3m2!1sen!2sse!4v1523131257345' className='border mt-4 rounded' width='90%' height='450' frameBorder='0'>.</iframe>
            </div>
          </div>
        </div>

    </div>)
  }
}

export default About
