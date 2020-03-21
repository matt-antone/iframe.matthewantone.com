import React, { Component } from 'react'
import {cloudinaryConfig} from '../config/config'

export default class MediaLibrary extends Component {
  state ={
    id: Math.floor(Math.random() * 1000000000)
  }
  getCloudinaryHash = () => {
    // Check for the media library button before doing anyting.
    //setup authorization
  
    let config = {
      api_key: cloudinaryConfig.api_key,
      button_class: 'mediaLibrary',
      button_caption: 'Add Image',
      cloud_name: cloudinaryConfig.cloud_name,
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
            button_caption: 'Add Image',
            cloud_name: result.data.cloud,
            signature: result.data.signature,
            timestamp: result.data.timestamp,
            username: 'accounts@bugo.io',
          }
          window.ML = window.cloudinary.createMediaLibrary(
            config, 
            {insertHandler: (data) => {
              // this.setState({images: data.assets})
              this.props.addToGallery(data.assets)
              // fetch('https://cloudinary.com/users/logout')
            }
          },
          document.getElementById(this.state.id)
        )}
      })
    } else {
      // console.log('no user');
      window.ML = window.cloudinary.createMediaLibrary(
        config, 
        {
          insertHandler: (data) => {
            this.props.addToGallery(data.assets)
          }
        },
        document.getElementById(this.state.id)
      )
    }
  }

  componentDidMount = (e) => {
    // console.log('MediaLibrary Mounted');
    this.getCloudinaryHash()
  }
  render() {
    return h('div',{
      style: this.props.style,
    },[
      h('span',{id: this.state.id})
    ])
  }
}
