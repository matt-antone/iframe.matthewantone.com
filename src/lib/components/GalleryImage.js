import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import CMSconfig from '../config/config'

export default class GalleryImage extends Component {
  state = {
    focus: false,
    hover: false,
  }

  getClassName = () => {
    
  }

  deleteImage = (e,image) => {
    console.log("galleryImage",e.target,image);
    this.props._deleteImage(image)
  }

  render() {
    const {image} = this.props
    return (
      <div>
        <button 
          style={this.props.buttonStyle}
          className={ `gallery-button ${this.state.focus ? 'focus' : ''} ${this.state.hover ? 'hover' : ''}`}
          onClick={ e => this.deleteImage(e,image) }
          onBlur={ _ => this.setState({focus: false, hover: false})}
          onFocus={ _ => this.setState({focus: true})}
          onMouseOver={ _ => this.setState({hover: true})}
          onMouseOut={ _ => this.setState({focus: false, hover: false})}
          value={image}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>
          <Image style={itemStyle} cloudName="bugo" publicId={image.split(/[\\/|.]/).slice(-2, -1)[0]} width="100" height="100" crop="fill" />
        </button>
      </div>
    )
  }
}

const itemStyle = {
  width: '100%',
  height: 'auto',
}