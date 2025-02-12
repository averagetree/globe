from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
import json
from flaskr.db import get_db
from flaskr.airport_data_stream import ingest_airport_csv

# request data from stream

def process_layer_request(stream_id):
    if stream_id == 'airport-data-stream':
        airport_data = process_airport_data_layer(stream_id)
        return airport_data
    elif stream_id == 'flight-data-stream':
        return process_flight_data_layer()
    else:
        print('unable to process layer')

def process_airport_data_layer(stream_id):
    db_client = get_db()

    ret_data = db_client.hgetall(stream_id)
    decoded_hash_data = {key.decode('utf-8'): value.decode('utf-8') for key, value in ret_data.items()}

    return decoded_hash_data

def process_flight_data_layer():
    pass

