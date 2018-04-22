import React, { Component } from 'react'
import {Badge} from 'reactstrap'

class ColdSandwich  extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Alla mackor går att få på glutenfritt knäcke bröd</em></h6>
      <div className="d-flex flex-wrap justify-content-center mt-2 mb-5">
        <div className='p-4 text-center mx-2'>
          <h4 className='pb-2 font-weight-light text-center border-bottom'>Surdegs Mackor</h4>
        <ul className='mt-4'>
          <li><b>Cheese sandwich</b> <br/> cheese</li>
          <li><b>Vegan</b>  <br/> parsley relish, sun dried tomatoes <Badge color="success" pill>Vegan</Badge></li>
          <li><b>Hades hämnd</b> <br/> ham, cheese, dijon mustard</li>
          <li><b>Nirvana</b> <br/> hummus <Badge color="success" pill>Vegan</Badge></li>
          <li><b>Magre Memeth</b> <br/> feta cheese, pesto, sun dried tomatoes</li>
          <li><b>Maya</b> <br/> spicy tuna</li>
          <li><b>Fatimas drömmar</b> <br/> parsley relish, feta cheese, tomato, red onion</li>
        </ul>
        </div>
        <div className='p-4 text-center mx-2'>
        <h4 className='pb-2 font-weight-light text-center border-bottom'>Knäcke Mackor</h4>
        <ul className='mt-4'>
          <li><b>Ra’s skörd</b> <br/> egg, leek, caviar <Badge color="info" pill>Swedish</Badge></li>
          <li><b>Isis synd</b> <br/> parsley relish, feta cheese, tomato, red onion</li>
          <li><b>Artemis </b> <br/> hummus <Badge color="success" pill>Vegan</Badge></li>
        </ul>
        </div>
      </div>
    </div>)
  }
}

export default ColdSandwich
