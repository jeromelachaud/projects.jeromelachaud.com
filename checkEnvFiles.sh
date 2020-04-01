#!/bin/sh
DEV_ENV_FILE=./.env.development
DEV_PROD_FILE=./.env.production
[[ ! -f "$DEV_ENV_FILE" ]] && echo "$DEV_ENV_FILE File doesn't exist"
[[ ! -f "$DEV_PROD_FILE" ]] && echo "$DEV_PROD_FILE File doesn't exist"
echo "env files exists"
