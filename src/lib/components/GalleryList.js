import React, { Component } from 'react'
import GalleryImage from './GalleryImage'
import flexContainerStyle from './styles/flexContainer'

export default class GalleryList extends Component {

  render() {
    console.log(this.props);
    let gallery
    if(this.props.images){
      gallery = this.props.images
    } else {
      gallery = []
    }
    return (
      <div style={flexContainerStyle}>
         {gallery.map(item => (
          <div key={item} className="gallery-item">
            <GalleryImage 
              image={item}
              _deleteImage={this.props._deleteImage}
            />
          </div>))}
      </div>
    )
  }
}