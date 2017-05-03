# rename-extension

[![Greenkeeper badge](https://badges.greenkeeper.io/electerious/rename-extension.svg)](https://greenkeeper.io/)

[![Travis Build Status](https://travis-ci.org/electerious/rename-extension.svg?branch=master)](https://travis-ci.org/electerious/rename-extension) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/96vdtdgts1i2gv30?svg=true)](https://ci.appveyor.com/project/electerious/rename-extension) [![Coverage Status](https://coveralls.io/repos/github/electerious/rename-extension/badge.svg?branch=master)](https://coveralls.io/github/electerious/rename-extension?branch=master) [![Dependencies](https://david-dm.org/electerious/rename-extension.svg)](https://david-dm.org/electerious/rename-extension#info=dependencies)

A function that changes the the extension of a given filename or path.

## Install

```
npm install rename-extension
```

## Usage

```js
const renameExtension = require('rename-extension')

renameExtension('a/b/c.js', null) // a/b/c
renameExtension('a/b/c.js', '.css') // a/b/c.css
renameExtension('a/b/c.min.js', '.css') // a/b/c.min.css
renameExtension('a/b/.npmrc', null) // a/b/.npmrc
renameExtension('a/b/.npmrc', '.json') // a/b/.npmrc.json
```