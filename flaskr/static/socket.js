import EventEmitter from './event_emitter.js';

// static/js/socket.js
const socket = io('http://localhost:8000'); // Adjust the URL/port as needed
const eventEmitter = new EventEmitter();

let receivedFlightData = {}

socket.on('connect', () => {
    console.log('WebSocket connected');
});

socket.on('update_deck_data', (data) => {
    console.log('Received data:', data);
    // Handle received data here (e.g., update Deck.gl layers)
});

socket.on('response_data', (data) => {
    console.log('Received data from backend:', data);
    // Here, you can update the map or other UI components with the data
});

socket.on('flight_data', (data) => {
    console.log('Received flight data from backend:', data);
    // Here, you can update the map or other UI components with the data
});

socket.on('server_status', (data) => {
    // console.log('Received server status from backend:', data);
    eventEmitter.emit('server_status', data);
});

socket.on('streamed_data', (data) => {
    // console.log('Received flight data from backend:', data);
    eventEmitter.emit('data_received', data);
});

socket.on('request_layer', (data) => {
    // console.log('Received layer data from backend:', data);
    eventEmitter.emit('request_layer', data);
});

socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
});

function startServerStatusing(){
    socket.emit('server_status');
    console.log('Started streaming data for server status');
}

// Start a stream with a unique stream ID
function startStreaming(streamId) {
    socket.emit('start_streaming', { streamId: streamId });
    console.log(`Started streaming data for stream ID: ${streamId}`);
}

// Stop a stream with a unique stream ID
function stopStreaming(streamId) {
    socket.emit('stop_streaming', { streamId: streamId });
    console.log(`Stopped streaming data for stream ID: ${streamId}`);
}

function requestLayer(data){
    console.log('Submited layer');
    socket.emit('request_layer', data)
}

function requestDataFromBackend(timestamp) {
    // Emit a request to the backend with a timestamp
    socket.emit('request_data', { timestamp: timestamp });
}

function onDataReceived(callback) {
    eventEmitter.on('data_received', callback);
}

function onStatusReceived(callback) {
    eventEmitter.on('server_status', callback);
}

function onLayerReceived(callback) {
    eventEmitter.on('request_layer', callback);
}

// Export the socket object if needed
export { socket };
export { requestDataFromBackend };
export { startServerStatusing };
export { startStreaming };
export { stopStreaming };
export { requestLayer };

export { onDataReceived };
export { onStatusReceived };
export { onLayerReceived };


