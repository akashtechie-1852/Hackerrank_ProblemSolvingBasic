function findSubstring(s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let cur = 0;
  let best = 0;
  let ans = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      cur++;
    }
  }
  best = cur;

  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      cur++;
    }
    if (vowels.includes(s[i - k])) {
      cur--;
    }
    if (cur > best) {
      best = cur;
      ans = i - k + 1;
    }
  }

  if (best > 0) {
    return s.slice(ans, ans + k);
  } else {
    return "Not found!";
  }
}

// Test the function
const s = "abcaeiou";
const k = 3;
const result = findSubstring(s, k);
console.log(result); // Output will be "aei"
