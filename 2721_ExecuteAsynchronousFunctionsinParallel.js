/**
 * @param {Function[]} functions
 * @return {Promise}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = []; // Array to store resolved values
        let completed = 0; // Counter for completed promises

        // Iterate over each function in the array
        for (let i = 0; i < functions.length; i++) {
            // Call the function and get the promise
            functions[i]().then(value => {
                results[i] = value; // Store the resolved value in the correct index
                completed++; // Increment the completed counter

                // Check if all promises have completed
                if (completed === functions.length) {
                    resolve(results); // Resolve the promise with the results array
                }
            }).catch(error => {
                reject(error); // Reject the promise with the error of the first rejection
            });
        }
    });
};

/**
 * Example usage:
 * const functions = [
 *     () => new Promise(resolve => setTimeout(() => resolve(5), 200))
 * ];
 * promiseAll(functions).then(console.log); // [5]
 *
 * const functionsWithError = [
 *     () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
 *     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
 * ];
 * promiseAll(functionsWithError).catch(console.log); // "Error"
 *
 * const multipleFunctions = [
 *     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
 *     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
 *     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
 * ];
 * promiseAll(multipleFunctions).then(console.log); // [4, 10, 16]
 */
