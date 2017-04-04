'use strict'

const path = require('path')

/**
 * Rename the extension of a file in a path.
 * @param {String} filePath - Path to a file.
 * @param {String} newExt - New extension for the file.
 * @returns {String} filePath - Path ending with the new extension.
 */
module.exports = function(filePath, newExt) {

	// Convert to reliable path that works cross-platform
	filePath = path.normalize(filePath)

	const parsedPath = path.parse(filePath)

	parsedPath.ext = newExt

	// Force path.format to use name and ext instead of base
	parsedPath.base = null

	return path.format(parsedPath)

}