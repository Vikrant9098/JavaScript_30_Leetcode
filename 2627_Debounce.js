/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId; // Variable to hold the timeout ID

    return function(...args) {
        // Clear the previous timeout if it exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to call the function after t milliseconds
        timeoutId = setTimeout(() => {
            fn(...args); // Call the original function with the provided arguments
        }, t);
    }
};

/**
 * Example usage:
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
