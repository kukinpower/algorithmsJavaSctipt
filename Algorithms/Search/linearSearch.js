/**
 * Linear search complexity:
 * O(n)
 *
 * Best case: Ω(1)
 */

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i;
    }
    return NaN;
}

console.log(linearSearch([2, 7, 8, 1, 1, 3], 3));
console.log(linearSearch([2, 7, 8, 1, 1, 3], 33));