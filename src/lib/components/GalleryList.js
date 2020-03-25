import React, { Component } from 'react'
import GalleryImage from './GalleryImage'

export default class GalleryList extends Component {


  
  render() {
    let gallery
    if(this.props.images){
      gallery = this.props.images
    } else {
      gallery = []
    }

    const content = () => {
      if(gallery.length){
        return gallery.map(image => (
        <div key={ image } className="gallery-item">
          <GalleryImage 
            image={image}
            _deleteImage={this.props._deleteImage}
            buttonStyle={this.props.buttonStyle}
          />
        </div>))    
      }
    }
    return (
      <div style={this.props.style}>
         { content() }
      </div>
    )
  }
}