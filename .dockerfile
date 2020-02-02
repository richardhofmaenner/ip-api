FROM node:13-alpine

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm install
