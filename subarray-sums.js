/*
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

function findSum(numbers, queries) {
  const a = [0];
  const b = [0];
  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    a.push(a[a.length - 1] + x);
    b.push(b[b.length - 1] + (x === 0 ? 1 : 0));
  }
  return queries.map(([l, r, x]) => a[r] - a[l - 1] + x * (b[r] - b[l - 1]));
}

const numbers_count = parseInt(readLine().trim(), 10);
const numbers = [];

for (let i = 0; i < numbers_count; i++) {
  const numbers_item = parseInt(readLine().trim(), 10);
  numbers.push(numbers_item);
}

const queries_rows = parseInt(readLine().trim(), 10);
const queries_columns = parseInt(readLine().trim(), 10);
const queries = [];

for (let i = 0; i < queries_rows; i++) {
  queries.push(
    readLine()
      .trim()
      .split(" ")
      .map((queries_temp) => parseInt(queries_temp, 10))
  );
}

const result = findSum(numbers, queries);

result.forEach((res) => console.log(res));
