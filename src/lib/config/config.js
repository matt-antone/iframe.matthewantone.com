//Import custom widgets

import Aliases from '../components/Aliases'
CMS.registerWidget('aliases', Aliases)

import DraftField from '../components/DraftField'
CMS.registerWidget('draftfield',DraftField)

import Categories from '../components/Categories'
CMS.registerWidget('categories', Categories)

import Gallery from '../components/Gallery'
CMS.registerWidget('gallery', Gallery)

import MetaString from '../components/MetaString'
CMS.registerWidget('metastring', MetaString)

import MetaText from '../components/MetaText'
CMS.registerWidget('metatext', MetaText)

import NetlifyDeploy from '../components/NetlifyDeploy'
CMS.registerWidget('netlifydeploy', NetlifyDeploy)

import Tags from '../components/Tags'
CMS.registerWidget('tags', Tags);

import ToggleSwitch from '../components/ToggleSwitch'
CMS.registerWidget('toggleswitch', ToggleSwitch)

//Import Collections
import pages from "./collections/pages"

let localBackend = false

console.log("host",window.location.hostname)

if(window.location.hostname === 'localhost'){
  localBackend = true
}

const CMSconfig ={
  config: {
    backend: {
      name: "git-gateway",
      branch: "netlifydev"
    },
    local_backend: localBackend,
    load_config_file: false,
    // publish_mode: "editorial_workflow",
    // media_folder: "static/images/uploads",
    // public_folder: "/images/uploads",
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'bugo',
        api_key: '987834768892112',    
      }
    },
    collections: [
      pages,
    ]  
  }
}

export default CMSconfig