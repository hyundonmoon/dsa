// puts all items smaller than or equal to pivot item to the left of the pivot index
// puts all items larger than pivot item to the right of the pivot index
// returns pivot index
// not recursive!
function partition(arr: number[], lo: number, hi: number): number {
    let swapIdx = lo - 1;
    const pivotItem = arr[hi];

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivotItem) {
            swapIdx += 1;
            const temp = arr[swapIdx];
            arr[swapIdx] = arr[i];
            arr[i] = temp;
        }
    }

    swapIdx += 1;
    arr[hi] = arr[swapIdx];
    arr[swapIdx] = pivotItem;

    return swapIdx;
}

// recursively calls partition to change item positions in place
function quicksort(arr: number[], lo: number, hi: number): void {
    // base cases
    if (lo >= hi || arr.length <= 1) {
        return;
    }

    const pivot = partition(arr, lo, hi);
    quicksort(arr, lo, pivot - 1);
    quicksort(arr, pivot + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    quicksort(arr, 0, arr.length - 1);
}
