FROM node:22.11.0 AS build
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ ./

FROM node:22.11.0-alpine
WORKDIR /app
COPY --from=build --chown=node:node /app/package.json /app/package-lock.json /app/index.js /app/src /app/
EXPOSE 3000
CMD node ./index.js