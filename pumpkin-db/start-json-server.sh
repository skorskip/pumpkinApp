#!/usr/bin/env bash

npm install -g json-server

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$DIR"

json-server --watch db.json --port 3001