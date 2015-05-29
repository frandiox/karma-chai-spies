# karma-chai-spies
[![NPM version](https://badge.fury.io/js/karma-chai-spies.svg)](https://badge.fury.io/js/karma-chai-spies) [![Dependency Status](https://david-dm.org/frankdiox/karma-chai-spies.svg)](https://david-dm.org/frankdiox/karma-chai-spies)

Karma plugin adapter for [Chai-spies](http://chaijs.com/plugins/chai-spies).

This repository is a mirror of [Vlad Kosinov's karma-chai-as-promised](https://github.com/vlkosinov/karma-chai-as-promised) adapted to Chai-spies.

## Installation
```sh
$ npm install karma-chai-spies --save-dev
```

## Requirements

This plugin has two peerDependencies:
* [karma-chai](https://github.com/xdissent/karma-chai)
* [chai-spies](https://github.com/chaijs/chai-spies)

## Usage

Add `chai-spies` to the `frameworks` array in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'chai-spies', 'chai'],
    #...
  });
}
```

License
----

MIT