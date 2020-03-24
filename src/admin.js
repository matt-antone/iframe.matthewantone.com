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
import MetaString from './lib/components/MetaString'
import MetaDate from './lib/components/MetaDate'
import MetaDateTime from './lib/components/MetaDateTime'
import MetaText from './lib/components/MetaText'
import NetlifyDeploy from './lib/components/NetlifyDeploy'
import TagsPicker from './lib/components/TagsPicker'
import ToggleSwitch from './lib/components/ToggleSwitch'

const adminInit = () => {
  CMS.registerWidget('aliases', Aliases)
  CMS.registerWidget('draftfield',DraftField)
  CMS.registerWidget('categoriesPicker', CategoriesPicker)
  CMS.registerWidget('gallery', Gallery)
  CMS.registerWidget('hero', Hero, HeroPreview)
  CMS.registerWidget('metastring', MetaString)
  CMS.registerWidget('metadate', MetaDate)
  CMS.registerWidget('metadatetime', MetaDateTime)
  CMS.registerWidget('metatext', MetaText)
  CMS.registerWidget('netlifydeploy', NetlifyDeploy)
  CMS.registerWidget('tagsPicker', TagsPicker)
  CMS.registerWidget('toggleswitch', ToggleSwitch)
  console.log(CMSconfig)
  init(CMSconfig)  
}

let cloudinaryInstanceConfig = {
  api_key: cloudinaryConfig.api_key,
  button_class: 'mediaLibrary',
  button_caption: 'Add Image',
  cloud_name: cloudinaryConfig.cloud_name,
}

// if(window.user){
//   var identityHeader = new Headers();
//   identityHeader.append('Authorization',`Bearer ${window.user.token.access_token}`)
  
//   fetch("/.netlify/functions/get-cloudinary-hash", {
//     headers: identityHeader
//   })
//   .then(res => res.json())
//   .then((result)=>{
//     console.log("yo",result,window.ML);
//     if(typeof(result.data) !== 'undefined'){
//       cloudinaryInstanceConfig = {
//         api_key: result.data.key,
//         button_class: 'mediaLibrary',
//         button_caption: 'Add Image',
//         cloud_name: result.data.cloud,
//         signature: result.data.signature,
//         timestamp: result.data.timestamp,
//         username: 'accounts@bugo.io',
//       }
//       window.ML = cloudinary.createMediaLibrary(config,{
//         insertHandler: (data) => {
//           this.props.addToGallery(data.assets)
//         }
//       })
//       adminInit()
//     }
//   })
// } else {
//   console.log('no user',cloudinaryInstanceConfig,cloudinary);
//   window.ML = cloudinary.createMediaLibrary(cloudinaryInstanceConfig,{
//     insertHandler: (data) => {
//       this.props.addToGallery(data.assets)
//     }
//   })
//   adminInit()
// }

adminInit()
// Export the CMS JIC
export default CMS