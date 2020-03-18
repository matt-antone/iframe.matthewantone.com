import React, { Component } from 'react'
import {Image} from 'cloudinary-react'
import wrapperStyle from './styles/wrapper'


export default class Gallery extends Component {

  state = {
    images: [],
  }


  getCloudinaryHash = () => {
    //setup authorization
    var identityHeader = new Headers();
    identityHeader.append('Authorization',`Bearer ${window.user.token.access_token}`)
    
    fetch("/.netlify/functions/get-cloudinary-hash", {
      headers: identityHeader
    })
    .then(res => res.json())
    .then((result)=>{

      // Create the Media Library
      window.ML = window.cloudinary.createMediaLibrary({
        api_key: result.data.key,
        button_class: 'mediaLibrary',
        button_caption: 'Select Image or Video',
        cloud_name: result.data.cloud,
        signature: result.data.signature,
        timestamp: result.data.timestamp,
        username: 'accounts@bugo.io',
      }, {insertHandler: (data) => {
          let images = JSON.parse(JSON.stringify(this.state.images))
          images.push.apply(images, assets)
          this.setState({images: images})
          //send
          this.handleChange()
        }
      })
    })
  }

  handleChange = (e) => {
    const image =  {
      alt: this.state.image.context.custom.alt,
      title: this.state.image.context.custom.caption,
      image: this.state.image.secure_url,
    }
    this.props.onChange(image)
  }

  handleTitle = (e) => {
    let image = JSON.parse(JSON.stringify(this.state.image))
    image.context.custom.caption = e.target.value 
    this.setState({image: image})
    this.handleChange()
  }

  handleAlt = (e) => {
    let image = JSON.parse(JSON.stringify(this.state.image))
    image.context.custom.alt = e.target.value 
    this.setState({image: image})
    this.handleChange()
  }

  componentDidMount = (e) => {
    const { media } = this.state
    console.log('BugoCloudinary Mounted');
    this.getCloudinaryHash()
  }

  render() {
    const {cloudName,image} = this.state
    return h('div', {
      style: wrapperStyle,
    },[
      h('button', {
        id: "cloudinary-btn",
        className: 'mediaLibrary',
      }, 'Add Image'),
      // h(Image,{
      //   cloudName: cloudName,
      //   publicId: image.public_id,
      //   crop: 'scale',
      //   width: '100',
      //   // style: "float: right;",
      // }),
    ])
  }
}
