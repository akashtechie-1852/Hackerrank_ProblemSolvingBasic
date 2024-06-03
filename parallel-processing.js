/*
 * Complete the 'minTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY files
 *  2. INTEGER numCores
 *  3. INTEGER limit
 */

function minTime(files, numCores, limit) {
  let x = [];
  let y = [];
  for (let f of files) {
    if (f % numCores === 0) {
      x.push(f);
    } else {
      y.push(f);
    }
  }
  x.sort((a, b) => b - a);
  return (
    Math.floor(
      x.slice(0, limit).reduce((acc, curr) => acc + curr, 0) / numCores
    ) +
    x.slice(limit).reduce((acc, curr) => acc + curr, 0) +
    y.reduce((acc, curr) => acc + curr, 0)
  );
}

const files_count = parseInt(readLine().trim(), 10);

let files = [];

for (let i = 0; i < files_count; i++) {
  const files_item = parseInt(readLine().trim(), 10);
  files.push(files_item);
}

const numCores = parseInt(readLine().trim(), 10);

const limit = parseInt(readLine().trim(), 10);

const result = minTime(files, numCores, limit);

console.log(result);
