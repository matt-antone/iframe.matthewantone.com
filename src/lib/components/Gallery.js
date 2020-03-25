import React, { Component } from 'react'
import {cloudinaryConfig} from '../config/config'

import MediaLibrary from './MediaLibrary'
import GalleryList from './GalleryList'
import CMSconfig from '../config/config'


export default class Gallery extends Component {

  state = {
    id: Math.floor(Math.random() * 1000000000),
    images: [],
    status: "idle",
    urls: this.props.value,
  }

  handleChange = (urls) => {
    this.props.onChange(urls)
  }

  addToGallery = (assets) => {
    //console.log('adding to gallery',assets);
    this.setState({images: assets})
    let urls = []
    if(this.props.value){
      urls = JSON.parse(JSON.stringify(this.props.value))
    }
    assets.forEach( image => {
      if(typeof this.props.value !== 'undefined' && !this.props.value.includes(image.secure_url)){
        urls[urls.length] = image.secure_url
      }
    })
    //console.log(urls);
    
    this.handleChange(urls)
  }

  deleteImage = (url) => {
    //console.log("GAllery delteImage",url)
    const newUrls = this.props.value.filter((index) => index !== url)
    //console.log(newUrls)
    this.handleChange(newUrls)
  }

  componentDidMount = (e) => {
    const { value } = this.props
    //console.log('Gallery Mounted',this.state.id,window[this.state.id]);
    // window.getCloudinaryHash()
    if(typeof(value) !== 'undefined'){
      const urls = JSON.parse(JSON.stringify(value))
      this.handleChange(urls)
    }else{
      this.handleChange([])
    }
  }

  render() {
    const {cloudName,image} = this.state
    return h('div', {
      style: wrapperStyle,
      className: "gallery-container"
    },[
      h('div',{
        // style: [flexContainer]
      }, 
        h(MediaLibrary,{
          deleteImage: this.deleteImage.bind(this),
          addToGallery: this.addToGallery.bind(this),
          value: this.props.value,
          id: this.state.id,
        }),
      ),
      h(GalleryList,{
        images: this.props.value,
        _deleteImage: this.deleteImage.bind(this),
        style: galleryStyle,
        buttonStyle: imageBlock,
      }),
    ])
  }
}


import wrapperStyle from './styles/wrapper'
import marginNone from './styles/margin'
import {flexContainer, flexItem25, flexItem75, justifyCenter, flexColumnReverse, justifyEnd } from './styles/flexContainer';

const imageStyle = {...flexItem25,...justifyCenter,...flexColumnReverse}
const imageBlock = {
  ...marginNone,...{
    width: '100px',
    height: '100px',
    backgroundColor: 'gray',
    marginBottom: '1rem',
    border: 'none',
    padding: 0,
    marginRight: '0.25rem',
  }
}

const galleryStyle = {...flexContainer,...{
  marginTop: "1rem"
}}

const contentBlock = {
  ...marginNone,...{
    flex: '1 6 auto'
  }
}


const imageContainer = {
  ...flexContainer,
  ...flexColumnReverse,
  ...justifyEnd,...{
    flex: '0 0 auto',
    paddingRight: '1rem',
  }
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  // marginTop: '1rem',
}