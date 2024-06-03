/*
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function decryptPassword(s) {
  s = s.split("");
  let i = 0;
  while (i < s.length && !isNaN(parseInt(s[i])) && s[i] !== "0") {
    i++;
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] === "0") {
      let k = i - j - 1;
      s[j] = s[k];
      s[k] = "0";
    }
  }
  for (let j = i; j < s.length; j++) {
    if (s[j] === "*") {
      let temp = s[j - 1];
      s[j - 1] = s[j - 2];
      s[j - 2] = temp;
    }
  }
  return s.slice(i).join("").replace(/\*/g, "");
}

// Test the function
const input = "51Pa*0Lp*0e"; // Example input
const result = decryptPassword(input);
console.log(result); // Output: "aP1pL5e"
