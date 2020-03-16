import CMS, { init } from 'netlify-cms'
import config from './lib/config/config'

console.log(config)
init(config)

// Export the CMS JIC
export default CMS