var missingNumber = function (nums) {
    let n = nums.length;
    // approach 1 : sorting => o(nlogn)
    // nums.sort((a,b) => a-b);
    // for (let i = 0; i < n; i++) {
    //     if (nums[i] !== i) {
    //         console.log(i);
    //         return i;
    //          }
    // }
    // return n;

    //approach 2: maths : o(n)
    // let sum = n * (n + 1) / 2;
    // let cursum = 0;
    // for (let i = 0; i < n; i++) {
    //     cursum += nums[i];

    // }
    // return sum-cursum;

    //approach 3: hashing => o(n) , o(n)

    // let set =new Set(nums);
    // for(let i=0; i<n; i++){
    //     if(!set.has(i)) return i;
    // }
    // return n;

    // approach 4: xor :
    // in xor same number comes twice, it cancel
    // so if we xor all elements of index and all elements of array,
    // it will cancel sam numbers and remain only single

    let xor=0;
    for(let i=0; i<=n; i++){
        xor^=i;
    }
     for(let i=0; i<n; i++){
        xor^=nums[i];
    }
    return xor;
};

nums = [0, 3, 2];
console.log(missingNumber(nums))