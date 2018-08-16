FROM python:3-alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /usr/src/app
VOLUME [ "/usr/src/app" ]

RUN apk update
RUN apk add --virtual build-deps gcc python3-dev musl-dev \
  && apk add postgresql-dev \
  && pip install psycopg2 \
  && apk del build-deps
RUN apk add gettext

ADD ./project /usr/src/app
WORKDIR /usr/src/app

# RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

ADD ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]

CMD ["dev"]