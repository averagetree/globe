// eventEmitter.js
class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Register an event listener
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    // Emit an event to all listeners
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(data));
        }
    }
}

// Export the EventEmitter class
export default EventEmitter;
