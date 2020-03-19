window.CMS_MANUAL_INIT = true
import CMS, { init } from 'netlify-cms'
import CMSconfig from './lib/config/config'

console.log(CMSconfig)
init(CMSconfig)

// Export the CMS JIC
export default CMS