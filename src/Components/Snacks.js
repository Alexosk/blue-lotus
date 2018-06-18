import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {smallcourse} = images

class Snacks extends Component {
  render() {
    return (
      <div>
        <div className='p-4 text-center mx-2'>
          <h2 className='text-center mt-2 p-2'>Smått Och Gott</h2>
          <ul className='mt-4'>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Vitlöksbröd</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Hummus med bröd <Badge color="success" pill>Vegan</Badge></h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Blandade honungsrostade nötter</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Oliv Mix</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Liten blandsallad</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Liten soppa med bröd</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Youghurt med nötkross, honung & blåbär</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>Havreghurt med nötkross & blåbär <Badge color="success" pill>Vegan</Badge></h5>
            </li>
          </ul>
        </div>
        <img className='mb-4' width='100%' src={smallcourse}/>
      </div>)
  }
}

export default Snacks
