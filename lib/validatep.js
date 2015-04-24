var Joi = require('joi')
var P = require('promise')

module.exports = P.denodeify(Joi.validate)
