FROM nginx:alpine

WORKDIR /usr/share/nginx/html/
COPY . .
RUN . ./version-files.sh
RUN ls 

COPY ./server.conf /etc/nginx/conf.d/server.conf

EXPOSE 8080

# RUN chmod +x ./create-pdf.sh
# ENTRYPOINT [ "./create-pdf.sh" ]
