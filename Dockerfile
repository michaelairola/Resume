FROM nginx:alpine
COPY . /usr/share/nginx/html

RUN VERSION=$((1 + RANDOM % 10))
RUN sed -i "s/script.js/script-${VERSION}.js/g" /usr/share/nginx/index.html
RUN mv script.js script-${VERSION}.js

COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080
