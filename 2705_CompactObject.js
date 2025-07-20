/**
 * @param {Object|Array} obj - Input object or array to be compacted
 * @return {Object|Array} - Returns a new object or array without falsy values
 */
var compactObject = function(obj) {
    
    // If obj is an array, process each element
    if (Array.isArray(obj)) {
        // Use filter to skip falsy values
        return obj
            .filter(Boolean) // Removes falsy items like null, 0, false, undefined, ''
            .map(item => {
                // If item is object or array, compact it recursively
                return typeof item === 'object' ? compactObject(item) : item;
            });
    }

    // If obj is an object (but not array)
    else if (typeof obj === 'object' && obj !== null) {
        let result = {}; // Create a new object to store compacted result

        // Loop through each key-value pair in the object
        for (let key in obj) {
            let value = obj[key]; // Get the value

            // Skip falsy values (null, false, 0, "", undefined)
            if (Boolean(value)) {
                // If value is an object or array, recursively compact it
                result[key] = typeof value === 'object' ? compactObject(value) : value;
            }
        }

        return result; // Return the final compacted object
    }

    // If not array or object, return as is
    return obj;
};
