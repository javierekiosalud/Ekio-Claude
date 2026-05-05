#!/usr/bin/env python3
"""Convierte los markdown de auditoría SEO a PDF con estilo EKIO."""

import sys
from pathlib import Path
from markdown_pdf import MarkdownPdf, Section

BASE = Path(__file__).parent
ROOT = BASE.parent

CSS = """
body {
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    color: #222;
    line-height: 1.45;
    font-size: 10pt;
}
h1 {
    color: #0a4d3c;
    font-size: 22pt;
    border-bottom: 3px solid #0a4d3c;
    padding-bottom: 6px;
    margin-top: 0;
}
h2 {
    color: #0a4d3c;
    font-size: 14pt;
    margin-top: 18pt;
    border-bottom: 1px solid #d0d7de;
    padding-bottom: 3px;
}
h3 {
    color: #1a6b56;
    font-size: 12pt;
    margin-top: 14pt;
}
h4 {
    color: #2a4a3e;
    font-size: 11pt;
}
p, li {
    font-size: 10pt;
}
table {
    border-collapse: collapse;
    width: 100%;
    margin: 8pt 0;
    font-size: 9pt;
}
th, td {
    border: 1px solid #d0d7de;
    padding: 5px 8px;
    text-align: left;
    vertical-align: top;
}
th {
    background: #f5f7f6;
    font-weight: 600;
    color: #0a4d3c;
}
tr:nth-child(even) td {
    background: #fafbfa;
}
code {
    background: #f1f3f2;
    padding: 1px 4px;
    border-radius: 3px;
    font-family: "SF Mono", "Menlo", monospace;
    font-size: 8.5pt;
    color: #2a4a3e;
}
pre {
    background: #1d1f1e;
    color: #e6edea;
    padding: 10px 12px;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 8pt;
    line-height: 1.35;
}
pre code {
    background: transparent;
    color: inherit;
    padding: 0;
}
blockquote {
    border-left: 4px solid #0a4d3c;
    background: #f5f7f6;
    margin: 8pt 0;
    padding: 6pt 10pt;
    color: #2a4a3e;
}
hr {
    border: none;
    border-top: 1px solid #d0d7de;
    margin: 14pt 0;
}
strong {
    color: #0a4d3c;
}
a {
    color: #0a4d3c;
    text-decoration: underline;
}
"""


EMOJI_REPLACEMENTS = {
    "🚨": "▲ ",
    "✅": "✓ ",
    "🚀": "» ",
    "🔥": "● ",
    "🔧": "▶ ",
    "🏗️": "■ ",
    "📊": "▣ ",
    "📁": "▤ ",
    "📉": "↓ ",
    "📈": "↑ ",
    "📷": "",
    "🎯": "▶ ",
    "💡": "★ ",
    "⚠️": "▲ ",
    "⚠": "▲",
    "🅰️": "[A]",
    "🅱️": "[B]",
    "🔵": "■ ",
    "✋": "▶ ",
    "❓": "? ",
    "🤖": "",
    "—": "—",
}


def strip_problem_emojis(text: str) -> str:
    """Reemplaza emojis sin soporte tipográfico fiable por símbolos limpios."""
    for k, v in EMOJI_REPLACEMENTS.items():
        text = text.replace(k, v)
    return text


def convert(md_path: Path, pdf_path: Path, title: str):
    md = md_path.read_text(encoding="utf-8")
    md = strip_problem_emojis(md)
    pdf = MarkdownPdf(toc_level=2, optimize=True)
    pdf.add_section(Section(md, toc=False), user_css=CSS)
    pdf.meta["title"] = title
    pdf.meta["author"] = "EKIO Electrosmog España"
    pdf.meta["subject"] = "Auditoría SEO post-migración WP→Shopify"
    pdf.save(str(pdf_path))
    print(f"[OK] {pdf_path.relative_to(ROOT)}  ({pdf_path.stat().st_size//1024} KB)")


def main():
    targets = [
        (
            BASE / "AUDITORIA_MIGRACION_2026-05-05.md",
            BASE / "AUDITORIA_MIGRACION_2026-05-05.pdf",
            "Auditoría SEO post-migración WP→Shopify | EKIO 2026-05-05",
        ),
        (
            BASE / "gsc-exports" / "MIGRATION_ANALYSIS.md",
            BASE / "gsc-exports" / "MIGRATION_ANALYSIS.pdf",
            "Análisis comparativo GSC PRE vs POST migración | EKIO",
        ),
    ]
    for md, pdf, title in targets:
        if not md.exists():
            print(f"[ERR] No encuentro {md}", file=sys.stderr)
            continue
        convert(md, pdf, title)


if __name__ == "__main__":
    main()
