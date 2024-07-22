function merge(arr1: number[], arr2: number[]): number[] {
  const tempArr: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      tempArr.push(arr1[i]);
      i++;
    } else {
      tempArr.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    tempArr.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    tempArr.push(arr2[j]);
  }

  return tempArr;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor((arr.length - 1) / 2);
  const leftArr = arr.slice(0, mid + 1);
  const rightArr = arr.slice(mid + 1, arr.length);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);
  return merge(sortedLeftArr, sortedRightArr);
}

const testArrays = [
  [3, 1, 4, 1, 5],
  [-3, -1, -4, -1, -5],
  [3, -1, 4, 1, -5],
  [2, 2, 2, 2, 2],
  [7],
  [],
  [3.1, 2.4, -1.2, 7.6, 0.0],
  [123456789, 987654321, 12345678, 87654321, 1234567],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
];

console.log(testArrays);
console.log(testArrays.map((testArr) => mergeSort(testArr)));

/**
 * pros and cons of merge sort
 *
 * pros
 * - suitable for sorting large lists
 * - suitable for sorting linked lists (merging two linked lists doesn't require the use of an external array)
 * - supports external sorting
 * - merge sort is stable (order of duplicates doesn't change after sorting)
 *
 * cons
 * - extra space required when merging
 * - is slow when dealing with very small lists due to its recursive nature
 *   - insertion sort was observed to actually faster when sorting very small lists
 * - extra space required to keep track of recursion (stack space, think of binary tree height)
 *
 * time complexity: O(nlogn)
 */
