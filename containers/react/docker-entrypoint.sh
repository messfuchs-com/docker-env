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
init    : Start npm install
nmp     : Start npm
lint    : Run pylint
build   : Start npm run build
help    : Show this message
"""
}

do_init() {
  npm install
}

do_dev() {
    echo "Running Development Server..."
    cd site
    npm start
}

# Run
case "$1" in
    dev)
        do_dev
    ;;
    bash)
        /bin/bash "${@:2}"
    ;;
    init)
        do_init
    ;;
    npm)
        npm "${@:2}"
    ;;
    build)
        npm run build
    ;;
    *)
        show_help
    ;;
esac