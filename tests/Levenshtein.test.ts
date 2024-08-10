import calcLevenshteinDistance from '../src/algo/Levenshtein';

describe('calcLevenshteinDistance', () => {
  it('should correctly calculate the distance between "kitten" and "sitting"', () => {
    expect(calcLevenshteinDistance('kitten', 'sitting')).toBe(3);
  });

  it('should correctly calculate the distance between "flaw" and "lawn"', () => {
    expect(calcLevenshteinDistance('flaw', 'lawn')).toBe(2);
  });

  it('should correctly calculate the distance between "sunday" and "saturday"', () => {
    expect(calcLevenshteinDistance('sunday', 'saturday')).toBe(3);
  });

  it('should correctly calculate the distance between "abc" and "abc"', () => {
    expect(calcLevenshteinDistance('abc', 'abc')).toBe(0);
  });

  it('should correctly calculate the distance between "a" and ""', () => {
    expect(calcLevenshteinDistance('a', '')).toBe(1);
  });

  it('should correctly calculate the distance between "" and "a"', () => {
    expect(calcLevenshteinDistance('', 'a')).toBe(1);
  });

  it('should correctly calculate the distance between "kitten" and "kitten"', () => {
    expect(calcLevenshteinDistance('kitten', 'kitten')).toBe(0);
  });

  it('should correctly calculate the distance between "abcdef" and "azced"', () => {
    expect(calcLevenshteinDistance('abcdef', 'azced')).toBe(3);
  });
});
