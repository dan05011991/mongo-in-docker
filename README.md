

openssl rand -base64 756 > <path-to-keyfile>
chmod 400 <path-to-keyfile>


docker-compose up 
docker-compose up --force-recreate -V --remove-orphans