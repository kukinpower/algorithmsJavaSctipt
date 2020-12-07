/**
 * Binary search complexity:
 * O(log n)
 *
 * Best case: Ω(1)
 */

function binarySearch(arr, value) {
    let i = Math.ceil(arr.length / 2);
    while (true) {
        if (arr[i] === value) {
            if (i > 0 && arr[i - 1] === value) {
                i--;
            } else {
                return i;
            }
        } else if (arr[i] > value) {
            i = Math.floor(i / 2);
        } else if (arr[i] < value) {
            i += Math.ceil((arr.length - i) / 2);
        } else if (i === 0 || i === arr.length) {
            return NaN;
        }
    }
}
console.log(binarySearch([ 1, 1, 2, 3, 7, 8 ], 7));
console.log(binarySearch([ 1, 1, 2, 3, 7, 8 ], 77));