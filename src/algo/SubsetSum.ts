// determines whether there is a subset of a given set of integers
// that sums up to a specific target value.

export default function subsetSum(set: number[], target: number): boolean {
  const possibilities: boolean[][] = [];

  // init table with one extra row to account for empty set
  for (let i = 0; i <= set.length; i++) {
    possibilities.push(
      Array.from({ length: target + 1 }).fill(false) as boolean[]
    );
  }

  for (let i = 0; i <= set.length; i++) {
    possibilities[i][0] = true;
  }

  for (let i = 1; i <= set.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (set[i - 1] > j) {
        // number is bigger than target so can't be included -> look at row above, same column
        possibilities[i][j] = possibilities[i - 1][j];
      } else {
        // number is either
        // 1) included -> look at the row above, at column (target - number)
        // 2) excluded -> look at the row above, same column
        possibilities[i][j] =
          possibilities[i - 1][j - set[i - 1]] || possibilities[i - 1][j];
      }
    }
  }

  return possibilities[set.length][target];
}
