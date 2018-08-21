import React, {Component} from 'react'
import images from '../images'
let {indexLotus} = images

class Home extends Component {
  render () {
    return (
      <div className='index-photo'>
          <img className='index-photo img-fluid' height='auto' width='100%' alt='Café Blå Lotus' src={indexLotus} />
      </div>
    )
  }
}

export default Home
