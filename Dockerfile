FROM nginx:alpine

COPY . /usr/share/nginx/html
RUN export VERSION=$RANDOM
RUN echo VERSION $VERSION
RUN sed -i "s/script.js/script-${VERSION}.js/g" /usr/share/nginx/html/index.html
RUN mv /usr/share/nginx/html/script.js /usr/share/nginx/html/script-${VERSION}.js

COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080
