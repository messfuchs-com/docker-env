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
admin   : Start django-admin.py
lint    : Run pylint
python  : Run a python command
shell   : Start a Django Python shell.
uwsgi   : Run uwsgi server.
help    : Show this message
"""
}

CONTAINER_ADMIN_NAME=${ADMIN_NAME:-admin}
CONTAINER_ADMIN_MAIL=${ADMIN_MAIL:-"admin@example.com"}
CONTAINER_ADMIN_PASS=${ADMIN_PASS:-admin}
CONTAINER_PORT=${PORT:-8000}

do_init() {
python manage.py makemigrations
python manage.py migrate
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('$CONTAINER_ADMIN_NAME', '$CONTAINER_ADMIN_MAIL', '$CONTAINER_ADMIN_PASS')"
}

args=${@}

# Run
case "$1" in
    dev)
echo "Running Development Server..."
python manage.py runserver 0.0.0.0:$CONTAINER_PORT
    ;;
    bash)
/bin/bash "${@:5}"
    ;;
    admin)
adminArgs="${args:6}"
django-admin.py $adminArgs
    ;;
    manage)
manageArgs="${args:7}"
python manage.py $manageArgs
    ;;
    makemigrations)
python manage.py makemigrations
    ;;
    migrate)
python manage.py migrate
    ;;
    lint)
lintArgs="${args:5}"
pylint lintArgs
    ;;
    python)
pythonArgs="${args:7}"
python pythonArgs
    ;;
    shell)
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