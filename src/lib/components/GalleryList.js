import React, { Component } from 'react'
import GalleryImage from './GalleryImage'

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
      <div style={containerStyle}>
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

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '1rem',
}