FROM nginx:alpine

WORKDIR /etc/nginx/conf.d/
COPY server.conf .
# COPY ./server.conf /etc/nginx/conf.d/server.conf

WORKDIR /usr/share/nginx/html/
COPY . .

RUN . ./version-files.sh

EXPOSE 8080