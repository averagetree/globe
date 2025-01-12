from flask import Flask
from flask_redis import FlaskRedis

from datetime import datetime

import click
from flask import current_app, g

REDIS_URL = "redis://:password@localhost:6379/0"

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

def get_db():
    # Configure Redis
    #if 'db' not in g:
        # g.db = FlaskRedis(host='localhost', port=6379, decode_responses=True)
    app = Flask(__name__)
    redis_client = FlaskRedis(app)
    
    return redis_client

def init_db():
    return get_db()

@click.command('init-db')
def init_db_command():
    """Clear the existing data and create new tables."""
    try:
        init_db()
        click.echo('Initialized the database.')
    except:
        click.echo('Failure')

def close_db(e=None):
    db = g.pop('db', None)

    #if db is not None:
    #    db.close()