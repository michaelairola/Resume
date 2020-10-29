
FROM node:latest 

COPY . .
RUN npm i

CMD [ "npm", "start"];

EXPOSE 8080