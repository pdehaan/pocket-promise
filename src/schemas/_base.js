var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  consumer_key: Joi.string()
    .required()
    .description('Your application\'s Consumer Key.'),

  access_token: Joi.string()
    .required()
    .description('The user\'s Pocket access token.')
})
