/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify>.
 */

var Joi = require('joi')

var VALID_ACTIONS = [
  // Basic Actions
  'add',
  'archive',
  'readd',
  'favorite',
  'unfavorite',
  'delete',

  // Tagging Actions
  'tags_add',
  'tags_remove',
  'tags_replace',
  'tags_clear',
  'tags_rename'
]

module.exports = Joi.object().keys({
  // REQUIRED
  action: Joi.string()
    .required()
    .valid(VALID_ACTIONS),

  // OPTIONAL
  time: Joi.number().integer()
    .optional()
    .description('The time the action occurred.')
})
