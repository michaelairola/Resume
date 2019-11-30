FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY ./server.conf /etc/nginx/conf.d/server.conf
EXPOSE 8080
