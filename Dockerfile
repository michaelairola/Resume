FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY ./nginx.config.d /etc/nginx/conf.d/server.conf
EXPOSE 8080
