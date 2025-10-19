#!/usr/bin/env sh
set -e

# Créer les dossiers attendus à chaque démarrage (après montage du disque)
mkdir -p /var/www/html/storage/framework/cache \
         /var/www/html/storage/framework/sessions \
         /var/www/html/storage/framework/views \
         /var/www/html/bootstrap/cache

chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Démarrer PHP-FPM puis Caddy
php-fpm -D
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile