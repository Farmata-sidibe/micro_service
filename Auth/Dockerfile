FROM node:18

WORKDIR ./

COPY package*.json ./

RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]
