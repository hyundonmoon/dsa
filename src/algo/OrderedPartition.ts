// Problem: Integer Partition without Rearrangement
// Input: An arrangement S of non-negative numbers s1, . . . , sn and an integer k.
// Output: Partition S into k or fewer ranges, to minimize the maximum sum over all the ranges,
// without reordering any of the numbers.
// (The Algorithm Design Manual, 3rd edition, pg. 333)

export default function orderedPartition(
  s: number[],
  maxPartitionCount: number
): void {
  if (s.length === 0) {
    console.log(s);
    return;
  }

  if (maxPartitionCount > s.length) {
    return orderedPartition(s, s.length);
  }

  const sums: number[] = [];
  const partitionCostTable: number[][] = [];
  const dividers: number[][] = [];

  for (let i = 0; i < s.length; i++) {
    sums[i] = (sums[i - 1] ?? 0) + s[i];

    partitionCostTable[i] = [];
    dividers[i] = [];

    // k === 1 (1개의 partition으로 나누는 것)일 때 해당 partition의 cost는 element 전부 합한 값
    partitionCostTable[i][0] = sums[i];
  }

  for (let j = 0; j < maxPartitionCount; j++) {
    // 하나의 element만 있는 경우 maxPartitionCount와 무관하게 partition의 cost는 해당 element 값
    partitionCostTable[0][j] = s[0];
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 1; j < maxPartitionCount; j++) {
      partitionCostTable[i][j] = Infinity;
      dividers[i][j] = -1;

      for (let x = 0; x < i; x++) {
        // x refers to the number of elements in the left partition (minus 1 because 0-indexing)
        // compare left partition (largest partition found among first element up to x-th element)
        // with right partition (sum of numbers found after x-th element up to i-th element)

        // in other words...
        // left partition: same problem, only with a smaller set of numbers, and k-1 partitions (recursion!)
        // right partition: whatever's left after x-th element

        const cost = Math.max(partitionCostTable[x][j - 1], sums[i] - sums[x]);

        if (cost < partitionCostTable[i][j]) {
          partitionCostTable[i][j] = cost;
          dividers[i][j] = x;
        }
      }
    }
  }

  reconstructPartition(s, dividers, s.length, maxPartitionCount);
}

function print(s: number[], start: number, end: number) {
  let result = '{';
  for (let i = start; i < end; i++) {
    result += `${s[i]} `;
  }
  result += '}';

  console.log(result);
}

function reconstructPartition(
  s: number[],
  dividers: number[][],
  numbersCount: number,
  partitionCount: number
) {
  if (partitionCount === 1) {
    // no more partitioning needed, print everything in range
    print(s, 0, numbersCount);
  } else {
    reconstructPartition(
      s,
      dividers,
      dividers[numbersCount - 1][partitionCount - 1] + 1,
      partitionCount - 1
    );
    print(s, dividers[numbersCount - 1][partitionCount - 1] + 1, numbersCount);
  }
}
