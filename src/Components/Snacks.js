import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {smallcourse} = images

class Snacks extends Component {
  render() {
    return (
      <div>
        <div className='p-4 text-center mx-2'>
          <h2 className='text-center mt-2 p-2 font-weight-bold'>Smått Och Gott</h2>
          <ul className='mt-4'>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Vitlöksbröd</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Hummus med bröd <Badge className='pill' pill={true}>Vegan</Badge></h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Blandade honungsrostade nötter</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Oliv Mix</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Liten blandsallad</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Liten soppa med bröd</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Yogurt med nötkross, honung & blåbär</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>&#3866; Havreghurt med nötkross & blåbär <Badge className='pill' pill={true}>Vegan</Badge></h5>
            </li>
          </ul>
        </div>
        <img className='rounded mb-4' width='100%' src={smallcourse} alt='Snacks'/>
      </div>)
  }
}

export default Snacks
