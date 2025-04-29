#!/bin/sh

echo "Waiting for PostgreSQL to be ready..."
while ! pg_isready -h postgres -p 5432 -U user -d mydb -q; do
  sleep 1
  echo "Waiting for PostgreSQL..."
done

echo "Running database migrations..."
npx prisma migrate dev --name init
npm run seed

echo "Starting application..."
exec npm run dev