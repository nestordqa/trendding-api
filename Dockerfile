# # Use the official Node.js image as the base image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install the dependencies
# RUN npm install

# # Copy the rest of the application files to the working directory
# COPY . .

# # Expose the port on which the Node.js application will run
# EXPOSE 3001

# # Command to start the Node.js application
# CMD [ "npm", "start" ]