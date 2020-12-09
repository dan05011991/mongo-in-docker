# Mongo Cluster in Docker

Base solution to run a mongo cluster with default username and password authentication. Can be extended include tls.

# Setup
  - Clone repo
  - Update `docker-compose` `hostname` with the correct machine names (to match certificates)
  - Generate a new keyfile `openssl rand -base64 756 > <path-to-keyfile>` 
  - Update permissions of keyfile `chmod 400 <path-to-keyfile>`
  - Run `docker-compose up -d`

# Some Useful Commands
  - `docker-compose up --force-recreate -V --remove-orphans`
