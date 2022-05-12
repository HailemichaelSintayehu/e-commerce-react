# Dockerfile for React client

# Build react client
FROM ubuntu:20.04

#For debugging 

RUN apt-get update -y
RUN apt-get upgrade -y

RUN apt-get install nodejs -y
# RUN apt-get install nodejs-legacy -y
RUN apt-get install npm -y

WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent
 
# copy local files to app folder
COPY . .

EXPOSE 3000 

CMD ["npm","start"] 