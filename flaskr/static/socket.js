import EventEmitter from './event_emitter.js';

// static/js/socket.js
const socket = io('ws://localhost:8000'); // Adjust the URL/port as needed
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

socket.on('available_streams', (data) => {
    console.log('Received available streams from backend:', data);
    eventEmitter.emit('available_streams', data);
});

socket.on('connected_streams', (data) => {
    console.log('Received connected streams from backend:', data);
    eventEmitter.emit('connected_streams', data);
});

socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
});

function startServerStatusing(){
    socket.emit('server_status');
    console.log('Started streaming data for server status');
}

// Start a stream with a unique stream ID
function startStreaming(statusId, streamId) {
    socket.emit('start_streaming', { streamId: streamId, statusId: statusId });
    console.log(`Submitted streaming request for stream ID: ${streamId}`);
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

function requestAvailableStreams(){
    console.log('Submited request for available streams');
    socket.emit('available_streams')
}

function requestConnectedStreams(){
    console.log('Submited request for connected streams');
    socket.emit('connected_streams')
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

function onAvailableStreamsReceived(callback) {
    eventEmitter.on('available_streams', callback);
}

function onConnectedStreamsReceived(callback) {
    eventEmitter.on('connected_streams', callback);
}

// Export the socket object if needed
export { socket };
export { requestDataFromBackend };
export { startServerStatusing };
export { startStreaming };
export { stopStreaming };
export { requestLayer };
export { requestAvailableStreams };
export { requestConnectedStreams };

export { onDataReceived };
export { onStatusReceived };
export { onLayerReceived };
export { onAvailableStreamsReceived };
export { onConnectedStreamsReceived };


