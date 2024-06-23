FROM node:20.15.0

WORKDIR /app

COPY package*.json ./
RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
