[js-heapsort](http://aureooms.github.io/js-heapsort)
==

Heapsort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
let sort = heapsort.dary( 2 ) ;
```

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

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-heapsort
# or
jspm install npm:aureooms-js-heapsort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-heapsort
```

### bower
```terminal
bower install aureooms-js-heapsort
```

### ender
```terminal
ender add aureooms-js-heapsort
```

### jam
```terminal
jam install aureooms-js-heapsort
```

### spm
```terminal
spm install aureooms-js-heapsort --save
```

### npm
```terminal
npm install aureooms-js-heapsort --save
```

## Require
### jspm
```js
let heapsort = require( "github:aureooms/js-heapsort" ) ;
// or
import heapsort from 'aureooms-js-heapsort' ;
```
### duo
```js
let heapsort = require( "aureooms/js-heapsort" ) ;
```

### component, ender, spm, npm
```js
let heapsort = require( "aureooms-js-heapsort" ) ;
```

### bower
The script tag exposes the global variable `heapsort`.
```html
<script src="bower_components/aureooms-js-heapsort/js/dist/heapsort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-heapsort" ] , function ( heapsort ) { ... } ) ;
```

## Use

```js
let compare = require( "aureooms-js-compare" ) ;

/** binary heapsort */
let sort = heapsort.dary( 2 ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

sort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

sort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** ternary heapsort */
let sort = heapsort.dary( 3 ) ;
/** quaternary heapsort */
let sort = heapsort.dary( 4 ) ;
/** etc... */
let sort = heapsort.dary( 5 ) ;
```

## Reference

  - http://sorting.at
