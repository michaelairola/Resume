FROM nginx:alpine

RUN VERSION=$((1 + RANDOM % 10))
RUN sed -i "s/script.js/script-${VERSION}.js/g" index.html
RUN mv script.js script-${VERSION}.js

COPY . /usr/share/nginx/html
COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080
