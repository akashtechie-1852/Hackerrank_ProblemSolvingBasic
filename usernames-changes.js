/*
 * Complete the 'possibleChanges' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY usernames as parameter.
 */

function possibleChanges(usernames) {
  let ans = [];
  for (let u of usernames) {
    if (u.length <= 1) {
      ans.push("NO");
    }
    for (let i = 0; i < u.length - 1; i++) {
      if (u[i] > u[i + 1]) {
        ans.push("YES");
        break;
      }
    }
    if (ans.length !== usernames.length) {
      ans.push("NO");
    }
  }
  return ans;
}

// Example usage:
// const result = possibleChanges(["user1", "user2", "user3"]);
// console.log(result);

// Since JavaScript doesn't have an equivalent of the `os` module for file I/O, you can't directly read from and write to files.
// You would need to modify the input and output mechanisms as per your environment.
