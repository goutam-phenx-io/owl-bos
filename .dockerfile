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
COPY --from=build /usr/local/app/dist/welcome /usr/share/nginx/welcome/html
COPY --from=build /usr/local/app/dist/login /usr/share/nginx/login/html
COPY --from=build /usr/local/app/dist/home /usr/share/nginx/home/html
COPY --from=build /usr/local/app/dist/erp /usr/share/nginx/erp/html
COPY --from=build /usr/local/app/dist/asset-management /usr/share/nginx/asset-management/html
COPY --from=build /usr/local/app/dist/inventory-management /usr/share/nginx/inventory-management/html
COPY --from=build /usr/local/app/dist/class-planner /usr/share/nginx/class-planner/html
COPY --from=build /usr/local/app/dist/access-control /usr/share/nginx/access-control/html


COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template
# COPY nginx/nginx.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
