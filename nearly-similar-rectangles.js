/*
 * Complete the 'nearlySimilarRectangles' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts 2D_LONG_INTEGER_ARRAY sides as parameter.
 */

function nearlySimilarRectangles(sides) {
  const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
  const d = new Map();

  for (const [w, h] of sides) {
    const z = gcd(w, h);
    const key = `${w / z}-${h / z}`;
    d.set(key, (d.get(key) || 0) + 1);
  }

  let result = 0;
  for (const x of d.values()) {
    result += (x * (x - 1)) / 2;
  }
  return result;
}

const sides_rows = parseInt(readLine().trim(), 10);
const sides_columns = parseInt(readLine().trim(), 10);
const sides = [];

for (let i = 0; i < sides_rows; i++) {
  sides.push(readLine().split(" ").map(Number));
}

const result = nearlySimilarRectangles(sides);
console.log(result);
