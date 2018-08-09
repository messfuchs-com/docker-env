FROM alpine

RUN apk update && apk add nodejs npm      

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g create-react-app