/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // Store the input array inside the object
    this.nums = nums;
};

/**
 * This method is called when using + operator (e.g., obj1 + obj2)
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // Reduce the array to get the sum of its elements
    return this.nums.reduce((sum, num) => sum + num, 0);
};

/**
 * This method is called when using String(obj)
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Convert array to string with brackets
    return `[${this.nums.join(',')}]`;
};

/**
 * Example usage:
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10 -> valueOf() is called for both
 * String(obj1); // "[1,2]" -> toString() is called
 * String(obj2); // "[3,4]"
 */
