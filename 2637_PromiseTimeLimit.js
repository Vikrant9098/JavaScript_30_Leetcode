/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a promise that resolves with the result of fn
        const fnPromise = fn(...args);
        
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Use Promise.race to race the two promises
        try {
            const result = await Promise.race([fnPromise, timeoutPromise]);
            return result; // If fnPromise resolves first, return the result
        } catch (err) {
            throw err; // If timeoutPromise rejects, throw the error
        }
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
