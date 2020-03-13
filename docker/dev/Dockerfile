##
# Build image
##
FROM php:7.2-cli as builder
WORKDIR /build
RUN apt-get update && apt-get install -y \
    git \
    unzip \
 && rm -rf /var/lib/apt/lists/* && apt-get clean

RUN curl -s https://getcomposer.org/installer | php && \
    cp composer.phar /usr/local/bin/composer && \
    chmod +x /usr/local/bin/composer && \
    composer --version

##
# Runtime image
##
FROM php:7.2-apache
WORKDIR /var/www/html

RUN a2enmod rewrite
# Get the pdo_mysql extension installed as the app needs it
RUN docker-php-ext-install pdo_mysql mysqli
COPY config/php.ini /usr/local/etc/php/

RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev

RUN docker-php-ext-install zip

ENV APACHE_DOCUMENT_ROOT /var/www/html/public
# Fix up the apache hosting
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN sed -i "s/80/8080/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf
