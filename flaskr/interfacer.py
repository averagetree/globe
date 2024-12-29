import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from flaskr.db import get_db

bp = Blueprint('interfacer', __name__, url_prefix='/interfacer')

@bp.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        field_a = request.form['field_a']
        field_b = request.form['field_b']
        db = get_db()
        error = None

        if not field_a:
            error = 'Username is required.'
        elif not field_b:
            error = 'Password is required.'

        if error is None:
            try:
                # db.execute(
                #     "INSERT INTO user (username, password) VALUES (?, ?)",
                #     (username, generate_password_hash(password)),
                # )
                # db.commit()
                db.set('field_a', 'apples')
                db.set('field_b', 'bravo')

            except db.IntegrityError:
                error = f"User {field_a} is already registered."
            else:
                return redirect(url_for("interfacer.login"))

        flash(error)

    return render_template('interfacer/register.html')