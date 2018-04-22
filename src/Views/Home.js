import React, {Component} from 'react'
import images from '../images'
let {indexPhoto} = images

class Home extends Component {
  render () {
    return (
      <div>
          <img className='mt-4 img-fluid' height='auto' width='100%' alt='Café Blå Lotus' src={indexPhoto} />
      </div>
    )
  }
}

export default Home
