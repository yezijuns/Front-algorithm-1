/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let n = target - num;
        if(num in obj) {
            return [i, obj[num]]
        } else {
            obj[n] = i
        }
    }
};

// for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target && i !== j)
//                 return[i, j]
//         }
//     }