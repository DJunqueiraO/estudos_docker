FROM node:16-bullseye

RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x wait-for-db.sh

EXPOSE 3000

CMD ["sh", "wait-for-db.sh"]
