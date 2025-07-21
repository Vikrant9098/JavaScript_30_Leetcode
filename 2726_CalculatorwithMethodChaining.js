class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        // Initialize result with the given starting value
        this.result = value;
    }

    /** 
     * Adds the value to result
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value; // Add to current result
        return this; // Return current object to enable chaining
    }

    /** 
     * Subtracts the value from result
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value; // Subtract from result
        return this; // Return this for chaining
    }

    /** 
     * Multiplies result by value
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value; // Multiply result with value
        return this; // Return this for chaining
    }

    /** 
     * Divides result by value
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        // Throw error if trying to divide by 0
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value; // Perform division
        return this; // Return this for chaining
    }

    /** 
     * Raises result to the power of value
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value); // Raise result to power
        return this; // Return this for chaining
    }

    /** 
     * Returns the final result value
     * @return {number}
     */
    getResult() {
        return this.result; // Return computed result
    }
}
