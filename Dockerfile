FROM ubuntu:latest

#Workdir
WORKDIR /shadowdriverjs

COPY . /shadowdriverjs

#ENV PATH="/shadowdriverjs/nodejs22/bin:${PATH}"

#RUN npm --version



