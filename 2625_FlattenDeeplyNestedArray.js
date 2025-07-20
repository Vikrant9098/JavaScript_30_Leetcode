/**
 * @param {Array} arr - The multi-dimensional array to be flattened
 * @param {number} depth - The max depth to flatten up to
 * @return {Array} - The flattened array
 */
var flat = function (arr, depth) {
  // Helper function to flatten array recursively
  const flatten = (arr, currentDepth) => {
    let result = []; // To store the flattened result

    for (let item of arr) {
      // If item is an array and we can go deeper
      if (Array.isArray(item) && currentDepth < depth) {
        // Recursively flatten the item, increasing depth by 1
        result.push(...flatten(item, currentDepth + 1));
      } else {
        // If item is not an array or depth limit reached, push as is
        result.push(item);
      }
    }

    return result; // Return the partially/fully flattened result
  };

  // Start flattening from depth 0
  return flatten(arr, 0);
};
