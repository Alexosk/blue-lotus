import React, { Component } from 'react'

class Drinks extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Alla mackor går att få på glutenfritt knäcke bröd</em></h6>
      <div className="d-flex flex-wrap justify-content-center mt-2 mb-5">
        <div className='p-4 text-center mx-2'>
          <h4 className='pb-2 font-weight-light text-center border-bottom'>Varmt</h4>
        <ul className='mt-4'>
          <li>Tea/coffee</li>
          <li>Espresso</li>
          <li>Americano</li>
          <li>Caffe latte</li>
          <li>Cappuccino</li>
          <li>Cortado</li>
          <li>Macchiato</li>
          <li>Mocca</li>
          <li>Hot chocolate <br /> <em className='font-weight-light'>with whipped cream</em></li>
          <li>Chai</li>
        </ul>
        </div>
        <div className='p-4 text-center mx-2'>
        <h4 className='pb-2 font-weight-light text-center border-bottom'>Kallt</h4>
        <ul className='mt-4'>
          <li>Soft drinks</li>
          <li>Orange juice</li>
          <li>San Pellegrino</li>
          <li>Appel juice</li>
          <li>Pear & ginger lemonade</li>
          <li>Lager free of alcohol</li>
          <li>Lassi</li>
        </ul>
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <h3 className='text-center font-weight-light'>We also server wine, lager, ale and cider!</h3>
          <h4 className='text-center font-weight-light'>Please come in and see whats on the meny today</h4>
        </div>
    </div>)
  }
}

export default Drinks
