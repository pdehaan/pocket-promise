var Pocket = require('./index')
var config = require('./config.json')

var p = new Pocket(config)

/**
 * /v3/get (retrieve)
 */
// p.get({
//   count: 3
// }).then(function (results) {
//   console.log(JSON.stringify(results, null, 2))
// }).catch(function (err) {
//   console.error(err.toString())
// })

/**
 * /v3/add
 */
// p.add({
//   url: 'http://localhost'
// }).then(function (results) {
//   console.log(JSON.stringify(results, null, 2))
// }).catch(function (err) {
//   console.error(err.toString())
// })

/**
 * /v3/send (modify)
 */
p.send({
  actions: [
    {
      action: 'favorite',
      item_id: 20646
    }
  ]
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
