FROM node:12
WORKDIR /app

ENV NODE_ENV production

COPY packages.json ./

RUN npm install

COPY . .

RUN npm insall -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "index.js"]