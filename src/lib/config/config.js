//Import custom widgets

import Aliases from './widgets/Aliases'
CMS.registerWidget('aliases', Aliases)

import Tags from './widgets/Tags'
CMS.registerWidget('tags', Tags);

import Categories from './widgets/Categories'
CMS.registerWidget('categories', Categories)

import Gallery from './widgets/Gallery'
CMS.registerWidget('gallery', Gallery)

import MetaString from './widgets/MetaString'
CMS.registerWidget('metastring', MetaString)

import MetaText from './widgets/MetaText'
CMS.registerWidget('metatext', MetaText)



//Import Collections
import pages from "./collections/pages"

const config ={
  config: {
    "backend": {
      "name": "git-gateway",
      "branch": "netlifydev"
    },
    "local_backend": false,
    "load_config_file": false,
    "publish_mode": "editorial_workflow",
    "media_folder": "static/images/uploads",
    "public_folder": "/images/uploads",
    "collections": [
      pages,
    ]  
  }
}

export default config