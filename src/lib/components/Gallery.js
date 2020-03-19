import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import GalleryList from './GalleryList'
import CMSconfig from '../config/config'


export default class Gallery extends Component {

  state = {
    images: [],
    status: "idle",
    urls: this.props.value,
  }


  getCloudinaryHash = () => {
    // Check for the media library button before doing anyting.
    //setup authorization

    let config = {
      api_key: CMSconfig.config.media_library.config.api_key,
      button_class: 'mediaLibrary',
      button_caption: 'Select Image or Video',
      cloud_name: CMSconfig.config.media_library.config.cloud_name,
    }

    if(window.user){
      var identityHeader = new Headers();
      identityHeader.append('Authorization',`Bearer ${window.user.token.access_token}`)
      
      fetch("/.netlify/functions/get-cloudinary-hash", {
        headers: identityHeader
      })
      .then(res => res.json())
      .then((result)=>{
        console.log("yo",result,window.ML);
        if(typeof(result.data) !== 'undefined'){
          config = {
            api_key: result.data.key,
            button_class: 'mediaLibrary',
            button_caption: 'Select Image or Video',
            cloud_name: result.data.cloud,
            signature: result.data.signature,
            timestamp: result.data.timestamp,
            username: 'accounts@bugo.io',
          }
          window.ML = window.cloudinary.createMediaLibrary(
            config, 
            {insertHandler: (data) => {
              // this.setState({images: data.assets})
              this.addToGallery(data.assets)
            }
          },
          document.getElementById("cloudinary-btn")
        )}
      })
    } else {
      console.log('no user');
      window.ML = window.cloudinary.createMediaLibrary(
        config, 
        {
          insertHandler: (data) => {
            this.addToGallery(data.assets)
          }
        },
        document.getElementById("cloudinary-btn")
      )
    }
  }

  handleChange = (urls) => {
    this.props.onChange(urls)
  }

  addToGallery = (assets) => {
    console.log('adding to gallery',assets);
    this.setState({images: assets})
    let urls = []
    if(this.props.value){
      urls = JSON.parse(JSON.stringify(this.props.value))
    }
    assets.forEach( image => {
      urls[urls.length] = image.secure_url
    })
    console.log(urls);
    
    this.handleChange(urls)
  }

  deleteImage = (url) => {
    console.log("GAllery delteImage",url)
    const newUrls = this.props.value.filter((index) => index !== url)
    console.log(newUrls)
    this.handleChange(newUrls)
  }

  componentDidMount = (e) => {
    const { value } = this.props
    console.log('BugoCloudinary Mounted',value);
    this.getCloudinaryHash()
    if(typeof(value) != 'undefined'){
      const urls = JSON.parse(JSON.stringify(value))
      this.handleChange(urls)
    }
  }

  render() {
    const {cloudName,image} = this.state
    return h('div', {
      style: wrapperStyle,
    },[
      h('div',{}, 
        h('span', {
          id: "cloudinary-btn",
        }, 'Loading Media Library...'),
      ),
      h(GalleryList,{
        images: this.props.value,
        _deleteImage: this.deleteImage.bind(this)
      }),
    ])
  }
}
