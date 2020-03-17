import React, { Component } from 'react'
import {Image} from 'cloudinary-react'

export default class Gallery extends Component {

  state = {
    cloudName: 'bugo',
    api: '987834768892112',
    image: {
      public_id: "bugo-logo-200",
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
      created_at: ""
   },
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
      console.log(result);
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
    // this.getCloudinaryHash()
  }

  render() {
    const {cloudName,image} = this.state
    return h('div', {}, h('button',{
      onClick: this.getCloudinaryHash
    },"test"))
  }
}
