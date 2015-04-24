'use strict'

var Joi = require('joi')

module.exports = Joi.object().keys({
  // REQUIRED
  url: Joi.string().required(),
  // OPTIONAL
  title: Joi.string().optional(),
  tags: Joi.string().optional(),
  tweet_id: Joi.string().optional()
})
