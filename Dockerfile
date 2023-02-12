FROM node:16
WORKDIR /proxy-api
COPY package.json /proxy-api/
RUN npm install
COPY . /proxy-api/
EXPOSE 5005
CMD ["node", "index.js"]