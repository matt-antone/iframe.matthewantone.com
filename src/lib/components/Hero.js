import React, { Component } from 'react'
// import NetlifyCmsWidgetMarkdown from 'netlify-cms-widget-markdown'
import MediaLibrary from './MediaLibrary'
import GalleryList from './GalleryList'
import SimpleMarkdownEditor from './SimpleMarkdownEditor'

let heroText = ""

export default class Hero extends Component {

  state = {
    images: [],
    urls: [],
    text: heroText,
  }


  handleImageChange = (urls) => {
    const heroValue = {...this.state,...{ urls: urls},}
    delete heroValue.images
    this.props.onChange(heroValue)
    this.setState(heroValue)
  }

  handleTextChange = (text) => {
    const heroValue = {...this.state,...{ text: text},}
    delete heroValue.images
    this.props.onChange(heroValue)
    this.setState(heroValue)
  }

  addToGallery = (assets) => {
    this.setState({images: assets})

    let urls = []

    if(this.props.value.urls){
      urls = JSON.parse(JSON.stringify(this.props.value.urls))
    }

    assets.forEach( image => {
      urls[urls.length] = image.secure_url
    })
    
    this.handleImageChange(urls)
  }

  deleteImage = (url) => {
    const newUrls = this.props.value.urls.filter((index) => index !== url)
    this.handleImageChange(newUrls)
  }

  componentDidMount = (e) => {
    const {value} = this.props
    const newValue = JSON.parse(JSON.stringify(value))
    console.log('Hero Mounted',value)
    if(heroText !== newValue.text){
      heroText = newValue.text
      this.setState({text: newValue.text})
    }
  }

  render() {
    if(this.props.value){
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
            }),
            h(GalleryList,{
              images: this.props.value.urls,
              _deleteImage: this.deleteImage.bind(this),
              style: imageBlock,
              buttonStyle: buttonStyle,
            }),
          ]),
          h('div',{
            style: contentBlock,
          },
            h(SimpleMarkdownEditor,{
              text: this.state.text,
              handleChange: this.handleTextChange.bind(this)
            }),
          )        
        ]),
      ])        
    }
    return h('div')
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