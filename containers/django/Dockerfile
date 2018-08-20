#FROM python:3-alpine
FROM alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /usr/src/app
VOLUME [ "/usr/src/app" ]

RUN apk update
RUN apk add gettext python3 py3-setuptools
RUN apk add --virtual build-deps gcc python3-dev musl-dev
RUN apk add postgresql-dev
RUN python3 -m pip install psycopg2
RUN apk del build-deps

ADD ./project /usr/src/app
WORKDIR /usr/src/app

# RUN pip install --upgrade pip
RUN python3 -m pip install --no-cache-dir -r requirements.txt

ADD ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]

CMD ["dev"]
