#!/bin/bash
# Gate de calidad del proyecto: corre la suite de tests del API.
cd "$(dirname "$0")/.."
salida=$(npm -w api test 2>&1)
if [ $? -ne 0 ]; then
  echo "TESTS FALLANDO:" >&2
  echo "$salida" | tail -30 >&2
  exit 2
fi
echo "tests OK"
