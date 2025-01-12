from flask import jsonify, request
from .injector import get_airport_data
from .injector import get_airport_data_request
from .injector import get_flight_data
from .injector import get_flight_updates

import click

def register_routes(app):
    @app.route('/data/airports', methods=['GET'])
    def get_data_ap():
        return get_airport_data()

    @app.route('/data/airport_request', methods=['POST'])
    def get_ap_data_request():
        return get_airport_data_request()

    @app.route('/data/flight_request', methods=['GET'])
    def get_flight_data_request():
        return get_flight_data()
    
    @app.route('/data/get_flight_updates', methods=['GET'])
    def get_flight_data_updates():
        last_timestamp = float(request.args.get('last_timestamp', 0))
        return get_flight_data(last_timestamp)