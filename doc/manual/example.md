# Examples

```js
import * as compare from '@total-order/primitive';
import * as heapSort from '@comparison-sorting/heap-sort';

/** binary heap-sort */
let sort = heapSort.dary( 2 ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

sort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

sort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** ternary heap-sort */
let sort = heapSort.dary( 3 ) ;
/** quaternary heap-sort */
let sort = heapSort.dary( 4 ) ;
/** etc... */
let sort = heapSort.dary( 5 ) ;
```
