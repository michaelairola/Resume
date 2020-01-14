FROM nginx:alpine

COPY . /usr/share/nginx/html

WORKDIR /usr/share/nginx/html/
RUN . ./version-files.sh

COPY ./server.conf /etc/nginx/conf.d/server.conf

ENTRYPOINT [ "create-pdf.sh" ]
EXPOSE 8080
