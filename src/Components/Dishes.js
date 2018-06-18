import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {dinner} = images

class Dishes extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Alla mackor går att få på glutenfritt knäcke bröd</em></h6>
        <div className="d-flex flex-wrap justify-content-center mt-2 mb-5">
          <div className='p-4 text-center mx-2'>
            <h2 className='text-center mt-2 p-2'>Maträtter</h2>
            <ul className='mt-4'>
              <li className='mb-3'>
                <h5 className='font-weight-light'>
                Dagens special</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>Paj med sallad och snittar</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>Soppa med ostmacka</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>Blandsallad med hummus och soltorkade tomater <Badge color="success" pill>Vegan</Badge></h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>Blandsallad med fets och honungsrostade mandlar</h5>
              </li>
              <li className='mb-3'>
                <h5 className='font-weight-light'>Blandsallad med tonfiskröra och kokt ägg</h5>
              </li>
            </ul>
          </div>
        </div>
        <img className='mb-4' width='100%' src={dinner}/>
      </div>)
  }
}

export default Dishes
