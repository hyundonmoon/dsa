export default function bubble_sort(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
        let changed = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                changed = true;
            }
        }

        if (!changed) {
            break;
        }
    }
}
