FROM rossriley/docker-bolt:latest

ADD ./extensions /var/www/html/extensions
ADD ./config /var/www/html/app/config
ADD ./theme /var/www/html/public/theme/echolotio