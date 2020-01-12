FROM nginx:alpine

COPY . /usr/share/nginx/html

# RUN VERSION=$RANDOM \
# && echo VERSION $VERSION \
# && sed -i "s/script.js/script-${VERSION}.js/g" /usr/share/nginx/html/index.html \
# && mv /usr/share/nginx/html/script.js /usr/share/nginx/html/script-${VERSION}.js
WORKDIR /usr/share/nginx/html/
RUN . ./version-files.sh

COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080
