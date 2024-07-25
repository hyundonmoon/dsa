import heap_sort from '../src/algo/HeapSort';

const testCases = [
  {
    input: [5, 3, 8, 4, 2],
    expected: [2, 3, 4, 5, 8],
    description: 'random array of positive numbers',
  },
  {
    input: [],
    expected: [],
    description: 'empty array',
  },
  {
    input: [1],
    expected: [1],
    description: 'array with one element',
  },
  {
    input: [2, 2, 2, 2, 2],
    expected: [2, 2, 2, 2, 2],
    description: 'array with multiple identical elements',
  },
  {
    input: [1, 2, 3, 4, 5],
    expected: [1, 2, 3, 4, 5],
    description: 'already sorted array',
  },
  {
    input: [5, 4, 3, 2, 1],
    expected: [1, 2, 3, 4, 5],
    description: 'array sorted in reverse order',
  },
  {
    input: [3, -2, 5, -1, 0],
    expected: [-2, -1, 0, 3, 5],
    description: 'array with negative numbers',
  },
  {
    input: [100, 50, 20, 10, 5, 1],
    expected: [1, 5, 10, 20, 50, 100],
    description: 'array with large numbers',
  },
  {
    input: [0, 0, 0, 0, 0],
    expected: [0, 0, 0, 0, 0],
    description: 'array with all zeros',
  },
  {
    input: [0.5, 2.3, 1.2, 4.4, 3.1],
    expected: [0.5, 1.2, 2.3, 3.1, 4.4],
    description: 'array with floating point numbers',
  },
  {
    input: [3, -1, 2, -5, 4, 0],
    expected: [-5, -1, 0, 2, 3, 4],
    description: 'array with a mix of positive and negative numbers',
  },
  {
    input: [12, 11, 13, 5, 6, 7],
    expected: [5, 6, 7, 11, 12, 13],
    description: 'array with a mix of small and large numbers',
  },
  {
    input: [7, 2, 1, 6, 8, 5, 3, 4],
    expected: [1, 2, 3, 4, 5, 6, 7, 8],
    description: 'array with an arbitrary unsorted sequence',
  },
];

describe('heap_sort', () => {
  testCases.forEach(({ input, expected, description }) => {
    it(`should correctly sort an array when ${description}`, () => {
      const sortedArray = heap_sort(input);
      expect(sortedArray).toEqual(expected);
    });
  });
});
