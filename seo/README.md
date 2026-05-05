# GSC → SEO Agent (EKIO)

Pipeline para que el `seo-agent` de Claude Code consuma datos frescos de **Google Search Console** sin exportar CSVs a mano.

```
seo/
├── gsc_fetch.py       ← script Python con OAuth + GSC API
├── requirements.txt   ← dependencias
├── credentials.json   ← (privado, NO se sube a git) OAuth Desktop client
├── token.pickle       ← (privado, NO se sube a git) token cacheado
└── gsc-exports/       ← CSVs generados, nombrados con timestamp
```

---

## 1) Setup inicial (haces una sola vez)

### Paso 1.1 — Habilitar la API en Google Cloud

1. Entra a [console.cloud.google.com](https://console.cloud.google.com).
2. Crea un proyecto (o usa uno existente). Sugerencia: nómbralo `ekio-seo`.
3. En el buscador del top: **"Google Search Console API"** → habilítala.

### Paso 1.2 — Crear pantalla de consentimiento OAuth

1. Menú lateral → **APIs & Services → OAuth consent screen**.
2. User Type: **External** → Create.
3. Rellena:
   - App name: `EKIO SEO Agent`
   - User support email: tu correo
   - Developer contact: tu correo
4. **Scopes**: Save and continue (no añadas nada aquí).
5. **Test users**: añade tu correo de Gmail (el mismo con el que entras a GSC).
6. Save.

> Mientras la app esté en modo *Testing*, solo los `test users` pueden autenticarse. Es lo que queremos.

### Paso 1.3 — Crear credenciales OAuth (Desktop app)

1. Menú lateral → **APIs & Services → Credentials**.
2. **+ Create Credentials → OAuth client ID**.
3. Application type: **Desktop app**.
4. Name: `ekio-gsc-cli`.
5. Create → **Download JSON**.
6. Renombra el archivo descargado a `credentials.json` y muévelo a:
   ```
   /Users/javierandres/Ekio-Claude/seo/credentials.json
   ```

### Paso 1.4 — Instalar dependencias

```bash
cd /Users/javierandres/Ekio-Claude
pip3 install -r seo/requirements.txt
```

### Paso 1.5 — Primera ejecución (autorización OAuth)

```bash
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --days 28
```

La primera vez se abrirá tu navegador → loguéate con la cuenta de Google que tiene acceso a Search Console → acepta los permisos. Verás un aviso "Google hasn't verified this app" → clic en **Advanced → Go to EKIO SEO Agent (unsafe)** → Allow.

Esto genera `token.pickle` y a partir de ahí el script funciona sin abrir navegador.

---

## 2) Uso diario

### Sacar últimos 28 días de queries + páginas
```bash
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/
```

### Solo queries (lo más útil para keyword research)
```bash
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --dimension query --rows 5000
```

### Rango custom
```bash
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --start 2026-04-01 --end 2026-05-01
```

### Si tienes la propiedad como Domain property en GSC
```bash
python3 seo/gsc_fetch.py --site sc-domain:electrosmogespana.com --days 90
```

### Otras combinaciones útiles
```bash
# Top páginas
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --dimension page --rows 1000

# Evolución diaria de tráfico
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --dimension date --days 90

# Query × Página (oportunidades de optimización on-page)
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --dimension query,page --rows 10000

# Rendimiento por país
python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --dimension country
```

Los CSVs se guardan en `seo/gsc-exports/` con nombres tipo:
```
gsc_20260505-101530_2026-04-07_to_2026-05-05_query-page.csv
```

---

## 3) Cómo lo usa el `seo-agent`

Cuando le pidas una auditoría SEO, dile algo como:

> *"Lanza `python3 seo/gsc_fetch.py --site https://electrosmogespana.com/ --days 90 --dimension query,page` y luego analiza el CSV: dame las 20 keywords con CTR < 2% en posiciones 4-15 (oportunidades quick win), y las 10 páginas con más impresiones pero CTR bajo."*

El agente:
1. Ejecuta el script vía Bash.
2. Lee el CSV de `seo/gsc-exports/`.
3. Te devuelve el análisis con plan de acción.

---

## 4) Troubleshooting

| Error | Solución |
|-------|----------|
| `No encuentro credentials.json` | Falta el paso 1.3. Descarga el JSON y muévelo a `seo/`. |
| `403 forbidden` | La cuenta de Google que has logueado no tiene acceso a esa propiedad de GSC. Verifica en Search Console → Settings → Users. |
| `invalid_grant` | Borra `seo/token.pickle` y re-ejecuta para reautenticar. |
| `User has not given consent` | Tu correo no está en *Test users* (paso 1.2.5). Añádelo. |
| `quota exceeded` | Los límites de GSC API son generosos (1200 req/min). Si lo ves, espera 1 min. |

---

## 5) Seguridad

`credentials.json` y `token.pickle` están en `.gitignore`. **Nunca** los subas a GitHub. Si los subes por error: revoca las credenciales en Google Cloud Console y genera unas nuevas.
