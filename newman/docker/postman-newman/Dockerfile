FROM postman/newman:alpine

# RUN npm set loglevel verbose

RUN npm install -g newman-reporter-htmlextra

WORKDIR /etc/newman

ENTRYPOINT ["newman"]
