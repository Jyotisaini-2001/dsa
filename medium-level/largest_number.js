/** @format */

var largestNumber = function (nums) {
  // individual number doesn't decide which number comes first, for example:
  // 9 and 91. so there is two case: "991" and "919"
  // another: 34, 3 so two case:  "334" and "343"

  // so we need to compare each pair or follow a+b and b+a rule in string
  //example: 10, and 2
  // a+b ="102"
  //b+a = "210"

  nums = nums.map(String); // convert all numbers in string

  // now apply comparision rule
  // for highest number follow =(b+a)=(a+b)
  // for smallest  : (a+b)-(b+a)
  nums.sort((a, b) => b + a - (a + b));
  // ["0","0","0","0"...] => ["0"]

  if (nums[0] === "0") return "0";
  return nums.join("");
};
console.log(largestNumber([10, 2]));
