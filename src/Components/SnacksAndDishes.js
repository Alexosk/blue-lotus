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
          <li>Hummus with bread <Badge color="success" pill>Vegan</Badge></li>
          <li>Small mixsalad</li>
          <li>Garlic bread</li>
          <li>Yoghurt with mixed nuts, honey & blueberry</li>
          <li>Vegan yoghurt with mixed nuts & blueberry <Badge color="success" pill>Vegan</Badge></li>
        </ul>
        </div>
        <div className='p-4 text-center mx-2'>
        <h4 className='pb-2 font-weight-light text-center border-bottom'>Dishes</h4>
        <ul className='mt-4'>
          <li>Today’s special</li>
          <li>Quiche (pie) with salad</li>
          <li>Soup with cheese sandwich</li>
          <li>Small soup with bread</li>
          <li>Mix salad with hummus & sundried tomatoes <Badge color="success" pill>Vegan</Badge></li>
          <li>Mix salad with feta cheese & honeyrosted almonds</li>
          <li>Mix salad with spicy tuna & boiled egg</li>
        </ul>
        </div>
      </div>
    </div>)
  }
}

export default SnacksAndDishes
