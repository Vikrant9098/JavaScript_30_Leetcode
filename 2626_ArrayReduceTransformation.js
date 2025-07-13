/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Initialize accumulator with the initial value
    let accumulator = init;
    
    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function to accumulator and current element
        // Update accumulator with the result for next iteration
        accumulator = fn(accumulator, nums[i]);
    }
    
    // Return the final accumulated value
    return accumulator;
};