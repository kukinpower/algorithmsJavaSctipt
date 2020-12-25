/**
 * Quick sort complexity:
 * O(n log n) on average
 * O(n^2) in worst case
 *
 * Best case: Ω(n log n)
 */

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        let less = arr.filter((item) => item < pivot);
        let greater = arr.filter((item) => item > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

console.log(quickSort([2, 7, 8, 1, 1, 3]));