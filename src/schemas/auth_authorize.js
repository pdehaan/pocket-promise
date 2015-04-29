/**
 * For more information, see <https://getpocket.com/developer/docs/authentication>.
 */

var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  request_token: Joi.string()
    .required()
    .description('The request token returned by `Pocket#getRequestToken()`.'),

  redirect_uri: Joi.string()
    .required()
    .description('The URL to be called when the user has completed the authorization within Pocket. This URL should direct back to your application.'),

  mobile: Joi.number().integer()
    .optional()
    .min(0)
    .default(0)
    .description('Force the mobile version of the Pocket authorization page.')
})
