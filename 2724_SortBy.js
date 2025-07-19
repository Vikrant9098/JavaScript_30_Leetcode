/**
 * @param {Array} arr - The array to be sorted
 * @param {Function} fn - A function that returns a number used to sort the elements
 * @return {Array} - The array sorted based on the output of fn
 */
var sortBy = function(arr, fn) {
    // Use the built-in JavaScript sort method
    // Compare two elements a and b using the result of fn(a) and fn(b)
    return arr.sort((a, b) => fn(a) - fn(b));
};
