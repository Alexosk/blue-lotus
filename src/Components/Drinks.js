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
          <li>Te/kaffe</li>
          <li>Espresso</li>
          <li>Americano</li>
          <li>Caffe latte</li>
          <li>Cappuccino</li>
          <li>Cortado</li>
          <li>Macchiato</li>
          <li>Mocca</li>
          <li>Varmt choklad <em className='font-weight-light'>med vispgrädde</em></li>
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
        <h3 className='text-center font-weight-light'>Vi serverar också vin, öl och cider!</h3>
          <h4 className='text-center font-weight-light'>Kom gärna förbi och se dagens meny</h4>
        </div>
    </div>)
  }
}

export default Drinks
