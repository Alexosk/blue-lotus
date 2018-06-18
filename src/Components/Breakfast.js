import React, { Component } from 'react'
import images from '../images'
let {breakfast} = images

class Breakfast extends Component {
  render() {
    return (
      <div className='content'>
        <h2 className='text-center mt-2 p-2'>Frukost</h2>
        <div className='d-flex justify-content-center'>
          <h6 className='font-weight-light'><b>Mån-Fre</b> 8:30-12 / <b>Sat-Sun</b> 9:30-14</h6>
        </div>
        <div className='p-4 d-flex justify-content-around flex-column'>
        <ul className='d-flex flex-column flex-wrap'>
          <h4 className='text-center'>1.</h4>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Ostmacka + Kaffe/te</h5>
          </li>
          <h4 className='text-center'>2.</h4>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Yogurt med nötkross, honung & blåbär + Kaffe/te</h5>
          </li>
          <h4 className='text-center'>3.</h4>
          <li className='mb-3 pb-1 text-center'>
            <h5 className='font-weight-light'>Ostmacka + Yogurt med nötkross, honung & blåbär + juice + Kaffe/te</h5>
          </li>
          <h4 className='text-center'>4.</h4>
          <li className='mb-4 pb-1 text-center'>
            <h5 className='font-weight-light'>Ägg och kaviarmacka + Yogurt med nötkross, honung & blåbär + juice + Kaffe/te</h5>
          </li>
          <h6 className='text-center font-weight-light mt-4'><b>Extras:</b> <br /> Cappucino, Chai or Caffe latte <br /> Kokt ägg  <br /> Kokt ägg med kaviar</h6>
        </ul>
      </div>
      <img className='mb-4' width='100%' alt='Café Blå Lotus' src={breakfast} />
    </div>
   )
  }
}

export default Breakfast
