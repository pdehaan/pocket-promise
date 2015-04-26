var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  consumer_key: Joi.string().required(),
  access_token: Joi.string().required()
})
