#!/usr/bin/env bash

apt-get install -y npm

apt-get install -y nodejs

apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10

echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

apt-get update

apt-get install -y mongodb