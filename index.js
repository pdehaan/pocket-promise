var merge = require('lodash').merge
var validatep = require('./lib/validatep')
var pocketApi = require('./lib/pocket-api').pocketApi

// API schemas
var schemas = require('./schemas/index')

// Pocket API routes
var routes = {
  // AUTH URLS
  OAUTH_REQUEST_URL: '/v3/oauth/request',
  OAUTH_TOKEN_URL: '/auth/authorize',
  OAUTH_ACCESS_URL: '/v3/oauth/authorize',
  // API URLS
  ADD_URL: '/v3/add',
  GET_URL: '/v3/get',
  SEND_URL: '/v3/send'
}

/**
 * [Pocket description]
 * @param {Object} config [description]
 *
 * @constructor
 */
function Pocket (config) {
  this.config = config || {}
  this.pocketApi = pocketApi
}

Pocket.prototype = {
  /**
   * [setConfig description]
   *
   * @param {Object} config [description]
   */
  setConfig: function setConfig (config) {
    this.config = config || {}
  },

  /**
   * [getRequestToken description]
   *
   * @param {Object} options [description]
   * @param {String} options.consumer_key [description]
   * @param {String} options.redirect_uri [description]
   * @return {Promise} [description]
   */
  getRequestToken: function getRequestToken (options) {
    var oauthRequestApi = this.pocketApi(routes.OAUTH_REQUEST_URL)
    return validatep(options, schemas.OAUTH_REQUEST).then(oauthRequestApi)
  },

  /**
   * [add description]
   *
   * @param {Object} options [description]
   * @return {Promise}       [description]
   */
  add: function add (options) {
    return this._proxy(routes.ADD_URL, schemas.ADD, options)
  },

  /**
   * [get description]
   *
   * @param {Object} options [description]
   * @return {Promise}       [description]
   */
  get: function get (options) {
    return this._proxy(routes.GET_URL, schemas.GET, options)
  },

  /**
   * Alias for `get()` API.
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  retrieve: function retrieve (options) {
    return this.get(options)
  },

  /**
   * [send description]
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  send: function send (options) {
    return this._proxy(routes.SEND_URL, schemas.SEND, options)
  },

  /**
   * Alias for `send()` API.
   *
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  modify: function modify (options) {
    return this.send(options)
  },

  /**
   * Proxy function for performing actions.
   *
   * @param  {String} action  [description]
   * @param  {Object} options [description]
   * @return {Promise}        [description]
   */
  action: function action (action, options) {
    options.action = action
    return this.send({actions: [options]})
  },

  /**
   * Shortcut for archiving an item.
   *
   * @param  {Object} options [description]
   * @param  {Number} options.item_id The id of the item to perform the action on.
   * @return {Promise}        [description]
   */
  archive: function actionArchive (options) {
    return this.action('archive', options)
  },

  /**
   * Shortcut for deleting an item.
   *
   * @param  {Object} options [description]
   * @param  {Number} options.item_id The id of the item to perform the action on.
   * @return {Promise}        [description]
   */
  delete: function actionDelete (options) {
    return this.action('delete', options)
  },

  /**
   * Shortcut for favoriting an item.
   *
   * @param  {Object} options [description]
   * @param  {Number} options.item_id The id of the item to perform the action on.
   * @return {Promise}        [description]
   */
  favorite: function actionFavorite (options) {
    return this.action('favorite', options)
  },

  /**
   * Proxy function for a bunch of the APIs.
   *
   * @param  {String} route   URL endpoint for the Pocket API (for example, '/v3/get').
   * @param  {Object} schema  Joi schema which will be used to validate the options object.
   * @param  {Object} options User specified options for the Pocket API.
   * @return {Promise}        A Promise which will be resolved with the server response, or rejected with a schema error.
   */
  _proxy: function (route, schema, options) {
    var api = this.pocketApi(route)
    // Merge the global Pocket `config` into the `options` object.
    merge(options, this.config)
    // Validate the schema and call the target API.
    return validatep(options, schema).then(api)
  },

  /**
   * Stringify an object for easier debugging.
   * @param  {Object} obj [description]
   * @return {String}     Pretty formatted JSON object.
   */
  toString: function (obj) {
    return JSON.stringify(obj, null, 2)
  }
}

module.exports = Pocket
