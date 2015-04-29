var Pocket = require('./src/index')
var config = require('./config.json')

// var REDIRECT_URI = 'http://localhost:3000/redirect'

// var pocket = new Pocket(config)

// pocket.add({url: 'http://ign.com'}).then(pretty).catch(pretty)
// pocket.get({count: 3}).then(pretty).catch(pretty)

// function pretty (data) {
//   console.log(JSON.stringify(data, null, 2))
// }

var pocket = new Pocket({
  consumer_key: config.consumer_key
})

// pocket.getRequestToken({
//   consumer_key: config.consumer_key,
//   redirect_uri: REDIRECT_URI,
//   state: 'ok'
// }).then(function (params) {
//   console.log(params)
//   return pocket.getAuthorizeUrl({
//     request_token: params.code,
//     redirect_uri: REDIRECT_URI
//   })
// }).then(console.log).catch(console.error)

pocket.getAccessToken({
  consumer_key: config.consumer_key,
  code: 'ed7f4bd5-a62c-7558-854a-ff1f3f'
}).then(console.log).catch(console.log)

/**
 * { access_token: 'c8502676-84f4-52ce-f6cc-f15b1d',
  username: 'trypocket1@mailinator.com',
  state: 'ok' }
 */
