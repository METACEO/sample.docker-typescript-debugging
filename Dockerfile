# This Dockerfile represents whatever environment required by a developer.
FROM node:carbon-alpine

WORKDIR /code

COPY package*.json /code/
COPY nodemon.json /code/
COPY LICENSE /code/

RUN npm install