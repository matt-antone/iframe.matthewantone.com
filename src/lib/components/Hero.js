import React, { Component } from 'react'
// import NetlifyCmsWidgetMarkdown from 'netlify-cms-widget-markdown'
import MediaLibrary from './MediaLibrary'
import GalleryList from './GalleryList'
import SimpleMarkdownEditor from './SimpleMarkdownEditor'

let heroText = ""

export default class Hero extends Component {

  state = {
    id: Math.floor(Math.random() * 1000000000),
    images: [],
    urls: [],
    text: heroText,
    config: {
      multiple: false,
    }
  }


  handleImageChange = (urls) => {
    let newValue = JSON.parse(JSON.stringify(this.props.value))
    newValue.urls = urls
    // console.log("image change: ", newValue)
    this.props.onChange(newValue)
  }

  handleTextChange = (text) => {
    // console.log(text,typeof(text))
    if(text.length){
      let newValue = JSON.parse(JSON.stringify(this.props.value))
      newValue.text = text
      // console.log("text change: ", newValue)
      this.props.onChange(newValue)  
    }
  }

  addToGallery = (assets) => {
    // console.log('adding to gallery',assets);
    this.setState({images: assets})
    let urls = []
    let x = 0
    assets.forEach( image => {
      if(x<1){
        urls[urls.length] = image.secure_url
      }
      x++
    })
    // console.log(urls);
    this.handleImageChange(urls)
  }

  deleteImage = (url) => {
    const newUrls = this.props.value.urls.filter((index) => index !== url)
    this.handleImageChange(newUrls)
  }

  componentDidMount = (e) => {
    const {value} = this.props
    // console.log('Hero Mounted',value,this.state)
    if(typeof(value) === 'undefined') {
      this.props.onChange({urls: [], text: false })
    }
  }

  render() {
    let text = ''
    let urls = []
    if(this.props.value){
      let pVals = JSON.parse(JSON.stringify(this.props.value))
      text = pVals.text
      urls = pVals.urls
    } 
    // console.log('deconstructed: ',text,urls)
    
    const heroText = typeof(text) !== "undefined" ? text : false
    const heroUrls = typeof(urls) !== 'undefined' ? urls : ['sample.jpg']
    // console.log('processed: ',heroText,heroUrls)
      
    return h('div',{
      style: wrapperStyle,
    },[
      h('div', {
        style: flexContainer
      },[
        h('div', {
          style: imageContainer,
        },[
          h(MediaLibrary,{
            deleteImage: this.deleteImage.bind(this),
            addToGallery: this.addToGallery.bind(this),
            config: this.state.config,
            id: this.state.id,
          }),
          h(GalleryList,{
            images: heroUrls,
            _deleteImage: this.deleteImage.bind(this),
            style: imageBlock,
            buttonStyle: buttonStyle,
          }),
        ]),
        h('div',{
          style: contentBlock,
        },
          h(SimpleMarkdownEditor,{
            text: heroText,
            handleChange: this.handleTextChange.bind(this)
          }),
        )        
      ]),
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
  }
}

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