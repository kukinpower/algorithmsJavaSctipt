/**
 * Merge sort complexity:
 * O(n log n)
 *
 * Best case: Ω(n log n)
 */

function merge(arr1, arr2) {
    let arr = [];
    let len = arr1.length + arr2.length;

    for (let i = 0; i < len; i++) {
        if (!arr1[0]) {
            for (let j = 0; j < arr2.length; j++) {
                arr.push(arr2[0]);
                arr2.shift();
            }
        } else if (!arr2[0]) {
            for (let j = 0; j < arr1.length; j++) {
                arr.push(arr1[0]);
                arr1.shift();
            }
        } else if (arr1[0] < arr2[0]) {
            arr.push(arr1[0]);
            arr1.shift();
        } else {
            arr.push(arr2[0]);
            arr2.shift();
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length > 2) {
        let halfLen = Math.ceil(arr.length / 2);
        let tmpArr1 = mergeSort(arr.splice(0, halfLen));
        let tmpArr2 = mergeSort(arr);
        arr = merge(tmpArr1, tmpArr2);
    }
    else if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            let tmp = arr[0];
            arr[0] = arr[1];
            arr[1] = tmp;
        }
    }
    return arr;
}

console.log(mergeSort([2, 7, 8, 1, 1, 3]));