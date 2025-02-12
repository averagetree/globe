from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
import json
from flaskr.db import get_db
from flaskr.airport_data_stream import ingest_airport_csv

# interface between individual data source streams and socket

# return available streams to FE

# convert stream data to geojson

# write data to db

def get_available_streams():
    available_streams = [
        { 
          'stream_value': 'airport-data-stream',
          'stream_label': 'Airport Data'
        },
        { 
          'stream_value': 'flight-data-stream',
          'stream_label': 'Flight Data'
        }
    ]

    return available_streams

def process_stream_request(stream_id):
    if stream_id == 'airport-data-stream':
        process_airport_data_stream(stream_id)
    elif stream_id == 'flight-data-stream':
        process_flight_data_stream(stream_id)
    else:
        print('unable to start stream')

def process_airport_data_stream(stream_id):
    stats, ret_data = ingest_airport_csv()

    write_geojson_to_db(stream_id, ret_data)

def process_flight_data_stream(stream_id):
    stats, ret_data = ingest_airport_csv()

    write_geojson_to_db("flight_data", ret_data)

def write_geojson_to_db(key, data_stream):
    db_client = get_db()

    count = 0
    for data in data_stream:
        db_client.hset(key, str(count), json.dumps(data))
        count += 1
