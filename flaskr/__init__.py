import os

from flask import Flask, jsonify
from flask_redis import FlaskRedis
from flask import render_template
from flask_socketio import SocketIO

socketio = SocketIO(cors_allowed_origins="*")

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, 
            instance_relative_config=True)#,
            # static_folder = "../globe_display/static",
            # template_folder = "../../dist")
    app.config.from_mapping(
        SECRET_KEY='dev',
        #DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    # db setup
    redis_client = FlaskRedis(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    socketio.init_app(app)

    @app.route('/')
    def index():
        user = {'firstname': "Mr.", 'lastname': "My Fathers's Son"}
        return render_template("index.html", user=user)

    from . import db
    db.init_app(app)

    from . import injector
    injector.init_app(app)
    
    # from . import socket
    # socket.init_app(app)

    from .routes import register_routes
    register_routes(app)

    with app.app_context():
        from . import socket

    # @app.route('/data', methods=['GET'])
    # def get_data():
    #     user = {'firstname': "Mr.", 'lastname': "My Fathers's Son2222"}
    #     return jsonify(user)

    from . import interfacer
    app.register_blueprint(interfacer.bp)

    return app

if __name__ == '__main__':
    app = create_app()
    socketio.run(app, debug=True)