FROM alpine

RUN mkdir -p /usr/src/app
VOLUME [ "/usr/src/app" ]

RUN apk update
RUN apk add nodejs npm      

ADD ./site /usr/src/app
WORKDIR /usr/src/app

ADD ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]

CMD ["dev"]