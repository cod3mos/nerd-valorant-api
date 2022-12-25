FROM node:16

WORKDIR /home/nerd-valorant/api

COPY package.json .

RUN npm install

COPY . .