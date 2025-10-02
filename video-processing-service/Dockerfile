# base image
FROM node:18 AS builder

# set the working directory
WORKDIR /app

# copy packages
COPY package*.json ./
RUN npm ci

# bundle app source inside the docker image
COPY . .

# build app
RUN npm run build

# production image
FROM node:18

# set working dir
WORKDIR /app

# copy packages
COPY package*.json ./
RUN npm ci --only=production

# copy application
COPY --from=builder /app/dist ./dist

# install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# set port
EXPOSE 3000

# start command
CMD ["npm", "run", "serve"]