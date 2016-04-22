'use strict'

const assert = require('chai').assert
const index  = require('./../src/index')

describe('index()', function() {

	it('should throw an error when called with an invalid filePath', function() {

		assert.throws(() => index(null))

	})

	it('should remove the extension when called without a newExt', function() {

		const filePath = '/a/b/c.js'
		const newExt   = null

		assert.strictEqual(index(filePath, newExt), '/a/b/c')

	})

	it('should remove the extension when called with an empty newExt', function() {

		const filePath = '/a/b/c.js'
		const newExt   = ''

		assert.strictEqual(index(filePath, newExt), '/a/b/c')

	})

	it('should change the extension when called with valid parameters (absolute)', function() {

		const filePath = '/a/b/c.js'
		const newExt   = 'css'

		assert.strictEqual(index(filePath, newExt), '/a/b/c.css')

	})

	it('should change the extension when called with valid parameters (relative)', function() {

		const filePath = './../a/b/c.js'
		const newExt   = 'css'

		assert.strictEqual(index(filePath, newExt), './../a/b/c.css')

	})

	it('should change the extension when called with a dotfile which has an extension', function() {

		const filePath = '.min.js'
		const newExt   = 'css'

		assert.strictEqual(index(filePath, newExt), '.min.css')

	})

	it('should add the extension when called with a dotfile which has no extension', function() {

		const filePath = '.js'
		const newExt   = 'css'

		assert.strictEqual(index(filePath, newExt), '.js.css')

	})

	it('should add the extension when called with an extension-less filePath', function() {

		const filePath = '/a/b/c'
		const newExt   = 'css'

		assert.strictEqual(index(filePath, newExt), '/a/b/c.css')

	})

})