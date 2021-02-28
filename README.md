# rename-extension

![Build](https://github.com/electerious/rename-extension/workflows/Build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/electerious/rename-extension/badge.svg?branch=master)](https://coveralls.io/github/electerious/rename-extension?branch=master)

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

## API

### Parameters

- `filePath` `{String}` Path to a file.
- `newExt` `{String}` New extension for the file.

### Returns

- `filePath` `{String}` Path ending with the new extension.