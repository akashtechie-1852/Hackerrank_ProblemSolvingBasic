/*
 * Complete the 'mostBalancedPartition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. ARRAY parent
 *  2. ARRAY files_size
 */

function mostBalancedPartition(parent, files_size) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);

  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  const sizeSums = Array.from({ length: n });

  function sizeSumsRec(i) {
    sizeSums[i] =
      files_size[i] + children[i].reduce((acc, c) => acc + sizeSumsRec(c), 0);
    return sizeSums[i];
  }

  sizeSumsRec(0);

  return Math.min(
    ...sizeSums.slice(1).map((ss) => Math.abs(sizeSums[0] - 2 * ss))
  );
}

// Example usage:
const parent = [0, 1, 2, 2, 1]; // Example input for parent array
const files_size = [1, 2, 3, 4, 5]; // Example input for files_size array
const result = mostBalancedPartition(parent, files_size);
console.log(result); // Output the result
