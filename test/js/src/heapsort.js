var insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
    [ "heapsort (unary)", heapsort.dary( 1 ) ],
    [ "heapsort (binary)", heapsort.dary( 2 ) ],
    [ "heapsort (ternary)", heapsort.dary( 3 ) ],
    [ "heapsort (4-ary)", heapsort.dary( 4 ) ],
    [ "heapsort (5-ary)", heapsort.dary( 5 ) ]
] ) ;
