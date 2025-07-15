/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for first promise to resolve and get its value
    const value1 = await promise1;
    
    // Wait for second promise to resolve and get its value
    const value2 = await promise2;
    
    // Return the sum of both values
    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */