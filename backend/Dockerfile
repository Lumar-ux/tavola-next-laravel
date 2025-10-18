# -------- Etape 1: Composer (vendor) --------
FROM composer:2 AS vendor
WORKDIR /app

# Installer dépendances PHP en prod
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --no-progress --no-scripts

# Copier le reste du projet pour que Composer découvre les packages
COPY . .
RUN composer install --no-dev --no-interaction --prefer-dist --no-progress
# Évite d'exécuter des commandes artisan ici car APP_KEY n'est pas dispo en build

# -------- Etape 2: Runtime PHP-FPM + Caddy --------
FROM php:8.3-fpm-alpine

WORKDIR /var/www/html

# Dépendances système et extensions PHP
RUN apk add --no-cache \
      caddy \
      bash \
      icu-dev \
      oniguruma-dev \
      libzip-dev \
      libpng-dev libjpeg-turbo-dev freetype-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
         pdo pdo_pgsql intl gd zip bcmath opcache

# Copier code + vendor depuis l'étape vendor
COPY --from=vendor /app /var/www/html

# Copier les assets Vite compilés
COPY --from=assets /app/public/build /var/www/html/public/build

# Permissions Laravel
RUN chown -R www-data:www-data storage bootstrap/cache \
 && chmod -R 775 storage bootstrap/cache

# Caddyfile minimal
COPY <<'CADDY' /etc/caddy/Caddyfile
:8080
encode zstd gzip
root * /var/www/html/public
php_fastcgi 127.0.0.1:9000
file_server
CADDY

# Exposer le port attendu par Render
EXPOSE 8080

# Lancer PHP-FPM puis Caddy au démarrage
CMD php-fpm -D && caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
