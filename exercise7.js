/* 
    Given a binary array nums, return the maximum number of consecutive 1's in the array 

    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. 
    The maximum number of consecutive 1s is 3.

*/

var findMaxConsecutiveOnes = function (nums) {
  if (!Array.isArray(nums)) return false;

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 1) sum += 1;
      if (nums[j] === 0) break;
      max = Math.max(max, sum);
    }
  }

  return max;
};
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1, 1, 1]));
