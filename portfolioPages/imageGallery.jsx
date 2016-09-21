import React from 'react';
import ImageGallery from 'react-image-gallery';
import style from '../scss/gallery.scss';

class Gallery extends React.Component{

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render(){

    const images =[
      {
        original: 'http://i.imgur.com/cP4v5Vw.jpg?1',
        thumbnail: 'http://i.imgur.com/cP4v5Vw.jpg?1',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        // originalAlt: 'original-alt',
        // thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Me and Sarah',
        // description: 'Me and my beautiful daughter Sarah!',
        // srcSet: 'Optional srcset (responsive images src)',
        // sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://i.imgur.com/SmE37MA.jpg',
        thumbnail: 'http://i.imgur.com/SmE37MA.jpg'
      },
      {
        original: 'http://i.imgur.com/G1krGGu.jpg',
        thumbnail: 'http://i.imgur.com/G1krGGu.jpg'
      }
    ]

    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    )
  }
}

export default Gallery