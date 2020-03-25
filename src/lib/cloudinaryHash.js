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
            fetch('https://cloudinary.com/users/logout')
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

export default