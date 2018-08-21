import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {dinner} = images

class Dishes extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Flesta rätter går att göra veganska eller glutenfria, fråga gärna personalen</em></h6>
        <div className="d-flex flex-wrap justify-content-center mt-2 mb-5">
          <div className='p-4 text-center mx-2'>
            <h2 className='text-center mt-2 p-2 font-weight-bold'>Maträtter</h2>
            <ul className='mt-4'>
              <li className='mb-3'>
                <h5 className='font-weight-light'>
                &#3866; Dagens special</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>&#3866; Paj med sallad och snittar</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>&#3866; Soppa med ostmacka</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>&#3866; Blandsallad med hummus och soltorkade tomater <Badge className='pill' pill={true}>Vegan</Badge></h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>&#3866; Blandsallad med feta och honungsrostade mandlar</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>&#3866; Blandsallad med tonfiskröra och kokt ägg</h5>
              </li>
            </ul>
          </div>
        </div>
        <img className='rounded mb-4' width='100%' src={dinner} alt='dinner'/>
      </div>)
  }
}

export default Dishes
