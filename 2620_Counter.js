/**
 * @param {number} n - The starting number for the counter
 * @return {Function} counter - A function that returns increasing numbers on each call
 */
var createCounter = function(n) {
    
    // Return a new function that keeps track of and returns the current count
    return function() {
        // Return current value of n, then increment it for the next call
        return n++;
    };
};

/** 
 * Create a counter starting from 10
 * const counter = createCounter(10)

 * First call returns 10
 * counter() // 10

 * Second call returns 11
 * counter() // 11

 * Third call returns 12
 * counter() // 12
 */
