/** @format */

var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let map = new Map();
  let start = 0;
  let maxLength = 1;
  if (s === "") return 0;
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      // 1. if duplicate is in the current window already, so we need to start new window from next element means: s[i]+1
      // 2. if duplicate is outside the window, like duplicate is at index 0, and our start is already at 2, so keep same start
      // see example of "abba"
      start = Math.max(start, map.get(s[i]) + 1);
    }
    map.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};
