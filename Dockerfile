FROM node:7.7.2

WORKDIR /var/workspace

ADD . /var/workspace

RUN npm install
RUN npm install -g nodemon

ENTRYPOINT ["npm"]
CMD "start"
EXPOSE 8080
