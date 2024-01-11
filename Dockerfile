# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18-alpine as build

RUN mkdir /usr/local/app

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# RUN rm -rf ./node_modules

# Install all the dependencies
RUN npm install

# Installing ng
RUN npm install -g @angular/cli

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest


# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/owl-bos-landing/browser /usr/share/nginx/owl-bos-landing/html


COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template
# COPY nginx/nginx.conf /etc/nginx/conf.d/

# Expose port 80
# EXPOSE 85
