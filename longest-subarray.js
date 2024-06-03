/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
  const n = arr.length;
  let ans = 0;
  // O(n^2) is okay because of constraints.
  for (let i = 0; i < n; i++) {
    const w = [];
    let cnt = 0;
    for (let j = i; j < n; j++) {
      if (w.includes(arr[j])) {
        cnt += 1;
        continue;
      }
      if (w.length === 0) {
        w.push(arr[j]);
      } else if (w.length === 1) {
        if (Math.abs(w[0] - arr[j]) > 1) {
          break;
        } else {
          w.push(arr[j]);
        }
      } else {
        break;
      }
      cnt += 1;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
}

const arr = [1, 2, 3, 4, 5];
const result = longestSubarray(arr);
console.log(result);
