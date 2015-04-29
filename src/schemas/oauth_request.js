/**
 * For more information, see <https://getpocket.com/developer/docs/authentication>.
 */

var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  consumer_key: Joi.string()
    .required()
    .description('The consumer key for your application.'),

  redirect_uri: Joi.string()
    .required()
    .description('The URL to be called when the authorization process has been completed. This URL should direct back to your application. See the Platform Specific Notes section for details about setting up custom urls for the redirect_uri on iOS and Android.'),

  // OPTIONAL
  state: Joi.string()
    .optional()
    .description('A string of metadata used by your app. This string will be returned in all subsequent authentication responses.')
})
