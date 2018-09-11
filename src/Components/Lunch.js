import React, {Component} from 'react'
import images from '../images'
let {food} = images

class Lunch extends Component {
  render() {
    return (
      <div className='content'>
        <h6 className='font-weight-light text-center'><em>Flesta rätter går att göra veganska eller glutenfria, fråga gärna personalen</em></h6>
      <h2 className='text-center mt-2 p-2 font-weight-bold'>Lunch</h2>
      <div className='d-flex justify-content-center'>
        <h6 className='font-weight-light'>
          <p className='text-center lunch-time'><span className='font-weight-bold'>Mån-Fre:</span> 11:00-14:00</p>
        </h6>
      </div>
      <div className='d-flex justify-content-around flex-column'>
        <ul className='d-flex flex-column flex-wrap'>
          <li className='h5 pb-1 text-center'>
            <p className='font-weight-light'>&#3866; Soppa med ostmacka</p>
          </li>
          <li className='h5 pb-1 text-center'>
            <p className='font-weight-light'>&#3866; Paj med sallad och snittar</p>
          </li>
          <li className='h5 pb-1 text-center'>
            <p className='font-weight-light'>&#3866; Dagens special</p>
          </li>
          <li className='h5 pb-1 text-center'>
            <p className='font-weight-light'>&#3866; Valfri varm macka med sallad</p>
          </li>
          <h6 className='text-center font-weight-light mt-4'>Citrondryck & kaffe/te/espresso ingår</h6>
        </ul>
      </div>
      <img className='rounded mb-4' src={food} width='100%' alt='Lunch'/>
    </div>)
  }
}

export default Lunch
