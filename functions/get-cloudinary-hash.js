exports.handler = (event, context, callback) => {
  const {identity, user} = context.clientContext;
  // return JSON.stringify([identity,user])
  callback(null, {
    statusCode: 200,
    body: JSON.stringify([identity,user])
  });
}