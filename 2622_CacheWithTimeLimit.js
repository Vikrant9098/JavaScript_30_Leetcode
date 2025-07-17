var TimeLimitedCache = function() {
    // Initialize an empty object to store key-value pairs and their expiration times
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    
    // Check if the key already exists in the cache
    if (this.cache[key]) {
        // If it exists, update the value and expiration time
        this.cache[key] = { value: value, expiration: currentTime + duration };
        // Return true since the key was already present
        return true;
    } else {
        // If it does not exist, add the new key-value pair with its expiration time
        this.cache[key] = { value: value, expiration: currentTime + duration };
        // Return false since this is a new key
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    
    // Check if the key exists in the cache
    if (this.cache[key]) {
        const { value, expiration } = this.cache[key];
        // Check if the key has expired
        if (currentTime < expiration) {
            // If not expired, return the associated value
            return value;
        } else {
            // If expired, remove the key from the cache
            delete this.cache[key];
        }
    }
    
    // If the key does not exist or has expired, return -1
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    // Get the current time in milliseconds
    const currentTime = Date.now();
    let activeCount = 0; // Initialize a counter for active keys
    
    // Iterate through the cache to count non-expired keys
    for (const key in this.cache) {
        const { expiration } = this.cache[key];
        // Check if the key is still valid (not expired)
        if (currentTime < expiration) {
            activeCount++; // Increment the count for valid keys
        } else {
            // If expired, remove the key from the cache
            delete this.cache[key];
        }
    }
    
    // Return the count of non-expired keys
    return activeCount;
};

/**
 * Example usage:
 * const timeLimitedCache = new TimeLimitedCache();
 * timeLimitedCache.set(1, 42, 1000); // returns false
 * timeLimitedCache.get(1); // returns 42
 * timeLimitedCache.count(); // returns 1
 */
