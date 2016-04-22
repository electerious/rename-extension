'use strict'

const path = require('path')

/*
 * Rename the extension of a file in a path.
 * @param {string} filePath - Path to a file.
 * @param {string} newExt - New extension for the file.
 * @returns {string} filePath - Path ending with the new extension.
 */
module.exports = function(filePath, newExt) {

	const parsedPath = path.parse(filePath)

	// Add a leading dot when an extension was given
	parsedPath.ext = (newExt==null || newExt==='' ? '' : '.' + newExt)

	// Force path.format to use name and ext instead of base
	parsedPath.base = null

	return path.format(parsedPath)

}