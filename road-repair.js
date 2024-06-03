/*
 * Complete the 'getMinCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY crew_id
 *  2. INTEGER_ARRAY job_id
 */

function getMinCost(crew_id, job_id) {
  crew_id.sort((a, b) => a - b);
  job_id.sort((a, b) => a - b);
  return crew_id.reduce(
    (acc, c, index) => acc + Math.abs(c - job_id[index]),
    0
  );
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let crew_id = [];
let job_id = [];

rl.question("Enter the number of crew IDs: ", (crew_id_count) => {
  console.log("Enter crew IDs:");
  readInput(crew_id_count, crew_id, () => {
    rl.question("Enter the number of job IDs: ", (job_id_count) => {
      console.log("Enter job IDs:");
      readInput(job_id_count, job_id, () => {
        const result = getMinCost(crew_id, job_id);
        console.log("Minimum cost:", result);
        rl.close();
      });
    });
  });
});

function readInput(count, array, callback) {
  let remaining = count;
  rl.on("line", (input) => {
    array.push(parseInt(input.trim(), 10));
    remaining--;
    if (remaining === 0) {
      callback();
    }
  });
}
