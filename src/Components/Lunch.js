import React, { Component } from 'react'

class Lunch extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center mt-2 p-2'>Lunch</h2>
        <div className='d-flex justify-content-center'>
          <h6 className='font-weight-light'><b>Mån-Fre</b> 11-14 </h6>
        </div>
        <div className='p-4 d-flex justify-content-around flex-column'>
        <ul className='d-flex flex-column flex-wrap'>
          <li className='mb-3 pb-1 text-center border-bottom'>Soppa med ostmacka</li>
          <li className='mb-3 pb-1 text-center border-bottom'>Paj med sallad och snittar</li>
          <li className='mb-3 pb-1 text-center border-bottom'>Dagens special</li>
          <li className='mb-4 pb-1 text-center border-bottom'>Valfri varm macka med salld</li>
          <h5 className='text-center font-weight-light mt-4'>Citrondryck & kaffe/te/espresso ingår</h5>
        </ul>
      </div>
    </div>
   )
  }
}

export default Lunch
