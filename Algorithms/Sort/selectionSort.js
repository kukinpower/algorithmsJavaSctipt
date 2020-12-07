/**
 * Selection sort complexity:
 * n + (n-1) + (n-2) + ... + 1
 * n(n + 1) / 2
 * (n^2 + n) / 2
 * n^2 / 2 + n / 2
 * O(n^2)
 *
 * Best case: Ω(n^2)
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let k = i;
        let tmp;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[k])
                k = j;
        }
        tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
    }
    return arr;
}

console.log(selectionSort([2, 7, 8, 1, 1, 3]));
