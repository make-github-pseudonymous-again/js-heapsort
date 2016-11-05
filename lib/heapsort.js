"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dary = dary;

/**
 * Template for a d-ary implementation of heapsort.
 *
 *
 */

function dary(arity) {

	/**
  * Note that here we reverse the order of the
  * comparison operator since when we extract
  * values from the heap they can only be stored
  * at the end of the array. We thus build a max-heap
  * and then pop elements from it until it is empty.
  */

	var sort = function sort(compare, a, i, j) {

		// construct the max-heap

		var k = i + 1;

		for (; k < j; ++k) {

			var current = k - i;

			// while we are not the root

			while (current !== 0) {

				// address of the parent in a zero-based
				// d-ary heap

				var parent = i + ((current - 1) / arity | 0);
				current += i;

				// if current value is smaller than its parent
				// then we are done

				if (compare(a[current], a[parent]) <= 0) {
					break;
				}

				// otherwise
				// swap with parent

				var tmp = a[current];
				a[current] = a[parent];
				a[parent] = tmp;

				current = parent - i;
			}
		}

		// exhaust the max-heap

		for (--k; k > i; --k) {

			// put max element at the end of the array
			// and percolate new max element down
			// the heap

			var _tmp = a[k];
			a[k] = a[i];
			a[i] = _tmp;

			var _current = 0;

			while (true) {

				// address of the first child in a zero-based
				// d-ary heap

				var candidate = i + arity * _current + 1;

				// if current node has no children
				// then we are done

				if (candidate >= k) {
					break;
				}

				// search for greatest child

				var t = Math.min(candidate + arity, k);

				var y = candidate;

				for (++y; y < t; ++y) {

					if (compare(a[y], a[candidate]) > 0) {
						candidate = y;
					}
				}

				// if current value is greater than its greatest
				// child then we are done

				_current += i;

				if (compare(a[_current], a[candidate]) >= 0) {
					break;
				}

				// otherwise
				// swap with greatest child

				var _tmp2 = a[_current];
				a[_current] = a[candidate];
				a[candidate] = _tmp2;

				_current = candidate - i;
			}
		}
	};

	return sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWFwc29ydC5qcyJdLCJuYW1lcyI6WyJkYXJ5IiwiYXJpdHkiLCJzb3J0IiwiY29tcGFyZSIsImEiLCJpIiwiaiIsImsiLCJjdXJyZW50IiwicGFyZW50IiwidG1wIiwiY2FuZGlkYXRlIiwidCIsIk1hdGgiLCJtaW4iLCJ5Il0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBd0I7O0FBRTlCOzs7Ozs7OztBQVFBLEtBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFXQyxPQUFYLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQThCOztBQUUxQzs7QUFFQSxNQUFJQyxJQUFJRixJQUFJLENBQVo7O0FBRUEsU0FBUUUsSUFBSUQsQ0FBWixFQUFnQixFQUFFQyxDQUFsQixFQUFzQjs7QUFFckIsT0FBSUMsVUFBVUQsSUFBSUYsQ0FBbEI7O0FBRUE7O0FBRUEsVUFBUUcsWUFBWSxDQUFwQixFQUF3Qjs7QUFFdkI7QUFDQTs7QUFFQSxRQUFNQyxTQUFTSixLQUFNLENBQUVHLFVBQVUsQ0FBWixJQUFrQlAsS0FBbEIsR0FBMEIsQ0FBaEMsQ0FBZjtBQUNBTyxlQUFXSCxDQUFYOztBQUVBO0FBQ0E7O0FBRUEsUUFBS0YsUUFBU0MsRUFBRUksT0FBRixDQUFULEVBQXFCSixFQUFFSyxNQUFGLENBQXJCLEtBQW9DLENBQXpDLEVBQTZDO0FBQzVDO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFQSxRQUFNQyxNQUFNTixFQUFFSSxPQUFGLENBQVo7QUFDQUosTUFBRUksT0FBRixJQUFhSixFQUFFSyxNQUFGLENBQWI7QUFDQUwsTUFBRUssTUFBRixJQUFZQyxHQUFaOztBQUVBRixjQUFVQyxTQUFTSixDQUFuQjtBQUVBO0FBRUQ7O0FBRUQ7O0FBRUEsT0FBTSxFQUFFRSxDQUFSLEVBQVlBLElBQUlGLENBQWhCLEVBQW9CLEVBQUVFLENBQXRCLEVBQTBCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUEsT0FBTUcsT0FBTU4sRUFBRUcsQ0FBRixDQUFaO0FBQ0FILEtBQUVHLENBQUYsSUFBT0gsRUFBRUMsQ0FBRixDQUFQO0FBQ0FELEtBQUVDLENBQUYsSUFBT0ssSUFBUDs7QUFFQSxPQUFJRixXQUFVLENBQWQ7O0FBRUEsVUFBUSxJQUFSLEVBQWU7O0FBRWQ7QUFDQTs7QUFFQSxRQUFJRyxZQUFZTixJQUFJSixRQUFRTyxRQUFaLEdBQXNCLENBQXRDOztBQUVBO0FBQ0E7O0FBRUEsUUFBS0csYUFBYUosQ0FBbEIsRUFBc0I7QUFDckI7QUFDQTs7QUFFRDs7QUFFQSxRQUFNSyxJQUFJQyxLQUFLQyxHQUFMLENBQVVILFlBQVlWLEtBQXRCLEVBQTZCTSxDQUE3QixDQUFWOztBQUVBLFFBQUlRLElBQUlKLFNBQVI7O0FBRUEsU0FBTSxFQUFFSSxDQUFSLEVBQVlBLElBQUlILENBQWhCLEVBQW9CLEVBQUVHLENBQXRCLEVBQTBCOztBQUV6QixTQUFLWixRQUFTQyxFQUFFVyxDQUFGLENBQVQsRUFBZVgsRUFBRU8sU0FBRixDQUFmLElBQWdDLENBQXJDLEVBQXlDO0FBQ3hDQSxrQkFBWUksQ0FBWjtBQUNBO0FBRUQ7O0FBRUQ7QUFDQTs7QUFFQVAsZ0JBQVdILENBQVg7O0FBRUEsUUFBS0YsUUFBU0MsRUFBRUksUUFBRixDQUFULEVBQXFCSixFQUFFTyxTQUFGLENBQXJCLEtBQXVDLENBQTVDLEVBQWdEO0FBQy9DO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFQSxRQUFNRCxRQUFNTixFQUFFSSxRQUFGLENBQVo7QUFDQUosTUFBRUksUUFBRixJQUFhSixFQUFFTyxTQUFGLENBQWI7QUFDQVAsTUFBRU8sU0FBRixJQUFlRCxLQUFmOztBQUVBRixlQUFVRyxZQUFZTixDQUF0QjtBQUVBO0FBRUQ7QUFFRCxFQXhHRDs7QUEwR0EsUUFBT0gsSUFBUDtBQUVBIiwiZmlsZSI6ImhlYXBzb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRlbXBsYXRlIGZvciBhIGQtYXJ5IGltcGxlbWVudGF0aW9uIG9mIGhlYXBzb3J0LlxuICpcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRhcnkgKCBhcml0eSApIHtcblxuXHQvKipcblx0ICogTm90ZSB0aGF0IGhlcmUgd2UgcmV2ZXJzZSB0aGUgb3JkZXIgb2YgdGhlXG5cdCAqIGNvbXBhcmlzb24gb3BlcmF0b3Igc2luY2Ugd2hlbiB3ZSBleHRyYWN0XG5cdCAqIHZhbHVlcyBmcm9tIHRoZSBoZWFwIHRoZXkgY2FuIG9ubHkgYmUgc3RvcmVkXG5cdCAqIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LiBXZSB0aHVzIGJ1aWxkIGEgbWF4LWhlYXBcblx0ICogYW5kIHRoZW4gcG9wIGVsZW1lbnRzIGZyb20gaXQgdW50aWwgaXQgaXMgZW1wdHkuXG5cdCAqL1xuXG5cdGNvbnN0IHNvcnQgPSBmdW5jdGlvbiAoIGNvbXBhcmUsIGEsIGksIGogKSB7XG5cblx0XHQvLyBjb25zdHJ1Y3QgdGhlIG1heC1oZWFwXG5cblx0XHRsZXQgayA9IGkgKyAxIDtcblxuXHRcdGZvciAoIDsgayA8IGogOyArK2sgKSB7XG5cblx0XHRcdGxldCBjdXJyZW50ID0gayAtIGk7XG5cblx0XHRcdC8vIHdoaWxlIHdlIGFyZSBub3QgdGhlIHJvb3RcblxuXHRcdFx0d2hpbGUgKCBjdXJyZW50ICE9PSAwICkge1xuXG5cdFx0XHRcdC8vIGFkZHJlc3Mgb2YgdGhlIHBhcmVudCBpbiBhIHplcm8tYmFzZWRcblx0XHRcdFx0Ly8gZC1hcnkgaGVhcFxuXG5cdFx0XHRcdGNvbnN0IHBhcmVudCA9IGkgKyAoICggY3VycmVudCAtIDEgKSAvIGFyaXR5IHwgMCApO1xuXHRcdFx0XHRjdXJyZW50ICs9IGk7XG5cblx0XHRcdFx0Ly8gaWYgY3VycmVudCB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gaXRzIHBhcmVudFxuXHRcdFx0XHQvLyB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRcdFx0aWYgKCBjb21wYXJlKCBhW2N1cnJlbnRdLCBhW3BhcmVudF0gKSA8PSAwICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gb3RoZXJ3aXNlXG5cdFx0XHRcdC8vIHN3YXAgd2l0aCBwYXJlbnRcblxuXHRcdFx0XHRjb25zdCB0bXAgPSBhW2N1cnJlbnRdO1xuXHRcdFx0XHRhW2N1cnJlbnRdID0gYVtwYXJlbnRdO1xuXHRcdFx0XHRhW3BhcmVudF0gPSB0bXA7XG5cblx0XHRcdFx0Y3VycmVudCA9IHBhcmVudCAtIGk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIGV4aGF1c3QgdGhlIG1heC1oZWFwXG5cblx0XHRmb3IgKCAtLWsgOyBrID4gaSA7IC0tayApIHtcblxuXHRcdFx0Ly8gcHV0IG1heCBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5XG5cdFx0XHQvLyBhbmQgcGVyY29sYXRlIG5ldyBtYXggZWxlbWVudCBkb3duXG5cdFx0XHQvLyB0aGUgaGVhcFxuXG5cdFx0XHRjb25zdCB0bXAgPSBhW2tdO1xuXHRcdFx0YVtrXSA9IGFbaV07XG5cdFx0XHRhW2ldID0gdG1wO1xuXG5cdFx0XHRsZXQgY3VycmVudCA9IDA7XG5cblx0XHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0XHQvLyBhZGRyZXNzIG9mIHRoZSBmaXJzdCBjaGlsZCBpbiBhIHplcm8tYmFzZWRcblx0XHRcdFx0Ly8gZC1hcnkgaGVhcFxuXG5cdFx0XHRcdGxldCBjYW5kaWRhdGUgPSBpICsgYXJpdHkgKiBjdXJyZW50ICsgMTtcblxuXHRcdFx0XHQvLyBpZiBjdXJyZW50IG5vZGUgaGFzIG5vIGNoaWxkcmVuXG5cdFx0XHRcdC8vIHRoZW4gd2UgYXJlIGRvbmVcblxuXHRcdFx0XHRpZiAoIGNhbmRpZGF0ZSA+PSBrICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc2VhcmNoIGZvciBncmVhdGVzdCBjaGlsZFxuXG5cdFx0XHRcdGNvbnN0IHQgPSBNYXRoLm1pbiggY2FuZGlkYXRlICsgYXJpdHksIGsgKTtcblxuXHRcdFx0XHRsZXQgeSA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0XHRmb3IgKCArK3kgOyB5IDwgdCA7ICsreSApIHtcblxuXHRcdFx0XHRcdGlmICggY29tcGFyZSggYVt5XSwgYVtjYW5kaWRhdGVdICkgPiAwICkge1xuXHRcdFx0XHRcdFx0Y2FuZGlkYXRlID0geTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIGl0cyBncmVhdGVzdFxuXHRcdFx0XHQvLyBjaGlsZCB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRcdFx0Y3VycmVudCArPSBpO1xuXG5cdFx0XHRcdGlmICggY29tcGFyZSggYVtjdXJyZW50XSwgYVtjYW5kaWRhdGVdICkgPj0gMCApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG90aGVyd2lzZVxuXHRcdFx0XHQvLyBzd2FwIHdpdGggZ3JlYXRlc3QgY2hpbGRcblxuXHRcdFx0XHRjb25zdCB0bXAgPSBhW2N1cnJlbnRdO1xuXHRcdFx0XHRhW2N1cnJlbnRdID0gYVtjYW5kaWRhdGVdO1xuXHRcdFx0XHRhW2NhbmRpZGF0ZV0gPSB0bXA7XG5cblx0XHRcdFx0Y3VycmVudCA9IGNhbmRpZGF0ZSAtIGk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdHJldHVybiBzb3J0O1xuXG59XG4iXX0=