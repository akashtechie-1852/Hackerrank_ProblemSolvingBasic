/*
 * Complete the 'mostActive' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY customers as parameter.
 */

function mostActive(customers) {
  const d = new Map();
  for (const c of customers) {
    d.set(c, (d.get(c) || 0) + 1);
  }
  const result = [];
  for (const [customer, count] of d.entries()) {
    if (count / customers.length >= 0.05) {
      result.push(customer);
    }
  }
  return result.sort();
}

// Example usage:
const customers = ["A", "B", "C", "A", "B", "A", "C", "A", "D", "D", "D"];
const result = mostActive(customers);
console.log(result);
