var insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
    [ "heapsort (unary)", heapsort.__heapsort__( 1 ) ],
    [ "heapsort (binary)", heapsort.__heapsort__( 2 ) ],
    [ "heapsort (ternary)", heapsort.__heapsort__( 3 ) ],
    [ "heapsort (4-ary)", heapsort.__heapsort__( 4 ) ],
    [ "heapsort (5-ary)", heapsort.__heapsort__( 5 ) ]
] ) ;
