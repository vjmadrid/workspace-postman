FROM node:16.5-stretch

# RUN npm set loglevel verbose

RUN npm install -g npm@7.20.0

RUN npm install -g newman newman-reporter-html

WORKDIR /etc/newman

ENTRYPOINT ["newman"]
