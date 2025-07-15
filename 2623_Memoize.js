/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    return function(...args) {
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};  // Store cached results
    
    return function(...args) {
        // Create unique key from arguments
        const key = JSON.stringify(args);
        
        // If result exists in cache, return it
        if (key in cache) {
            return cache[key];
        }
        
        // Otherwise, call function and cache result
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Alternative using Map for better performance:
function memoize2(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// Logic:
// 1. Use cache object to store results by argument key
// 2. Create unique key from arguments using JSON.stringify
// 3. Check cache first - return cached result if exists
// 4. Otherwise call original function and cache result
// 5. Return result (either cached or newly computed)
/*   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */