#!/bin/bash
# LOOP SEMANAL DE ANÁLISIS DE META ADS — EKIO ELECTROSMOG ESPAÑA
set -e

cd ~/Ekio-Claude || exit 1

REVIEW_BRANCH="meta-ads-brief-review"
BRIEF_FILE="loops/meta-ads-analytics/output/$(date +%Y-%m-%d)-brief.md"

# ASEGURA VOLVER SIEMPRE A main AL SALIR, Y AVISA CON UNA NOTIFICACIÓN DE MAC
# SI EL LOOP FALLÓ POR CUALQUIER MOTIVO (login caducado, MCP sin autorizar,
# fallo de git, etc.) — PASE LO QUE PASE.
on_exit() {
  local exit_code=$?
  git checkout main >/dev/null 2>&1 || true
  if [ $exit_code -ne 0 ]; then
    osascript -e 'display notification "Revisa loops/meta-ads-analytics/loop.log" with title "Ekio — Loop Meta Ads falló" sound name "Basso"' >/dev/null 2>&1 || true
  fi
}
trap on_exit EXIT

# EJECUTA EL COMANDO SLASH CON HAIKU, MODO NO INTERACTIVO
claude -p "/meta-ads-analisis-semanal" --settings loops/meta-ads-analytics/settings.json

# SI CLAUDE NO PUDO GENERAR EL BRIEF (p.ej. sesión sin autenticar, token de
# Meta vencido), NO HAY NADA QUE SUBIR. LO DEJAMOS CLARO Y TERMINAMOS SIN
# TOCAR GIT.
if [ ! -f "$BRIEF_FILE" ]; then
  echo "No se generó $BRIEF_FILE — nada que subir esta semana."
  exit 1
fi

# SUBE EL RESULTADO A UNA RAMA DE REVISIÓN (NUNCA A main) PARA QUE ESTÉ
# DISPONIBLE EN EL MAC PRINCIPAL. NO SE FUSIONA A main HASTA QUE TÚ LO
# APRUEBES CON approve-meta-ads-brief.sh
git checkout -B "$REVIEW_BRANCH"
git add loops/meta-ads-analytics/output/
git commit -m "Brief automático de Meta Ads - $(date +%Y-%m-%d)"
git push origin "$REVIEW_BRANCH" --force
