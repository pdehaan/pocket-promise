var {statSync} = require('fs')

var requireDirectory = require('require-directory')

// Ignore any "_base.js" files.
var EXCLUDE_REGEX = /_base\.js$/

module.exports = requireDirectory(module, {
  exclude: EXCLUDE_REGEX,
  rename: renamer
})

function isFile (path) {
  return statSync(path).isFile()
}

function renamer (name, fullpath) {
  // Only uppercase the item if it is a file.
  return isFile(fullpath) ? name.toUpperCase() : name
}
