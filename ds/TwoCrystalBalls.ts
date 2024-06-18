export default function two_crystal_balls(breaks: boolean[]): number {
    let window = Math.floor(Math.sqrt(breaks.length));
    let firstBreakPoint = 0;

    // attempts to find the first place at which the ball breaks
    for (; firstBreakPoint < breaks.length; firstBreakPoint += window) {
        if (breaks[firstBreakPoint]) {
            break;
        }
    }

    // attemps to find any place before the firstBreakPoint at which the ball breaks
    for (
        let j = firstBreakPoint - window;
        j <= firstBreakPoint && j < breaks.length;
        j++
    ) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
``;
