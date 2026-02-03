var subarraySum = function (nums, k) {
    let n = nums.length;
    let count = 0;
    // for (let i = 0; i < n; i++) {
    //     let sum = 0;
    //     for (let j = i; j < n; j++) {
    //         sum += nums[j];
    //         console.log(sum);
    //         if (sum === k) {

    //             count += 1;
    //         }
    //     }
    // }
    let map = new Map();
    let sum = 0;
    map.set(0, 1);
    for (let num of nums) {
        sum += num;


        if (map.has(sum - k)) {
            // there are different sub array that has same prefix , we need to add all

            count += map.get(sum-k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};