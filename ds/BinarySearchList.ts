export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        const found = haystack[mid];

        if (found === needle) {
            return true;
        } else if (found > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return false;
}
