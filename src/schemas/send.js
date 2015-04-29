/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify>.
 */

var Joi = require('joi')

var base = require('./_base')

// var VALID_ACTIONS = require('./index').ACTIONS

module.exports = base.keys({
  // REQUIRED
  actions: Joi.array()
    .required()
    .description('JSON array of actions.')
    .items(
      // Joi.alternatives(VALID_ACTIONS)
    )
})
