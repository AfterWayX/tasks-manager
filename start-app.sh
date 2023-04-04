#!/bin/bash

# Open three apps simultaneously
(docker-compose build && docker-compose up) &
(cd ./backend && yarn && yarn dev) &
(cd ./frontend && yarn && yarn start) &

# Wait for all apps to exit
wait
