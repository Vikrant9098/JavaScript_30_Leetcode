/**
 * @param {Array} arr1 - First array of objects with a unique 'id' key
 * @param {Array} arr2 - Second array of objects with a unique 'id' key
 * @return {Array} - Merged array of unique ids with merged properties
 */
var join = function(arr1, arr2) {
    // Create an empty object to hold merged items, using id as the key
    const map = {};

    // Loop through each object in arr1
    for (const obj of arr1) {
        // Use the id as the key and store a shallow copy of the object
        map[obj.id] = { ...obj };
    }

    // Loop through each object in arr2
    for (const obj of arr2) {
        // If id already exists in map (from arr1), merge arr2 values over arr1
        if (map[obj.id]) {
            // Spread arr1 object and then arr2 object to override with arr2 values
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            // If id doesn't exist yet, add a shallow copy of arr2 object
            map[obj.id] = { ...obj };
        }
    }

    // Convert the map values to an array and sort them by 'id' ascending
    return Object.values(map).sort((a, b) => a.id - b.id);
};
