import React, { Component } from 'react'

class Breakfast extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center mt-2 p-2'>Frukost</h2>
        <div className='d-flex justify-content-center'>
          <h6 className='font-weight-light'><b>Mån-Fre</b> 8:30-12 / <b>Sat-Sun</b> 9:30-14</h6>
        </div>
        <div className='p-4 d-flex justify-content-around flex-column'>
        <ul className='d-flex flex-column flex-wrap'>
          <h5 className='text-center'>1.</h5>
          <li className='mb-3 pb-1 text-center border-bottom'>Ostmacka + Kaffe/te</li>
          <h5 className='text-center'>2.</h5>
          <li className='mb-3 pb-1 text-center border-bottom'> Yogurt med nötkross, honung & blåbär + Kaffe/te</li>
          <h5 className='text-center'>3.</h5>
          <li className='mb-3 pb-1 text-center border-bottom'>Ostmacka + Yogurt med nötkross, honung & blåbär + liten juice + Kaffe/te</li>
          <h5 className='text-center'>4.</h5>
          <li className='mb-4 pb-1 text-center border-bottom'> Ägg och kaviarmacka + Yogurt med nötkross, honung & blåbär + liten juice + Kaffe/te</li>
          <h5 className='text-center font-weight-light mt-4'><b>Extras:</b> <br /> Cappucino, Chai or Caffe latte <br /> Kokt ägg  <br /> Kokt ägg med kaviar</h5>
        </ul>
      </div>
    </div>
   )
  }
}

export default Breakfast
