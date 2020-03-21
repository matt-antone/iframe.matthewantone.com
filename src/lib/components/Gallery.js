import React, { Component } from 'react'
import MediaLibrary from './MediaLibrary'
import wrapperStyle from './styles/wrapper'
import GalleryList from './GalleryList'
import CMSconfig from '../config/config'


export default class Gallery extends Component {

  state = {
    images: [],
    status: "idle",
    urls: this.props.value,
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
    console.log('Gallery Mounted',value);
    // window.getCloudinaryHash()
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
        h(MediaLibrary,{
          deleteImage: this.deleteImage.bind(this),
          addToGallery: this.addToGallery.bind(this),
          value: this.props.value,
        }),
      ),
      h(GalleryList,{
        images: this.props.value,
        _deleteImage: this.deleteImage.bind(this)
      }),
    ])
  }
}
