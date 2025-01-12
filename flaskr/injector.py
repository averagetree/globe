from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
from werkzeug.exceptions import abort

#from flaskr.interfacer import login_required
from flaskr.db import get_db
import csv
import click
import json
import re
import time

#bp = Blueprint('injector', __name__)
source = 'data/simple_data.csv'

def init_app(app):
    app.cli.add_command(ingest_file)
    app.cli.add_command(get_data)
    # app.cli.add_command(get_airport_data)


#@bp.route('/')
def index():
    db = get_db()

@click.command('get-data')
def get_data():
    db = get_db()

    try:
        res4 = db.geosearch(
            "airports",
            longitude=-122.27652,
            latitude=37.805186,
            radius=15,
            unit="km",
        )
        click.echo(res4)
        return res4

    except Exception as e:
        click.echo(e)
        return jsonify({'error': str(e)}), 500

# @click.command('get-airport-data')
def get_airport_data():
    locations = perform_geosearch("airports", 39.7392, -104.9903, 200, 'km')
    # click.echo(locations)
    all_locs = []
    for x in locations:
        string_data = x[0].decode('utf-8') 
        json_formatted = {'name': string_data,
                           'distance': x[1],
                            'coordinates': {
                    'longitude': round(x[2][0], 3),
                    'latitude': round(x[2][1], 3)
                }}

        all_locs.append(json_formatted)

    for y in all_locs: 

        click.echo(y)

    return jsonify(all_locs)

def get_airport_data_request(data):
    # Get the latitude and longitude from the request body
    # data = request.get_json()
    
    key = data.get('type')
    coordinates = data.get('coordinates')
    latitude = coordinates.get('latitude')
    longitude = coordinates.get('longitude')
    radius = data.get('radius')

    locations = perform_geosearch(key, latitude, longitude, radius, 'km')

    all_locs = []
    for x in locations:
        string_data = x[0].decode('utf-8') 
        json_formatted = {'name': string_data,
                           'distance': x[1],
                            'coordinates': {
                    # 'longitude': round(x[2][0], 3),
                    # 'latitude': round(x[2][1], 3)
                    'longitude': x[2][0],
                    'latitude': x[2][1]
                }}

        all_locs.append(json_formatted)

    # return jsonify(all_locs)
    return all_locs

def geosearch_to_json(results):
    json_result = [
        {
            "name": location[0],
            "distance": location[1],
            "coordinates": {
                "longitude": location[2][0],
                "latitude": location[2][1]
            }
        }
        for location in results
    ]

    return json.dumps(json_result, indent=2)

def perform_geosearch(key, lat, long, radius, unit='km'):
    db = get_db()
    try:
        result = db.geosearch(
            name=key,
            longitude=long,
            latitude=lat,
            radius=radius,
            unit=unit,
            withcoord=True,
            withdist=True
        )
    
        return result

    except Exception as e:
        click.echo(e)
        return jsonify({'error': str(e)}), 500


def get_mock_flight_data(stream_id, longitude):
    # Simulate data streaming
    all_data = []
    longitude = longitude + 0.5
    all_data.append({
        "object_id": stream_id,
            "timestamp": time.time(),
            "coordinates": {
                "latitude": 37.78,
                "longitude": longitude,
            },
            "altitude": 3000
    })
    all_data.append({
        "object_id": stream_id,
            "timestamp": time.time(),
            "coordinates": {
                "latitude": 32.78,
                "longitude": longitude,
            },
            "altitude": 3000
    })

    return all_data, longitude

def get_flight_data(last_timestamp):
    db = get_db()

    start_time = last_timestamp
    end_time = last_timestamp + 1

    all_data = []
    object_ids = []

    pattern = "geo:*_flight:latlong"

    # Retrieve matching keys and store them in a Python list
    keys = list(db.scan_iter(match=pattern))
    for k in keys:
        stk = k.decode('utf-8')
        match = re.search(r'\d+', stk)
        if match:
            number = match.group()
            # print(f"Extracted number: {number}")
            object_ids.append(number + "_flight")


    for object_id in object_ids:
        altitude_key = f"geo:{object_id}:altitude"
        latlong_key = f"geo:{object_id}:latlong"
        
        altitude_data = db.zrangebyscore(altitude_key, start_time, end_time, withscores=True)
        # print(altitude_data)

        for altitude, timestamp in altitude_data:
            latlong = json.loads(db.hget(latlong_key, timestamp))

            all_data.append({
                "object_id": object_id,
                "timestamp": float(timestamp),
                "coordinates": {
                    "latitude": float(latlong["latitude"]),
                    "longitude": float(latlong["longitude"]),
                },
                "altitude": int(altitude)
            })

    # return(json.dumps(all_data, indent=2))
    return all_data, end_time


def get_flight_updates():
    pass

def get_test_string():
    db = get_db()

    user = {'firstname': "Mrdsdsds.", 'lastname': "My Fathers's Son2222"}
    return jsonify(user)

@click.command('ingest-file')
def ingest_file():
    """Clear the existing data and create new tables."""
    ingest_csv(source)
    click.echo('Ingested file.')

def ingest_csv(source):
    file=open(source, "r")
    reader = csv.reader(file)
    for line in reader:
        t=line[1],line[2],line[3],line[4]
        print(t)
