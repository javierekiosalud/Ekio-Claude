#!/bin/bash
# LOOP SEMANAL DE ANÁLISIS DE KLAVIYO — EKIO ELECTROSMOG ESPAÑA
set -e

cd ~/Ekio-Claude || exit 1

REVIEW_BRANCH="klaviyo-brief-review"
BRIEF_FILE="loops/klaviyo-analytics/output/$(date +%Y-%m-%d)-brief.md"

# ASEGURA VOLVER SIEMPRE A main AL SALIR, Y AVISA CON UNA NOTIFICACIÓN DE MAC
# SI EL LOOP FALLÓ POR CUALQUIER MOTIVO (login caducado, MCP sin autorizar,
# fallo de git, etc.) — PASE LO QUE PASE.
on_exit() {
  local exit_code=$?
  git checkout main >/dev/null 2>&1 || true
  if [ $exit_code -ne 0 ]; then
    osascript -e 'display notification "Revisa loops/klaviyo-analytics/loop.log" with title "Ekio — Loop Klaviyo falló" sound name "Basso"' >/dev/null 2>&1 || true
  fi
}
trap on_exit EXIT

# EJECUTA EL COMANDO SLASH CON HAIKU, MODO NO INTERACTIVO
claude -p "/klaviyo-analisis-semanal" --settings loops/klaviyo-analytics/settings.json

# SI CLAUDE NO PUDO GENERAR EL BRIEF (p.ej. Klaviyo MCP sin autorizar), NO
# HAY NADA QUE SUBIR. LO DEJAMOS CLARO Y TERMINAMOS SIN TOCAR GIT.
if [ ! -f "$BRIEF_FILE" ]; then
  echo "No se generó $BRIEF_FILE — nada que subir esta semana."
  exit 1
fi

# SUBE EL RESULTADO A UNA RAMA DE REVISIÓN (NUNCA A main) PARA QUE ESTÉ
# DISPONIBLE EN EL MAC PRINCIPAL. NO SE FUSIONA A main HASTA QUE TÚ LO
# APRUEBES CON approve-klaviyo-brief.sh
git checkout -B "$REVIEW_BRANCH"
git add loops/klaviyo-analytics/output/
git commit -m "Brief automático de Klaviyo - $(date +%Y-%m-%d)"
git push origin "$REVIEW_BRANCH" --force
