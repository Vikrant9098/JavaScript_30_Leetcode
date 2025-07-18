/**
 * @param {Array} arr - The input array to be chunked.
 * @param {number} size - The desired chunk size for each subarray.
 * @return {Array} - Returns a new array where each element is a subarray of length `size`.
 */
var chunk = function(arr, size) {
    const result = []; // Initialize an empty array to hold the final chunked subarrays.

    // Iterate through the input array in steps of `size`
    for (let i = 0; i < arr.length; i += size) {
        // Use slice to create a subarray from index `i` to `i + size` (exclusive)
        const chunk = arr.slice(i, i + size);
        result.push(chunk); // Add the subarray to the result
    }

    return result; // Return the final array of chunks
};
