FROM node:16.18.1-alpine
WORKDIR /proxy-api
COPY package.json /proxy-api/
RUN npm install
COPY . /proxy-api/
EXPOSE 5005
CMD ["npm", "run", "dev"]