from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
from werkzeug.exceptions import abort
import threading
import time
import json

from . import socketio
# from . import injector
in_use_streams = []

from flaskr.injector import get_airport_data
from flaskr.injector import get_flight_data
from flaskr.injector import get_mock_flight_data

from flaskr.streams import get_available_streams
from flaskr.streams import process_stream_request

from flaskr.layers import process_layer_request


@socketio.on('connect')
def handle_connect():
    print("Client connected")

@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnected")

@socketio.on('available_streams')
def handle_available_streams():
    available_streams = get_available_streams()

    in_use_ids = []
    for stream in in_use_streams:
        in_use_ids.append(stream.get('stream_id'))

    filtered_streams = [
        stream for stream in available_streams if stream.get('stream_value') not in in_use_ids
    ]

    socketio.emit('available_streams', filtered_streams)

@socketio.on('connected_streams')
def handle_connected_streams():
    socketio.emit('connected_streams', in_use_streams)

# remove
@socketio.on('flight_data')
def handle_flight_data(data):
    print(f"Received request for flight data: {data}")
    socketio.emit('response_event', {'status': 'success', 'received': data})

#remove
@socketio.on('request_data')
def handle_request_data(data):
    print('Received request:', data)

    # # For example, generate some mock data based on the timestamp
    response_data = {
        'timestamp': data,
        'altitude': 3000,  # Example altitude value
        'latitude': 37.78,
        'longitude': -122.45,
    }

    # Emit the response back to the frontend
    socketio.emit('response_data', response_data)

@socketio.on('server_status')
def handle_server_status():
    print(f"Received request for server status")
    stream_id = 'server-status'
    
    # # Check if the stream is already active
    # if stream_id in streams and streams[stream_id]['active']:
    #     return  # Stream is already active, do nothing
    
    # Mark the stream as active
    # streams[stream_id] = {'active': True}
    # streams[stream_id] = {'id': 0}

    print(f"Streaming started for {stream_id}.")

    # socketio.emit('server_status', 'critical')
    threading.Thread(target=publish_status).start()


# Event listener for starting the stream
@socketio.on('start_streaming')
def handle_start_streaming(data):
    status_id = data.get('statusId')
    stream_id = data.get('streamId')
    
    available_streams = get_available_streams()
    for available_stream in available_streams:
        if stream_id in available_stream.get('stream_value'):
            # Check if the stream is already active
            for active_stream in in_use_streams:
                if stream_id == active_stream.get('stream_id'):
                # if stream_id in streams and streams[stream_id]['active']:
                    print(f"Streaming already started for {stream_id}.")
                    # active_stream['status'] = 'caution'

                    return  # Stream is already active, do nothing

            print(f"Streaming started for {stream_id}.")

            in_use_streams.append({
                'stream_id': stream_id,
                'status_id': status_id,
                'status': 'normal'
            })

            # Start a background thread for this stream
            threading.Thread(target=process_stream_request, args=(stream_id,)).start() 
            return
    
    print(f"Invalid ID: {stream_id}.")
    return

# Event listener for stopping the stream
@socketio.on('stop_streaming')
def handle_stop_streaming(data):
    stream_id = data.get('streamId')
    
    for stream in in_use_streams:
        if stream_id == stream.get('stream_id'):
            in_use_streams.remove(stream)
            print(f"Streaming stopped for {stream_id}.")
            return

    print(f"Stream ID {stream_id} not found.")

    # Stop the stream by marking it as inactive
    # if stream_id in in_use_streams:
    #     in_use_streams[stream_id]['active'] = False
    #     print(f"Streaming stopped for {stream_id}.")
    # else:
    #     print(f"Stream ID {stream_id} not found.")

@socketio.on('request_layer')
def handle_layer_request(data):
    stream_id = data.get('stream_id')

    ret_data = process_layer_request(stream_id)

    socketio.emit('request_layer', ret_data)

# remove
def stream_data(stream_id):
    longitude = -122.45
    timestamp = 1600474260
    while in_use_streams.get(stream_id, {}).get('active', False):
        # Simulate data streaming
        if stream_id == 'mock-flights':
            # all_data, longitude = get_mock_flight_data(stream_id, longitude)
        # else:
            all_data, timestamp = get_flight_data(timestamp)
            socketio.emit('streamed_data', all_data)
        time.sleep(1)  # Send data every 1 second

def publish_status():
    while(1):
        socketio.emit('server_status', in_use_streams)
        time.sleep(5)  # Send data every 5 seconds

# @socketio.on('disconnect')
# def handle_disconnect():
#     print('Client disconnected')