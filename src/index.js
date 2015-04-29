var url = require('url')

var {merge} = require('lodash')

var {pocketApi, POCKET_URI} = require('./lib/pocket-api')
var {routes} = require('./lib/routes')
var validatep = require('./lib/validatep')
var schemas = require('./schemas/index')

class Pocket {
  /**
   * Create a new Pocket instance and optionally specify a `config` object.
   *
   * @param  {Object} config Options that will be passed with each request to the Pocket APIs.
   * @constructor
   */
  constructor (config) {
    this.setConfig(config)
  }

  /**
   * Set the Pocket configuration.
   *
   * @param {Object} config Options to pass to the Pocket endpoint's API.
   * @method setConfig
   */
  setConfig (config = {}) {
    this.config = config
  }

  /**
   * Get an OAuth request token from the Pocket server.
   * For more information, see <https://getpocket.com/developer/docs/authentication>.
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  oauthRequest (options) {
    return this._proxy(routes.OAUTH_REQUEST_URL, schemas.OAUTH_REQUEST, options)
  }

  /**
   * Alias for `Pocket#oauthRequest()`.
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  getRequestToken (options) {
    return this.oauthRequest(options)
  }

  /**
   * Get an authorize URL from Pocket to allow user's to grant access to their Pocket account.
   * For more information, see <https://getpocket.com/developer/docs/authentication>.
   *
   * @param  {Object} options [description]
   * @return {String}         [description]
   */
  getAuthorizeUrl (options) {
    return validatep(options, schemas.AUTH_AUTHORIZE).then(function (options) {
      var authUrl = url.parse(POCKET_URI)
      authUrl.pathname = routes.AUTH_AUTHORIZE_URL
      authUrl.query = options
      return authUrl
    }).then(url.format)
  }

  /**
   * [getAccessToken description]
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  getAccessToken (options) {
    return this._proxy(routes.OAUTH_AUTHORIZE_URL, schemas.OAUTH_AUTHORIZE, options)
  }

  /**
   * To save an item to a user's Pocket list, you'll make a single request to the [/v3/add](https://getpocket.com/developer/docs/v3/add) endpoint.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method add
   */
  add (options) {
    return this._proxy(routes.ADD_URL, schemas.ADD, options)
  }

  /**
   * To retrieve item(s) from a user's Pocket list, you'll make a request to the [/v3/get](https://getpocket.com/developer/docs/v3/retrieve) endpoint.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method get
   */
  get (options) {
    return this._proxy(routes.GET_URL, schemas.GET, options)
  }

  /**
   * Alias for `Pocket#get()`.
   *
   * @method retrieve
   */
  retrieve (options) {
    return this.get(options)
  }

  /**
   * Pocket's [/v3/send](https://getpocket.com/developer/docs/v3/modify) endpoint allows you to make a change or batch several changes to a user's list or Pocket data.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method send
   */
  send (options) {
    return this._proxy(routes.SEND_URL, schemas.SEND, options)
  }

  /**
   * Alias for `Pocket#send()`.
   *
   * @method modify
   */
  modify (options) {
    return this.send(options)
  }

  /**
   * Alias for `Pocket#send(options)`.
   *
   * @param  {String} action  An action to send to the `send()` method. For example: 'favorite'.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method action
   */
  action (action, options) {
    options.action = action
    return this.send({
      actions: [options]
    })
  }

  /**
   * Alias for `Pocket#action('archive', options)`.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method archive
   */
  archive (options) {
    return this.action('archive', options)
  }

  /**
   * Alias for `Pocket#action('delete', options)`.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method delete
   */
  delete (options) {
    return this.action('delete', options)
  }

  /**
   * Alias for `Pocket#action('favorite', options)`.
   *
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method favorite
   */
  favorite (options) {
    return this.action('favorite', options)
  }

  /**
   * Proxy function for the getpocket.com API.
   *
   * @param  {String} route   Endpoint for the Pocket API. For example: '/v3/get'.
   * @param  {Object} schema  Joi schema used to validate `options` object.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        A resolved Promise from the Pocket API, or a rejected promise with validation errors.
   * @method _proxy
   * @private
   */
  _proxy (route, schema, options = {}) {
    var api = pocketApi(route)
    // Merge the global Pocket `config` into the `options` argument.
    merge(options, this.config)
    // Validate the schema and call the target API.
    return validatep(options, schema).then(api)
  }
}

module.exports = Pocket
