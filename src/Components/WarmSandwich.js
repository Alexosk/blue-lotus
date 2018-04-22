import React, { Component } from 'react'
import {Badge} from 'reactstrap'

class WarmSandwich extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center px-2'><em>Alla mackor är Serverade på surdegsbröd och går att få på glutenfritt bröd</em></h6>
      <div className='p-4 d-flex justify-content-centerv text-center'>
        <ul>
          <li><b>Atena</b> <br/>ham, dijon mustard, tarragon, leek, tomato, cheese</li>
          <li><b>Freja</b> <br/>parsley relish, chèvre (goat’s cheese), tomato, cheese</li>
          <li><b>Hermes</b> <br/>ham, feta cheese, leek, tomato, cheese</li>
          <li><b>Hugin</b> <br/>salami, chèvre, red onion, tomato, cheese</li>
          <li><b>Shiva</b> <br/>garlic butter, feta cheese, mushrooms, red onion, tomato, cheese</li>
          <li><b>Pan</b> <br/>smoked turkey, sun dried tomatoes, red onion, tomato, cheese</li>
          <li><b>Abdalla</b> <br/>spicy tuna, red onion, tomato, cheese</li>
          <li><b>Lilith </b> <br/>parsley relish, sundried tomatoes, mushrooms, red onion, tomato, roasted seeds <Badge color="success" pill>Vegan</Badge></li>
          <li><b>Lotus special</b> <br/>pesto, feta cheese, tomato, cheese</li>
        </ul>
      </div>
    </div>)
  }
}

export default WarmSandwich
