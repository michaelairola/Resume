FROM nginx:alpine

WORKDIR /etc/nginx/conf.d/
COPY server.conf .
# COPY ./server.conf /etc/nginx/conf.d/server.conf

WORKDIR /usr/share/nginx/html/
COPY src/ .
COPY icons/ .
COPY index.html .
COPY resume.pdf .

COPY version-files.sh .
RUN . ./version-files.sh

EXPOSE 8080