var Pocket = require('./index')
var config = require('./config.json')

var p = new Pocket(config)
p.get({
  count: 3
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})

p.add({
  url: 'http://localhost'
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
