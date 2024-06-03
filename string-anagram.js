/*
 * Complete the 'stringAnagram' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY dictionary
 *  2. STRING_ARRAY query
 */

function stringAnagram(dictionary, query) {
  const d = new Map();
  dictionary.forEach((w) => {
    const sortedW = w.split("").sort().join("");
    d.set(sortedW, (d.get(sortedW) || 0) + 1);
  });
  const ans = [];
  query.forEach((w) => {
    const sortedW = w.split("").sort().join("");
    ans.push(d.get(sortedW) || 0);
  });
  return ans;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dictionary = [];
let query = [];

rl.question("Enter dictionary count: ", (dictionaryCount) => {
  dictionaryCount = parseInt(dictionaryCount);
  console.log("Enter dictionary words:");
  let dictionaryCounter = 0;
  rl.on("line", (input) => {
    dictionaryCounter++;
    dictionary.push(input);
    if (dictionaryCounter === dictionaryCount) {
      rl.question("Enter query count: ", (queryCount) => {
        queryCount = parseInt(queryCount);
        console.log("Enter query words:");
        let queryCounter = 0;
        rl.on("line", (input) => {
          queryCounter++;
          query.push(input);
          if (queryCounter === queryCount) {
            const result = stringAnagram(dictionary, query);
            console.log(result.join("\n"));
            rl.close();
          }
        });
      });
    }
  });
});
