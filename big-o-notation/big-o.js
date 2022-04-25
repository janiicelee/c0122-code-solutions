/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    if (!seen[word]) {              // 1 * 1 = O(1)
      seen[word] = true;
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 2 * n = O(2n)
    for (
      let c = 0;                    // n * n = O(n^2)
      c < i;                        // n * n = O(n^2)
      c++                           // n * n = O(n^2)
    ) {
      const comparing = words[c];   // 1 * 1 = O(1)
      if (comparing === word) {     // 1 * 1 = O(1)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;                    // n * n = O(n^2)
} // Big O Notation for uniqueQuadratic: O(n^2)
