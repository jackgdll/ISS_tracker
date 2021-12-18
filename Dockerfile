FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn add serve
RUN yarn build

CMD [ "npx", "serve", "-s", "build" ]
