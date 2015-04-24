var Pocket = require('./index')
var config = require('./config.json')

var p = new Pocket(config)
p.retrieve({
  count: 3
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
