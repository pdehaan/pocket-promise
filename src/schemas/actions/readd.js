/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_readd>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid('readd')
    .description('Move an item from the user\'s archive back into their unread list.'),

  item_id: Joi.number().integer()
    .required()
    .description('The id of the item to perform the action on.')
})
