import React, {Component} from 'react'
import images from '../images'
let {facebook2, instagram2} = images

class Footer extends Component {
  render () {
    return (
      <div className='mt-5 p-4 border-top bg-white mb-1'>
        <div className='d-flex flex-row justify-content-around mt-4 flex-wrap text-uppercase'>
      <ul >
        <li className='align-self-center'>Katarina Bangata 21</li>
        </ul>
        <ul className='d-flex'>
        <li className='mx-1 p-1'>
          <img src={facebook2} width='30' height='30' alt='facebook' />
          </li>
          <li className='mx-1 p-1'>
          <img src={instagram2 } width='30' height='30' alt='instagram'/>
          </li>
        </ul>
        <ul>
        <li>08-644-50-43</li>
      </ul>
      </div>
      </div>
    )
  }
}

export default Footer
