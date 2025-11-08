#!/bin/sh
# wait-for-db.sh
set -e
host="$DB_HOST"
port="$DB_PORT"

until nc -z "$host" "$port"; do
  echo "Waiting for database at $host:$port..."
  sleep 2
done

exec "$@"
