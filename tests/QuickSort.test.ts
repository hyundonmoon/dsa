import quicksort from '../src/algo/QuickSort';

describe('Quicksort function', () => {
  const testCases: [number[], number[]][] = [
    // Basic test cases
    [[], []], // Empty array
    [[1], [1]], // Single element
    [
      [2, 1],
      [1, 2],
    ], // Two elements, unsorted
    [
      [1, 2],
      [1, 2],
    ], // Two elements, sorted

    // Larger arrays
    [
      [3, 6, 8, 10, 1, 2, 1],
      [1, 1, 2, 3, 6, 8, 10],
    ], // Unsorted, general case
    [
      [5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5],
    ], // Reverse sorted
    [
      [10, 7, 8, 9, 1, 5],
      [1, 5, 7, 8, 9, 10],
    ], // Random order
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ], // Already sorted

    // Arrays with duplicate elements
    [
      [3, 6, 8, 3, 1, 2, 1],
      [1, 1, 2, 3, 3, 6, 8],
    ], // Duplicates
    [
      [5, 1, 1, 5, 1],
      [1, 1, 1, 5, 5],
    ], // All elements same or duplicate

    // Arrays with negative numbers
    [
      [-3, -6, -8, -1, -2, 0, 2, 1],
      [-8, -6, -3, -2, -1, 0, 1, 2],
    ], // Mixed negatives and positives

    // Large array
    [
      Array.from({ length: 1000 }, (_, i) => 1000 - i),
      Array.from({ length: 1000 }, (_, i) => i + 1),
    ], // Large reverse sorted array
  ];

  testCases.forEach(([input, expected], index) => {
    test(`Test case ${index + 1}`, () => {
      // Clone input to avoid in-place modification issues
      const inputCopy = [...input];
      quicksort(inputCopy);
      expect(inputCopy).toEqual(expected);
    });
  });
});
