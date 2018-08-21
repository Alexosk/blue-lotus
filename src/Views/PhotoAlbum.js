import React, {Component} from 'react';
import images from '../images'
let {indexLotus} = images



class PhotoAlbum extends Component {
  render() {
    const images = [
      {
        original: require('../images/meny/frukost/Lotus-13.png'),
        thumbnail: require('../images/meny/frukost/Lotus-13.png')
      }, {
        original: require('../images/meny/kakor/Lotus-5.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-5.jpg')
      }, {
        original: require('../images/meny/kakor/Lotus-6.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-6.jpg')
      }, {
        original: require('../images/meny/kakor/Lotus-7.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-7.jpg')
      }, {
        original: require('../images/meny/kakor/Lotus-8.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-8.jpg')
      }, {
        original: require('../images/meny/kakor/Lotus-10.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-10.jpg')
      }, {
        original: require('../images/meny/kakor/Lotus-12.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-12.jpg')
      },
      {
        original: require('../images/meny/kakor/Lotus-23.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-23.jpg'),
      }
    ]
    return (
      <div className='image-gallery mt-4 container content p-2'>
      <h1 className='text-center'>Galleri</h1>
      <p className='text-center'> Fotograf: <a href='https://www.instagram.com/sarajosefin_fotografi_/'>Josefin Hasselberg</a>
      </p>
        <div className='row p-3'>
           <div className='col-lg-4 col-md-6 p-2 m-0'>
             <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
           </div>
           <div className='col-lg-4 col-md-6 p-2 m-0'>
             <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
           </div>
           <div className='col-lg-4 col-md-6 p-2 m-0'>
           <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
         </div>
         <div className='col-lg-4 col-md-6 p-2 m-0'>
           <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
         </div>
         <div className='col-lg-4 col-md-6 p-2 m-0'>
           <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
         </div>
         <div className='col-lg-4 col-md-6 p-2 m-0'>
         <img className='rounded' src={indexLotus} width='100%' height='auto' alt='images'/>
       </div>
        </div>
    </div>)
  }
}

export default PhotoAlbum
