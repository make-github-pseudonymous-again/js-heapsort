// eslint-disable-next-line ava/use-test
import ava from 'ava';

import * as spec from '@comparison-sorting/specification';
import * as heapsort from '../../src/index.js';

spec.test(ava, [
	['heapsort (unary)', heapsort.dary(1)],
	['heapsort (binary)', heapsort.dary(2)],
	['heapsort (ternary)', heapsort.dary(3)],
	['heapsort (4-ary)', heapsort.dary(4)],
	['heapsort (5-ary)', heapsort.dary(5)],
]);
