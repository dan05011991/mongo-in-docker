# Mongo Cluster in Docker

Base solution to run a mongo cluster with default username and password authentication. Can be extended include tls.

## Setup
  - Clone repo
  - Update `docker-compose` `hostname` with the correct machine names (to match certificates [if applicable])
  - Generate a new keyfile `openssl rand -base64 756 > <path-to-keyfile>` 
  - Update permissions of keyfile `chmod 400 <path-to-keyfile>`
  - Run `docker-compose up -d`

### Initialise Replica Set
  - `docker exec -i mongo_mongo1_1 mongo -u admin -p admin < init.js`

### Reconfig Replica Set
  - `docker exec -i mongo_mongo1_1 mongo -u admin -p admin < reconfig.js`

## Some Useful Commands
  - `docker exec -i mongo_mongo1_1 mongo -u admin -p admin < init.js`
  - `docker exec -i mongo_mongo1_1 mongo -u admin -p admin < reconfig.js`
  - `docker-compose up --force-recreate -V --remove-orphans`
