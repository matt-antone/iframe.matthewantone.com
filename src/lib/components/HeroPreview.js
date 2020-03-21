import React, { Component } from 'react'
import markdownIt from "markdown-it";
import cloudinary from 'cloudinary-core'
import {cloudinaryConfig} from '../config/config'

const cl = new cloudinary.Cloudinary({
  cloud_name: cloudinaryConfig.cloud_name,
  secure: true,
}) 

// customize markdown-it
let options = {
  html: true,
  typographer: true,
  linkify: true,
};

var MarkdownIt = new markdownIt(options);

export default class HeroPreview extends Component {
  state = {
    text: 'Default text',
    image: '',
  }
  componentDidMount = (e) => {
    const { value } = this.props
    if(typeof(value) !== 'undefined'){
      const valueCopy = JSON.parse(JSON.stringify(this.props.value))
      this.setState({ text: valueCopy.text, image: valueCopy.urls[0] | '' })
    }
  }
  

  render() {
    
    let divImage = {
      backgroundColor: '#c4c7cc',
      backgroundSize: 'cover',
      padding: '2rem',
      color: '#fff',
      fontSize: '2rem',
    }
    
    if(typeof(this.props.value) !== 'undefined'){
      const val = JSON.parse(JSON.stringify(this.props.value))
      const rendered = MarkdownIt.render(val.text || '')

      if(val.urls.length){
        const imageName = val.urls[0].substring(val.urls[0].lastIndexOf('/')+1);
        divImage.backgroundImage = `url(${cl.url(imageName, { width: 1000, crop: "fill"})})`
        console.log('add the background',divImage);
      }
      return h("div",{
        style: divImage,
        dangerouslySetInnerHTML: {__html: rendered},
      }) 
    }
    return h("div",{},"loading")
  }
}
