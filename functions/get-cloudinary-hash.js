exports.handler = (event, context, callback) => {
  const {identity, user} = context.clientContext
  const loggedin = checkAuth(context)

  // return JSON.stringify([identity,user])
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(loggedin)
  });
}


/* Check context for user */
function checkAuth(context) {
  return new Promise((resolve, reject) => {
    // Reading the context.clientContext will give us the current user
    const user = context.clientContext && context.clientContext.user
    if (!user) {
      console.log('No claims! Begone!')
      return reject(new Error('No user claims'))
    }
    // console.log('user', user)
    return resolve(user)
  })
}