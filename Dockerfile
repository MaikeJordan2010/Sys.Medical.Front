FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Build the application for production
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# # # We'll copy all the contents from wwwroot in the publish
# # # folder into nginx/html for nginx to serve. The destination
# # # should be the same as what you set in the nginx.conf.
COPY ./dist /usr/local/webapp/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 3000 for the application
EXPOSE 3000

# # Command to run the application
# #CMD npm RUN