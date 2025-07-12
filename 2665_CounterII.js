/**
 * @param {integer} init
 * @return {Object}
 */
var createCounter = function(init) {
    // Store the initial value for reset functionality
    let originalInit = init;
    // Store the current value that will be modified
    let currentValue = init;
    
    // Return an object with three counter methods
    return {
        // Method to increase current value by 1
        increment() {
            // Add 1 to current value
            currentValue++;
            // Return the new value
            return currentValue;
        },
        // Method to decrease current value by 1
        decrement() {
            // Subtract 1 from current value
            currentValue--;
            // Return the new value
            return currentValue;
        },
        // Method to reset current value to initial value
        reset() {
            // Set current value back to original init
            currentValue = originalInit;
            // Return the reset value
            return currentValue;
        }
    };
};

/**
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */