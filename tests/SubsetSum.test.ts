import subsetSum from '../src/algo/SubsetSum';

describe('subsetSum', () => {
  test('returns true when the target sum is achievable', () => {
    const set = [3, 34, 4, 12, 5, 2];
    const target = 9;
    expect(subsetSum(set, target)).toBe(true);
  });

  test('returns false when the target sum is not achievable', () => {
    const set = [3, 34, 4, 12, 5, 2];
    const target = 30;
    expect(subsetSum(set, target)).toBe(false);
  });

  test('returns true for empty set when target is 0', () => {
    const set: number[] = [];
    const target = 0;
    expect(subsetSum(set, target)).toBe(true);
  });

  test('returns false for empty set when target is non-zero', () => {
    const set: number[] = [];
    const target = 10;
    expect(subsetSum(set, target)).toBe(false);
  });

  test('returns true when a single element equals the target', () => {
    const set = [7];
    const target = 7;
    expect(subsetSum(set, target)).toBe(true);
  });

  test('returns false when a single element does not equal the target', () => {
    const set = [7];
    const target = 10;
    expect(subsetSum(set, target)).toBe(false);
  });

  test('handles larger target correctly', () => {
    const set = [2, 4, 6, 8, 10];
    const target = 16;
    expect(subsetSum(set, target)).toBe(true);
  });

  test('handles a target of 0 correctly with a non-empty set', () => {
    const set = [1, 2, 3];
    const target = 0;
    expect(subsetSum(set, target)).toBe(true);
  });
});
