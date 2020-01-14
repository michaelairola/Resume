FROM nginx:alpine

WORKDIR /usr/share/nginx/html/
COPY . .
RUN . ./version-files.sh

COPY ./server.conf /etc/nginx/conf.d/server.conf

# RUN chmod +x ./create-pdf.sh
# ENTRYPOINT [ "./create-pdf.sh" ]
EXPOSE 8080
