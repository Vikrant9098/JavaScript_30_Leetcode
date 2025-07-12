/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // Return an object with two testing methods
    return {
        // Method to check if values are equal
        toBe(target) {
            // Check if val equals target using strict equality
            if(val === target) return true;
            // Throw error if values don't match
            else throw new Error("Not Equal")
        },
        // Method to check if values are NOT equal
        notToBe(target) {
            // Check if val does NOT equal target
            if(val !== target) return true;
            // Throw error if values are the same
            else throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */