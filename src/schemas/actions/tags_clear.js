/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_tags_clear>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid('tags_clear')
    .description('Remove all tags from an item.'),

  item_id: Joi.number().integer()
    .required()
    .description('The id of the item to perform the action on.')
})
