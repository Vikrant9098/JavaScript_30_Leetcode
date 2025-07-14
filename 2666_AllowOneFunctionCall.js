// Create a function that can only be called once
// First call returns result, subsequent calls return undefined

var once = function(fn) {
    let called = false;  // Track if function has been called
    
    return function(...args) {
        // If already called, return undefined
        if (called) {
            return undefined;
        }
        
        // Mark as called and execute original function
        called = true;
        return fn(...args);
    };
};

// Alternative solution using closure with result caching:
var once2 = function(fn) {
    let hasBeenCalled = false;
    let result;
    
    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
};

// Logic:
// 1. Use closure to maintain 'called' state
// 2. Return new function that checks if already called
// 3. First call: set called=true and return fn result
// 4. Subsequent calls: return undefined immediately

// Test examples:
// fn = (a,b,c) => (a + b + c)
// onceFn = once(fn)
// onceFn(1,2,3) → called=false, set called=true, return 6
// onceFn(2,3,6) → called=true, return undefined