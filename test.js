var Pocket = require('./dist/index')
var config = require('./config.json')

var pocket = new Pocket(config)

// pocket.add({url: 'http://ign.com'}).then(console.log).catch(console.error)

pocket.get({count: 3}).then(pretty).catch(pretty)

function pretty (data) {
  console.log(JSON.stringify(data, null, 2))
}
