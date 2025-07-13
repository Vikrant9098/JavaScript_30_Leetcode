/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // Create a new array to store transformed elements
    const result = [];
    
    // Iterate through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the transformation function to current element and index
        // Push the result to the new array
        result.push(fn(arr[i], i));
    }
    
    // Return the new array with transformed elements
    return result;
};