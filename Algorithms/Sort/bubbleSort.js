/**
 * Bubble sort complexity:
 * (n - 1) * (n - 1)
 * n^2 - 1n - 1n + 1
 * n^2 - 2n + 1
 * O(n^2)
 */

function bubbleSort(arr) {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                isSorted = false;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2, 7, 8, 1, 1, 3]));
