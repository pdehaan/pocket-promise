/**
 * For more information, see <https://getpocket.com/developer/docs/v3/retrieve>.
 */

var Joi = require('joi')

var base = require('./_base')

module.exports = base.keys({
  // OPTIONAL

  /**
   * `unread`: only return unread items (default).
   * `archive`: only return archived items.
   * `all`: return both unread and archived items.
   */
  state: Joi.string()
    .optional()
    .valid(['unread', 'archive', 'all']),

  /**
   * `0`: only return un-favorited items.
   * `1`: only return favorited items.
   */
  favorite: Joi.number().integer()
    .optional()
    .min(0).max(1),

  /**
   * `tag_name`: only return items tagged with tag_name.
   * `_untagged_`: only return untagged items.
   */
  tag: Joi.string()
    .optional(),

  /**
   * `article`: only return articles.
   * `video`: only return videos or articles with embedded videos.
   * `image`: only return images.
   */
  contentType: Joi.string()
    .optional()
    .valid(['article', 'image', 'video']),

  /**
   * `newest`: return items in order of newest to oldest.
   * `oldest`: return items in order of oldest to newest.
   * `title`: return items in order of title alphabetically.
   * `site`: return items in order of url alphabetically.
   */
  sort: Joi.string()
    .optional()
    .valid(['newest', 'oldest', 'title', 'site']),

  /**
   * `simple`: only return the titles and urls of each item.
   * `complete`: return all data about each item, including tags, images, authors, videos and more.
   */
  detailType: Joi.string()
    .optional()
    .valid(['simple', 'complete']),

  search: Joi.string()
    .optional()
    .description('Only return items whose title or url contain the search string.'),

  domain: Joi.string()
    .optional()
    .description('Only return items from a particular domain.'),

  since: Joi.date()
    .optional()
    .description('Only return items modified since the given since unix timestamp.'),

  count: Joi.number().integer()
    .optional()
    .min(0)
    .description('Only return count number of items.'),

  offset: Joi.number().integer()
    .optional()
    .min(0)
    .description('Used only with count; start returning from offset position of results.')
})
