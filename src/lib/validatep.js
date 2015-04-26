var validate = require('joi').validate
var denodeify = require('promise').denodeify

// Convert `Joi.validate()` into a Promise-based API. Because Promises.
module.exports = denodeify(validate)
