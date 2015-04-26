var partial = require('lodash').partial
var request = require('request-promise')

var POCKET_URI = process.env.POCKET_URI || 'https://getpocket.com'

/**
 * Default config for `request()` API.
 * This custom config sets three headers:
 * - `'Content-Type': 'application/json; charset=UTF-8'`
 * - `'Accept': '*\/*'`
 * - `'X-Accept': 'application/json'`
 * Plus sets the default `method` to 'POST', and sets the `baseUrl` to the Pocket service, `POCKET_URI`.
 *
 * @type {Function}
 */
var pocketApiRequest = request.defaults({
  method: 'POST',
  baseUrl: POCKET_URI,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': '*/*',
    'X-Accept': 'application/json'
  }
})

/**
 * Wrapper for `pocketApiRequest()` that plays nicely w/ partials and promises.
 * @param  {String} path    URL path that will be concatenated with the `pocketApiRequest#request` object's `baseUrl`.
 * @param  {Object} options An object containing parameters to pass to the API endpoint.
 * @return {Promise}        A promise, as returned by the `pocketApiRequest()` API.
 */
function _apiUrl (path, options) {
  return pocketApiRequest(path, {
    json: options
  })
}

exports.pocketApi = function (path) {
  return partial(_apiUrl, path)
}
