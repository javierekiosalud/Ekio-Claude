#!/bin/bash
# APRUEBA EL BRIEF SEMANAL DE META ADS — fusiona meta-ads-brief-review en main.
# Ejecútalo a mano, solo cuando ya has leído el brief y quieres darle el visto bueno.
set -e

cd ~/Ekio-Claude || exit 1

REVIEW_BRANCH="meta-ads-brief-review"

git fetch origin "$REVIEW_BRANCH"
git checkout main
git merge --no-edit "origin/$REVIEW_BRANCH"
git push origin main

echo "Brief aprobado y fusionado en main."
