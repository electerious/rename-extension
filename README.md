# rename-extension

[![Travis Build Status](https://travis-ci.org/electerious/rename-extension.svg?branch=master)](https://travis-ci.org/electerious/rename-extension) [![Coverage Status](https://coveralls.io/repos/github/electerious/rename-extension/badge.svg?branch=master)](https://coveralls.io/github/electerious/rename-extension?branch=master) [![Dependencies](https://david-dm.org/electerious/rename-extension.svg)](https://david-dm.org/electerious/rename-extension#info=dependencies)

## Install

```
npm i rename-extension
```

## Usage

```js
const renameExtension = require('rename-extension')

renameExtension('a/b/c.js', null) // => a/b/c
renameExtension('a/b/c.js', 'css') // => a/b/c.css
renameExtension('a/b/.npmrc', null) // => a/b/.npmrc
renameExtension('a/b/.npmrc', 'json') // => a/b/.npmrc.json
```