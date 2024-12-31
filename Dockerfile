FROM node:hydrogen-slim
WORKDIR /app
EXPOSE 4200
COPY . .
RUN npm install

CMD ["npm", "start"]