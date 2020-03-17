window.CMS_MANUAL_INIT = true
import CMS, { init } from 'netlify-cms'
import config from './lib/config/config'

console.log(config)
init(config)

// Export the CMS JIC
export default CMS