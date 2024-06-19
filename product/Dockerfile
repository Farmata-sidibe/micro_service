FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

COPY . .

EXPOSE 8082

CMD [ "npm", "run", "dev" ]
