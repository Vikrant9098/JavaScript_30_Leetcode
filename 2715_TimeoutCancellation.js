/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timeoutId = null; // To store the timeout ID for the function execution
    let cancelId = null; // To store the timeout ID for the cancel function

    // Set a timeout to execute the function after t milliseconds
    timeoutId = setTimeout(() => {
        fn(...args); // Execute the function with the provided arguments
    }, t);

    // Return the cancel function
    return function() {
        // If the cancel function is called, clear the timeout for the function execution
        clearTimeout(timeoutId);
        // Optionally, you can also clear the cancel timeout if needed
        // clearTimeout(cancelId);
    };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
