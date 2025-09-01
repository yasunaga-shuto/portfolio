FROM node:22

WORKDIR /app

COPY ["package.json", "./"]
COPY ["yarn.lock", "./"]
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "run", "dev"]
