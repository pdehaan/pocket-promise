# pocket-promise

A promise-based client for [getpocket.com](http://getpocket.com/developer/) API.

## Installation:

```sh
$ npm i pocket-promise -S
```

## Usage:

1. Create a new file, _index.js_, with the following contents:

```js
var Pocket = require('pocket-promise')
var config = require('./config.json')

var pocket = new Pocket(config)
pocket.get({
  count: 3
}).then(console.log).catch(console.error)
```

2. In the same directory as your _index.js_ file, create a _config.json_ file with the following contents:

```json
{
  "consumer_key": "YOUR CONSUMER KEY HERE",
  "access_token": "YOUR ACCESS TOKEN HERE"
}
```

**PROTIP:** If I were you, I'd add the _./config.json_ file to your .gitignore file, but that's just me.

## API:

### `new Pocket(config)`

#### Usage:

```js
var Pocket = require('pocket-promise')

var pocket = new Pocket()
```

You can optionally set a `consumer_key` and/or `access_token` which will be sent with each of the API requests, by passing them into the constructor function:

```js
var Pocket = require('pocket-promise')

var pocket = new Pocket({
  consumer_key: 'YOUR CONSUMER KEY HERE',
  access_token: 'YOUR ACCESS TOKEN HERE'
})
```

---

### `Pocket#add(options)`

To save an item to a user's Pocket list, you'll make a single request to the [/v3/add](https://getpocket.com/developer/docs/v3/add) endpoint.

#### Usage:

```js
pocket.add({
  url: 'https://mozilla.org/'
}).then(console.log).catch(console.error)
```

> **NOTE:** In order to use the [/v3/add](https://getpocket.com/developer/docs/v3/add) endpoint, your consumer key must have the "Add" permission.

For more information, see <https://getpocket.com/developer/docs/v3/add>.

---

### `Pocket#get(options)`

To retrieve item(s) from a user's Pocket list, you'll make a request to the [/v3/get](https://getpocket.com/developer/docs/v3/retrieve) endpoint.

#### Usage:

Retrieve the 3 newest articles from Pocket:

```js
pocket.get({
  count: 3
}).then(console.log).catch(console.error)
```

> **NOTE:** In order to use the [/v3/get](https://getpocket.com/developer/docs/v3/retrieve) endpoint, your consumer key must have the "Retrieve" permission.

For more information, see <https://getpocket.com/developer/docs/v3/retrieve>.

---

### `Pocket#retrieve(options)`

Alias for [`Pocket#get()`](/README.md#pocketgetoptions) API.

---

### `Pocket#send(options)`

Pocket's [/v3/send](https://getpocket.com/developer/docs/v3/modify) endpoint allows you to make a change or batch several changes to a user's list or Pocket data.

#### Usage:

```js
pocket.send({
  actions: [
    {
      action: 'favorite',
      item_id: 20646
    }
  ]
}).then(console.log).catch(console.error)
```

##### Response:

```json
{
  "action_results": [ true ],
  "status": 1
}
```

> **NOTE:** In order to use the [/v3/send](https://getpocket.com/developer/docs/v3/modify) endpoint, your consumer key must have the "Modify" permission.

For more information, see <https://getpocket.com/developer/docs/v3/modify>.

---

### `Pocket#modify(options)`

Alias for [`Pocket#send()`](/README.md#pocketsendoptions) API.

---

### `Pocket#action(action, options)`

For more information, see <https://getpocket.com/developer/docs/v3/modify>.

#### Usage:

```js
pocket.action('favorite', {
  item_id: 20646
}).then(console.log).catch(console.error)
```

#### Response:

```json
{
  "action_results": [ true ],
  "status": 1
}
```

---

### `Pocket#archive(options)`

Alias for [`pocket.action('archive', options)`](/README.md#pocketactionaction-options). For more information, see <https://getpocket.com/developer/docs/v3/modify#action_archive>.

#### Usage:

```js
pocket.archive({
  item_id: 20646
}).then(console.log).catch(console.error)
```

---

### `Pocket#delete(options)`

Alias for [`pocket.action('delete', options)`](/README.md#pocketactionaction-options). For more information, see <https://getpocket.com/developer/docs/v3/modify#action_delete>.

#### Usage:

```js
pocket.delete({
  item_id: 20646
}).then(console.log).catch(console.error)
```

#### Response:

```json
{
  "action_results": [ true ],
  "status": 1
}
```

---

### `Pocket#favorite(options)`

Alias for [`pocket.action('favorite', options)`](/README.md#pocketactionaction-options). For more information, see <https://getpocket.com/developer/docs/v3/modify#action_favorite>.

#### Usage:

```js
pocket.favorite({
  item_id: 20646
}).then(console.log).catch(console.error)
```

#### Response:

```json
{
  "action_results": [ true ],
  "status": 1
}
```
