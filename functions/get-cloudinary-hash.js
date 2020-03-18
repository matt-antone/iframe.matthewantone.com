var crypto = require('crypto');
const checkAuth = require('./utils/auth')
const cloud = "bugo"
const email = "accounts@bugo.io"
// const apiKey = "987834768892112"
const apiSecret = "9IIeBG_45eV0xhvFapBOGzmCzBs"
const date = new Date();
const timestamp = date.getTime();
const paramters = `cloud_name=${cloud}&timestamp=${timestamp}&username=${email}${apiSecret}`
let hash = crypto.createHash('sha256');
hash.update(paramters)
const clhash = hash.digest('hex')
hash.end()

exports.handler = (event, context, callback) => {
  // Use the event data auth header to verify
  checkAuth(context).then((user) => {
    console.log('user', user)
    // Do stuff
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: hash.digest('hex')
      })
    })
  }).catch((error) => {
    console.log('error', error)
    // return error back to app
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({
        error: error.message,
      })
    })
  })
}