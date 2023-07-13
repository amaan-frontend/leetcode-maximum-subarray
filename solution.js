/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];  // Initialize maxSum with the first element
    let currentSum = nums[0];  // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Calculate the currentSum by either adding the current element or starting a new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
