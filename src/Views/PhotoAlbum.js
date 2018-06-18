import React, {Component} from 'react'
import images from '../images'
let {gallery1, gallery2, gallery3, gallery4, gallery5} = images

class PhotoAlbum extends Component {
  render () {
    return (
      <div className='mt-4 mb-5 container d-flex flex-wrap'>
        <div width='800px' height='800px'>
        <img className='mt-4 img-fluid' src={gallery1} alt='dummyData' width='100%' height='auto' />
        </div>
        <div width='800px' height='800px'>
        <img className='mt-4 img-fluid' src={gallery2} alt='dummyData' width='100%' height='auto' />
        </div>
        <div>
          <img className='mt-4 img-fluid' src={gallery3} alt='dummyData' width='100%' height='800px' />
          </div>
          <div>
          <img className='mt-4 img-fluid' src={gallery4} alt='dummyData' width='100%' height='800px' />
          </div>
          <div>
          <img className='mt-4 img-fluid mb-4' src={gallery5} alt='dummyData' width='100%' height='800px' />
          </div>
      </div>
    )
  }
}


export default PhotoAlbum
