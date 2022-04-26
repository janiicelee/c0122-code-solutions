/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) //constant time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n) //comparison, property access //linear time
    i++                             // 2 * n = O(n) //addition and assigning that to the variable
  ) {
    const word = words[i];          // 2 * n = O(n)
    if (!seen[word]) {              // 3 * n = O(n)
      seen[word] = true;            // 2 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n) // this line runs after the next code block runs
  ) {
    const word = words[i];          // 2 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 1 * n * n = O(n^2) //n for the outer loop and n for the inner loop
      c++                           // 2 * n * n = O(n^2) //quadratic time
    ) {
      const comparing = words[c];   // 2 * n * n = O(n^2)
      if (comparing === word) {     // 2 * n * n = O(n^2) //comparison with word and checking if its truthy or not
        isUnique = false;           // 1 * n * n = O(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
