// Define the main function named createHelloWorld
function createHelloWorld() {
    
    // Return a new inner function
    return function() {
        // This inner function always returns the string "Hello World"
        return 'Hello World';
    };
}

// Call createHelloWorld (returns a function), can be stored and called later
createHelloWorld();
