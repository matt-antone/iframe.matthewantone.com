window.CMS_MANUAL_INIT = true
import CMS, { init } from 'netlify-cms'
import {CMSconfig,cloudinaryConfig} from './lib/config/config'

//Import custom widgets
import Aliases from './lib/components/Aliases'
import DraftField from './lib/components/DraftField'
import CategoriesPicker from './lib/components/CategoriesPicker'
import Gallery from './lib/components/Gallery'
import Hero from './lib/components/Hero'
import HeroPreview from './lib/components/HeroPreview'
import HugoRelationalControl from './lib/components/HugoRelationControl'
import MetaString from './lib/components/MetaString'
import MetaDate from './lib/components/MetaDate'
import MetaDateTime from './lib/components/MetaDateTime'
import MetaText from './lib/components/MetaText'
import NetlifyDeploy from './lib/components/NetlifyDeploy'
import PageOptions from './lib/components/PageOptions'
import PostOptions from './lib/components/PostOptions'
import PostPreview from './lib/components/PostPreview'
import TagsPicker from './lib/components/TagsPicker'
import ToggleSwitch from './lib/components/ToggleSwitch'

const adminInit = () => {
  CMS.registerWidget('aliases', Aliases)
  CMS.registerWidget('draftfield',DraftField)
  CMS.registerWidget('categoriesPicker', CategoriesPicker)
  CMS.registerWidget('gallery', Gallery)
  CMS.registerWidget('hero', Hero, HeroPreview)
  CMS.registerWidget('hugoRelation',HugoRelationalControl)
  CMS.registerWidget('metastring', MetaString)
  CMS.registerWidget('metadate', MetaDate)
  CMS.registerWidget('metadatetime', MetaDateTime)
  CMS.registerWidget('metatext', MetaText)
  CMS.registerWidget('netlifydeploy', NetlifyDeploy)
  CMS.registerWidget('pageOptions',PageOptions)
  CMS.registerWidget('postOptions',PostOptions)
  CMS.registerWidget('tagsPicker', TagsPicker)
  CMS.registerWidget('toggleswitch', ToggleSwitch)
  //Previewqs
  CMS.registerPreviewTemplate("posts", PostPreview);
  console.log(CMSconfig)
  init(CMSconfig)  
}

let cloudinaryInstanceConfig = {
  api_key: cloudinaryConfig.api_key,
  button_class: 'mediaLibrary',
  button_caption: 'Add Image',
  cloud_name: cloudinaryConfig.cloud_name,
}

adminInit()
// Export the CMS JIC
export default CMS