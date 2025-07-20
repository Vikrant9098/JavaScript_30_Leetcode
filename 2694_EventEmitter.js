class EventEmitter {
    constructor() {
        // Create a Map to store event names and their associated callbacks
        this.events = new Map();
    }

    /**
     * Subscribes a callback function to an event
     * @param {string} eventName - name of the event to subscribe to
     * @param {Function} callback - function to call when the event is emitted
     * @return {Object} - an object with an unsubscribe method
     */
    subscribe(eventName, callback) {
        // If event doesn't exist yet, initialize with an empty array
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listeners = this.events.get(eventName); // Get list of callbacks for the event
        const listener = { callback }; // Wrap callback in an object for easy removal
        listeners.push(listener); // Add the listener to the event

        return {
            unsubscribe: () => {
                // Find index of the callback object
                const index = listeners.indexOf(listener);
                if (index !== -1) {
                    listeners.splice(index, 1); // Remove it from the list
                }
            }
        };
    }

    /**
     * Emits an event by calling all its registered callbacks
     * @param {string} eventName - name of the event to emit
     * @param {Array} args - arguments to pass to each callback
     * @return {Array} - array of results returned from each callback
     */
    emit(eventName, args = []) {
        const listeners = this.events.get(eventName) || []; // Get callbacks or empty array
        return listeners.map(listener => listener.callback(...args)); // Call each callback
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // removes the callback
 * emitter.emit('onClick'); // []
 */
