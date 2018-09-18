# lodash-pickapart [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> lodash mixin for deep immutable destructuring with omit

## Installation

```sh
$ npm install --save lodash-pickapart
```

## Usage

```js
const _ = require('lodash');
require('lodash-pickapart')(_);

// Now Available: _.pickapart(paths, source)
// * paths: String|Array (optional, if source is an Array)
// * source: Object|Array

const payload = { name: 'abc', meta: { token: 123, easy: true } };

const [token, data] = _.pickapart('meta.token', payload);
console.log('=> ', payload);
// => { name: 'abc', meta: { token: 123, easy: true }}
console.log('=> ', token);
// => 123
console.log('=> ', data);
// => { name: 'abc', meta: { easy: true }}

const [is, ez] = _.pickapart(['name', 'meta.easy'], payload);
console.log('=> ', is);
// => 'abc'
console.log('=> ', ez);
// => true

const flavors = ['chocolate', 'vanilla', 'strawberry'];

const [plain, others] = _.pickapart('[1]', flavors);
console.log('=> ', plain);
// => 'vanilla'
console.log('=> ', others);
// => [ 'chocolate', 'strawberry' ]

const [choco, notChoco] = _.pickapart(flavors);

console.log('=> ', choco);
// => 'chocolate'
console.log('=> ', notChoco);
// => [ 'vanilla', 'strawberry' ]
```

## License

ISC © [Buster Collings]()

[npm-image]: https://badge.fury.io/js/lodash-pickapart.svg
[npm-url]: https://npmjs.org/package/lodash-pickapart
[travis-image]: https://travis-ci.org/busterc/lodash-pickapart.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/lodash-pickapart
[daviddm-image]: https://david-dm.org/busterc/lodash-pickapart.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/lodash-pickapart
[coveralls-image]: https://coveralls.io/repos/busterc/lodash-pickapart/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/lodash-pickapart
