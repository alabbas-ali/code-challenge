# pull the node image with tag 12.6.1-alpine if the images don't exist.
FROM node:12.16.1-alpine As builder
# create the working directory in our docker image
WORKDIR /usr/src/app
# copy package.json and package-lock.json from our current directory 
# to the root of our working directory inside a container which is /usr/src/app.
COPY package.json package-lock.json ./
# restore node_modules define in our package.json
RUN npm install
# copies all the files from our current directory to the container working directory
COPY . .
# build our angular project in production mode and create production ready files in dist/code-challenge folder
RUN npm run build-prod
# create a second stage nginx container where we will copy the compiled output from our build stage
FROM nginx:1.15.8-alpine
# copy the compiled angular app from builder stage path /usr/src/app/dist/code-challenge/ to nginx container.
COPY --from=builder /usr/src/app/dist/code-challenge/ /usr/share/nginx/html
