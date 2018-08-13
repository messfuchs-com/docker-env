FROM python:3-alpine
ENV PYTHONUNBUFFERED 1

RUN apk update \
  && apk add --virtual build-deps gcc python3-dev musl-dev \
  && apk add postgresql-dev \
  && pip install psycopg2 \
  && apk del build-deps

RUN mkdir -p /usr/src/app

ADD . /usr/src/app
WORKDIR /usr/src/app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "project/manage.py", "runserver", "0.0.0.0:{$PORT:-8000}"]