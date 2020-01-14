FROM nginx:alpine

WORKDIR /usr/share/nginx/html/
COPY . .
RUN . ./version-files.sh

COPY ./server.conf /etc/nginx/conf.d/server.conf

ENTRYPOINT [ "./create-pdf.sh" ]
EXPOSE 8080
