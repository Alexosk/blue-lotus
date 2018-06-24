import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery';
import images from '../images'
let {gallery1, gallery2, gallery3, gallery4, gallery5} = images

class PhotoAlbum extends Component {
  render() {
    const images = [
      {
        original: require('../images/meny/frukost/Lotus-13.png'),
        thumbnail: require('../images/meny/frukost/Lotus-13.png'),
      },
      {
        original: require('../images/meny/kakor/Lotus-5.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-5.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-6.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-6.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-7.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-7.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-8.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-8.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-10.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-10.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-12.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-12.jpg'),
      },
      {
        original: require('../images/meny/kakor/Lotus-23.jpg'),
        thumbnail: require('../images/meny/kakor/Lotus-23.jpg'),
      },
    ]
    return (<div className='mt-4 mb-5 container content p-4'>
<ImageGallery items={images} showPlayButton = {false}/>
    </div>)
  }
}

export default PhotoAlbum
