FROM nginx:alpine

COPY . /usr/share/nginx/html

# RUN VERSION=$RANDOM \
# && echo VERSION $VERSION \
# && sed -i "s/script.js/script-${VERSION}.js/g" /usr/share/nginx/html/index.html \
# && mv /usr/share/nginx/html/script.js /usr/share/nginx/html/script-${VERSION}.js
RUN . ./give_files_version.sh

COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080
