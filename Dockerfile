FROM node:7.7.2

WORKDIR /var/workspace

ADD . /var/workspace

RUN npm install

ENTRYPOINT ["npm", "start"]
