# pocket-promise

A promise-based client for [getpocket.com](http://getpocket.com/developer/) API.

## Installation:

```sh
$ npm i pdehaan/pocket-promise -S
```

## Usage:

1. Create a new file, _index.js_, with the following contents:
```js
var Pocket = require('pocket-promise')
var config = require('./config.json')

var p = new Pocket(config)
p.get({
  count: 3
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
```

2. In the same directory as your _index.js_ file, create a _config.json_ file with the following contents:
```json
{
  "consumer_key": "YOUR CONSUMER KEY HERE",
  "access_token": "YOUR ACCESS TOKEN HERE"
}
```

## API:

### `new Pocket(config)`

### `Pocket#add(options)`

### `Pocket#get(options)`

### `Pocket#retrieve(options)`
Alias for `Pocket#get()` API.

### `Pocket#send(options)`

### `Pocket#modify(options)`
Alias for `Pocket#send()` API.
