/**
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  let n = nums.length;
  let maxLength = 0;
  let currLength = 1;
  // 1> brute force
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < n - 1; i++) {
  //     if (nums[i + 1] - nums[i] === 1) {
  //         currLength += 1;
  //     }
  //     maxLength = Math.max(maxLength, currLength);
  // }
  // approach 2:
  // point 1=> we don't have to order the element for the sequence
  // we just need to find, does the element exist in sequence
  // how to find which is start of sequence:
  // if there is not element for (number-1): then number is start of a sequence     // now how to find number-1 exist or not, so we need to put all the elements somewhere     // we can put in a map or set
  let element = null;
  let set = new Set(nums);
  for (let num of set) {
    if (!set.has(num - 1)) {
      element = num;
      currLength = 1;
      while (set.has(element + 1)) {
        currLength += 1;
        element += 1;
      }
    }
    maxLength = Math.max(maxLength, currLength);
  }
  return maxLength;

  // explain using example :[1,2,3,4,5] that time complexity is only o(n), because each element is visited only once
};
