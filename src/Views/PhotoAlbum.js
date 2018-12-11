import React, {Component} from 'react';
import ImageItem from '../Components/ImageItem';
import images from '../images';
let {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = images



class PhotoAlbum extends Component {
  render() {
    return (
      <div className='image-gallery mt-4 container content p-2'>
      <h1 className='text-center'>Galleri</h1>
      <p className='text-center'> Fotograf: <a href='https://www.instagram.com/sarajosefin_fotografi_/'>Josefin Hasselberg</a>
      </p>
        <div className='row p-3'>
          <div className='col-lg-6 col-md-6 p-2 m-0' >
            <img className='rounded' src={img1} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img2} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img3} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img4} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img5} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img6} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img7} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img8} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img9} width='100%' height='auto' alt=""/>
          </div>
          <div className='col-lg-6 col-md-6 p-2 m-0'>
            <img className='rounded' src={img10} width='100%' height='auto' alt=""/>
          </div>
        </div>
    </div>)
  }
}

export default PhotoAlbum
