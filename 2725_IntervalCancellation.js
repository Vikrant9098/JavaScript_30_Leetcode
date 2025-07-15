/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let intervalId = null; // To store the interval ID for repeated function calls
    let result = []; // To store the results of the function calls
    let startTime = performance.now(); // Record the start time

    // Function to log the result of fn with the current time
    const log = () => {
        const currentTime = Math.floor(performance.now() - startTime);
        result.push({"time": currentTime, "returned": fn(...args)});
    };

    // Call the function immediately
    log();

    // Set an interval to call the function every t milliseconds
    intervalId = setInterval(log, t);

    // Return the cancel function
    return function() {
        clearInterval(intervalId); // Clear the interval when cancelFn is called
        return result; // Return the collected results
    };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
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
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */
