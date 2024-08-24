FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm i pm2 -g

COPY . .

RUN npm run build:prod

CMD ["npm", "run", "serve"]
