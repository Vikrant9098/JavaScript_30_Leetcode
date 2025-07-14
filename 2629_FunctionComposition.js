// Function composition: compose functions from right to left
// [f, g, h] becomes f(g(h(x)))

var compose = function(functions) {
    return function(x) {
        // Handle empty array case - return identity function
        if (functions.length === 0) {
            return x;
        }
        
        // Apply functions from right to left using reduceRight
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

// Alternative solution using for loop (more explicit):
var compose2 = function(functions) {
    return function(x) {
        // Handle empty array case
        if (functions.length === 0) {
            return x;
        }
        
        let result = x;
        // Loop from right to left (last to first function)
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

// Logic:
// 1. Return a function that takes parameter x
// 2. If empty array, return x (identity function)
// 3. Use reduceRight to apply functions from right to left
// 4. Each function takes result of previous function as input

// Test examples:
// Example 1: [x => x + 1, x => x * x, x => 2 * x], x = 4
// 2 * 4 = 8, then 8 * 8 = 64, then 64 + 1 = 65

// Example 2: [x => 10 * x, x => 10 * x, x => 10 * x], x = 1  
// 10 * 1 = 10, then 10 * 10 = 100, then 10 * 100 = 1000