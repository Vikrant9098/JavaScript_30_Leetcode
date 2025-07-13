/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // Create a new array to store filtered elements
    const filteredArr = [];
    
    // Iterate through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function to current element and index
        // If the result is truthy, include the element in filtered array
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    // Return the new array with filtered elements
    return filteredArr;
};