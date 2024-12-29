from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

#from flaskr.interfacer import login_required
from flaskr.db import get_db
import csv
import click


bp = Blueprint('injector', __name__)
source = 'data/simple_data.csv'

def init_app(app):
    app.cli.add_command(ingest_file)

@bp.route('/')
def index():
    db = get_db()
    # posts = db.execute(
    #     'SELECT p.id, title, body, created, author_id, username'
    #     ' FROM post p JOIN user u ON p.author_id = u.id'
    #     ' ORDER BY created DESC'
    # ).fetchall()
    #return render_template('injector/index.html', posts=posts)

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
