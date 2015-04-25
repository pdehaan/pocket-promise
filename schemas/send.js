'use strict'

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
  consumer_key: Joi.string().required(),
  access_token: Joi.string().required(),
  actions: Joi.array().required().items(Joi.object().keys({
    action: Joi.string().required().valid(VALID_ACTIONS),
    item_id: Joi.number().integer().required(),

    // OPTIONAL
    ref_id: Joi.number().integer().optional(),
    tags: Joi.string().optional(),
    time: Joi.number().integer().optional(),
    title: Joi.string().optional(),
    url: Joi.string().optional(),
    old_tag: Joi.string().optional(),
    new_tag: Joi.string().optional()
  }))
  // OPTIONAL
})
