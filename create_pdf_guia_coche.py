#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
EKIO — Guia de Higiene Electromagnetica en el Coche
Adaptacion a EKIO del articulo "SPIRO para vehiculos electricos o hibridos".
PDF profesional con productos SPIRO, base cientifica, investigacion y protocolo.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, KeepTogether, Image
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.platypus.flowables import Flowable
import os

# === PATHS ===
ASSETS = "/Users/javierandres/Ekio-Claude/pdf_assets"
OUTPUT = "/Users/javierandres/Ekio-Claude/guia-higiene-electromagnetica-coche.pdf"
PAGE_W, PAGE_H = A4

# === COLORES EKIO ===
EKIO_DARK   = colors.HexColor('#1a3a2a')
EKIO_MID    = colors.HexColor('#2d6a4f')
EKIO_LIGHT  = colors.HexColor('#52b788')
EKIO_PALE   = colors.HexColor('#d8f3dc')
EKIO_CREAM  = colors.HexColor('#f0f9f4')
EKIO_WHITE  = colors.white
EKIO_TEXT   = colors.HexColor('#1c1c1c')
EKIO_GRAY   = colors.HexColor('#666666')
EKIO_LGRAY  = colors.HexColor('#f4f4f4')

WA = "+34 639 183 105"

# === ESTILOS ===
def make_styles():
    s = {}
    s['section_label'] = ParagraphStyle('section_label',
        fontName='Helvetica-Bold', fontSize=8, textColor=EKIO_LIGHT,
        spaceAfter=2, spaceBefore=20, leading=10)
    s['h1'] = ParagraphStyle('h1',
        fontName='Helvetica-Bold', fontSize=19, textColor=EKIO_DARK,
        spaceAfter=8, spaceBefore=4, leading=23)
    s['h2'] = ParagraphStyle('h2',
        fontName='Helvetica-Bold', fontSize=13, textColor=EKIO_MID,
        spaceAfter=5, spaceBefore=14, leading=17)
    s['h3'] = ParagraphStyle('h3',
        fontName='Helvetica-Bold', fontSize=11, textColor=EKIO_DARK,
        spaceAfter=4, spaceBefore=8, leading=14)
    s['body'] = ParagraphStyle('body',
        fontName='Helvetica', fontSize=10, textColor=EKIO_TEXT,
        spaceAfter=6, leading=15, alignment=TA_JUSTIFY)
    s['body_sm'] = ParagraphStyle('body_sm',
        fontName='Helvetica', fontSize=9, textColor=EKIO_TEXT,
        spaceAfter=4, leading=13, alignment=TA_JUSTIFY)
    s['bullet'] = ParagraphStyle('bullet',
        fontName='Helvetica', fontSize=10, textColor=EKIO_TEXT,
        spaceAfter=4, leading=15, leftIndent=14, bulletIndent=2)
    s['prod_name'] = ParagraphStyle('prod_name',
        fontName='Helvetica-Bold', fontSize=11, textColor=EKIO_WHITE,
        spaceAfter=2, leading=14)
    s['wa_title'] = ParagraphStyle('wa_title',
        fontName='Helvetica-Bold', fontSize=10, textColor=EKIO_WHITE,
        spaceAfter=2, leading=13)
    s['wa_body'] = ParagraphStyle('wa_body',
        fontName='Helvetica', fontSize=9, textColor=EKIO_PALE,
        spaceAfter=0, leading=13)
    s['wa_number'] = ParagraphStyle('wa_number',
        fontName='Helvetica-Bold', fontSize=11, textColor=colors.HexColor('#25D366'),
        spaceAfter=0, leading=14)
    s['prod_body'] = ParagraphStyle('prod_body',
        fontName='Helvetica', fontSize=9, textColor=EKIO_TEXT,
        spaceAfter=3, leading=13, alignment=TA_JUSTIFY)
    s['prod_spec'] = ParagraphStyle('prod_spec',
        fontName='Helvetica-Bold', fontSize=8, textColor=EKIO_MID,
        spaceAfter=2, leading=11)
    s['faq_q'] = ParagraphStyle('faq_q',
        fontName='Helvetica-Bold', fontSize=10, textColor=EKIO_DARK,
        spaceAfter=3, spaceBefore=10, leading=14)
    s['faq_a'] = ParagraphStyle('faq_a',
        fontName='Helvetica', fontSize=10, textColor=EKIO_TEXT,
        spaceAfter=2, leading=15, leftIndent=12, alignment=TA_JUSTIFY)
    s['science_head'] = ParagraphStyle('science_head',
        fontName='Helvetica-Bold', fontSize=11, textColor=EKIO_WHITE,
        spaceAfter=3, leading=14)
    s['science_body'] = ParagraphStyle('science_body',
        fontName='Helvetica', fontSize=9.5, textColor=colors.HexColor('#d0ead8'),
        spaceAfter=4, leading=14, alignment=TA_JUSTIFY)
    s['cta_title'] = ParagraphStyle('cta_title',
        fontName='Helvetica-Bold', fontSize=15, textColor=EKIO_WHITE,
        alignment=TA_CENTER, spaceAfter=6, leading=19)
    s['cta_opt_title'] = ParagraphStyle('cta_opt_title',
        fontName='Helvetica-Bold', fontSize=10, textColor=EKIO_LIGHT,
        spaceAfter=2, leading=13)
    s['cta_body'] = ParagraphStyle('cta_body',
        fontName='Helvetica', fontSize=9.5, textColor=colors.HexColor('#b7d5c0'),
        spaceAfter=4, leading=14, alignment=TA_JUSTIFY)
    s['note'] = ParagraphStyle('note',
        fontName='Helvetica-Oblique', fontSize=8, textColor=EKIO_GRAY,
        spaceAfter=4, leading=12, alignment=TA_JUSTIFY)
    return s

S = make_styles()

# === CUSTOM FLOWABLES ===
class SectionDivider(Flowable):
    def __init__(self, width, color=EKIO_LIGHT, thickness=1.5):
        super().__init__()
        self.width = width
        self.color = color
        self.thickness = thickness
        self.height = thickness + 6
    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 3, self.width, 3)

def img(filename, width=3*cm, height=3*cm):
    path = os.path.join(ASSETS, filename)
    if not os.path.exists(path):
        return Spacer(width, height)
    try:
        from PIL import Image as PILImage
        pil = PILImage.open(path)
        pw, ph = pil.size
        ratio = pw / ph
        if ratio > 1:
            h = width / ratio
            w = width
        else:
            w = height * ratio
            h = height
        return Image(path, width=w, height=h)
    except Exception:
        return Image(path, width=width, height=height)

# === COVER PAGE ===
def build_cover(canvas, doc):
    canvas.saveState()
    w, h = PAGE_W, PAGE_H
    canvas.setFillColor(EKIO_DARK)
    canvas.rect(0, 0, w, h, fill=1, stroke=0)
    canvas.setFillColor(EKIO_MID)
    canvas.rect(0, h-8, w, 8, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#224435'))
    canvas.circle(w*0.88, h*0.62, 190, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#1e3d2f'))
    canvas.circle(w*0.08, h*0.18, 120, fill=1, stroke=0)

    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 30)
    canvas.drawCentredString(w/2, h-88, "EKIO")
    canvas.setFont('Helvetica', 10)
    canvas.setFillColor(EKIO_PALE)
    canvas.drawCentredString(w/2, h-106, "ELECTROSMOG ESPANA")

    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.8)
    canvas.line(w*0.32, h-118, w*0.68, h-118)

    canvas.setFillColor(EKIO_WHITE)
    canvas.setFont('Helvetica-Bold', 26)
    ty = h-172
    canvas.drawCentredString(w/2, ty, "Guia de Higiene")
    canvas.drawCentredString(w/2, ty-32, "Electromagnetica")
    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 28)
    canvas.drawCentredString(w/2, ty-66, "en el Coche")

    canvas.setFillColor(EKIO_PALE)
    canvas.setFont('Helvetica', 12)
    canvas.drawCentredString(w/2, ty-98, "Coches electricos, hibridos y de combustion  |  Tecnologia SPIRO")

    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.4)
    canvas.line(w*0.18, ty-112, w*0.82, ty-112)

    by = ty-136
    badges = ["Que emite un coche", "Que dice la ciencia", "Ninos y embarazo", "Solucion SPIRO", "Trucos gratis"]
    bw = 90
    total = len(badges)*bw + (len(badges)-1)*5
    bx0 = (w - total) / 2
    for i, badge in enumerate(badges):
        bx = bx0 + i*(bw+5)
        canvas.setFillColor(EKIO_MID)
        canvas.roundRect(bx, by-12, bw, 22, 5, fill=1, stroke=0)
        canvas.setFillColor(EKIO_WHITE)
        canvas.setFont('Helvetica-Bold', 6.5)
        canvas.drawCentredString(bx+bw/2, by-4, badge)

    canvas.setFillColor(colors.HexColor('#b7d5c0'))
    canvas.setFont('Helvetica', 10)
    dy = by - 42
    for line in [
        "Todo lo que necesitas saber sobre los campos electromagneticos dentro del coche,",
        "explicado facil, y como reducir tu exposicion sin renunciar a nada.",
    ]:
        canvas.drawCentredString(w/2, dy, line)
        dy -= 16

    canvas.setFillColor(EKIO_MID)
    canvas.rect(0, 0, w, 68, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#25D366'))
    canvas.setFont('Helvetica-Bold', 12)
    canvas.drawCentredString(w/2, 46, f"WhatsApp: {WA}")
    canvas.setFillColor(EKIO_PALE)
    canvas.setFont('Helvetica', 9)
    canvas.drawCentredString(w/2, 30, "electrosmogespana.com  |  ekio.es  |  info@ekio.es")
    canvas.setFont('Helvetica', 7.5)
    canvas.setFillColor(colors.HexColor('#90b8a0'))
    canvas.drawCentredString(w/2, 14, "2026 - Documento educativo. Todos los derechos reservados.")
    canvas.restoreState()

def on_page(canvas, doc):
    canvas.saveState()
    w, h = PAGE_W, PAGE_H
    canvas.setFillColor(EKIO_DARK)
    canvas.rect(0, h-34, w, 34, fill=1, stroke=0)
    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 9)
    canvas.drawString(2*cm, h-21, "EKIO")
    canvas.setFillColor(EKIO_PALE)
    canvas.setFont('Helvetica', 8)
    canvas.drawString(3.5*cm, h-21, "- Higiene Electromagnetica en el Coche")
    canvas.drawRightString(w-2*cm, h-21, "electrosmogespana.com")
    canvas.setFillColor(EKIO_LGRAY)
    canvas.rect(0, 0, w, 26, fill=1, stroke=0)
    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.4)
    canvas.line(0, 26, w, 26)
    canvas.setFillColor(EKIO_GRAY)
    canvas.setFont('Helvetica', 7.5)
    canvas.drawCentredString(w/2, 9, f"Pagina {doc.page}  |  WhatsApp {WA}  |  electrosmogespana.com  |  info@ekio.es")
    canvas.restoreState()

# === PRODUCT CARD ===
def product_card(usable_w, img_file, name, coverage, description, ideal, tag_color=EKIO_DARK):
    img_w = 3.0*cm
    img_h = 3.0*cm
    gap = 0.4*cm
    text_w = usable_w - img_w - gap
    image = img(img_file, width=img_w, height=img_h)

    header_data = [[Paragraph(name, S['prod_name'])]]
    header_t = Table(header_data, colWidths=[usable_w])
    header_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), tag_color),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))

    body_items = []
    if coverage:
        body_items.append(Paragraph(f"<b>Cobertura:</b> {coverage}", S['prod_spec']))
    body_items.append(Paragraph(description, S['prod_body']))
    if ideal:
        body_items.append(Paragraph(f"<b>Ideal para:</b> {ideal}", S['prod_body']))

    inner = [[image, body_items]]
    inner_t = Table(inner, colWidths=[img_w+gap, text_w])
    inner_t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (0,-1), 8),
        ('RIGHTPADDING', (0,0), (0,-1), 4),
        ('LEFTPADDING', (1,0), (1,-1), 4),
        ('RIGHTPADDING', (1,0), (1,-1), 8),
        ('BACKGROUND', (0,0), (-1,-1), EKIO_CREAM),
        ('BOX', (0,0), (-1,-1), 0.5, EKIO_LIGHT),
    ]))
    return KeepTogether([header_t, inner_t, Spacer(1, 8)])

def make_levels_table():
    data = [
        ["Situacion", "Campo magnetico de baja frecuencia (aprox.)"],
        ["Coche diesel, conduccion normal", "0,02 microteslas (uT)"],
        ["Coche gasolina, conduccion normal", "0,04 - 0,05 uT"],
        ["Hibrido, conduccion normal", "0,06 - 0,09 uT"],
        ["Electrico, velocidad constante", "0,2 - 0,6 uT (habitual)"],
        ["Electrico, acelerando fuerte / frenada regenerativa", "1 - 10 uT; picos de hasta 20-100 uT junto a equipos"],
        ["Durante la carga (cable y cargador)", "2 - 3,6 uT cerca del cable"],
        ["Limite de referencia poblacional (UE / ICNIRP, 50 Hz)", "100 uT"],
    ]
    t = Table(data, colWidths=[7.3*cm, 10.7*cm], repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), EKIO_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), EKIO_WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,0), 9),
        ('ALIGN', (0,0), (-1,0), 'CENTER'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [EKIO_WHITE, EKIO_PALE]),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,1), (-1,-1), 8.5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.4, colors.HexColor('#b0d4be')),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor('#fff8e1')),
    ]))
    return t

def make_reco_table():
    data = [
        ["Perfil de uso", "Recomendacion SPIRO"],
        ["Coche de combustion, uso ocasional", "1 SPIRO Card por ocupante habitual"],
        ["Coche de combustion, uso diario / familia", "1 SPIRO Square en el habitaculo + 1 SPIRO Card por ocupante"],
        ["Hibrido o hibrido enchufable", "1 SPIRO Square X (zona bateria/consola) + 1 SPIRO Card por ocupante"],
        ["Electrico (EV)", "2 SPIRO Square X (bateria + habitaculo) + 1 SPIRO Card por ocupante"],
        ["Profesional al volante (taxi, VTC, comercial, reparto)", "2 SPIRO Square X + SPIRO Card X de uso personal"],
        ["Ninos que viajan a diario / embarazo", "Anadir 1 SPIRO Card en la plaza trasera central + medir con equipo"],
        ["Carga en casa (garaje / plaza)", "1 SPIRO Square junto al punto de carga o cuadro"],
    ]
    t = Table(data, colWidths=[7.5*cm, 10.5*cm], repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), EKIO_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), EKIO_WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,0), 9),
        ('ALIGN', (0,0), (-1,0), 'CENTER'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [EKIO_WHITE, EKIO_PALE]),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,1), (-1,-1), 8.5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.4, colors.HexColor('#b0d4be')),
    ]))
    return t

def highlight_box(text, usable_w, bg=EKIO_PALE, border=EKIO_LIGHT, style_key='body'):
    t = Table([[Paragraph(text, S[style_key])]], colWidths=[usable_w])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), bg),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 14),
        ('RIGHTPADDING', (0,0), (-1,-1), 14),
        ('BOX', (0,0), (-1,-1), 1.5, border),
        ('ROUNDEDCORNERS', [5,5,5,5]),
    ]))
    return t

def whatsapp_cta(usable_w, msg, sub):
    WA_GREEN = colors.HexColor('#1a3a2a')
    WA_ACCENT = colors.HexColor('#25D366')
    inner = [[Paragraph(f"<b>{msg}</b>", S['wa_title'])],
             [Paragraph(sub, S['wa_body'])],
             [Paragraph(f"WhatsApp  {WA}", S['wa_number'])]]
    inner_t = Table(inner, colWidths=[usable_w - 2*cm])
    inner_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), WA_GREEN),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    outer = Table([[inner_t]], colWidths=[usable_w])
    outer.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), WA_GREEN),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 16),
        ('RIGHTPADDING', (0,0), (-1,-1), 16),
        ('BOX', (0,0), (-1,-1), 2, WA_ACCENT),
        ('ROUNDEDCORNERS', [6,6,6,6]),
    ]))
    return KeepTogether([Spacer(1, 8), outer, Spacer(1, 10)])

def science_box(title, body_text, usable_w):
    rows = [[Paragraph(title, S['science_head'])], [Paragraph(body_text, S['science_body'])]]
    t = Table(rows, colWidths=[usable_w])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), EKIO_DARK),
        ('TOPPADDING', (0,0), (0,0), 10),
        ('BOTTOMPADDING', (0,-1), (-1,-1), 10),
        ('TOPPADDING', (0,1), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 14),
        ('RIGHTPADDING', (0,0), (-1,-1), 14),
        ('BOTTOMPADDING', (0,0), (0,0), 4),
        ('ROUNDEDCORNERS', [5,5,5,5]),
    ]))
    return t

# === CONTENIDO PRINCIPAL ===
def build_story(usable_w):
    story = []
    story.append(PageBreak())   # portada = pag 1

    # ── INTRODUCCION ────────────────────────────────────────────
    story.append(Paragraph("INTRODUCCION", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 6))
    story.append(Paragraph("El coche es una habitacion mas... y casi nadie la mide", S['h1']))
    for txt in [
        "Un conductor medio en Espana pasa entre 1 y 2 horas al dia dentro del coche. Un profesional "
        "del volante -taxista, VTC, comercial, repartidor- puede pasar 8 o 10. Y muchos ninos hacen "
        "cada dia el mismo trayecto al colegio en el asiento de atras.",
        "El coche moderno es un espacio pequeno, metalico y lleno de electronica: motor, baterias, "
        "cableado, pantalla, WiFi, Bluetooth, antenas, sensores... y encima los moviles de todos los "
        "que van dentro. Es, en pocos metros cuadrados, uno de los entornos con mas 'ruido "
        "electromagnetico' en los que estamos a diario.",
        "Este documento es una adaptacion para EKIO del articulo 'SPIRO para vehiculos electricos e "
        "hibridos'. Te explica, en lenguaje sencillo, que emite un coche, que dice de verdad la "
        "ciencia (lo bueno y lo discutido), quien deberia tener mas cuidado, y como reducir tu "
        "exposicion: primero con trucos gratis y despues con tecnologia SPIRO, sin cambiar de coche "
        "ni renunciar a la conectividad.",
    ]:
        story.append(Paragraph(txt, S['body']))

    story.append(whatsapp_cta(usable_w,
        "Quieres saber cuanto campo hay dentro de tu coche?",
        "Escribenos por WhatsApp y te orientamos sobre como medirlo y que hacer."))

    # ── SECCION 1: QUE EMITE UN COCHE ───────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 1", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Que emite un coche por dentro (explicado facil)", S['h1']))
    story.append(Paragraph(
        "Dentro de un coche conviven dos tipos de 'onda' muy diferentes. Conviene distinguirlas "
        "porque ni vienen del mismo sitio ni se reducen igual.", S['body']))

    focos = [
        ("1 - Campo magnetico de baja frecuencia (ELF): el de la corriente que mueve el coche",
         "Siempre que circula electricidad se genera un campo magnetico a su alrededor. En un coche "
         "electrico o hibrido la corriente que va de la bateria al motor es muy alta, sobre todo al "
         "arrancar, al acelerar con fuerza y al frenar (la frenada regenerativa devuelve energia a la "
         "bateria). En esos momentos el campo magnetico dentro del habitaculo sube de forma "
         "temporal. Las fuentes principales son la bateria de alto voltaje, el motor electrico, el "
         "inversor y los cables gruesos que suelen ir por el suelo del coche. Por eso la zona de los "
         "pies y los asientos mas cercanos a la bateria son donde mas se nota."),
        ("2 - Radiofrecuencia (RF): el 'WiFi' del coche y el de los moviles de dentro",
         "Los coches actuales llevan tarjeta SIM propia (para la llamada de emergencia eCall y los "
         "servicios conectados), punto WiFi, Bluetooth, mando sin llave (keyless), sensores de "
         "presion de neumaticos y pantalla multimedia. Todo eso emite radiofrecuencia. Ademas, la "
         "carroceria metalica actua en parte como una 'jaula': los moviles de los ocupantes captan "
         "peor la senal y suben su potencia de emision para compensar. Resultado: cuatro moviles "
         "buscando cobertura dentro de una lata metalica emiten mas que al aire libre."),
        ("3 - La carga: un rato corto pero intenso",
         "Al enchufar el coche, el cable y el cargador manejan mucha corriente. Cerca del cable de "
         "carga se han medido valores de 2 a 3,6 microteslas, y mas altos en cargadores rapidos de "
         "alta potencia. No conviene pasar el rato de la carga sentado justo encima de la bateria o "
         "pegado al cargador."),
        ("4 - Electricidad sucia: el 'ruido' que meten los convertidores",
         "Los coches electricos e hibridos llevan convertidores DC-DC, inversores, cargadores y "
         "luces LED que generan microcortes y armonicos de alta frecuencia. Ese 'ruido electrico' "
         "viaja por el cableado de 12 V de todo el coche y se suma al ambiente del habitaculo."),
        ("5 - El efecto acumulado: poco tiempo, pero todos los dias",
         "Ninguna de estas fuentes supera por si sola los limites legales en conduccion normal. Pero "
         "los limites se pensaron para fuentes sueltas y exposiciones cortas, no para la mezcla de "
         "todas ellas, un dia si y otro tambien, en un espacio del que no te puedes alejar mientras "
         "conduces."),
    ]
    for title, body in focos:
        story.append(KeepTogether([
            Paragraph(title, S['h2']),
            Paragraph(body, S['body']),
            Spacer(1, 4),
        ]))

    story.append(whatsapp_cta(usable_w,
        "No sabes que fuente pesa mas en tu caso?",
        "Cuentanos que coche tienes y como lo usas y te lo analizamos sin compromiso."))

    # ── SECCION 2: QUE DICE LA CIENCIA ──────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 2", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Que dice la ciencia (sin exagerar y sin minimizar)", S['h1']))

    story.append(Paragraph("Lo que muestran los estudios oficiales", S['h2']))
    for txt in [
        "El estudio mas completo hasta la fecha lo hizo la Oficina Federal de Proteccion Radiologica "
        "de Alemania (BfS, publicado en 2025): midio el campo magnetico en los asientos de 14 coches "
        "(11 electricos, 2 hibridos y 1 de gasolina de referencia), en banco de rodillos, circuito "
        "cerrado y trafico real.",
        "Conclusiones del BfS: con una conduccion suave, los valores se quedaron en un porcentaje "
        "bajo (dos digitos) de los niveles de referencia europeos. Con conduccion deportiva "
        "(acelerones y frenadas fuertes), varios electricos -y tambien el coche de gasolina de "
        "comparacion- superaron puntualmente esos niveles de referencia. El campo mas alto aparecio "
        "en la zona de los pies; en cabeza y tronco fue bajo. El pico maximo de todo el estudio se "
        "registro en el arranque de un hibrido.",
        "El BfS considera 'muy improbable' un efecto sobre la salud con el conocimiento actual, pero "
        "recomienda a los fabricantes 'diseno inteligente del vehiculo' para alejar las fuentes de "
        "los ocupantes y reducir los picos. Un estudio noruego financiado por la UE llego a una "
        "conclusion parecida: los campos de los electricos no son muy distintos de los de un coche "
        "de combustion y se mantienen por debajo de los limites.",
    ]:
        story.append(Paragraph(txt, S['body']))

    story.append(Spacer(1, 4))
    story.append(Paragraph("Lo que sigue en discusion", S['h2']))
    for txt in [
        "1) Picos cortos. Los limites de referencia se calculan como promedios. Los acelerones y las "
        "frenadas generan subidas de menos de un segundo que esos promedios no capturan bien; el "
        "propio BfS pide actualizar la forma de medir.",
        "2) Asientos traseros en hibridos. En muchos hibridos la bateria va bajo los asientos de "
        "atras. Varios trabajos han medido ahi valores por encima de 0,2 microteslas en una parte "
        "importante de las mediciones, justo donde suelen ir los ninos.",
        "3) Exposicion cronica y no termica. El debate cientifico general sobre campos "
        "electromagneticos y salud a largo plazo (por debajo del efecto de calentamiento) sigue "
        "abierto. Por eso organismos y expertos aplican el principio de precaucion: si es facil "
        "reducir la exposicion sin perder nada, merece la pena hacerlo.",
    ]:
        story.append(Paragraph(txt, S['body']))

    story.append(Spacer(1, 8))
    story.append(KeepTogether([
        Paragraph("Cuanto campo hay, en numeros", S['h2']),
        make_levels_table(),
        Spacer(1, 6),
        Paragraph(
            "Los valores varian mucho entre modelos, estilos de conduccion y estudios: tomalos como "
            "orden de magnitud, no como cifra exacta de tu coche. 1 microtesla (uT) = 1.000 nanoteslas (nT).",
            S['note']),
    ]))

    story.append(Spacer(1, 6))
    story.append(highlight_box(
        "Resumen honesto: en conduccion tranquila, tu coche esta por debajo de los limites legales. "
        "Los puntos a vigilar son los picos al acelerar y frenar, los asientos traseros en hibridos, "
        "el rato de la carga y la suma de moviles dentro del habitaculo. Reducir todo eso es sencillo.",
        usable_w))

    story.append(whatsapp_cta(usable_w,
        "Quieres las referencias de los estudios citados?",
        "Te pasamos el listado (BfS 2025, estudio noruego UE, articulos indexados) por WhatsApp."))

    # ── SECCION 3: QUIEN DEBERIA CUIDARSE MAS ───────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 3", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Quien deberia tener mas cuidado", S['h1']))
    story.append(Paragraph(
        "No todo el mundo pasa el mismo tiempo en el coche ni esta en la misma etapa. Estos perfiles "
        "son los que mas ganan aplicando higiene electromagnetica en el vehiculo:", S['body']))
    perfiles = [
        "<b>Profesionales del volante:</b> taxi, VTC, comercial, reparto, transportista. Muchas horas "
        "al dia, muchos dias al ano, casi siempre en el asiento delantero, junto a la electronica.",
        "<b>Ninos y bebes:</b> viajan detras, a menudo cerca de la bateria en los hibridos, y hacen "
        "el mismo trayecto a diario. Su cuerpo es mas pequeno y esta en desarrollo.",
        "<b>Embarazo:</b> por precaucion, se recomienda limitar exposiciones evitables durante la "
        "gestacion.",
        "<b>Personas electrosensibles (EHS):</b> refieren dolor de cabeza, fatiga o dificultad de "
        "concentracion en entornos con mucha electronica; el coche suele ser uno de ellos.",
        "<b>Quien carga en casa:</b> si el punto de carga esta en un garaje pegado a una habitacion "
        "o a una zona de estar, conviene revisarlo.",
    ]
    for p in perfiles:
        story.append(Paragraph(f"- {p}", S['bullet']))
        story.append(Spacer(1, 2))

    story.append(whatsapp_cta(usable_w,
        "Llevas ninos a diario en el coche?",
        "Te ayudamos a elegir la plaza con menos campo y a proteger esa zona. Escribenos."))

    # ── SECCION 4: LA CIENCIA DE SPIRO ──────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 4", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Como funciona la tecnologia SPIRO", S['h1']))
    story.append(Paragraph(
        "En un coche necesitas la senal: GPS, llamadas manos libres, eCall, actualizaciones. Por eso "
        "apantallar o meter el movil en una jaula de Faraday no es una solucion practica mientras "
        "conduces. SPIRO parte de otra idea.", S['body']))

    science_blocks = [
        ("La hipotesis: el problema es la 'forma' de la onda, no solo su fuerza",
         "Los campos electromagneticos naturales (campo terrestre, resonancia Schumann de 7,8 Hz) "
         "tienen una polarizacion compleja y variada. Los aparatos generan ondas con una "
         "polarizacion artificial, uniforme, que no existe en la naturaleza. La hipotesis de SPIRO "
         "es que esa polarizacion artificial es la que interfiere con los procesos bioelectricos de "
         "las celulas."),
        ("El material nanocompuesto: un modulador pasivo permanente",
         "El nucleo SPIRO es una aleacion de metales y nanoparticulas encapsuladas en un soporte "
         "solido curado. Una vez fabricado no consume energia, no emite nada propio y no se degrada. "
         "Su funcion es reorganizar el estado de polarizacion de las ondas de su entorno, acercarlo "
         "a lo que la biologia reconoce como natural. La senal (WiFi, 4G/5G, GPS, Bluetooth) sigue "
         "funcionando a plena potencia: lo que cambia es su estructura, no su intensidad."),
        ("El filtro magnetico para el sistema electrico del coche",
         "La version SQUARE X incorpora un filtro magnetico pensado para las emisiones del sistema "
         "electrico y de la bateria del vehiculo, que es donde se concentran los picos de baja "
         "frecuencia al acelerar, frenar y cargar. Se coloca cerca de la consola central o de la "
         "zona de bateria, sin instalacion ni cableado."),
    ]
    for stitle, sbody in science_blocks:
        story.append(KeepTogether([science_box(stitle, sbody, usable_w), Spacer(1, 8)]))

    story.append(Paragraph("Evidencia disponible y como la presentamos", S['h2']))
    story.append(Paragraph(
        "El fabricante ha realizado evaluaciones instrumentales en vehiculos (incluido un Tesla "
        "Model Y) midiendo radiofrecuencia, campo cercano y bioelectrografia (GDV) antes y despues "
        "de instalar los dispositivos, y recoge testimonios de usuarios que reportan mejor descanso "
        "y menos molestias. Lo presentamos con transparencia: son evaluaciones del propio fabricante "
        "y experiencias de usuario, no ensayos clinicos revisados por pares. El marco teorico del "
        "posible mecanismo de dano (estres oxidativo, melatonina, canales de calcio) se apoya en "
        "literatura indexada disponible en PubMed.", S['body']))

    story.append(whatsapp_cta(usable_w,
        "Quieres entender mejor el mecanismo SPIRO?",
        "Te lo explicamos con calma y te pasamos la documentacion tecnica por WhatsApp."))

    # ── SECCION 5: PRODUCTOS ────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 5", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("La gama SPIRO para el coche", S['h1']))
    story.append(Paragraph(
        "Todos los productos usan el mismo nanocompuesto pasivo. Lo que cambia entre modelos es la "
        "cantidad de material activo, que determina el radio de accion. Vida util permanente, sin "
        "mantenimiento y sin bateria.", S['body']))
    story.append(Spacer(1, 6))

    story.append(Paragraph("Para el sistema electrico y la bateria (electricos e hibridos)", S['h2']))
    story.append(product_card(
        usable_w, 'square_x.png',
        "SPIRO SQUARE X - Filtro EMF avanzado con filtro magnetico",
        "4,2 m de radio - 10 x 10 x 0,33 cm, 51 g - todo el espectro, incluido 5G",
        "Es la pieza clave para coche electrico o hibrido. Incorpora un filtro magnetico orientado "
        "a las emisiones del sistema electrico y de la bateria de alto voltaje, que es donde se "
        "concentran los picos de baja frecuencia al acelerar, frenar y cargar. Se coloca en la "
        "consola central, la guantera o cerca de la zona de bateria. Para un EV se recomiendan dos "
        "unidades (bateria + habitaculo). Apto para personas con electrohipersensibilidad.",
        "Coche electrico e hibrido, profesionales del volante, proteccion durante la carga.",
        tag_color=colors.HexColor('#1a2a4a')
    ))

    story.append(Paragraph("Para el habitaculo (cualquier coche)", S['h2']))
    story.append(product_card(
        usable_w, 'square.png',
        "SPIRO SQUARE - Filtro para el habitaculo",
        "Cobertura intermedia - compacto y versatil",
        "Modula el ambiente electromagnetico del interior: WiFi del coche, Bluetooth, pantalla "
        "multimedia y los moviles de los ocupantes. Buena opcion para un coche de combustion de uso "
        "diario o familiar, o como segunda unidad en el habitaculo de un hibrido. Se deja en la "
        "consola o en el hueco central sin instalacion.",
        "Coche de combustion de uso diario, familias, segunda unidad en hibrido.",
        tag_color=EKIO_MID
    ))

    story.append(Paragraph("Proteccion personal de cada ocupante", S['h2']))
    story.append(product_card(
        usable_w, 'card.jpg',
        "SPIRO CARD - Filtro EMF personal (formato tarjeta)",
        "Proteccion corporal directa - va en la cartera o el bolsillo",
        "La base para cada persona que viaja con movil. Formato tarjeta: en la cartera, la funda "
        "del movil o el bolsillo. La recomendacion EKIO es 1 SPIRO Card por ocupante habitual del "
        "coche, ademas del filtro del vehiculo. Para ninos que viajan a diario, una Card en la "
        "plaza trasera central anade cobertura en esa zona.",
        "Todos los ocupantes, uso diario dentro y fuera del coche.",
        tag_color=EKIO_DARK
    ))
    story.append(product_card(
        usable_w, 'card_x.png',
        "SPIRO CARD X - Filtro EMF personal avanzado",
        "Mayor potencia de modulacion - formato bolsillo",
        "Version reforzada de la Card para quien pasa muchas horas al volante o transita a diario "
        "por entornos con mucha electronica (aparcamientos, ciudad, transporte). Complemento "
        "personal ideal para el profesional del volante.",
        "Taxistas, VTC, comerciales, repartidores, uso intensivo.",
        tag_color=EKIO_DARK
    ))

    story.append(Paragraph("Para el punto de carga en casa", S['h2']))
    story.append(product_card(
        usable_w, 'disc.png',
        "SPIRO Disc - Filtro para el garaje o la plaza de carga",
        "7 m de radio - alta y baja frecuencia",
        "Si cargas el coche en un garaje pegado a una habitacion o a una zona de estar, el Disc "
        "modula el entorno alrededor del punto de carga y del cuadro electrico durante las horas de "
        "recarga. No necesita instalacion ni alimentacion.",
        "Garaje contiguo a vivienda, plaza de carga en casa, cuadro electrico.",
        tag_color=EKIO_MID
    ))

    story.append(whatsapp_cta(usable_w,
        "No sabes que combinacion necesitas?",
        "Dinos el modelo de coche y quien viaja habitualmente y te decimos exactamente que llevar."))

    story.append(PageBreak())
    story.append(Paragraph("Mapa de recomendaciones por perfil de uso", S['h2']))
    story.append(make_reco_table())
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "Precios de referencia (consultar tienda): SPIRO Card 97 EUR  |  SPIRO Card X 167 EUR  |  "
        "SPIRO Square 147 EUR  |  SPIRO Square X 257 EUR  |  SPIRO Disc 255 EUR. Disponemos de packs "
        "combinados. Consultanos por WhatsApp la mejor opcion para tu coche y presupuesto.", S['note']))

    # ── SECCION 6: TRUCOS GRATIS + PROTOCOLO ────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 6", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Reduce tu exposicion: primero gratis, luego SPIRO", S['h1']))

    pasos = [
        ("Paso 1 - Higiene sin coste (desde hoy)", [
            "Movil en un soporte del salpicadero o en el hueco de la puerta, nunca en el regazo, el "
            "pecho ni el asiento de al lado.",
            "Usa CarPlay / Android Auto por cable en vez de Bluetooth siempre que puedas.",
            "Desactiva el punto WiFi del coche cuando no lo uses (se hace desde la pantalla; el GPS "
            "y el resto siguen funcionando).",
            "Limita los dispositivos Bluetooth conectados a la vez.",
            "Llamadas por altavoz del coche, no con el movil pegado a la oreja ni con un solo "
            "auricular Bluetooth.",
        ]),
        ("Paso 2 - Coloca a los pasajeros con cabeza", [
            "Ninos en la plaza trasera central si el sistema de retencion lo permite: suele ser la "
            "mas alejada de bateria y cableado.",
            "Aleja un poco el asiento del suelo/consola cuando sea posible (mas distancia al "
            "cableado que va por debajo).",
            "En viajes largos, mochilas y moviles de los ninos en el maletero, no a sus pies.",
        ]),
        ("Paso 3 - Mando sin llave (keyless)", [
            "Guarda el mando en una funda Faraday (tambien reduce el robo por amplificacion de senal).",
            "En casa, deja el mando lejos de la puerta y de la cabecera de la cama.",
        ]),
        ("Paso 4 - El rato de la carga", [
            "Enchufa y sal del coche: no te quedes dentro sentado encima de la bateria mientras carga.",
            "No dejes a los ninos jugando dentro del coche durante una carga rapida.",
            "Si cargas en un garaje pegado a una habitacion, revisa ese punto (y considera un SPIRO Disc).",
        ]),
        ("Paso 5 - Instala SPIRO en el coche", [
            "SPIRO Square X en la consola central o guantera (electrico/hibrido: tambien una segunda "
            "unidad hacia la zona de bateria).",
            "1 SPIRO Card por ocupante habitual; Card X para el profesional del volante.",
            "SPIRO Square en el habitaculo si el coche es de combustion y de uso diario.",
            "SPIRO Disc junto al punto de carga domestico si aplica.",
        ]),
        ("Paso 6 - Revisa despues de un taller o un golpe", [
            "Las reparaciones grandes o un accidente pueden cambiar el campo dentro del coche "
            "(cambio de componentes, mazos de cables). Si eres sensible o llevas ninos a diario, "
            "conviene volver a medir tras una intervencion importante.",
        ]),
    ]
    for ptitle, bullets in pasos:
        items = [Paragraph(ptitle, S['h2'])]
        for b in bullets:
            items.append(Paragraph(f"- {b}", S['bullet']))
        items.append(Spacer(1, 6))
        story.append(KeepTogether(items))

    story.append(whatsapp_cta(usable_w,
        "Quieres que revisemos tu coche contigo?",
        "Hacemos medicion real con equipos calibrados y te damos un plan concreto. Escribenos."))

    # ── SECCION 7: FAQ ─────────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 7", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Preguntas frecuentes", S['h1']))

    faqs = [
        ("Entonces, es peligroso ir en coche electrico?",
         "Con el conocimiento actual, los organismos oficiales consideran muy improbable un dano a "
         "la salud, porque en conduccion normal los valores estan por debajo de los limites. Lo "
         "razonable es aplicar precaucion: reducir los picos y la exposicion de ninos y "
         "embarazadas, que ademas es facil y gratis en su mayor parte."),
        ("El coche electrico emite mas que el de gasolina?",
         "Depende del momento. En marcha tranquila, las diferencias son pequenas. Al acelerar con "
         "fuerza o frenar, el electrico y el hibrido generan picos mas altos de campo magnetico de "
         "baja frecuencia. En radiofrecuencia, todos los coches modernos emiten (SIM, WiFi, "
         "Bluetooth, keyless), sean del tipo que sean."),
        ("SPIRO va a interferir con el GPS, el eCall o el manos libres?",
         "No. SPIRO no bloquea ninguna senal ni baja la potencia de ningun equipo. GPS, llamadas, "
         "eCall, WiFi, Bluetooth y 5G funcionan igual. SPIRO actua sobre la estructura de "
         "polarizacion de las emisiones, no sobre su intensidad."),
        ("Cuantos SPIRO necesito para mi coche?",
         "Combustion de uso ocasional: 1 Card por ocupante. Combustion diario/familiar: 1 Square en "
         "el habitaculo + 1 Card por ocupante. Hibrido: 1 Square X + 1 Card por ocupante. Electrico: "
         "2 Square X (bateria + habitaculo) + 1 Card por ocupante. Profesional del volante: 2 Square "
         "X + 1 Card X personal."),
        ("Sirve para un coche viejo sin pantalla ni WiFi?",
         "Si. Aunque no tenga multimedia, sigue habiendo alternador, cableado y, sobre todo, los "
         "moviles de los ocupantes emitiendo dentro de una carroceria metalica. La SPIRO Card por "
         "persona cubre ese escenario."),
        ("Los productos SPIRO se gastan o hay que recargarlos?",
         "No. El nanocompuesto es permanente: no se recarga, no se degrada, no consume electricidad "
         "y no tiene partes moviles. Es una compra unica."),
        ("Puedo pasar la SPIRO Card de un coche a otro o llevarla encima?",
         "Si. La Card es personal y portatil: te protege tambien fuera del coche. El filtro del "
         "vehiculo (Square / Square X) es el que conviene dejar fijo dentro."),
        ("Esto cura sintomas?",
         "No hacemos promesas de salud. SPIRO esta disenado para mejorar el entorno "
         "electromagnetico del coche. Algunos usuarios reportan dormir mejor o notar menos fatiga; "
         "son experiencias individuales, no un efecto clinico garantizado."),
    ]
    for q, a in faqs:
        story.append(KeepTogether([
            Paragraph(q, S['faq_q']),
            Paragraph(a, S['faq_a']),
            Spacer(1, 4),
        ]))

    story.append(whatsapp_cta(usable_w,
        "Tu pregunta no esta aqui?",
        "Escribenos directamente. Respondemos con honestidad y sin presion de venta."))

    # ── CTA FINAL ──────────────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("CONTACTO", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Estamos aqui para ayudarte", S['h1']))
    story.append(Paragraph(
        "Ya tienes lo que casi nadie mira: informacion real sobre el entorno electromagnetico del "
        "sitio donde pasas una o dos horas cada dia. El siguiente paso es sencillo: cuentanos tu "
        "caso y te orientamos sin compromiso.", S['body']))
    story.append(Spacer(1, 8))

    cta_opts = [
        ("Dinos que coche tienes",
         "Modelo, tipo (combustion / hibrido / electrico) y quien viaja habitualmente. Te decimos "
         "que productos tienen sentido para tu caso."),
        ("Pack Coche SPIRO",
         "SPIRO Square X para el sistema electrico + SPIRO Card por ocupante es el punto de entrada "
         "recomendado. Para EV, dos Square X."),
        ("Profesionales del volante",
         "Taxi, VTC, flotas y comerciales: plan especifico para quien pasa la jornada al volante, "
         "con proteccion del vehiculo y personal."),
        ("Medicion real",
         "Vamos con equipos calibrados, medimos el campo en cada plaza del coche y te entregamos un "
         "informe con recomendacion personalizada."),
    ]
    rows = [[Paragraph("Hablanos de tu caso", S['cta_title'])]]
    for title, body in cta_opts:
        rows.append([[
            Paragraph(title, S['cta_opt_title']),
            Paragraph(body, S['cta_body']),
        ]])
    rows.append([[
        Paragraph(f"WhatsApp: {WA}", S['wa_number']),
        Paragraph("electrosmogespana.com  |  ekio.es  |  info@ekio.es", S['cta_body']),
    ]])
    cta_t = Table(rows, colWidths=[usable_w])
    cta_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), EKIO_DARK),
        ('BACKGROUND', (0,-1), (-1,-1), EKIO_DARK),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [colors.HexColor('#1f4535'), colors.HexColor('#245040')]),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 16),
        ('RIGHTPADDING', (0,0), (-1,-1), 16),
        ('GRID', (0,1), (-1,-2), 0.3, colors.HexColor('#3a6b55')),
        ('ROUNDEDCORNERS', [6,6,6,6]),
    ]))
    story.append(cta_t)
    story.append(Spacer(1, 14))
    story.append(Paragraph(
        "Nota legal: este documento tiene proposito educativo e informativo y es una adaptacion "
        "para EKIO de material divulgativo sobre la gama SPIRO. Los productos SPIRO estan disenados "
        "para contribuir a mejorar el entorno electromagnetico; no son productos sanitarios ni "
        "sustituyen atencion medica. Los datos de campo proceden de estudios publicos (BfS 2025, "
        "estudio noruego financiado por la UE y articulos indexados en PubMed) y se presentan como "
        "orden de magnitud. Las evaluaciones instrumentales de SPIRO en vehiculos y los testimonios "
        "de usuarios son del fabricante y no constituyen ensayos clinicos revisados por pares.",
        S['note']))
    return story

def main():
    doc = SimpleDocTemplate(
        OUTPUT, pagesize=A4,
        leftMargin=2*cm, rightMargin=2*cm,
        topMargin=2.5*cm, bottomMargin=2*cm,
        title="Guia Higiene Electromagnetica en el Coche - EKIO SPIRO",
        author="EKIO Electrosmog Espana",
        subject="Contaminacion electromagnetica en el coche y tecnologia SPIRO",
    )
    uw = PAGE_W - 4*cm
    story = build_story(uw)
    doc.build(story,
              onFirstPage=lambda c, d: build_cover(c, d),
              onLaterPages=lambda c, d: on_page(c, d))
    print(f"PDF generado: {OUTPUT}")

if __name__ == "__main__":
    main()
