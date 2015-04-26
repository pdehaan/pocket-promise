var {merge} = require('lodash')

var {pocketApi} = require('./lib/pocket-api')
var {routes} = require('./lib/routes')
var schemas = require('./schemas/index')
var validatep = require('./lib/validatep')

class Pocket {
  /**
   * [constructor description]
   * @param  {Object} config Options that will be passed with each request to the Pocket APIs.
   * @constructor
   */
  constructor (config) {
    this.setConfig(config)
  }

  /**
   * [setConfig description]
   * @param {Object} config Options to pass to the Pocket endpoint's API.
   * @method setConfig
   */
  setConfig (config = {}) {
    this.config = config
  }

  /**
   * [add description]
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method add
   */
  add (options) {
    return this._proxy(routes.ADD_URL, schemas.ADD, options)
  }

  /**
   * [get description]
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method get
   */
  get (options) {
    return this._proxy(routes.GET_URL, schemas.GET, options)
  }

  /**
   * Alias for `Pocket#get()`.
   * @method retrieve
   */
  retrieve (options) {
    return this.get(options)
  }

  /**
   * [send description]
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method send
   */
  send (options) {
    return this._proxy(routes.SEND_URL, schemas.SEND, options)
  }

  /**
   * Alias for `Pocket#send()`.
   * @method modify
   */
  modify (options) {
    return this.send(options)
  }

  /**
   * Alias for `Pocket#send(options)`.
   * @param  {String} action  An action to send to the `send()` method. For example: 'favorite'.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method action
   */
  action (action, options) {
    options.action = action
    return this.send({actions: [options]})
  }

  /**
   * Alias for `Pocket#action('archive', options)`.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method archive
   */
  archive (options) {
    return this.action('archive', options)
  }

  /**
   * Alias for `Pocket#action('delete', options)`.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method delete
   */
  delete (options) {
    return this.action('delete', options)
  }

  /**
   * Alias for `Pocket#action('favorite', options)`.
   * @param  {Object} options Options to pass to the Pocket endpoint's API.
   * @return {Promise}        [description]
   * @method favorite
   */
  favorite (options) {
    return this.action('favorite', options)
  }

  /**
   * Proxy function for the getpocket.com API.
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
