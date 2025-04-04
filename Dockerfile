# Usa a imagem oficial do PHP com PHP-FPM
FROM php:8.3-fpm

# Instala pacotes básicos, dependências do Oracle Instant Client e Node.js
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    git \
    gnupg \
    libaio1 \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd pdo pdo_mysql

# Configura o Oracle Instant Client
ENV ORACLE_BASE=/opt/oracle
ENV ORACLE_HOME=/opt/oracle/instantclient
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient
ENV TNS_ADMIN=/opt/oracle/instantclient/network/admin
ENV PATH=$ORACLE_HOME:$PATH

# Instala o Oracle Instant Client
RUN mkdir -p /opt/oracle \
    && curl -o /opt/oracle/instantclient-basic.zip https://download.oracle.com/otn_software/linux/instantclient/2112000/instantclient-basic-linux.x64-21.12.0.0.0dbru.zip \
    && curl -o /opt/oracle/instantclient-sdk.zip https://download.oracle.com/otn_software/linux/instantclient/2112000/instantclient-sdk-linux.x64-21.12.0.0.0dbru.zip \
    && unzip -o /opt/oracle/instantclient-basic.zip -d /opt/oracle \
    && unzip -o /opt/oracle/instantclient-sdk.zip -d /opt/oracle \
    && ln -s /opt/oracle/instantclient_21_12 /opt/oracle/instantclient \
    && ln -s /opt/oracle/instantclient/sdk/include /usr/include/oracle \
    && echo /opt/oracle/instantclient > /etc/ld.so.conf.d/oracle-instantclient.conf \
    && ldconfig

# Instala a extensão OCI8 e PDO_OCI
RUN docker-php-ext-configure oci8 --with-oci8=instantclient,/opt/oracle/instantclient \
    && docker-php-ext-configure pdo_oci --with-pdo-oci=instantclient,/opt/oracle/instantclient \
    && docker-php-ext-install oci8 pdo_oci

# Define o diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos do projeto para dentro do container
COPY . .

# Instala o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instala dependências do Laravel
RUN composer install --no-dev --optimize-autoloader

# Ajusta permissões para que o Laravel tenha acesso aos diretórios corretos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Exposição de portas
EXPOSE 9000

CMD ["php-fpm"]
