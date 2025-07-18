/**
 * @param {Object|Array} obj - The input can be either an object or an array.
 * @return {boolean} - Returns true if the object or array is empty; otherwise, false.
 */
var isEmpty = function(obj) {
    // Object.keys(obj) returns an array of all keys in the object or indices in the array.
    // If the length of that array is 0, it means there are no key-value pairs (for objects)
    // or elements (for arrays), hence it's empty.
    return Object.keys(obj).length === 0;
};
