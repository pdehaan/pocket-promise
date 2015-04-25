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

#### Usage:

```js
var Pocket = require('pocket-promise')

var p = new Pocket()
```

You can optionally set a `consumer_key` and/or `access_token` which will be sent with each of the API requests, by passing them into the constructor function:

```js
var Pocket = require('pocket-promise')

var p = new Pocket({
  consumer_key: 'YOUR CONSUMER KEY HERE',
  access_token: 'YOUR ACCESS TOKEN HERE'
})
```

### `Pocket#add(options)`

To save an item to a user's Pocket list, you'll make a single request to the /v3/add endpoint.

#### Usage:

```js
var Pocket = require('pocket-promise')

var p = new Pocket({
  consumer_key: 'YOUR CONSUMER KEY HERE',
  access_token: 'YOUR ACCESS TOKEN HERE'
})
p.add({
  url: 'https://mozilla.org/'
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
```

> **NOTE:** In order to use the /v3/add endpoint, your consumer key must have the "Add" permission.

For more information, see <https://getpocket.com/developer/docs/v3/add>.

### `Pocket#get(options)`

To retrieve item(s) from a user's Pocket list, you'll make a request to the /v3/get endpoint.

#### Usage:

Retrieve the 3 newest articles from Pocket:

```js
var Pocket = require('pocket-promise')

var p = new Pocket({
  consumer_key: 'YOUR CONSUMER KEY HERE',
  access_token: 'YOUR ACCESS TOKEN HERE'
})
p.get({
  count: 3
}).then(function (results) {
  console.log(JSON.stringify(results, null, 2))
}).catch(function (err) {
  console.error(err.toString())
})
```

> **NOTE:** In order to use the /v3/get endpoint, your consumer key must have the "Retrieve" permission.

For more information, see <https://getpocket.com/developer/docs/v3/retrieve>.

### `Pocket#retrieve(options)`

Alias for `Pocket#get()` API.

### `Pocket#send(options)`

Pocket's /v3/send endpoint allows you to make a change or batch several changes to a user's list or Pocket data.

#### Usage:

```js
var Pocket = require('pocket-promise')

var p = new Pocket({
  consumer_key: 'YOUR CONSUMER KEY HERE',
  access_token: 'YOUR ACCESS TOKEN HERE'
})
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
```

##### Response:

```json
{
  "action_results": [
    true
  ],
  "status": 1
}
```

> **NOTE:** In order to use the /v3/send endpoint, your consumer key must have the "Modify" permission.

For more information, see <https://getpocket.com/developer/docs/v3/modify>.

### `Pocket#modify(options)`

Alias for `Pocket#send()` API.
