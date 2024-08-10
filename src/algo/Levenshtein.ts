// Levenshtein distance = a string metric for measuring the difference between two sequences.

export default function calcLevenshteinDistance(
  str1: string,
  str2: string
): number {
  const table: number[][] = [];

  // initialize table
  for (let i = 0; i <= str1.length; i++) {
    table.push(Array.from({ length: str2.length + 1 }).fill(0) as number[]);
  }

  // initialize first row
  for (let i = 0; i <= str2.length; i++) {
    table[0][i] = i;
  }

  // initialize first column
  for (let i = 0; i <= str1.length; i++) {
    table[i][0] = i;
  }

  // populate column using previously calculated values
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // last characters of the two strings matched. no further action needed
        table[i][j] = table[i - 1][j - 1];
      } else {
        // [i - 1][j - 1] -> substitute one character to the other so that the two characters match. move pointers to create a pair of shorter strings (ex: cart / cash -> turn t into h and compare car and cas)
        // [i][j - 1] -> add one character to one string, move pointer of the other to compare first i characters and j - 1 characters of each string (ex: cat / cars -> add 's' to cat, compare cat and car)
        // [i - 1][j] -> remove one character from one string, move pointer of that string to compare first i - 1 characters and j characters of each string (ex: goals / pole -> remove 's', compare goal and pole)
        table[i][j] =
          1 + Math.min(table[i - 1][j - 1], table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  return table[str1.length][str2.length];
}
