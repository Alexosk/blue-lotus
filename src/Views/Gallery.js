import React, {Component} from 'react'
import images from '../images'
let {dummyLotus} = images

class Gallery extends Component {
  render () {
    return (
      <div>
        <div>
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4' src={dummyLotus} alt='dummyData' width='100%' />
          <img className='mt-4 mb-4' src={dummyLotus} alt='dummyData' width='100%'/>
        </div>

      </div>
    )
  }
}

export default Gallery
