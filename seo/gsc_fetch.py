#!/usr/bin/env python3
"""
gsc_fetch.py — Descarga datos de Google Search Console a CSV.

Uso típico:
    python3 seo/gsc_fetch.py --site https://ekio.es --days 28
    python3 seo/gsc_fetch.py --site sc-domain:ekio.es --start 2026-04-01 --end 2026-05-01
    python3 seo/gsc_fetch.py --site https://ekio.es --dimension query --rows 5000

Output: archivos CSV en seo/gsc-exports/ con timestamp.

Requiere: credentials.json (OAuth Desktop) en seo/. Ver README.md.
"""

import argparse
import csv
import json
import os
import pickle
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build
except ImportError:
    sys.stderr.write(
        "[ERROR] Faltan dependencias. Instala con:\n"
        "        pip3 install -r seo/requirements.txt\n"
    )
    sys.exit(1)


SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
BASE_DIR = Path(__file__).resolve().parent
CREDENTIALS_FILE = BASE_DIR / "credentials.json"
TOKEN_FILE = BASE_DIR / "token.pickle"
EXPORT_DIR = BASE_DIR / "gsc-exports"

VALID_DIMENSIONS = {"query", "page", "country", "device", "date", "searchAppearance"}


def authenticate():
    """Devuelve un cliente autenticado de Search Console (OAuth user flow)."""
    creds = None

    if TOKEN_FILE.exists():
        with open(TOKEN_FILE, "rb") as f:
            creds = pickle.load(f)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDENTIALS_FILE.exists():
                sys.stderr.write(
                    f"[ERROR] No encuentro {CREDENTIALS_FILE}\n"
                    "        Descarga credentials.json desde Google Cloud Console\n"
                    "        y colócalo en la carpeta seo/. Ver seo/README.md\n"
                )
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDENTIALS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "wb") as f:
            pickle.dump(creds, f)

    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def fetch_data(service, site_url, start_date, end_date, dimensions, row_limit=25000):
    """Pagina la API de Search Console y devuelve todas las filas."""
    all_rows = []
    start_row = 0
    page_size = min(25000, row_limit)

    while True:
        request_body = {
            "startDate": start_date,
            "endDate": end_date,
            "dimensions": dimensions,
            "rowLimit": page_size,
            "startRow": start_row,
        }
        response = service.searchanalytics().query(
            siteUrl=site_url, body=request_body
        ).execute()

        rows = response.get("rows", [])
        if not rows:
            break

        all_rows.extend(rows)
        if len(rows) < page_size or len(all_rows) >= row_limit:
            break
        start_row += page_size

    return all_rows[:row_limit]


def save_csv(rows, dimensions, output_path):
    """Guarda filas de la API en CSV con cabeceras claras."""
    headers = list(dimensions) + ["clicks", "impressions", "ctr", "position"]

    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for row in rows:
            keys = row.get("keys", [])
            writer.writerow(
                keys
                + [
                    row.get("clicks", 0),
                    row.get("impressions", 0),
                    round(row.get("ctr", 0) * 100, 2),
                    round(row.get("position", 0), 2),
                ]
            )


def parse_args():
    p = argparse.ArgumentParser(description="Descarga datos de Google Search Console.")
    p.add_argument(
        "--site",
        required=True,
        help="URL del sitio en GSC (ej. https://ekio.es/ o sc-domain:ekio.es)",
    )
    p.add_argument(
        "--days",
        type=int,
        default=28,
        help="Últimos N días (default 28). Ignorado si pasas --start/--end.",
    )
    p.add_argument("--start", help="Fecha inicio YYYY-MM-DD (opcional)")
    p.add_argument("--end", help="Fecha fin YYYY-MM-DD (opcional)")
    p.add_argument(
        "--dimension",
        default="query,page",
        help=(
            "Dimensiones separadas por coma. "
            f"Permitidas: {sorted(VALID_DIMENSIONS)}. "
            "Default 'query,page'. Ejemplos: 'query', 'page', 'query,page', 'date,query'"
        ),
    )
    p.add_argument("--rows", type=int, default=25000, help="Máx filas (default 25000)")
    p.add_argument(
        "--output",
        help="Nombre custom del CSV (sin ruta). Default: timestamp + dimensiones.",
    )
    return p.parse_args()


def main():
    args = parse_args()

    if args.start and args.end:
        start_date, end_date = args.start, args.end
    else:
        end_date = date.today().isoformat()
        start_date = (date.today() - timedelta(days=args.days)).isoformat()

    dimensions = [d.strip() for d in args.dimension.split(",") if d.strip()]
    invalid = [d for d in dimensions if d not in VALID_DIMENSIONS]
    if invalid:
        sys.stderr.write(
            f"[ERROR] Dimensiones inválidas: {invalid}. "
            f"Permitidas: {sorted(VALID_DIMENSIONS)}\n"
        )
        sys.exit(1)

    EXPORT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"[GSC] Autenticando…")
    service = authenticate()

    print(
        f"[GSC] Descargando {args.site} | {start_date} → {end_date} | "
        f"dim={dimensions} | rows≤{args.rows}"
    )
    rows = fetch_data(service, args.site, start_date, end_date, dimensions, args.rows)
    print(f"[GSC] {len(rows)} filas obtenidas.")

    if args.output:
        filename = args.output
    else:
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        dim_tag = "-".join(dimensions)
        filename = f"gsc_{ts}_{start_date}_to_{end_date}_{dim_tag}.csv"

    output_path = EXPORT_DIR / filename
    save_csv(rows, dimensions, output_path)
    print(f"[GSC] CSV guardado en: {output_path}")

    summary = {
        "site": args.site,
        "start_date": start_date,
        "end_date": end_date,
        "dimensions": dimensions,
        "row_count": len(rows),
        "output_file": str(output_path.relative_to(BASE_DIR.parent)),
    }
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
