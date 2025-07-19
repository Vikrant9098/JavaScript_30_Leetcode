/**
 * @param {Function} fn - A function that returns the grouping key for each item
 * @return {Object} - An object where keys are the result of fn(item) and values are arrays of items
 */
Array.prototype.groupBy = function(fn) {
    const result = {}; // Initialize the result object

    // Loop through every element of the array (this refers to the array calling groupBy)
    for (const item of this) {
        const key = fn(item); // Apply the grouping function to get the key

        // If the key doesn't exist in the result object, create a new array for it
        if (!result[key]) {
            result[key] = [];
        }

        // Push the current item to the corresponding group
        result[key].push(item);
    }

    // Return the final grouped object
    return result;
};

/**
 * Example Usage:
 * [1, 2, 3].groupBy(String) ➝ {"1": [1], "2": [2], "3": [3]}
 */
