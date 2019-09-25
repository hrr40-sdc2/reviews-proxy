FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 3030

CMD node server/index.js
