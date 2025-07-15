/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // Return a promise that resolves after millis milliseconds
    return new Promise(resolve => {
        // Use setTimeout to delay execution
        setTimeout(resolve, millis);
    });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */