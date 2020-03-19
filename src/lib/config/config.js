//Import custom widgets

import Aliases from '../components/Aliases'
CMS.registerWidget('aliases', Aliases)

import Tags from '../components/Tags'
CMS.registerWidget('tags', Tags);

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


//Import Collections
import pages from "./collections/pages"

let localBackend = false

console.log("host",window.location.hostname)

if(window.location.hostname === 'localhost'){
  localBackend = true
}

const config ={
  config: {
    "backend": {
      "name": "git-gateway",
      "branch": "netlifydev"
    },
    "local_backend": localBackend,
    "load_config_file": false,
    // "publish_mode": "editorial_workflow",
    "media_folder": "static/images/uploads",
    "public_folder": "/images/uploads",
    "collections": [
      pages,
    ]  
  }
}

export default config