/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_tags_replace>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid('tags_replace')
    .description('Replace all of the tags for an item with the one or more provided tags.'),

  item_id: Joi.number().integer()
    .required()
    .description('The id of the item to perform the action on.'),

  tags: Joi.string()
    .required()
    .description('A comma-delimited list of one or more tags to add.')
})
