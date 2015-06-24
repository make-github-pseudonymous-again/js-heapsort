[js-heapsort](http://aureooms.github.io/js-heapsort)
==

Heapsort code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-heapsort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-heapsort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-heapsort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-heapsort)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-heapsort.svg?style=flat)](http://bower.io/search/?q=aureooms-js-heapsort)
[![Build Status](http://img.shields.io/travis/aureooms/js-heapsort.svg?style=flat)](https://travis-ci.org/aureooms/js-heapsort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-heapsort.svg?style=flat)](https://coveralls.io/r/aureooms/js-heapsort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-heapsort.svg?style=flat)](https://david-dm.org/aureooms/js-heapsort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-heapsort.svg?style=flat)](https://david-dm.org/aureooms/js-heapsort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-heapsort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-heapsort)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-heapsort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-heapsort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-heapsort.svg?style=flat)](https://github.com/aureooms/js-heapsort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-heapsort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-heapsort)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let heapsort = require( "aureooms-js-heapsort" ) ;
```

## Use

```js
let compare = require( "aureooms-js-compare" ) ;

/** binary heapsort */
let sort = heapsort.__heapsort__( 2 ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

sort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

sort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** ternary heapsort */
let sort = heapsort.__heapsort__( 3 ) ;
/** quaternary heapsort */
let sort = heapsort.__heapsort__( 4 ) ;
/** etc... */
let sort = heapsort.__heapsort__( 5 ) ;
```

## Reference

  - http://sorting.at
