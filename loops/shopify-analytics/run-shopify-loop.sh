#!/bin/bash
# LOOP SEMANAL DE ANÁLISIS DE SHOPIFY — EKIO ELECTROSMOG ESPAÑA
set -e

cd ~/Ekio-Claude || exit 1

REVIEW_BRANCH="shopify-brief-review"
BRIEF_FILE="loops/shopify-analytics/output/$(date +%Y-%m-%d)-brief.md"

# ASEGURA VOLVER SIEMPRE A main AL SALIR, PASE LO QUE PASE
trap 'git checkout main >/dev/null 2>&1 || true' EXIT

# EJECUTA EL COMANDO SLASH CON HAIKU, MODO NO INTERACTIVO
claude -p "/shopify-analisis-semanal" --settings loops/shopify-analytics/settings.json

# SI CLAUDE NO PUDO GENERAR EL BRIEF (p.ej. Shopify MCP sin autorizar), NO
# HAY NADA QUE SUBIR. LO DEJAMOS CLARO Y TERMINAMOS SIN TOCAR GIT.
if [ ! -f "$BRIEF_FILE" ]; then
  echo "No se generó $BRIEF_FILE — nada que subir esta semana."
  exit 1
fi

# SUBE EL RESULTADO A UNA RAMA DE REVISIÓN (NUNCA A main) PARA QUE ESTÉ
# DISPONIBLE EN EL MAC PRINCIPAL. NO SE FUSIONA A main HASTA QUE TÚ LO
# APRUEBES CON approve-shopify-brief.sh
git checkout -B "$REVIEW_BRANCH"
git add loops/shopify-analytics/output/
git commit -m "Brief automático de Shopify - $(date +%Y-%m-%d)"
git push origin "$REVIEW_BRANCH" --force
