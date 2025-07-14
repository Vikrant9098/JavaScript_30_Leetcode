// Return the count of arguments passed to the function
// Use rest parameters to capture all arguments

var argumentsLength = function(...args) {
    // Return the length of the arguments array
    return args.length;
};

// Alternative solution using arguments object (older approach):
var argumentsLength2 = function() {
    // Use built-in arguments object to get argument count
    return arguments.length;
};

// Logic:
// 1. Use rest parameters (...args) to collect all arguments into an array
// 2. Return the length property of the arguments array
// 3. Works for any number of arguments (0 to 100)

// Test examples:
// argumentsLength(5) → args = [5] → length = 1
// argumentsLength({}, null, "3") → args = [{}, null, "3"] → length = 3
// argumentsLength() → args = [] → length = 0