```js
let compare = require( "@aureooms/js-compare" ) ;

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
