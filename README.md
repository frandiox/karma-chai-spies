# karma-chai-spies
Karma plugin adapter for Chai-spies.
This repository is a mirror of [Vlad Kosinov's karma-chai-as-promised](https://github.com/vlkosinov/karma-chai-as-promised).

## Installation
```sh
$ npm install https://github.com/frankdiox/karma-chai-spies.git --save-dev
```

## Requirements

This plugin has two peerDependencies:
* [karma-chai](https://github.com/xdissent/karma-chai)
* [chai-spies](https://github.com/chaijs/chai-spies)

Karma and Chai versions will be resolved by these plug-ins respectively

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

Keep in mind that, since Karma loads its frameworks in reverse and `chai-spies` depends on `chai`, you should declare it accordingly as done above.

License
----

MIT