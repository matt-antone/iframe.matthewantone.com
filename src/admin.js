window.CMS_MANUAL_INIT = true
import CMS, { init } from 'netlify-cms'
import {CMSconfig,cloudinaryConfig} from './lib/config/config'

//Import custom widgets
import Aliases from './lib/components/Aliases'
import DraftField from './lib/components/DraftField'
import Categories from './lib/components/Categories'
import Gallery from './lib/components/Gallery'
import Hero from './lib/components/Hero'
import HeroPreview from './lib/components/HeroPreview'
import MetaString from './lib/components/MetaString'
import MetaDate from './lib/components/MetaDate'
import MetaDateTime from './lib/components/MetaDateTime'
import MetaText from './lib/components/MetaText'
import NetlifyDeploy from './lib/components/NetlifyDeploy'
import Tags from './lib/components/Tags'
import ToggleSwitch from './lib/components/ToggleSwitch'

const adminInit = () => {
  CMS.registerWidget('aliases', Aliases)
  CMS.registerWidget('draftfield',DraftField)
  CMS.registerWidget('categories', Categories)
  CMS.registerWidget('gallery', Gallery)
  CMS.registerWidget('hero', Hero, HeroPreview)
  CMS.registerWidget('metastring', MetaString)
  CMS.registerWidget('metadate', MetaDate)
  CMS.registerWidget('metadatetime', MetaDateTime)
  CMS.registerWidget('metatext', MetaText)
  CMS.registerWidget('netlifydeploy', NetlifyDeploy)
  CMS.registerWidget('tags', Tags)
  CMS.registerWidget('toggleswitch', ToggleSwitch)
  console.log(CMSconfig)
  init(CMSconfig)  
}

adminInit()

// Export the CMS JIC
export default CMS