#!/bin/bash
set -e

cd /var/www/html

# Garante diretórios com permissão correta
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/framework/cache
mkdir -p storage/logs
chmod -R 775 storage bootstrap/cache

# Garante o link simbólico public/storage -> storage/app/public
if [ ! -L public/storage ]; then
    php artisan storage:link
fi

# Caches do Laravel para produção
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Executa migrations automaticamente
php artisan migrate --force

exec "$@"
