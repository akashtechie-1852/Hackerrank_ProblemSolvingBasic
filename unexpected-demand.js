/*
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
  order.sort((a, b) => a - b);
  let ans = 0;
  for (let x of order) {
    if (x <= k) {
      ans += 1;
      k -= x;
    } else {
      break;
    }
  }
  return ans;
}

const orderCount = parseInt(readLine().trim(), 10);

let order = [];

for (let i = 0; i < orderCount; i++) {
  const orderItem = parseInt(readLine().trim(), 10);
  order.push(orderItem);
}

const k = parseInt(readLine().trim(), 10);

const result = filledOrders(order, k);

console.log(result);
