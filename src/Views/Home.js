import React, {Component} from 'react'
import Helmet from 'react-helmet'
import images from '../images'
let {indexLotus} = images

class Home extends Component {
  render () {
    return (
      <div className=''>
          <img className='index-photo img-fluid' height='auto' width='100%' alt='Café Blå Lotus' src={indexLotus} />
      </div>
    )
  }
}

export default Home
