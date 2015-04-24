var Joi = require('joi')

module.exports = Joi.object().keys({
  consumer_key: Joi.string().required(),
  redirect_uri: Joi.string().required()
})
