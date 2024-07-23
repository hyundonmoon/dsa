// puts all items smaller than or equal to pivot item to the left of the pivot index
// puts all items larger than pivot item to the right of the pivot index
// returns pivot index
// not recursive!
function partition(arr: number[], lo: number, hi: number): number {
  let i = lo - 1; // the eventual position of the pivot item
  const pivotItem = arr[hi];

  for (let j = lo; j < hi; j++) {
    const current = arr[j];
    if (current <= pivotItem) {
      i++;
      arr[j] = arr[i];
      arr[i] = current;
    }
  }

  i++;
  arr[hi] = arr[i];
  arr[i] = pivotItem;

  return i;
}

// recursively calls partition to change item positions in place
export default function quicksort(
  arr: number[],
  lo = 0,
  hi = arr.length - 1
): void {
  // base cases
  if (lo >= hi || arr.length <= 1) {
    return;
  }

  const pivot = partition(arr, lo, hi);
  quicksort(arr, lo, pivot - 1);
  quicksort(arr, pivot + 1, hi);
}
