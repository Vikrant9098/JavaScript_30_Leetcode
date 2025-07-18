/**
 * Adds a `last` method to the Array prototype that returns the last element of the array.
 * If the array is empty, it returns -1.
 *
 * @return {null|boolean|number|string|Array|Object} - The last element of the array or -1 if empty
 */
Array.prototype.last = function() {
    // Check if the array has elements
    if (this.length === 0) {
        return -1; // Return -1 if the array is empty
    }

    return this[this.length - 1]; // Return the last element
};

/**
 * Example:
 * const arr = [1, 2, 3];
 * console.log(arr.last()); // Output: 3
 */
