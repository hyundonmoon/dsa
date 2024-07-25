/**
 * Time complexity:
 * - Building a max heap from an unsorted array: O(n)
 *      Each call to max_heapify takes O(logn) but as you climb up the tree, there are fewer nodes to "max-heapify" and it adds up to O(n)
 * - Sorting: O(nlogn)
 *      The max value is extracted n times, and the heap needs to be "reheapified" every time which takes log(n) -> O(nlogn)
 *
 * Space complexity:
 * - O(1) as heap sort is an in-place sorting algorithm
 *
 * Pros:
 *  - In-sorting algorithm -> no extra space required
 *  - O(nlogn) in worst, average, best cases so it's a reliable choice for sorting big datasets
 *  - Iterative so doesn't take up extra stack space that would have been needed had it been recursive
 *
 * Cons:
 *  - Not stable, duplicate values may change orders
 *  - Apparently it can be slower on small datasets due to larger constant factors!
 */

export default function heap_sort(array: number[]): number[] {
  build_max_heap(array);

  let heap_size = array.length;

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heap_size--;
    max_heapify(array, 0, heap_size);
  }

  return array;
}

// helper functions

function swap(array: number[], x: number, y: number): void {
  [array[x], array[y]] = [array[y], array[x]];
}

/**
 * @description
 * corrects a single violation of the max heap property
 * assumes left and right child to be roots of max heaps
 * size argument is used to limit accessing elements that have already been sorted
 */
function max_heapify(array: number[], index: number, size: number): void {
  const left_child_idx = get_left_child_index(index);
  const right_child_idx = get_right_child_index(index);

  let bigger_idx = index;

  if (left_child_idx < size && array[left_child_idx] > array[bigger_idx]) {
    bigger_idx = left_child_idx;
  }

  if (right_child_idx < size && array[right_child_idx] > array[bigger_idx]) {
    bigger_idx = right_child_idx;
  }

  if (bigger_idx === index) {
    return;
  }

  swap(array, index, bigger_idx);
  max_heapify(array, bigger_idx, size);
}

/**
 * @description
 * builds a max heap out of an unsorted array
 * starts from array.length / 2 down to 0 (root) because leaves are already heaps
 * max_heapify assumes child nodes to be max heaps and starting from parents of leaves satisfies this assumption
 */
function build_max_heap(array: number[]) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    max_heapify(array, i, array.length);
  }
}

function get_left_child_index(index: number): number {
  return index * 2 + 1;
}

function get_right_child_index(index: number): number {
  return index * 2 + 2;
}

function get_parent_index(index: number): number {
  return Math.floor((index - 1) / 2);
}
