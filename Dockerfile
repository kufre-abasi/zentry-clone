FROM node:18-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN npm install

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]