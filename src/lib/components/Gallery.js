import React, { Component } from 'react'
import {Image} from 'cloudinary-react'
import wrapperStyle from './styles/wrapper'


export default class Gallery extends Component {

  state = {
    images: {
      public_id: "",
      resource_type: "",
      type: "",
      format: "",
      version: null,
      url: "",
      secure_url: "",
      width: 0,
      height: 0,
      bytes: 0,
      duration: null,
      tags: null,
      context: {
         custom: {
            alt: "",
            caption: ""
         }
      },
      metadata: [],
      created_at: "",
   },
  }


  getCloudinaryHash = () => {
    //setup authorization
    if(window.user){
      var identityHeader = new Headers();
      identityHeader.append('Authorization',`Bearer ${window.user.token.access_token}`)
      
      fetch("/.netlify/functions/get-cloudinary-hash", {
        headers: identityHeader
      })
      .then(res => res.json())
      .then((result)=>{
        console.log("yo",window.ML);
        if(typeof(result.data) !== 'undefined'){
          window.ML = window.cloudinary.createMediaLibrary({
            api_key: result.data.key,
            button_class: 'mediaLibrary',
            button_caption: 'Select Image or Video',
            cloud_name: result.data.cloud,
            signature: result.data.signature,
            timestamp: result.data.timestamp,
            username: 'accounts@bugo.io',
          }, {insertHandler: (data) => {
                data.assets.forEach(asset => { 
                  console.log(asset)
                  if(!asset.context){
                    asset.context = this.state.image.context;
                    console.log('IMAGE HAS NO CONTEXT');
                  }
                  this.setState({image: asset})
                  //send
                  this.handleChange()
                })
              }
              },
              document.getElementById("cloudinary-btn")
          )
        }
      })
    }
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
      }, 'Loading...'),
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
