/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_add>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid('add')
    .description('Add a new item to the user\'s list.'),

  // OPTIONAL
  item_id: Joi.number().integer()
    .optional()
    .description('The id of the item to perform the action on.'),

  url: Joi.string()
    .optional()
    .description('The url of the item; provide this only if you do not have an item_id.'),

  ref_id: Joi.number().integer()
    .optional()
    .description('A Twitter status id; this is used to show tweet attribution.'),

  tags: Joi.string()
    .optional()
    .description('A comma-delimited list of one or more tags.'),

  title: Joi.string()
    .optional()
    .description('The title of the item.')
}).or('item_id', 'url')
