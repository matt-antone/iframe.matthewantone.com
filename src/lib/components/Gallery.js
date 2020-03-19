import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import GalleryList from './GalleryList'


export default class Gallery extends Component {

  state = {
    images: [],
    status: "idle",
    urls: [],
  }


  getCloudinaryHash = () => {
    // Check for the media library button before doing anyting.
    //setup authorization
    let config = {
      api_key: '987834768892112',
      button_class: 'mediaLibrary',
      button_caption: 'Select Image or Video',
      cloud_name: 'bugo',
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
      }).fail(function() {
        console.log("error");
      });
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

  handleChange = (e) => {
    let images = JSON.parse(JSON.stringify(this.state.urls))
    this.props.onChange(images)
  }

  addToGallery = (assets) => {
    console.log('adding to gallery',assets);
    this.setState({images: assets})
    let urls = JSON.parse(JSON.stringify(this.state.urls))
    assets.forEach( image => {
      urls[urls.length] = image.secure_url
    })
    this.setState({urls: urls})
    this.handleChange()
  }

  deleteImage = (url) => {
    console.log("GAllery delteImage",url)
    const newUrls = this.state.urls.filter((index) => index !== url)
    console.log(newUrls)
    this.setState({urls: newUrls})
    this.props.onChange(newUrls)
  }

  componentDidMount = (e) => {
    console.log('BugoCloudinary Mounted',this.props.value);
    this.getCloudinaryHash()
    const urls = JSON.parse(JSON.stringify(this.props.value))
    this.setState({urls: urls})
  }

  render() {
    const {cloudName,image} = this.state
    return h('div', {
      style: wrapperStyle,
    },[
      h('div',{}, 
        h('span', {
          id: "cloudinary-btn",
          // className: 'mediaLibrary',
        }, 'Loading Media Library...'),
      ),
      // h(Image,{
      //   cloudName: cloudName,
      //   publicId: image.public_id,
      //   crop: 'scale',
      //   width: '100',
      //   // style: "float: right;",
      // }),
      h(GalleryList,{
        images: this.state.urls,
        _deleteImage: this.deleteImage.bind(this)
      }),
    ])
  }
}
