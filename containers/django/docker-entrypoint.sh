#!/bin/bash
#
# Example of an entrypoint for Python/Django apps
#

# Exit immediately if a command exits with a non-zero status.
# http://stackoverflow.com/questions/19622198/what-does-set-e-mean-in-a-bash-script
set -e

# Define help message
show_help() {
    echo """
Usage: docker run <imagename> COMMAND
Commands
dev     : Start a normal Django development server.
bash    : Start a bash shell
init    : Start manage.py {makemigrations,migrate}
manage  : Start manage.py
lint    : Run pylint
python  : Run a python command
shell   : Start a Django Python shell.
uwsgi   : Run uwsgi server.
help    : Show this message
"""
}

do_init() {
cd project
python manage.py makemigrations
python manage.py migrate
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('${ADMIN_NAME:-admin}', '${ADMIN_MAIL:-admin@example.com}', '${ADMIN_PASS:-secret}')"
}

# Run
case "$1" in
    dev)
echo "Running Development Server..."
cd project
python manage.py runserver 0.0.0.0:${PORT:-8000}
    ;;
    bash)
/bin/bash "${@:2}"
    ;;
    manage)
cd project
python manage.py "${@:2}"
    ;;
    makemigrations)
cd project
python manage.py makemigrations
    ;;
    migrate)
cd project
python manage.py migrate
    ;;
    lint)
pylint "${@:2}"
    ;;
    python)
python "${@:2}"
    ;;
    shell)
cd project
python manage.py shell_plus
    ;;
    uwsgi)
echo "Running App (uWSGI)..."
uwsgi --ini /deployment/uwsgi.ini
    ;;
    init)
do_init
    ;;
    *)
show_help
    ;;
esac