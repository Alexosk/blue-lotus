import React, {Component} from 'react'
import images from '../images'
let {food} = images

class Lunch extends Component {
  render() {
    return (
      <div className='content'>
      <h2 className='text-center mt-2 p-2'>Lunch</h2>
      <div className='d-flex justify-content-center'>
        <h6 className='font-weight-light'>
          <b>Mån-Fre</b>
          11-14
        </h6>
      </div>
      <div className='p-4 d-flex justify-content-around flex-column'>
        <ul className='d-flex flex-column flex-wrap'>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Soppa med ostmacka</h5>
          </li>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Paj med sallad och snittar</h5>
          </li>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Dagens special</h5>
          </li>
          <li className='mb-4 pb-1 text-center'>
            <h5 className='font-weight-light'>Valfri varm macka med sallad</h5>
          </li>
          <h6 className='text-center font-weight-light mt-4'>Citrondryck & kaffe/te/espresso ingår</h6>
        </ul>
      </div>
      <img className='mb-4' src={food} width='100%'/>
    </div>)
  }
}

export default Lunch
