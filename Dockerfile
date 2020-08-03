FROM nginx:alpine

WORKDIR /etc/nginx/conf.d/
COPY server.conf .

WORKDIR /usr/share/nginx/html/
COPY src/ ./src/
COPY icons/ ./icons/
COPY OneSignalSDKUpdaterWorker.js .
COPY OneSignalSDKWorker.js .
COPY index.html .
COPY resume.pdf .

COPY version-files.sh .
RUN . ./version-files.sh

EXPOSE 8080