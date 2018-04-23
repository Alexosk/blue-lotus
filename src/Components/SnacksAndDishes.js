import React, { Component } from 'react'
import {Badge} from 'reactstrap'

class SnacksAndDishes extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Alla mackor går att få på glutenfritt knäcke bröd</em></h6>
      <div className="d-flex flex-wrap justify-content-center mt-2 mb-5">
        <div className='p-4 text-center mx-2'>
          <h4 className='pb-2 font-weight-light text-center border-bottom'>Snacks</h4>
        <ul className='mt-4'>
          <li>Hummus med bröd <Badge color="success" pill>Vegan</Badge></li>
          <li>Liten blandsallad</li>
          <li>Vitlöksbröd</li>
          <li>Youghurt med nötkross, honung & blåbär</li>
          <li>Havreghurt med nötkross & blåbär <Badge color="success" pill>Vegan</Badge></li>
        </ul>
        </div>
        <div className='p-4 text-center mx-2'>
        <h4 className='pb-2 font-weight-light text-center border-bottom'>Dishes</h4>
        <ul className='mt-4'>
          <li>Dagens special</li>
          <li>Paj mes sallad och snittar</li>
          <li>Soppa med ostmacka</li>
          <li>Liten soppa med bröd</li>
          <li>Blandsallad med hummus och soltorkade tomater <Badge color="success" pill>Vegan</Badge></li>
          <li>Blandsallad med fets och honungsrostade mandlar</li>
          <li>Blandsallad med tonfiskröra och kokt ägg</li>
        </ul>
        </div>
      </div>
    </div>)
  }
}

export default SnacksAndDishes
