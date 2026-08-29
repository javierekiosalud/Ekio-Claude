#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
EKIO — Guia de Higiene Electromagnetica en la Oficina
PDF profesional con productos SPIRO, base cientifica, imágenes y protocolo.
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
OUTPUT  = "/Users/javierandres/Ekio-Claude/guia-higiene-electromagnetica-spiro-oficina.pdf"
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

# === ESTILOS ===
def make_styles():
    s = {}
    s['section_label'] = ParagraphStyle('section_label',
        fontName='Helvetica-Bold', fontSize=8, textColor=EKIO_LIGHT,
        spaceAfter=2, spaceBefore=20, leading=10, letterSpacing=1.5)

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

    s['bullet_sm'] = ParagraphStyle('bullet_sm',
        fontName='Helvetica', fontSize=9, textColor=EKIO_TEXT,
        spaceAfter=3, leading=13, leftIndent=14)

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

    s['tag'] = ParagraphStyle('tag',
        fontName='Helvetica-Bold', fontSize=8, textColor=EKIO_WHITE,
        alignment=TA_CENTER, leading=10)

    return s

S = make_styles()

WA = "+34 639 183 105"

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
    """Load image safely."""
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

    # Fondo
    canvas.setFillColor(EKIO_DARK)
    canvas.rect(0, 0, w, h, fill=1, stroke=0)

    # Franja top
    canvas.setFillColor(EKIO_MID)
    canvas.rect(0, h-8, w, 8, fill=1, stroke=0)

    # Círculos decorativos
    canvas.setFillColor(colors.HexColor('#224435'))
    canvas.circle(w*0.88, h*0.62, 190, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#1e3d2f'))
    canvas.circle(w*0.08, h*0.18, 120, fill=1, stroke=0)

    # Logo EKIO
    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 30)
    canvas.drawCentredString(w/2, h-88, "EKIO")
    canvas.setFont('Helvetica', 10)
    canvas.setFillColor(EKIO_PALE)
    canvas.drawCentredString(w/2, h-106, "ELECTROSMOG ESPAÑA")

    # Linea
    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.8)
    canvas.line(w*0.32, h-118, w*0.68, h-118)

    # Título principal
    canvas.setFillColor(EKIO_WHITE)
    canvas.setFont('Helvetica-Bold', 26)
    ty = h-172
    canvas.drawCentredString(w/2, ty, "Guia de Higiene")
    canvas.drawCentredString(w/2, ty-32, "Electromagnetica")
    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 28)
    canvas.drawCentredString(w/2, ty-66, "en la Oficina")

    # Subtítulo
    canvas.setFillColor(EKIO_PALE)
    canvas.setFont('Helvetica', 12)
    canvas.drawCentredString(w/2, ty-98, "Protocolo completo con tecnologia SPIRO")

    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.4)
    canvas.line(w*0.18, ty-112, w*0.82, ty-112)

    # Badges
    by = ty-136
    badges = ["5 Focos EMF", "Electricidad Sucia", "Productos SPIRO", "Base Cientifica", "Protocolo Paso a Paso"]
    bw = 82
    total = len(badges)*bw + (len(badges)-1)*6
    bx0 = (w - total) / 2
    for i, badge in enumerate(badges):
        bx = bx0 + i*(bw+6)
        canvas.setFillColor(EKIO_MID)
        canvas.roundRect(bx, by-12, bw, 22, 5, fill=1, stroke=0)
        canvas.setFillColor(EKIO_WHITE)
        canvas.setFont('Helvetica-Bold', 7)
        canvas.drawCentredString(bx+bw/2, by-4, badge)

    # Descripción
    canvas.setFillColor(colors.HexColor('#b7d5c0'))
    canvas.setFont('Helvetica', 10)
    dy = by - 42
    for line in [
        "Todo lo que necesitas para proteger tu entorno laboral del electrosmog",
        "y trabajar con plena productividad, sin renunciar a la conectividad."
    ]:
        canvas.drawCentredString(w/2, dy, line)
        dy -= 16

    # Franja inferior
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
    canvas.drawCentredString(w/2, 14, "2026 — Todos los derechos reservados")

    canvas.restoreState()


def on_page(canvas, doc):
    canvas.saveState()
    w, h = PAGE_W, PAGE_H
    # Header
    canvas.setFillColor(EKIO_DARK)
    canvas.rect(0, h-34, w, 34, fill=1, stroke=0)
    canvas.setFillColor(EKIO_LIGHT)
    canvas.setFont('Helvetica-Bold', 9)
    canvas.drawString(2*cm, h-21, "EKIO")
    canvas.setFillColor(EKIO_PALE)
    canvas.setFont('Helvetica', 8)
    canvas.drawString(3.5*cm, h-21, "— Higiene Electromagnetica en la Oficina")
    canvas.drawRightString(w-2*cm, h-21, "electrosmogespana.com")
    # Footer
    canvas.setFillColor(EKIO_LGRAY)
    canvas.rect(0, 0, w, 26, fill=1, stroke=0)
    canvas.setStrokeColor(EKIO_LIGHT)
    canvas.setLineWidth(0.4)
    canvas.line(0, 26, w, 26)
    canvas.setFillColor(EKIO_GRAY)
    canvas.setFont('Helvetica', 7.5)
    canvas.drawCentredString(w/2, 9, f"Pagina {doc.page}  |  WhatsApp {WA}  |  electrosmogespana.com  |  info@ekio.es")
    canvas.restoreState()


# === PRODUCT CARD (imagen + texto lado a lado) ===
def product_card(usable_w, img_file, name, coverage, description, ideal, tag_color=EKIO_DARK):
    """Returns a KeepTogether block with product image + info."""
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


# === TABLA RECOMENDACIONES ACTUALIZADA ===
def make_reco_table():
    data = [
        ["Situacion / Espacio", "Solucion SPIRO recomendada"],
        ["Puesto fijo individual", "SPIRO Disc + SQUARE X (personal) + STROOM MASTER (enchufe ordenador)"],
        ["Open space / varios puestos", "DISC por cada 2-3 puestos + SQUARE X o CARD X individual por trabajador"],
        ["Despacho con router cercano", "SPIRO Disc + SQUARE junto al router"],
        ["Sala de reuniones", "SPIRO Disc central"],
        ["Zona de comunicaciones / rack / servidor", "SPIRO DISC ULTRA (cobertura 32m)"],
        ["Profesional con alta movilidad", "SQUARE X (bolsillo/maletín, 4.2m) + CARD X personal"],
        ["Toda la planta / electricidad sucia", "STROOM MASTER PRO por cada 60m2 de superficie"],
        ["Proteccion personal completa", "SQUARE X + CARD X (corto y largo alcance)"],
    ]
    col_widths = [7.0*cm, 11.0*cm]
    t = Table(data, colWidths=col_widths, repeatRows=1)
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


# === CAJA DESTACADA ===
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


# === MINI CTA WHATSAPP ===
def whatsapp_cta(usable_w, msg="¿Tienes dudas sobre que producto necesitas?",
                 sub="Contactanos por WhatsApp y te lo resolvemos en minutos."):
    WA_GREEN = colors.HexColor('#1a3a2a')
    WA_ACCENT = colors.HexColor('#25D366')
    rows = [[
        Paragraph(f"<b>{msg}</b>", S['wa_title']),
        Paragraph(sub, S['wa_body']),
        Paragraph(f"WhatsApp: {WA}", S['wa_number']),
    ]]
    # lay them out vertically in one cell
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


# === CAJA CIENCIA (fondo oscuro) ===
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
    story.append(PageBreak())   # portada ocupa pag 1

    # ── INTRODUCCION ──────────────────────────────────────────
    story.append(Paragraph("INTRODUCCION", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 6))
    story.append(Paragraph("La oficina moderna te cuesta mas de lo que aparece en la nomina", S['h1']))
    for txt in [
        "Llevas horas frente a la pantalla. A las 3 de la tarde tienes una niebla mental que no es falta de cafe. Te vas a casa cansado de una forma que no se explica solo por las reuniones.",
        "Hay una variable que casi nadie mide: el entorno electromagnetico donde pasas entre 8 y 10 horas al dia. Una oficina moderna es, electromagneticamente hablando, uno de los entornos mas saturados que existen. Router WiFi corporativo, decenas de ordenadores en red, telefonos moviles sobre las mesas, impresoras, pantallas, cableado electrico, instalaciones electricas sobreexplotadas. Todo simultaneo. Todo continuo.",
        "Este documento te explica que ocurre exactamente, por que importa, y como implementar un protocolo de higiene electromagnetica en tu espacio de trabajo con tecnologia SPIRO, sin renunciar a la conectividad ni cambiar ningun dispositivo.",
    ]:
        story.append(Paragraph(txt, S['body']))

    story.append(whatsapp_cta(usable_w,
        "¿Quieres saber si tu oficina tiene un problema de electrosmog?",
        "Contactanos por WhatsApp y te hacemos una primera evaluacion gratuita de tu entorno."))

    # ── SECCION 1: LOS 5 FOCOS ────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 1", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Los 5 principales focos de contaminacion electromagnetica en una oficina", S['h1']))
    story.append(Paragraph(
        "Antes de hablar de soluciones, conviene entender el mapa. No todos los focos son iguales, "
        "ni tienen la misma relevancia segun donde te sientes.", S['body']))

    focos = [
        ("Foco 1 — Router WiFi corporativo",
         "Es el emisor mas constante. Los routers de grado empresarial emiten senal de radiofrecuencia "
         "(2,4 GHz y 5 GHz) de forma continua y a mayor potencia que los domesticos. A menos de 3 metros, "
         "los niveles de exposicion se multiplican significativamente respecto a estar al otro lado de la planta."),
        ("Foco 2 — Ordenador portatil y pantalla",
         "El portatil genera radiofrecuencias por WiFi y Bluetooth integrados, mas campos de baja frecuencia "
         "(ELF) del transformador, bateria y placa base. Lo critico no es el pico de emision: es la "
         "proximidad constante. A 30-50 cm de tu cuerpo durante horas, la intensidad tiene un peso biologico "
         "muy superior al de fuentes mas potentes pero lejanas."),
        ("Foco 3 — Telefono movil sobre la mesa",
         "Aunque la pantalla este apagada, el movil mantiene comunicacion continua con la antena mas cercana. "
         "En una reunion con 8 personas, los 8 telefonos sobre la mesa funcionan como 8 emisores simultaneos. "
         "Los auriculares Bluetooth suman una fuente de radiofrecuencia directamente adyacente al craneo."),
        ("Foco 4 — Electricidad sucia en la instalacion electrica",
         "Este es el foco menos conocido y uno de los mas importantes en entornos de oficina. La 'electricidad "
         "sucia' son los transitorios y armonicos de alta frecuencia que viajan por los propios cables "
         "electricos del edificio, generados por los propios dispositivos enchufados (ordenadores, cargadores, "
         "iluminacion LED, SAI, impresoras). Una oficina con 20 ordenadores enchufados introduce en la red "
         "electrica una contaminacion de alta frecuencia que se irradia desde cada cable de las paredes. "
         "Cuantos mas equipos, mas contaminacion electrica sucia. Y a diferencia del WiFi, esta viaja "
         "por toda la instalacion del edificio simultaneamente."),
        ("Foco 5 — Densidad acumulada del espacio compartido",
         "Ningun dispositivo supera individualmente los limites regulatorios. Pero los estandares de seguridad "
         "evaluan fuentes individuales, no la exposicion combinada y cronica de un open space con 20 personas, "
         "20 portatiles, 20 moviles, varios routers, impresoras en red, telefonos IP, sistemas de "
         "videoconferencia y cobertura 5G externa. El efecto acumulado es cualitativamente diferente al "
         "de cada fuente por separado."),
    ]

    for i, (title, body) in enumerate(focos):
        # Foco 4 gets a special dirty electricity highlight
        items = [Paragraph(title, S['h2']), Paragraph(body, S['body']), Spacer(1,4)]
        if i == 3:  # Foco 4 - electricidad sucia
            sucia_box = Table([[
                Paragraph("<b>Electricidad sucia en numeros:</b> Un ordenador convencional introduce "
                          "entre 3 y 8 kHz de ruido harmonico en la red. Una oficina de 20 puestos puede "
                          "generar niveles de 'dirty electricity' 40-80 veces superiores a un hogar "
                          "normal. El STROOM MASTER PRO actua directamente sobre la red electrica, "
                          "filtrando estos armonicos antes de que se irradien.", S['body_sm'])
            ]], colWidths=[usable_w])
            sucia_box.setStyle(TableStyle([
                ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#fff8e1')),
                ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor('#f4a261')),
                ('TOPPADDING', (0,0), (-1,-1), 8),
                ('BOTTOMPADDING', (0,0), (-1,-1), 8),
                ('LEFTPADDING', (0,0), (-1,-1), 12),
                ('RIGHTPADDING', (0,0), (-1,-1), 12),
                ('ROUNDEDCORNERS', [4,4,4,4]),
            ]))
            items.append(sucia_box)
            items.append(Spacer(1,4))
        story.append(KeepTogether(items))

    story.append(whatsapp_cta(usable_w,
        "¿No sabes cual es el foco mas importante en tu caso?",
        "Escríbenos por WhatsApp con una foto de tu puesto de trabajo y te lo analizamos."))

    # ── SECCION 2: HIGIENE ELECTROMAGNETICA ───────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 2", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Que es la higiene electromagnetica y por que importa", S['h1']))

    story.append(Paragraph("El concepto que nadie te ha explicado", S['h2']))
    story.append(Paragraph(
        "La higiene alimentaria te dice que comes. La higiene postural, como te sientas. La higiene del "
        "sueno, como duermes. Pero nadie te ha ensenado higiene electromagnetica: la gestion consciente "
        "del entorno de emisiones donde vives y trabajas.", S['body']))
    story.append(Paragraph(
        "Tu cuerpo es un sistema bioelectrico. El corazon genera campos electricos medibles. El cerebro "
        "opera en frecuencias electricas especificas. Las celulas se comunican mediante gradientes "
        "electricos. Estos procesos evolucionaron en un entorno electromagnetico natural. La era "
        "tecnologica ha superpuesto un segundo entorno artificial de una densidad sin precedentes "
        "evolutivos. Tu biologia no tiene mecanismo de defensa especifico porque nunca lo necesito.", S['body']))

    story.append(Paragraph("Tres mecanismos biologicos en el contexto laboral", S['h2']))
    mecanismos = [
        ("<b>Sistema nervioso central.</b> Los estudios sobre activacion de canales de calcio "
         "voltaje-dependientes (Pall, 2016, Environmental Research) muestran que la exposicion "
         "sostenida a radiofrecuencias puede generar activacion del sistema nervioso simpatico: "
         "dificultad de concentracion, irritabilidad, sensacion de alerta permanente."),
        ("<b>Produccion de melatonina y ciclo circadiano.</b> Burch et al. (American Journal of "
         "Industrial Medicine, 1999-2000) documentaron reduccion significativa de melatonina en "
         "trabajadores con exposicion electromagnetica ocupacional. Esta hormona no solo regula el "
         "sueno: es antioxidante e inmunomoduladora. Su reduccion diurna sostenida tiene "
         "consecuencias que van mucho mas alla de dormir peor."),
        ("<b>Estres oxidativo celular acumulado.</b> La evidencia sobre radiofrecuencias y "
         "generacion de especies reactivas de oxigeno (ROS) es consistente (Yakymenko et al., 2016; "
         "Bioelectromagnetics). El estres oxidativo produce desgaste silencioso y fatiga funcional: "
         "exactamente los sintomas que muchos trabajadores describen sin causa medica identificable."),
    ]
    for m in mecanismos:
        story.append(Paragraph(f"• {m}", S['bullet']))
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 10))
    story.append(highlight_box(
        "La higiene electromagnetica no es paranoia: es la siguiente capa de la salud laboral, "
        "igual que la ergonomia de pantallas lo fue en los anos 90.",
        usable_w, bg=EKIO_PALE, border=EKIO_LIGHT, style_key='body'))

    story.append(whatsapp_cta(usable_w,
        "¿Tienes sintomas de sobrecarga electromagnetica en tu equipo?",
        "Fatiga cronica, niebla mental, dolores de cabeza recurrentes... Hablemos. Podemos ayudarte."))

    # ── SECCION 3: BASE CIENTIFICA SPIRO ──────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 3", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("La base cientifica de la tecnologia SPIRO", S['h1']))

    story.append(Paragraph("Por que los bloqueadores no son la solucion", S['h2']))
    story.append(Paragraph(
        "La intuicion de 'protegerme bloqueando la radiacion' tiene un problema practico: en una oficina "
        "necesitas conectividad. Bloquear la senal WiFi elimina el trabajo. Por eso todas las soluciones "
        "de apantallamiento o jaulas de Faraday son incompatibles con la productividad.", S['body']))
    story.append(Paragraph(
        "SPIRO parte de una hipotesis diferente: <b>el problema biologico de los CEM artificiales no es "
        "su intensidad, sino su polarizacion artificial.</b> Los campos electromagneticos naturales "
        "(campo magnetico terrestre, resonancias de Schumann a 7,8 Hz) tienen una estructura de "
        "polarizacion compatible con la biologia humana. Los CEM artificiales tienen una polarizacion "
        "mecanica, uniforme, que no existe en la naturaleza.", S['body']))

    story.append(Paragraph("Como funciona la tecnologia nanocompuesta SPIRO", S['h2']))

    science_blocks = [
        ("La polarizacion de los campos electromagneticos",
         "Cuando una onda electromagnetica viaja por el espacio, oscila en un plano determinado: a eso "
         "se llama polarizacion. Los CEM naturales tienen una polarizacion compleja y variada. Los "
         "dispositivos tecnologicos generan ondas con polarizacion artificial: uniforme, coherente y "
         "sin la variabilidad que caracteriza a los campos naturales. La hipotesis SPIRO es que esta "
         "polarizacion artificial es la que interfiere con los procesos bioelectricos celulares."),
        ("El material nanocompuesto y la modulacion pasiva",
         "El nanocompuesto SPIRO es una aleacion de materiales metalicos y nanoparticulas encapsuladas "
         "en un substrato solido curado. Una vez fabricado, actua como un modulador pasivo permanente: "
         "sin consumo de energia, sin emisiones propias, sin degradacion. Su funcion es reorganizar el "
         "estado de polarizacion de las ondas electromagneticas en su entorno de influencia, acercando "
         "su patron de polarizacion a lo que la biologia reconoce como compatible. La senal sigue "
         "existiendo con plena intensidad; cambia su estructura de polarizacion."),
        ("Electricidad sucia y el STROOM MASTER",
         "La tecnologia nanocompuesta aplicada a la red electrica actua de forma diferente al filtrado "
         "convencional de armonicos. El STROOM MASTER no suprime la frecuencia de 50 Hz: actua sobre "
         "los transitorios de alta frecuencia (3-150 kHz) que los dispositivos electricos modernos "
         "inyectan en la red. Al modular su estructura de polarizacion en el punto de contacto con "
         "la instalacion, reduce la irradiacion de esos armonicos desde el cableado del edificio."),
    ]

    for stitle, sbody in science_blocks:
        story.append(KeepTogether([
            science_box(stitle, sbody, usable_w),
            Spacer(1, 8)
        ]))

    story.append(Paragraph("Evidencia y referencias documentadas", S['h2']))
    story.append(Paragraph(
        "La tecnologia SPIRO cuenta con evaluaciones realizadas mediante medicion instrumental "
        "(analizadores de espectro, medidores de campo magnetico de baja frecuencia, medidores "
        "de 'dirty electricity' tipo Stetzer o Greenwave) en entornos reales antes y despues de "
        "la instalacion, documentando reducciones en los patrones de emision del entorno inmediato. "
        "Los estudios biologicos de respaldo incluyen los trabajos sobre estres oxidativo, "
        "melatonina y canales de calcio citados en la seccion anterior, que constituyen el "
        "marco teorico del mecanismo de dano que SPIRO busca mitigar.", S['body']))
    story.append(Paragraph(
        "Adicionalmente, el protocolo EFEIA (Evaluacion Funcional del Entorno de Incidencia "
        "Ambiental) —desarrollado como herramienta diagnostica para personas con "
        "electrohipersensibilidad— ha documentado casos de uso en espacios laborales con "
        "tecnologia nanocompuesta SPIRO, registrando mejoras funcionales en los indicadores "
        "de carga electromagnetica del entorno.", S['body']))

    story.append(whatsapp_cta(usable_w,
        "¿Quieres entender mejor como funciona la tecnologia SPIRO?",
        "Te explicamos el mecanismo completo y resolvemos cualquier duda tecnica por WhatsApp."))

    # ── SECCION 4: PRODUCTOS SPIRO ────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 4", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("La gama SPIRO para la oficina", S['h1']))
    story.append(Paragraph(
        "Todos los productos SPIRO utilizan el mismo nanocompuesto pasivo. Lo que varia entre "
        "modelos es la cantidad de material activo, que determina el radio de accion y la "
        "intensidad de la modulacion. Vida util permanente en todos los modelos.", S['body']))
    story.append(Spacer(1, 6))

    # DISC ULTRA
    story.append(Paragraph("Para zonas de alta densidad y comunicaciones", S['h2']))
    story.append(product_card(
        usable_w, 'disc_ultra.png',
        "SPIRO DISC ULTRA — Filtro de alta intensidad para zonas criticas",
        "32 metros de radio — 5x mas potente que el Disc estandar",
        "El DISC ULTRA es la solucion para los puntos de maxima densidad electromagnetica: "
        "la zona de comunicaciones, el rack de servidores, el cuarto tecnico, o cualquier espacio "
        "donde convergen multiples antenas, routers, switches y cableado de red. Con 32 metros "
        "de radio cubre toda una planta media. Su potencia 5x respecto al Disc estandar lo hace "
        "eficaz en entornos industriales, torres de comunicacion y oficinas con infraestructura "
        "5G interna.",
        "Zona de servidores, rack de comunicaciones, planta completa, edificios de alta densidad tecnologica.",
        tag_color=colors.HexColor('#1a2a4a')
    ))

    # DISC
    story.append(product_card(
        usable_w, 'disc.png',
        "SPIRO DISC — Filtro para espacios de trabajo y hogar",
        "7 metros de radio — Alta y baja frecuencia",
        "El Disc es el producto de referencia para puestos de trabajo fijos. Colocado sobre "
        "la mesa o en una estanteria proxima, genera un entorno filtrado que abarca el portatil, "
        "la pantalla, el telefono, el cableado y cualquier senal WiFi o Bluetooth activa. "
        "No requiere instalacion ni alimentacion electrica.",
        "Despacho individual, puesto fijo en open space, sala de reuniones, home office.",
        tag_color=EKIO_MID
    ))

    # SQUARE X
    story.append(Paragraph("Proteccion personal avanzada", S['h2']))
    story.append(product_card(
        usable_w, 'square_x.png',
        "SPIRO SQUARE X — Proteccion personal avanzada portable",
        "4,2 metros de radio — 10 x 10 x 0,33 cm, 51 g",
        "El SQUARE X es la opcion de proteccion personal mas avanzada del catalogo en formato "
        "portable. A diferencia de la Card (pensada para llevar encima), el SQUARE X genera un "
        "radio de accion de 4,2 metros que cubre al trabajador en cualquier espacio: una sala de "
        "reuniones ajena, un coworking, un viaje de trabajo, una cafeteria con WiFi. Cabe en "
        "un maletín, un bolsillo de chaqueta o sobre cualquier mesa. Opera en todo el espectro "
        "electromagnetico incluyendo 5G. Apto para personas con electrohipersensibilidad.",
        "Proteccion personal en movilidad, coworking, viajes de trabajo, espacios con alta "
        "densidad EMF no controlada.",
        tag_color=EKIO_MID
    ))

    # CARD X
    story.append(product_card(
        usable_w, 'card_x.png',
        "SPIRO CARD X — Filtro EMF avanzado de bolsillo",
        "Formato tarjeta — Proteccion corporal directa",
        "La CARD X es la evolucion de la Card clasica con mayor potencia de modulacion. Pensada "
        "para quienes transitan constantemente por espacios contaminados: edificios de oficinas, "
        "hospitales, centros comerciales, transporte urbano. Va en la cartera, funda del movil "
        "o bolsillo del cuerpo.",
        "Uso diario en movilidad urbana, complemento al SQUARE X, proteccion corporal directa.",
        tag_color=EKIO_DARK
    ))

    # STROOM MASTER
    story.append(Paragraph("Para la red electrica del edificio", S['h2']))
    story.append(product_card(
        usable_w, 'stroom.png',
        "STROOM MASTER PRO — Filtro de electricidad sucia en red electrica",
        "Hasta 60 m2 de cobertura por unidad — Conexion a toma de corriente",
        "El STROOM MASTER PRO es el unico producto de la gama que actua directamente sobre "
        "la red electrica. Se conecta a cualquier toma de corriente estandar y filtra los "
        "transitorios y armonicos de alta frecuencia (electricidad sucia) que los equipos "
        "electricos inyectan en la instalacion. Para una oficina con 20 ordenadores, "
        "se recomienda colocar una unidad junto al ordenador principal o al cuadro electrico, "
        "y unidades adicionales distribuidas por planta a razon de una por cada 60 m2. "
        "Complementa al DISC en una proteccion integral (el Disc actua sobre las emisiones "
        "irradiadas; el STROOM MASTER sobre las conducidas por la red).",
        "Junto al ordenador o regleta principal, cuadro electrico, cada 60m2 de oficina.",
        tag_color=colors.HexColor('#7b2d00')
    ))

    # SQUARE
    story.append(Paragraph("Complemento para dispositivos especificos", S['h2']))
    story.append(product_card(
        usable_w, 'square.png',
        "SPIRO SQUARE — Filtro para dispositivos de alta emision",
        "Cobertura intermedia — Versatil y compacto",
        "El SQUARE se coloca junto a los dispositivos de alta emision continua: router "
        "corporativo, servidor de sala, punto de acceso WiFi, impresoras en red. "
        "Actua directamente en la fuente sin necesidad de alimentacion.",
        "Router corporativo, servidor de sala, acceso WiFi de alta potencia.",
        tag_color=EKIO_DARK
    ))

    story.append(whatsapp_cta(usable_w,
        "¿No sabes que producto se adapta mejor a tu situacion?",
        "Cuentanos como es tu oficina y te recomendamos exactamente lo que necesitas. Sin compromiso."))

    # Tabla de recomendaciones
    story.append(PageBreak())
    story.append(Paragraph("Mapa de recomendaciones por situacion", S['h2']))
    story.append(make_reco_table())
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "Disponemos de packs especificos para oficina. Consultanos por WhatsApp para "
        "recibir la recomendacion mas adecuada a tu espacio y presupuesto.", S['note']))

    # ── SECCION 5: PROTOCOLO ──────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 5", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Protocolo de implementacion paso a paso", S['h1']))

    pasos = [
        ("Paso 1 — Evalua tu mapa de exposicion (Dia 1, 10 minutos)",
         [
             "Distancia al router corporativo mas cercano a tu puesto",
             "Numero de dispositivos sobre la mesa y con Bluetooth/WiFi activo",
             "Ubicacion del cuadro electrico mas proximo y numero de equipos enchufados en tu zona",
             "Si hay rack de servidores, zona de comunicaciones o CPD en el edificio",
             "Horas de permanencia en el puesto fijo frente a movilidad entre espacios",
         ], None),
        ("Paso 2 — Higiene pasiva sin coste (Desde hoy)",
         [
             "Movil boca abajo o en cajon durante bloques de trabajo concentrado",
             "Auriculares con cable en lugar de Bluetooth para uso prolongado",
             "Portatil sobre base elevada con teclado y raton externos (mayor distancia corporal)",
             "Apagar el WiFi del portatil cuando se trabaja conectado por cable ethernet",
             "5 minutos de descanso alejado de todos los dispositivos cada hora",
         ], None),
        ("Paso 3 — Instalacion SPIRO basica en tu puesto (Semana 1)",
         [
             "SPIRO DISC sobre la mesa o estanteria proxima al puesto",
             "SQUARE X en maletin, cajón de escritorio o bolsillo — proteccion personal donde vayas",
             "STROOM MASTER PRO conectado a la regleta del ordenador o toma cercana al puesto",
             "Si el router esta a menos de 3 metros: SPIRO SQUARE adyacente al router",
         ], None),
        ("Paso 4 — Proteccion integral de la zona de comunicaciones",
         [
             "SPIRO DISC ULTRA en la zona de servidores, rack de red o CPD del edificio",
             "Cubre toda la planta desde un punto central de alta densidad",
             "Una unidad es suficiente para edificios de hasta 2-3 plantas de densidad media",
         ], None),
        ("Paso 5 — Extension del protocolo al equipo (Mes 1-3)",
         [
             "Sesion educativa de 20 minutos con el equipo sobre higiene electromagnetica laboral",
             "Un STROOM MASTER PRO por cada 60m2 de superficie de la planta",
             "Un DISC por zona de trabajo diferenciada en open space",
             "SQUARE X o CARD X para trabajadores con alta movilidad o EHS",
             "Revision anual del mapa de exposicion (los entornos cambian con nuevos dispositivos)",
         ], None),
    ]

    for ptitle, bullets, note in pasos:
        items = [Paragraph(ptitle, S['h2'])]
        for b in bullets:
            items.append(Paragraph(f"• {b}", S['bullet']))
        if note:
            items.append(Paragraph(note, S['note']))
        items.append(Spacer(1, 6))
        story.append(KeepTogether(items))

    story.append(whatsapp_cta(usable_w,
        "¿Quieres que te ayudemos a implementar el protocolo en tu empresa?",
        "Realizamos consultoria 360 con medicion real del entorno. Escribenos y lo organizamos."))

    # ── SECCION 6: FAQs ────────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("SECCION 6", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Preguntas frecuentes", S['h1']))

    faqs = [
        ("¿Los estandares de seguridad no garantizan que estamos dentro de los limites?",
         "Los estandares ICNIRP evaluan efectos termicos: el calentamiento de tejido por una fuente "
         "individual durante tiempo limitado. No contemplan efectos no termicos de exposicion cronica "
         "y combinada de multiples fuentes durante 8 horas diarias. La higiene electromagnetica aplica "
         "el mismo principio de precaucion que ya usamos en ergonomia, calidad del aire o iluminacion."),
        ("¿El SPIRO va a interferir con mi WiFi, Bluetooth o cobertura movil?",
         "No. SPIRO no bloquea ninguna senal ni reduce la potencia de los dispositivos. Tu WiFi, "
         "Bluetooth, 5G y cualquier comunicacion inalambrica funcionan con plena potencia. SPIRO actua "
         "sobre la estructura de polarizacion de las emisiones, no sobre su intensidad."),
        ("¿Que diferencia hay entre el DISC, el DISC ULTRA y el SQUARE X?",
         "El DISC cubre 7 metros y es la base para un puesto fijo. El DISC ULTRA "
         "cubre 32 metros con 5x la potencia del Disc: para zonas de comunicaciones, racks de red o "
         "plantas completas. El SQUARE X es un dispositivo personal portable de 4,2 metros: "
         "no es para el espacio sino para la persona, funciona en cualquier entorno donde te encuentres."),
        ("¿Por que necesito el STROOM MASTER si ya tengo el DISC?",
         "Porque actuan sobre problemas diferentes. El DISC filtra las emisiones irradiadas en el "
         "espacio: WiFi, Bluetooth, campos magneticos de baja frecuencia. El STROOM MASTER filtra "
         "la electricidad sucia conducida por la red electrica: los armonicos y transitorios de alta "
         "frecuencia que los propios equipos inyectan en los cables. Son complementarios, no "
         "intercambiables."),
        ("¿Donde exactamente conecto el STROOM MASTER en una oficina?",
         "Preferiblemente en la regleta donde esta enchufado el ordenador principal o en la toma "
         "mas cercana al puesto de trabajo. En oficinas grandes, una unidad por cada 60m2 de superficie. "
         "Una unidad adicional junto al cuadro electrico maximiza el filtrado en toda la instalacion."),
        ("¿Cuanto tarda en notarse el efecto?",
         "Depende de la persona y del nivel de exposicion previo. Los cambios mas frecuentemente "
         "reportados son: mejora en la calidad del sueno en las primeras semanas, menor fatiga al "
         "final de la jornada, mayor claridad mental en el tramo de tarde. El SPIRO trabaja desde el "
         "momento en que lo instalas; la respuesta biologica tiene su propio ritmo."),
        ("¿Los productos SPIRO duran para siempre?",
         "Si. El nanocompuesto SPIRO es permanente: no requiere recarga, no se degrada con el uso, "
         "no tiene partes moviles ni consumo electrico (excepto el STROOM MASTER que se conecta a "
         "la red). Es una inversion unica con vida util ilimitada."),
        ("¿Hay un pack especifico para oficina?",
         "Si: el PACK OFICINA SPIRO incluye el SQUARE X + STROOM MASTER PRO. Es la "
         "combinacion recomendada para un puesto individual: proteccion personal avanzada "
         "de 4,2 metros mas filtracion de la electricidad sucia en la red electrica de tu "
         "zona de trabajo. Consultanos por WhatsApp para conocer disponibilidad y condiciones."),
    ]

    for q, a in faqs:
        story.append(KeepTogether([
            Paragraph(q, S['faq_q']),
            Paragraph(a, S['faq_a']),
            Spacer(1, 4),
        ]))

    story.append(whatsapp_cta(usable_w,
        "¿Tu pregunta no esta aqui?",
        "Escríbenos directamente. Te respondemos con honestidad y sin presiones de venta."))

    # ── CTA FINAL ──────────────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("CONTACTO", S['section_label']))
    story.append(SectionDivider(usable_w))
    story.append(Spacer(1, 5))
    story.append(Paragraph("Estamos aqui para ayudarte", S['h1']))
    story.append(Paragraph(
        "Si has llegado hasta aqui tienes algo que la mayoria de profesionales no tiene: "
        "informacion real sobre el entorno donde pasas la mayor parte de tu dia activo. "
        "El siguiente paso es sencillo: contáctanos y te orientamos sin compromiso.", S['body']))
    story.append(Spacer(1, 8))

    cta_opts = [
        ("Evalua tu puesto de trabajo",
         "Cuéntanos como es tu oficina y te decimos que productos tienen mas sentido para tu caso concreto."),
        ("Pack Oficina SPIRO",
         "La combinacion SQUARE X + STROOM MASTER PRO es nuestro punto de entrada recomendado para "
         "un puesto individual: proteccion personal de 4,2 metros y filtracion de la electricidad sucia."),
        ("Consultoria 360 para empresas",
         "Medicion real del entorno con equipos calibrados, informe de exposicion por puesto y "
         "recomendacion personalizada. Para equipos que quieren proteger su entorno de trabajo."),
        ("Zona de comunicaciones y IT",
         "El DISC ULTRA cubre 32 metros desde un solo punto. Ideal para el rack de red, el CPD "
         "o la zona de mayor densidad tecnologica del edificio."),
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
        "Nota legal: Esta guia tiene proposito educativo e informativo. Los productos SPIRO estan "
        "disenados para contribuir a la mejora del entorno electromagnetico. No son dispositivos "
        "medicos ni reemplazan atencion sanitaria profesional. Los estudios cientificos citados "
        "son referencias disponibles en PubMed y revistas indexadas presentadas con fines informativos.",
        S['note']))

    return story


# === MAIN ===
def main():
    doc = SimpleDocTemplate(
        OUTPUT, pagesize=A4,
        leftMargin=2*cm, rightMargin=2*cm,
        topMargin=2.5*cm, bottomMargin=2*cm,
        title="Guia Higiene Electromagnetica en la Oficina — EKIO SPIRO",
        author="EKIO Electrosmog Espana",
        subject="Higiene electromagnetica laboral con tecnologia SPIRO",
    )
    uw = PAGE_W - 4*cm
    story = build_story(uw)
    doc.build(story,
              onFirstPage=lambda c, d: build_cover(c, d),
              onLaterPages=lambda c, d: on_page(c, d))
    print(f"PDF generado: {OUTPUT}")

if __name__ == "__main__":
    main()
