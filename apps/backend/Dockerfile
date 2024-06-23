FROM node:20.14.0

WORKDIR /app

COPY package*.json ./
RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
