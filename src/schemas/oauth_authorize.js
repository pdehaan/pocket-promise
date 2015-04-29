/**
 * For more information, see <https://getpocket.com/developer/docs/authentication>.
 */

var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  consumer_key: Joi.string()
    .required()
    .description('The consumer key for your application.'),

  code: Joi.string()
    .required()
    .description('The request token supplied in the code field of the /v3/oauth/request call.')
})
