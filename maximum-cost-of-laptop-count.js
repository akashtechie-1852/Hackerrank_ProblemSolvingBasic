function maxCost(cost, labels, dailyCount) {
  let ans = 0;
  let cur_cnt = 0;
  let cur_cost = 0;
  for (let i = 0; i < cost.length; i++) {
    cur_cost += cost[i];
    if (labels[i] === "illegal") {
      continue;
    }
    cur_cnt++;
    if (cur_cnt === dailyCount) {
      ans = Math.max(ans, cur_cost);
      cur_cnt = 0;
      cur_cost = 0;
    }
  }
  return ans;
}

// Sample usage:
const cost = [10, 20, 30, 40];
const labels = ["legal", "legal", "illegal", "legal"];
const dailyCount = 2;
const result = maxCost(cost, labels, dailyCount);
console.log(result);
