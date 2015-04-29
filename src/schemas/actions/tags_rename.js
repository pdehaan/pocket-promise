/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_tag_rename>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid('tags_add')
    .description('Add one or more tags to an item.'),

  item_id: Joi.number().integer()
    .required()
    .description('The id of the item to perform the action on.'),

  old_tag: Joi.string()
    .required()
    .description('The tag name that will be replaced.'),

  new_tag: Joi.string()
    .required()
    .description('The new tag name that will be added.')
})
