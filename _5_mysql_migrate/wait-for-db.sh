#!/bin/sh
echo "Aguardando o MySQL ficar pronto..."

# usa mysqladmin agora que o cliente está instalado
until mysqladmin ping -h"$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" --silent; do
  echo "MySQL não está pronto ainda..."
  sleep 2
done

echo "MySQL está pronto! Executando migrações..."
npm run migrate

echo "Iniciando a aplicação..."
npm run dev
