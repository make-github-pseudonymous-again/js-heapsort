/**
 * Template for a d-ary implementation of heapsort.
 *
 *
 */

const dary = (arity) => {
	/**
	 * Note that here we reverse the order of the
	 * comparison operator since when we extract
	 * values from the heap they can only be stored
	 * at the end of the array. We thus build a max-heap
	 * and then pop elements from it until it is empty.
	 */

	const sort = (compare, a, i, j) => {
		// Construct the max-heap

		let k = i + 1;

		for (; k < j; ++k) {
			let current = k - i;

			// While we are not the root

			while (current !== 0) {
				// Address of the parent in a zero-based
				// d-ary heap

				// eslint-disable-next-line no-bitwise
				const parent = i + (((current - 1) / arity) | 0);
				current += i;

				// If current value is smaller than its parent
				// then we are done

				if (compare(a[current], a[parent]) <= 0) {
					break;
				}

				// Otherwise
				// swap with parent

				const tmp = a[current];
				a[current] = a[parent];
				a[parent] = tmp;

				current = parent - i;
			}
		}

		// Exhaust the max-heap

		for (--k; k > i; --k) {
			// Put max element at the end of the array
			// and percolate new max element down
			// the heap

			const tmp = a[k];
			a[k] = a[i];
			a[i] = tmp;

			let current = 0;

			while (true) {
				// Address of the first child in a zero-based
				// d-ary heap

				let candidate = i + arity * current + 1;

				// If current node has no children
				// then we are done

				if (candidate >= k) {
					break;
				}

				// Search for greatest child

				const t = Math.min(candidate + arity, k);

				let y = candidate;

				for (++y; y < t; ++y) {
					if (compare(a[y], a[candidate]) > 0) {
						candidate = y;
					}
				}

				// If current value is greater than its greatest
				// child then we are done

				current += i;

				if (compare(a[current], a[candidate]) >= 0) {
					break;
				}

				// Otherwise
				// swap with greatest child

				const tmp = a[current];
				a[current] = a[candidate];
				a[candidate] = tmp;

				current = candidate - i;
			}
		}
	};

	return sort;
};

export default dary;
