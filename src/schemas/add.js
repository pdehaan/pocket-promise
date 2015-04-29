/**
 * For more information, see <https://getpocket.com/developer/docs/v3/add>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // REQUIRED
  url: Joi.string()
    .required()
    .description('The URL of the item you want to save.'),

  // OPTIONAL
  title: Joi.string()
    .optional()
    .description('This can be included for cases where an item does not have a title, which is typical for image or PDF URLs. If Pocket detects a title from the content of the page, this parameter will be ignored.'),

  tags: Joi.string()
    .optional()
    .description('A comma-separated list of tags to apply to the item.'),

  tweet_id: Joi.string()
    .optional()
    .description('If you are adding Pocket support to a Twitter client, please send along a reference to the tweet status id. This allows Pocket to show the original tweet alongside the article.')
})
