#!/bin/bash
sudo yum install -y git
sudo yum install -y nodejs
echo '[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc' | sudo tee -a /etc/yum.repos.d/mongodb-org-4.4.repo
sudo yum install -y mongodb-org
sudo systemctl start mongod
cd /home/vagrant/
git clone https://github.com/AMao7/MEANSTACK.git
cd MEANSTACK/
npm install
sudo pkill node
node app.js 
    