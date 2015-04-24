'use strict'

var Joi = require('joi')

var VALID_CONTENT_TYPES = ['article', 'image', 'video']
var VALID_DETAIL_TYPES = ['simple', 'complete']
var VALID_SORT = ['newest', 'oldest', 'title', 'site']
var VALID_STATES = ['unread', 'archive', 'all']

module.exports = Joi.object().keys({
  // REQUIRED
  consumer_key: Joi.string().required(),
  access_token: Joi.string().required(),
  // OPTIONAL
  state: Joi.number().optional().valid(VALID_STATES),
  favorite: Joi.number().optional().valid(0, 1),
  tag: Joi.string().optional(),
  contentType: Joi.string().optional().valid(VALID_CONTENT_TYPES),
  sort: Joi.string().optional().valid(VALID_SORT),
  detailType: Joi.string().optional().valid(VALID_DETAIL_TYPES),
  search: Joi.string().optional(),
  domain: Joi.string().optional(),
  since: Joi.date().optional(),
  count: Joi.number().integer().optional().min(0),
  offset: Joi.number().integer().optional().min(0)
})
