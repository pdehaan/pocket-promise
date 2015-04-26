var {validate} = require('joi')
var {denodeify} = require('promise')

// Convert `Joi.validate()` into a Promise-based API. Because Promises.
module.exports = denodeify(validate)
