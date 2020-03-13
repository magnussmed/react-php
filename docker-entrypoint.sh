#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Run composer
php composer.phar install

# Start apache serving
apache2-foreground
