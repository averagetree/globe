from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
from werkzeug.exceptions import abort
import threading
import time
import json

from . import socketio
# from . import injector
streams = {}

from flaskr.injector import get_airport_data_request
from flaskr.injector import get_flight_data
from flaskr.injector import get_mock_flight_data

import csv
import click
import re


@socketio.on('connect')
def handle_connect():
    print("Client connected")

# @socketio.on('custom_event')
# def handle_custom_event(data):
#     print(f"Received data: {data}")
#     socketio.emit('response_event', {'status': 'success', 'received': data})

@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnected")

@socketio.on('flight_data')
def handle_flight_data(data):
    print(f"Received request for flight data: {data}")
    socketio.emit('response_event', {'status': 'success', 'received': data})

@socketio.on('request_data')
def handle_request_data(data):
    print('Received request:', data)

    # # Process the data (for example, retrieve data from Redis or some other source)
    # timestamp = data.get('timestamp')
    
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
    
    # Check if the stream is already active
    if stream_id in streams and streams[stream_id]['active']:
        return  # Stream is already active, do nothing
    
    # Mark the stream as active
    streams[stream_id] = {'active': True}
    print(f"Streaming started for {stream_id}.")

    # socketio.emit('server_status', 'critical')
    threading.Thread(target=publish_status).start()


# Event listener for starting the stream
@socketio.on('start_streaming')
def handle_start_streaming(data):
    stream_id = data.get('streamId')
    
    # Check if the stream is already active
    if stream_id in streams and streams[stream_id]['active']:
        return  # Stream is already active, do nothing
    
    # Mark the stream as active
    streams[stream_id] = {'active': True}
    print(f"Streaming started for {stream_id}.")
    
    # Start a background thread for this stream
    threading.Thread(target=stream_data, args=(stream_id,)).start()

# Event listener for stopping the stream
@socketio.on('stop_streaming')
def handle_stop_streaming(data):
    stream_id = data.get('streamId')
    
    # Stop the stream by marking it as inactive
    if stream_id in streams:
        streams[stream_id]['active'] = False
        print(f"Streaming stopped for {stream_id}.")
    else:
        print(f"Stream ID {stream_id} not found.")

@socketio.on('request_layer')
def handle_layer_request(data):
    layer_id = data.get('id')

    if layer_id == 'airport-data':
        # make airport data request 
        ret_data = get_airport_data_request(data)
        socketio.emit('request_layer', ret_data)
    else:
        print('Invalid layer received: ', layer_id)


def stream_data(stream_id):
    longitude = -122.45
    timestamp = 1600474260
    while streams.get(stream_id, {}).get('active', False):
        # Simulate data streaming
        if stream_id == 'mock-flights':
            # all_data, longitude = get_mock_flight_data(stream_id, longitude)
        # else:
            all_data, timestamp = get_flight_data(timestamp)
            socketio.emit('streamed_data', all_data)
        time.sleep(1)  # Send data every 1 second

def publish_status():
    while(1):
        all_stream_status = []
        for stream in streams:
            all_stream_status.append({
                "stream_id": stream,
                "running": streams[stream]['active']
            })

        socketio.emit('server_status', all_stream_status)
        time.sleep(4)  # Send data every 15 second

# @socketio.on('disconnect')
# def handle_disconnect():
#     print('Client disconnected')