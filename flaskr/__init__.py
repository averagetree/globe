import os

from flask import Flask
from flask_redis import FlaskRedis
from flask import render_template

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

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route('/')
    def index():
        return render_template("index.html", **{"greeting": "Hello from Flask!"})
    # @app.route('/')
    # def index():
    #     return redis_client.get('potato')

    from . import db
    db.init_app(app)

    from . import injector
    injector.init_app(app)

    from . import interfacer
    app.register_blueprint(interfacer.bp)

    # from . import injector
    # app.register_blueprint(injector.bp)
    # app.add_url_rule('/', endpoint='index')

    return app