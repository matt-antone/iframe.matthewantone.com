//Import Collections
import pages from "./collections/pages"

let localBackend = false

if(window.location.hostname === 'localhost'){
  localBackend = true
}

export const cloudinaryConfig = {
  cloud_name: 'bugo',
  api_key: '987834768892112',    
}

export const CMSconfig = {
  config: {
    backend: {
      name: "git-gateway",
      branch: "netlifydev"
    },
    local_backend: localBackend,
    load_config_file: false,
    // publish_mode: "editorial_workflow",
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
    // media_library: {
    //   name: 'cloudinary',
    //   config: {
    //     cloud_name: cloudinaryConfig.cloud_name,
    //     api_key: cloudinaryConfig.api_key,    
    //   }
    // },
    collections: [
      pages,
    ]  
  }
}