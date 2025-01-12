import socketio

# Create a Socket.IO client
sio = socketio.Client()

# Define event handlers
@sio.on('connect')
def on_connect():
    print("Connected to server")
    sio.emit('custom_event', {'message': 'Hello from Python client'})

@sio.on('response_event')
def on_response(data):
    print("Received from server:", data)

@sio.on('disconnect')
def on_disconnect():
    print("Disconnected from server")

# Connect to the WebSocket server
sio.connect('http://localhost:8000')
sio.wait()