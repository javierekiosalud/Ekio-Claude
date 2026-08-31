const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  TableOfContents, PageBreak, LevelFormat, Footer, PageNumber, TabStopType, TabStopPosition,
} = require('docx');

const OUT = '/Users/javierandres/Ekio-Claude/PLAN_EMPRESA_CAIXABANK/plan-empresa-ekio-caixabank.docx';
const CONTENT_W = 9026; // A4 portrait content width in DXA

// ---------- helpers ----------
const FONT = 'Calibri';
const SERIF = 'Georgia';
// Paleta de marca EKIO
const INK = '122638';        // azul tinta, color principal
const INK_SOFT = '1D5366';   // azul secundario
const AMBER = 'E7A84D';      // ámbar, acento
const AMBER_DK = '9B661E';   // ámbar oscuro, para texto de acento
const CREAM = 'F6F0E6';      // crema, fondos suaves
const LINE = 'DED4C4';       // línea, bordes
const MUTED = '64707C';      // texto secundario

function p(text, opts = {}) {
  const runs = Array.isArray(text)
    ? text
    : [new TextRun({ text, font: FONT, size: 22, ...(opts.run || {}) })];
  return new Paragraph({
    children: runs,
    spacing: { after: opts.after ?? 120, line: 288 },
    alignment: opts.alignment,
    ...opts.para,
  });
}

function run(text, o = {}) { return new TextRun({ text, font: FONT, size: 22, ...o }); }
function b(text, o = {}) { return new TextRun({ text, font: FONT, size: 22, bold: true, ...o }); }
function it(text, o = {}) { return new TextRun({ text, font: FONT, size: 20, italics: true, color: MUTED, ...o }); }

function h1(num, text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text: `${num}. ${text}`, font: SERIF, bold: true, size: 30, color: INK })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 220, after: 120 },
    children: [new TextRun({ text, font: SERIF, bold: true, size: 23, color: INK_SOFT })],
  });
}
function bullet(children) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 100, line: 288 },
    children: Array.isArray(children) ? children : [run(children)],
  });
}
function numItem(children) {
  return new Paragraph({
    numbering: { reference: 'nums', level: 0 },
    spacing: { after: 100, line: 288 },
    children: Array.isArray(children) ? children : [run(children)],
  });
}
function note(children) {
  return new Paragraph({
    spacing: { before: 120, after: 160, line: 276 },
    shading: { type: ShadingType.CLEAR, fill: CREAM },
    border: {
      top: { style: BorderStyle.SINGLE, size: 4, color: LINE },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE },
      left: { style: BorderStyle.SINGLE, size: 16, color: AMBER },
      right: { style: BorderStyle.SINGLE, size: 4, color: LINE },
    },
    children: Array.isArray(children) ? children : [it(children)],
  });
}

function cell(content, { w, header = false, align, fill } = {}) {
  const kids = (Array.isArray(content) ? content : [content]).map((c) =>
    typeof c === 'string'
      ? new Paragraph({
          alignment: align,
          spacing: { after: 40, line: 264 },
          children: [new TextRun({ text: c, font: FONT, size: 20, bold: header })],
        })
      : c);
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: fill ? { type: ShadingType.CLEAR, fill } : (header ? { type: ShadingType.CLEAR, fill: '1F3864' } : undefined),
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: kids.map((pp) =>
      header && pp.root
        ? pp
        : pp),
  });
}

function headerCell(text, w, align) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: INK },
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: [new Paragraph({
      alignment: align,
      spacing: { after: 0, line: 264 },
      children: [new TextRun({ text, font: FONT, size: 20, bold: true, color: 'FFFDF8' })],
    })],
  });
}
function bodyCell(text, w, align, fill) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: fill ? { type: ShadingType.CLEAR, fill } : undefined,
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: [new Paragraph({
      alignment: align,
      spacing: { after: 0, line: 264 },
      children: [new TextRun({ text: String(text), font: FONT, size: 20 })],
    })],
  });
}

function table(headers, rows, widths, aligns = []) {
  const trHead = new TableRow({
    tableHeader: true,
    children: headers.map((hd, i) => headerCell(hd, widths[i], aligns[i])),
  });
  const trBody = rows.map((r, ri) =>
    new TableRow({
      children: r.map((c, i) => bodyCell(c, widths[i], aligns[i], ri % 2 ? CREAM : undefined)),
    }));
  return new Table({
    width: { size: widths.reduce((a, x) => a + x, 0), type: WidthType.DXA },
    columnWidths: widths,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: LINE },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: LINE },
      left: { style: BorderStyle.SINGLE, size: 2, color: LINE },
      right: { style: BorderStyle.SINGLE, size: 2, color: LINE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: LINE },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: LINE },
    },
    rows: [trHead, ...trBody],
  });
}
const spacer = () => new Paragraph({ text: '', spacing: { after: 80 } });

const R = AlignmentType.RIGHT;
const C = AlignmentType.CENTER;

// ---------- document body ----------
const children = [];

// ===== COVER =====
children.push(
  // marca EKIO en cabecera de portada
  new Paragraph({ spacing: { before: 1400, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'EKIO', font: SERIF, bold: true, size: 44, color: INK, characterSpacing: 60 })] }),
  new Paragraph({ spacing: { before: 40, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'E L E C T R O S M O G   E S P A Ñ A', font: FONT, bold: true, size: 13, color: MUTED })] }),
  new Paragraph({ spacing: { before: 260, after: 0 }, alignment: C,
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: AMBER, space: 1 } },
    children: [new TextRun({ text: '', font: FONT, size: 2 })] }),
  new Paragraph({ spacing: { before: 700, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'PLAN DE EMPRESA', font: SERIF, bold: true, size: 54, color: INK })] }),
  new Paragraph({ spacing: { before: 180, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Solicitud de cuenta de crédito', font: SERIF, size: 30, color: INK_SOFT })] }),
  new Paragraph({ spacing: { before: 100, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Línea de circulante para financiación de existencias', font: FONT, size: 22, color: MUTED })] }),
  new Paragraph({ spacing: { before: 30, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'CaixaBank Now', font: FONT, bold: true, size: 22, color: AMBER_DK })] }),
  new Paragraph({ spacing: { before: 1100, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'EKIO BIOTECH, S.L.U.', font: FONT, bold: true, size: 30, color: INK })] }),
  new Paragraph({ spacing: { before: 70, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'CIF B93860096  ·  Barrio de Arriba 39, 49327 Cubo de Benavente (Zamora)', font: FONT, size: 20, color: MUTED })] }),
  new Paragraph({ spacing: { before: 900, after: 0 }, alignment: C,
    children: [new TextRun({ text: '30 de agosto de 2026', font: FONT, size: 20, color: MUTED })] }),
  new Paragraph({ spacing: { before: 40, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Documento confidencial — uso exclusivo para evaluación de riesgos de CaixaBank', font: FONT, size: 17, italics: true, color: MUTED })] }),
  new Paragraph({ children: [new PageBreak()] }),
);

// ===== TOC =====
children.push(
  new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { after: 160 },
    children: [new TextRun({ text: 'Índice', font: SERIF, bold: true, size: 30, color: INK })] }),
  new TableOfContents('Índice', { hyperlink: true, headingStyleRange: '1-2' }),
  new Paragraph({ spacing: { before: 120 }, children: [it('Para actualizar el índice en Word: clic derecho sobre él → «Actualizar campos» → «Actualizar toda la tabla».')] }),
  new Paragraph({ children: [new PageBreak()] }),
);

// ===== 1. PORTADA Y DATOS =====
children.push(h1(1, 'Datos de la empresa'));
children.push(table(
  ['Campo', 'Dato'],
  [
    ['Razón social', 'EKIO BIOTECH, S.L.U. (Sociedad Limitada Unipersonal)'],
    ['CIF', 'B93860096'],
    ['Domicilio social', 'Barrio de Arriba 39, 49327 Cubo de Benavente (Zamora)'],
    ['Actividad', 'Venta de tecnología de protección electromagnética (línea Spiro, en distribución) y de equipos de fotobiomodulación de marca propia (línea Ekio Light, fabricados / ensamblados por proveedor especializado). Canales directo al consumidor (D2C) y empresa (B2B).'],
    ['Socio único y administrador', 'Francisco Javier Andrés Andrés (NIF 09338115T)'],
    ['Marca comercial', 'Ekio · Ekio Electrosmog España · Ekio Light'],
    ['Tienda online', 'electrosmogespana.com (plataforma Shopify)'],
    ['Constitución de la sociedad', 'Escritura de 29 de julio de 2026 (se adjunta)'],
    ['Fecha del documento', '30 de agosto de 2026'],
    ['Persona de contacto', 'Francisco Javier Andrés Andrés · javier@electrosmogespana.com · 616 631 878'],
  ],
  [2600, 6426],
));
children.push(spacer());
children.push(p([b('Producto financiero solicitado: '), run('cuenta de crédito (línea de circulante) en CaixaBank Now.')]));
children.push(p([b('Destino: '), run('compra anticipada de existencias de las dos líneas de producto (Spiro y Ekio Light) para atender la campaña del cuarto trimestre. El importe y el límite de la línea los dimensiona CaixaBank; la empresa aporta el detalle de la compra prevista y la relación de proveedores.')]));
children.push(p([b('Garantía ofrecida: '), run('en primera instancia, la responsabilidad patrimonial de la sociedad. La empresa es consciente de que se trata de una sociedad de reciente constitución y queda abierta a estudiar con CaixaBank las fórmulas de cobertura habituales para este tipo de operación (ver sección 9.4).')]));

// ===== 2. RESUMEN EJECUTIVO =====
children.push(h1(2, 'Resumen ejecutivo'));
children.push(p([b('Quiénes somos. '), run('Ekio vende tecnología para el bienestar desde 2023. Empezó distribuyendo en España la tecnología de protección electromagnética Spiro (Noxtak Corp., Miami) y desde 2025 tiene marca propia: Ekio Light, equipos de fotobiomodulación con diseño y especificación propios, Modelo de Utilidad registrado y software propio. La actividad se desarrolló como empresario individual (Francisco Javier Andrés Andrés) y en 2026 se aporta como negocio en funcionamiento a EKIO BIOTECH, S.L.U., que la continúa. La venta es digital, en electrosmogespana.com, y se cierra en la ficha de producto sin intervención comercial.')]));
children.push(p([b('Qué solicitamos. '), run('Una cuenta de crédito, con un límite solicitado de 250.000 €, para financiar la compra anticipada de stock de cara a la campaña del cuarto trimestre (ferias de octubre y campaña de Black Friday, Navidad y Reyes): filtros Spiro, paneles Ekio Light y accesorios de medición. El objetivo de ventas de esa campaña es de 350.000 € (275.000 € el año anterior). El coste del stock de campaña es de unos 195.000 €; el resto del límite es holgura para reponer las referencias más vendidas y para el stock de arranque de 2027. La empresa aporta el detalle de la compra prevista y la relación de proveedores para justificar el uso de los fondos.')]));
children.push(p([b('Por qué la operación es solvente. '), run('Tres ejes:')]));
children.push(numItem([b('Trayectoria estable y en beneficios. '), run('Arranque en 2023 (390.000 € en siete meses) y facturación anual estable en 2024 y 2025 (534.504 € y 537.845 €), ambos ejercicios con resultado positivo (+52.493 € y +19.301 €); primer semestre de 2026 con +78.738 €. Facturación acumulada 2023 – junio 2026: 1,67 M€ (cifra acumulada, no anual). La única deuda financiera es un préstamo de 80.000 € formalizado con CaixaBank, en amortización y al corriente de pago; no hay capital de terceros ni otras líneas vivas.')]));
children.push(numItem([b('Canal digital maduro y respaldo institucional. '), run('Tres años de base de clientes y de contactos, tienda online operativa y herramientas de venta y marketing en funcionamiento; la venta se cierra en la ficha de producto, sin comercial. La empresa cuenta además con tres subvenciones concedidas por la Junta de Castilla y León (35.613,20 € en digitalización, innovación e I+D) y participa en su Plan ESG de Sostenibilidad 2025–2027 y en el Plan de Internacionalización a través de Marketplace de ICECYL, con el que ya vende en Europa a través de Ankorstore (sección 5.2).')]));
children.push(numItem([b('Destino de los fondos claro y controlado. '), run('Los fondos se destinan a existencias —producto físico de un catálogo ya en venta— para un pico de demanda concreto y acotado. No se financia circulante indefinido, gasto corriente ni la expansión internacional. La campaña equivalente del año anterior generó 275.000 € (más de la mitad de todo lo facturado en 2025). La línea es autoliquidable: se dispone en octubre para comprar el stock y se devuelve con el cobro de esas mismas ventas antes de que acabe el año (ver sección 10); la disposición máxima prevista (unos 72.000–150.000 € según el ritmo de compra) queda muy por debajo del límite solicitado.')]));
children.push(p([b('Hacia dónde vamos. '), run('La empresa quiere consolidar su marca propia Ekio Light como referente europeo en tecnología de bienestar personal, apoyada en propiedad industrial y software propios. El primer paso ya está en marcha: venta mayorista en Europa vía Ankorstore, dentro del Plan de Internacionalización de ICECYL. Es un recorrido de varios años, gradual y autofinanciado con el margen del negocio (sección 8). Esta línea de crédito no financia esa expansión: financia únicamente el stock de la campaña nacional de este cuarto trimestre.')]));

// ===== 3. TRAYECTORIA Y EQUIPO =====
children.push(h1(3, 'Trayectoria y equipo'));
children.push(h2('3.1. Tres años de construcción'));
children.push(p([b('2023–2024: distribución de Spiro en España. '), run('El negocio nace en 2023 distribuyendo Spiro en España. En 2024 consolida esa distribución con 534.504 € de facturación y +52.493 € de resultado, y construye desde cero la base de clientes, la comunidad y el canal digital.')]));
children.push(p([b('2025: inversión deliberada para lanzar marca propia. '), run('La facturación se mantiene (537.845 €) y el resultado baja a +19.301 €, con 52.580 € adicionales invertidos en publicidad y servicios profesionales para lanzar Ekio Light.')]));
children.push(p([b('2026: el giro a producto propio. '), run('El primer semestre factura 207.815 € con un margen bruto del 55,9 % y un resultado de +78.738 €, coherente con el mayor peso de Ekio Light (margen superior al 50 %). La línea acumula unos 76.000 € desde su lanzamiento, repartidos entre la tienda anterior en WooCommerce y Shopify desde noviembre de 2025.')]));
children.push(note([
  it('Sobre el margen bruto por ejercicio: ', { bold: true }),
  it('las cifras de 2024, 2025 y 2026 (H1) proceden del mismo P&L de gestión de Holded de la tienda Ekio completa. La variación del margen bruto entre ejercicios (38,4 % → 24,5 % → 55,9 %) está pendiente de conciliación con el desglose de coste de ventas de Holded y con las declaraciones fiscales: refleja cambios de mix de producto y, probablemente, diferencias en el criterio de imputación de costes entre periodos. Se conciliará antes de la presentación formal. '),
  it('[PENDIENTE: conciliación del margen bruto por ejercicio con el desglose de Holded; facturación del ejercicio 2023 y cierre provisional a julio/agosto de 2026; extracto o informe de Holded actualizado para adjuntar como anexo.]', { bold: true }),
]));

children.push(h2('3.2. Continuidad jurídica: de empresario individual a sociedad'));
children.push(p('La actividad se desarrolló desde 2023 como empresario individual (autónomo): Francisco Javier Andrés Andrés, NIF 09338115T. Mediante escritura de 29 de julio de 2026 ese negocio en funcionamiento se aporta a la sociedad EKIO BIOTECH, S.L.U. (CIF B93860096), que pasa a ser el vehículo jurídico de la misma actividad económica. La escritura de constitución y de aportación se acompaña a este plan, y en ella constan el detalle del patrimonio aportado, el objeto social y el alta censal de la sociedad.'));
children.push(p('El track record de ventas, comunidad y márgenes de este plan corresponde a esa misma actividad económica bajo el titular anterior; la SLU la continúa sin ruptura de negocio. La sociedad es nueva y aún no tiene cuentas anuales depositadas: el histórico se acredita con las declaraciones de IRPF, los modelos 130 y 390 y el P&L de gestión de Holded.'));
children.push(bullet('La empresa está al corriente de sus obligaciones con la Agencia Tributaria y con la Tesorería General de la Seguridad Social. Los certificados correspondientes se acompañan a este plan.'));

children.push(h2('3.3. Equipo'));
children.push(p('Ekio opera con una estructura ligera: una persona en plantilla (responsable de operaciones) y una red de profesionales externos que cubren las funciones especializadas —email marketing, contenido, publicidad digital, asesoría legal y asesoría científica—. Este modelo mantiene los costes fijos bajos y permite escalar el gasto variable (sobre todo publicidad e inventario) en función de la campaña.'));

children.push(h2('3.4. Reseña profesional del fundador'));
children.push(p('Francisco Javier Andrés Andrés (NIF 09338115T) es fundador, socio único y administrador de EKIO BIOTECH, S.L.U.'));
children.push(bullet([b('Creación y dirección del negocio (2023–actualidad). '), run('Puso en marcha la actividad en 2023 y la ha dirigido de forma continuada, primero como empresario individual y desde 2026 a través de la sociedad. Bajo su dirección la actividad ha superado 1,6 M€ de facturación acumulada y ha cerrado en beneficios todos sus ejercicios.')]));
children.push(bullet([b('Paso a marca propia. '), run('Diseñó y ejecutó la transición desde la distribución de producto de terceros (Spiro) a la marca propia Ekio Light, con desarrollo de propiedad industrial (Modelo de Utilidad Nº U202532624) y de software propio (aplicación de cliente Ekio Coach y sistema SFPA).')]));
children.push(bullet([b('Dirección del departamento de I+D de Ekio. '), run('Está al frente del área de investigación y desarrollo de la empresa, que coordina la revisión de la evidencia científica que respalda las afirmaciones de producto (fotobiomodulación y exposición electromagnética), la relación con AIR Institute y la agenda de patentes.')]));
children.push(bullet([b('Divulgación. '), run('Autor del libro «Guía de Higiene Electromagnética — El recetario de la energía perdida» (en preparación, ver sección 8.5), y responsable de la comunicación de marca en podcast y medios.')]));
children.push(bullet([b('Relación institucional. '), run('Ha situado a la empresa dentro del ecosistema de apoyo de la Junta de Castilla y León: tres subvenciones concedidas (digitalización, innovación e I+D), participación en el Plan ESG de Sostenibilidad 2025–2027 y en el Plan de Internacionalización a través de Marketplace de ICECYL, y acceso al programa Wolaria (sección 5.2).')]));
children.push(bullet([b('Reconocimiento institucional. '), run('Impulsó la incorporación de Ekio al programa de Wolaria / ICECYL y su presencia como stand propio en Startup OLÉ y Valencia Digital Summit 2026.')]));

// ===== 4. MODELO DE NEGOCIO =====
children.push(h1(4, 'Modelo de negocio y líneas de producto'));
children.push(h2('4.1. Línea Spiro — distribución en España'));
children.push(p('Ekio es distribuidor en España de la tecnología de protección electromagnética Spiro, fabricada por Noxtak Corp. / SG Labs (Miami). No es una distribución en exclusiva. Es la línea con la que nació el negocio y la que aporta el volumen y la base de clientes histórica.'));
children.push(bullet('Catálogo de producto individual y packs, con precio de venta al público entre 147 € (producto de entrada) y 825 € (pack más completo) en el catálogo actual.'));
children.push(bullet('Venta directa en la ficha de producto, sin llamada comercial.'));
children.push(bullet('Comunidad de clientes y seguidores construida en torno a la línea.'));
children.push(bullet([b('Respaldo del fabricante. '), run('Según Noxtak, la tecnología SPIRO está protegida por 14 patentes. Su familia de patente principal —neutralización de contaminación electromagnética, con prioridad de 2016— figura como concedida en registros públicos (EPO / Google Patents) en Estados Unidos, la Unión Europea, España, Japón, Corea del Sur, Australia y Canadá. Noxtak ha recibido el German Innovation Award 2021 del German Design Council y un Edison Award 2020 en ciencia de materiales, y las propiedades físicas del filtro han sido medidas por laboratorios acreditados. SPIRO no es un producto sanitario y no se le atribuyen efectos de prevención, tratamiento o curación; su validación clínica independiente está pendiente y forma parte de la agenda de I+D de Ekio.')]));
children.push(p([it('Estructura del catálogo Spiro (Shopify, agosto de 2026):', { italics: true })]));
children.push(table(
  ['Tramo', 'Refs.', 'PVP (€)'],
  [
    ['Producto individual (Square, Square X, Stroom Master Pro)', '3', '147 – 257'],
    ['Packs de protección (personal, hogar, oficina, infantil, familia, sueño)', '6', '350 – 470'],
    ['Packs de gama alta (Stroom Master, Oasis Electromagnético)', '2', '655 – 825'],
  ],
  [5226, 1600, 2200],
  [undefined, C, R],
));
children.push(spacer());

children.push(h2('4.2. Línea Ekio Light — marca propia'));
children.push(p('Ekio Light es la línea de equipos de fotobiomodulación (terapia de luz) de marca propia, fabricados / ensamblados por un proveedor especializado bajo diseño y especificación de Ekio. Es el eje de crecimiento del negocio y de la mejora de margen de 2026.'));
children.push(bullet('Gama de paneles con precio de venta al público entre 650 € (Deep 5) y 2.500 € (Bio Spectrum 11, equipo de gama alta y único con emisión UV-A/UV-B), más el equipo portátil Core (147 €) y accesorios de iluminación (bombillas y packs) de menor importe.'));
children.push(bullet('Margen bruto de la línea superior al 50 %. El margen bruto global de la tienda en el primer semestre de 2026 fue del 55,9 % (pendiente de conciliación por ejercicio, ver sección 6).'));
children.push(bullet([b('Propiedad industrial: '), run('Modelo de Utilidad español Nº U202532624 (panel multiespectral), registrado ante la OEPM; solicitud de 25 de diciembre de 2025. Es un elemento diferenciador frente a competidores.')]));
children.push(p([it('Catálogo Ekio Light a la venta (extracción de Shopify, agosto de 2026):', { italics: true })]));
children.push(table(
  ['Producto', 'PVP (€)'],
  [
    ['BIO SPECTRUM 11 (gama alta; único con UV-A/UV-B)', '2.500,00'],
    ['BIO REGEN 7 (luz roja y cyan)', '950,00'],
    ['DEEP 5', '650,00'],
    ['CORE (portátil, terapia local)', '147,00'],
    ['IGNIS (luz + protección electromagnética)', '120,00'],
    ['Bombillas LED roja / ámbar y packs de iluminación', '17,50 – 29,70'],
  ],
  [7026, 2000],
  [undefined, R],
));
children.push(spacer());
children.push(p('Hay además versiones B2B preparadas para el canal mayorista, pendientes de publicación.'));
children.push(note([it('El catálogo de ambas líneas está operativo y a la venta. El inventario disponible a la fecha no cubre el volumen ni la velocidad de venta de la campaña de Q4: reponerlo por adelantado es el objeto de esta financiación (sección 9).', { italics: true })]));

children.push(h2('4.3. Líneas complementarias'));
children.push(p('Accesorios de medición (detector de radiación 49 €, comprobador de enchufe 20,66 €, medidor de electricidad sucia 216,37 €): acompañan a las dos líneas principales, tienen buena rotación en campaña y SÍ forman parte del stock que se financia con esta línea (ver sección 9). Los suplementos de la marca Laittin (vitamina C, B, D3+K2 y packs) no son objeto de esta financiación.'));

children.push(h2('4.4. Canales de venta'));
children.push(bullet([b('D2C (venta directa): '), run('electrosmogespana.com. Es el canal principal y la base de todo el histórico de facturación. Venta cerrada en la ficha de producto, sin comercial.')]));
children.push(bullet([b('Renting / suscripción: '), run('opción de pago por uso para el consumidor a través de Sharpei (integrada en Shopify) y planteamiento B2B para clínicas, centros de estética y gimnasios. Línea incipiente, todavía sin volumen consolidado.')]));
children.push(bullet([b('B2B / mayorista europeo: '), run('venta iniciada en el marketplace Ankorstore dentro del Plan de Internacionalización de ICECYL, con foco en Alemania, Austria, Suiza, Países Bajos y Bélgica (sección 5.3). En fase inicial, sin volumen consolidado.')]));

children.push(h2('4.5. Activos tecnológicos propios'));
children.push(p('Además del catálogo físico, Ekio ha desarrollado tecnología propia que refuerza la relación con el cliente y eleva la barrera de entrada:'));
children.push(bullet([b('Aplicación de gestión interna. '), run('Herramienta propia para pedidos, inventario y atención al cliente.')]));
children.push(bullet([b('Aplicación de cliente «Ekio Coach». '), run('Guía de uso, seguimiento de sesiones y protocolos personalizados, ya con usuarios registrados. Convierte la venta de un equipo en una relación continuada y genera datos de uso propios.')]));
children.push(bullet([b('Sistema SFPA (Sistema de Fotobiomodulación Personalizada con IA). '), run('Plataforma propia que integra hardware, software y algoritmos de inteligencia artificial para adaptar los parámetros de tratamiento (longitud de onda, dosis y tiempo) al perfil de cada usuario y a su respuesta. En desarrollo con AIR Institute (Salamanca). Tiene una solicitud de patente internacional (PCT) propia e independiente del Modelo de Utilidad, actualmente en preparación con el agente de la propiedad industrial y pendiente de presentación. Todavía sin producto comercial; su lanzamiento se describe en la sección 8.2.')]));

// ===== 5. MERCADO Y VALIDACIÓN =====
children.push(h1(5, 'Mercado y validación externa'));
children.push(h2('5.1. Contexto de mercado'));
children.push(p('Ekio opera en dos segmentos del mercado del bienestar y la salud preventiva de consumo:'));
children.push(bullet([b('Protección frente a la exposición electromagnética. '), run('Segmento de nicho, con demanda impulsada por la preocupación creciente de una parte de la población por la exposición a campos electromagnéticos (instalaciones eléctricas domésticas, telefonía móvil, redes inalámbricas). Ekio cubre esta demanda con la línea Spiro.')]));
children.push(bullet([b('Fotobiomodulación (terapia de luz roja e infrarroja). '), run('Categoría de producto de consumo dentro del bienestar, la recuperación deportiva y el cuidado de la piel, con oferta creciente de equipos domésticos. Ekio compite en ella con producto propio (Ekio Light), propiedad industrial propia y software propio como elementos diferenciadores.')]));
children.push(p([b('Un cruce poco disputado. '), run('El valor diferencial de Ekio está en atender los dos segmentos a la vez y con criterio propio. Los fabricantes de equipos de fotobiomodulación no diseñan pensando en bajo campo electromagnético ni en la ausencia de parpadeo (flicker); los fabricantes de soluciones de protección electromagnética no fabrican luz. Ekio ocupa esa intersección —"tecnología que cuida"— con producto propio (Ekio Light), propiedad industrial (Modelo de Utilidad y solicitud PCT del SFPA), software propio (Ekio Coach) y una comunidad construida durante tres años. Son activos que un competidor no obtiene comprando producto, y que la empresa quiere reforzar para consolidarse como referente del nicho, primero en España y por etapas en Europa (ver sección 8).')]));
children.push(note([it('El plan no cuantifica el tamaño ni el crecimiento de estos mercados.', { bold: true })]));

children.push(h2('5.2. Respaldo institucional'));
children.push(p('Ekio no opera al margen del ecosistema público de apoyo empresarial de su comunidad autónoma: participa en tres programas de la Junta de Castilla y León y tiene tres subvenciones concedidas.'));
children.push(table(
  ['Programa / ayuda', 'Organismo', 'Situación'],
  [
    ['Subvención de digitalización', 'Junta de Castilla y León', 'Concedida'],
    ['Subvención de innovación', 'Junta de Castilla y León', 'Concedida'],
    ['Subvención de investigación y desarrollo', 'Junta de Castilla y León', 'Concedida'],
    ['Importe conjunto de las tres subvenciones', '—', '35.613,20 €'],
    ['Plan ESG de Sostenibilidad 2025–2027', 'Junta de Castilla y León', 'Empresa participante'],
    ['Plan de Internacionalización de Empresas a través de Marketplace', 'ICECYL', 'Empresa participante'],
    ['Programa Wolaria (aceleración)', 'ICECYL', 'Stand propio en Startup OLÉ y Valencia Digital Summit, oct. 2026'],
  ],
  [4026, 2500, 2500],
));
children.push(spacer());
children.push(p([b('Lectura de este respaldo. '), run('Las tres subvenciones concedidas acreditan que proyectos de digitalización, innovación e I+D de la empresa han superado una evaluación técnica externa. La pertenencia al Plan ESG y al Plan de Internacionalización sitúa a Ekio dentro de la política industrial autonómica y le da acompañamiento en su salida a Europa. Ninguna de estas ayudas se computa como ingreso en las proyecciones de este plan.')]));
children.push(p([it('Las resoluciones de concesión de las tres subvenciones se acompañan a este plan.', { italics: true })]));
children.push(h2('5.3. Salida a Europa a través de Ankorstore'));
children.push(p('Dentro del Plan de Internacionalización de Empresas a través de Marketplace de ICECYL, Ekio ha iniciado la venta mayorista en Europa a través de la plataforma B2B Ankorstore (es.ankorstore.com), que conecta marcas con comercios minoristas de toda Europa.'));
children.push(bullet([b('Mercados objetivo: '), run('Alemania, Austria, Suiza, Países Bajos y Bélgica, por su mayor sensibilidad y gasto en producto de bienestar y salud preventiva.')]));
children.push(bullet([b('Qué aporta al negocio: '), run('acceso a comercio minorista europeo sin abrir filial ni red comercial propia, pedidos de mayor volumen unitario que el canal directo, y facturación menos dependiente del pico estacional español.')]));
children.push(bullet([b('Estado: '), run('canal en fase inicial, con el catálogo de lanzamiento en preparación. Todavía sin volumen consolidado, por lo que no se ha incorporado a ninguna proyección de ingresos de este documento.')]));
children.push(h2('5.4. Otros activos de la empresa'));
children.push(bullet([b('Colaboración científica. '), run('AIR Institute (Salamanca), para el desarrollo del sistema SFPA (ver sección 4.5).')]));
children.push(bullet([b('Comunidad y base de datos. '), run('Unos 44.550 seguidores en redes, más de 12.000 contactos y más de 7.600 clientes históricos de la línea Spiro (datos de gestión a agosto de 2026).')]));
children.push(bullet([b('Canal digital operativo. '), run('Shopify, Klaviyo, ManyChat, Meta Ads, Google Search Console y Microsoft Clarity, además del software propio descrito en la sección 4.5.')]));

// ===== 6. RESULTADOS HISTÓRICOS =====
children.push(h1(6, 'Resultados históricos'));
children.push(p('La actividad económica de Ekio —desarrollada desde 2023 como empresario individual y continuada en 2026 por EKIO BIOTECH, S.L.U.— presenta una trayectoria estable, con resultado positivo en todos los ejercicios cerrados. La cuenta de resultados simplificada, con el coste de ventas deducido de forma implícita a partir del margen bruto de gestión, es la siguiente:'));
children.push(h2('6.1. Cuenta de resultados histórica simplificada'));
children.push(table(
  ['Concepto', '2023 (jun–dic)', '2024', '2025', '2026 (H1)'],
  [
    ['Facturación (€)', '390.000', '534.504', '537.845', '207.815'],
    ['Margen bruto (%)', 'n.d.', '38,4 %', '24,5 %', '55,9 %'],
    ['Margen bruto (€)', 'n.d.', '205.250', '131.772', '116.169'],
    ['Coste de ventas implícito (€)', 'n.d.', '329.254', '406.073', '91.646'],
    ['Resultado del ejercicio (€)', 'n.d.', '+52.493', '+19.301', '+78.738'],
  ],
  [2826, 1550, 1550, 1550, 1550],
  [undefined, R, R, R, R],
));
children.push(spacer());
children.push(p([it('2023 fue el año de arranque: 390.000 € de facturación en unos siete meses de actividad (junio–diciembre). El margen bruto y el resultado de 2023 se aportarán con las declaraciones fiscales de ese ejercicio. El coste de ventas y el margen bruto en euros de 2024–2026 son los implícitos por el margen bruto (%) de gestión (facturación × (1 − margen bruto %)); no son partidas independientes tomadas de Holded. El margen bruto de 2026 corresponde al margen bruto global de la tienda en el primer semestre. Facturación acumulada 2023 – junio 2026: 1,67 M€.', { italics: true })]));
children.push(h2('6.2. Nota sobre la comparabilidad entre periodos'));
children.push(p('El negocio es marcadamente estacional y comparar periodos de distinta duración induce a error. El tramo junio–diciembre de 2023 contiene la campaña completa de fin de año, mientras que 2024 y 2025 la diluyen entre doce meses y el primer semestre de 2026 no la incluye. Con la estructura de 2025 (275.000 € de campaña y ~26.300 €/mes fuera de ella), un periodo de siete meses con campaña arrojaría del orden de 406.000 €: los 390.000 € de 2023 quedan un 4 % por debajo de esa referencia, coherentes con el patrón estacional. Por el mismo motivo, anualizar el primer semestre de 2026 subestima el ejercicio; la comparación pertinente es con el primer semestre de 2025.'));
children.push(note([it('[PENDIENTE: facturación del primer semestre de 2025 y de los meses de julio y agosto de 2026, para permitir la comparación homogénea semestre contra semestre.]', { bold: true })]));
children.push(h2('6.3. Lectura de gestión'));
children.push(bullet([b('Trayectoria estable y en beneficios. '), run('Tras el arranque de 2023 (390.000 € en siete meses), la facturación anual se estabiliza en 534.504 € (2024) y 537.845 € (2025), ambos ejercicios con resultado positivo (+52.493 € y +19.301 €). El primer semestre de 2026 cierra con +78.738 €. La facturación acumulada entre 2023 y junio de 2026 asciende a 1,67 M€ (cifra acumulada del periodo, no anual).')]));
children.push(bullet([b('Volumen y margen. '), run('En 2026 la actividad ha priorizado el margen sobre el volumen: la facturación de H1 (207.815 €) anualiza por debajo del ritmo de 2024 y 2025, mientras el margen bruto de gestión mejora hasta el 55,9 %. La variación del margen bruto entre ejercicios (38,4 % → 24,5 % → 55,9 %) está pendiente de conciliación con el desglose de coste de ventas de Holded: es coherente con un mayor peso de Ekio Light y un mix de mayor valor, pero también con diferencias de criterio de imputación entre periodos. El menor resultado de 2025 procede principalmente de la caída del margen bruto de gestión (38,4 % → 24,5 %, equivalente a unos 73.000 € menos de margen), y no del mayor gasto comercial: la inversión adicional en publicidad (34.316 €) y servicios profesionales (18.264 €) para lanzar Ekio Light se compensó con ahorros en otras partidas de estructura. Determinar el origen exacto de esa caída de margen es precisamente el objeto de la conciliación pendiente con Holded.')]));
children.push(bullet([b('Sin capital de terceros. '), run('La única deuda financiera de la actividad es un préstamo de 80.000 € formalizado con CaixaBank, en amortización y al corriente de pago. No hay inversores en el capital ni otras líneas vivas. La empresa ya es cliente de la entidad y ha atendido puntualmente ese compromiso.')]));
children.push(note([
  it('Supuestos y advertencias de esta sección: ', { bold: true }),
  it('(a) el margen bruto en € y el coste de ventas están calculados a partir de la facturación y el margen bruto (%) de gestión; no son partidas independientes tomadas de Holded. (b) Cifras históricas sujetas a contraste con el Holded actualizado y las declaraciones fiscales (IRPF, modelos 130 y 390) antes de la presentación formal; el resultado histórico es el de la actividad como empresario individual, antes de IRPF (impuesto personal); la SLU tributará por el Impuesto sobre Sociedades. (c) [PENDIENTE: margen bruto y resultado del ejercicio 2023; conciliación del margen bruto por ejercicio con el desglose de Holded; cierre provisional a julio/agosto de 2026; balance de apertura de la SLU y previsión de balance 2026–2027.]'),
]));

// ===== 7. PLAN COMERCIAL =====
children.push(h1(7, 'Plan comercial para los próximos 6 meses (septiembre 2026 – febrero 2027)'));
children.push(h2('7.1. Septiembre – octubre: refuerzo de comunicación y ferias'));
children.push(bullet([b('Desde septiembre: '), run('refuerzo de la comunicación de marca a través de podcast, radio y medios, para llegar a la campaña de fin de año con mayor notoriedad.')]));
children.push(bullet([b('Octubre — ferias. '), run('Stand propio en Startup OLÉ (Salamanca, 13–15 de octubre) y en el Valencia Digital Summit (22 de octubre, con pitch a inversores), por invitación de Wolaria / ICECYL. Sirven a tres fines: venta y captación en el stand, apertura del canal B2B y contacto con inversores y compradores internacionales. Su coste va en el presupuesto ordinario de marketing, no en la línea solicitada.')]));
children.push(bullet([b('11 de noviembre — publicación del libro. '), run('Lanzamiento de la obra divulgativa de la empresa (ver sección 8.5), que refuerza la notoriedad justo antes del Black Friday.')]));
children.push(h2('7.2. Noviembre – enero: campaña de fin de año'));
children.push(p('El periodo Black Friday → Navidad → Reyes es el pico de demanda del año. La campaña equivalente del año anterior generó 275.000 € de venta bruta, cifra que supera el 50 % de todo lo facturado en 2025 (537.845 €). Q4 concentra, por tanto, una parte muy alta de la actividad anual.'));
children.push(h2('7.3. Papel de la línea de crédito'));
children.push(p('El riesgo operativo de esta campaña es la rotura de inventario en el pico de demanda: quedarse sin stock de las referencias más vendidas justo cuando se concentra la mayor parte de la facturación del año. Los plazos de aprovisionamiento (línea Spiro importada desde Miami; línea Ekio Light fabricada / ensamblada por proveedor especializado) obligan a comprar el stock con varias semanas de antelación, antes de haber cobrado las ventas de la campaña.'));
children.push(p('La cuenta de crédito cubre exactamente ese desfase temporal: permite comprar por adelantado el inventario de Spiro y de Ekio Light necesario para toda la campaña, y se amortiza con el cobro de las ventas de esos mismos productos durante los meses de noviembre a enero. El detalle de la compra prevista (referencias, unidades, proveedores e importes) y el calendario de aprovisionamiento se aportan en la sección 9.'));

// ===== 8. ESTRATEGIA Y OBJETIVOS A MEDIO PLAZO =====
children.push(h1(8, 'Visión y objetivos (2026–2027)'));
children.push(p('Esta solicitud financia el circulante de una campaña concreta, pero conviene exponer hacia dónde va la empresa: explica por qué invierte en propiedad industrial y software, y por qué esos activos sostienen el margen que hace viable la devolución.'));
children.push(h2('8.1. Visión'));
children.push(p('La ambición de EKIO BIOTECH a largo plazo es posicionar su marca propia Ekio Light como referente europeo, y posteriormente en el mercado estadounidense, en el segmento de la tecnología de bienestar personal —«tecnología que cuida»—: equipos de fotobiomodulación diseñados con criterios de seguridad electromagnética y respaldados por propiedad industrial y software propios.'));
children.push(p([b('Por qué la empresa cree que puede liderar ese nicho. '), run('El segmento en el que compite —equipos de bienestar personal diseñados a la vez con criterio de fotobiomodulación y de seguridad electromagnética— está hoy poco disputado: los fabricantes de terapia de luz no incorporan el criterio de bajo campo electromagnético ni de ausencia de parpadeo, y los especialistas en protección electromagnética no fabrican equipos de luz. Ekio ya opera en ese cruce, con producto propio, propiedad industrial, software y comunidad. La estrategia de los próximos años es defender esa posición ("blindar" el producto) antes de que el nicho se pueble: registrar y extender la propiedad industrial, acumular datos de uso propios a través de la aplicación Ekio Coach, y consolidar la relación con la comunidad de clientes. Son ventajas acumulativas, difíciles de replicar comprando producto.')]));
children.push(p([b('El primer paso ya está dado. '), run('La salida a Europa no es una intención: Ekio está dentro del Plan de Internacionalización de Empresas a través de Marketplace de ICECYL y ha empezado a vender en Ankorstore hacia Alemania, Austria, Suiza, Países Bajos y Bélgica (sección 5.3). El recorrido es gradual y autofinanciado con el margen del negocio: consolidación del mercado nacional y del canal B2B, expansión europea vía marketplace, y solo más adelante —condicionada a la extensión efectiva de la protección industrial (fases nacionales de la solicitud PCT) y a la certificación aplicable— la entrada en Estados Unidos.')]));
children.push(note([it('Delimitación expresa: la cuenta de crédito solicitada NO financia esta expansión internacional. Financia exclusivamente la compra de existencias para la campaña nacional del cuarto trimestre de 2026 (ver sección 9).', { bold: true })]));
children.push(h2('8.2. Objetivo financiero'));
children.push(table(
  ['Ejercicio', 'Objetivo de facturación', 'Palanca principal'],
  [
    ['2026', '530.000 – 550.000 €', 'Recuperar volumen en la campaña de Q4 sin ceder el margen bruto ganado (superior al 50 %)'],
    ['2027', '1.000.000 €', 'Todas las líneas de negocio en marcha: canal mayorista europeo (Ankorstore), B2B nacional, renting y accesorios'],
  ],
  [1600, 2400, 5026],
  [C, R, undefined],
));
children.push(spacer());
children.push(p('El objetivo de 2027 supone prácticamente duplicar la facturación. No descansa en vender más de lo mismo, sino en que en ese ejercicio estén operativas de forma simultánea líneas que hoy aportan poco o nada: la venta mayorista en Europa a través de Ankorstore, el B2B nacional a clínicas y centros, el renting y la línea de accesorios. Alcanzado ese punto, la empresa valorará la incorporación de inversores para acelerar el desarrollo del sistema SFPA y la expansión internacional.'));
children.push(note([it('Este objetivo es una meta de gestión, no una proyección comprometida, y no interviene en el cálculo de la capacidad de devolución de la línea solicitada: esa capacidad se acredita únicamente con la campaña del cuarto trimestre de 2026 (sección 10).', { bold: true })]));
children.push(h2('8.3. Palancas de crecimiento'));
children.push(numItem([b('Mayor peso del producto propio. '), run('Aumentar la proporción de Ekio Light sobre el total de ventas frente a la distribución de Spiro, por su margen bruto más alto y por el control sobre precio, catálogo y propiedad industrial.')]));
children.push(numItem([b('Canal mayorista europeo. '), run('Escalar la venta B2B en Ankorstore hacia Alemania, Austria, Suiza, Países Bajos y Bélgica, dentro del Plan de Internacionalización de ICECYL (sección 5.3), y abrir el B2B nacional en clínicas, centros de estética y gimnasios. Aporta pedidos de mayor volumen y reduce la dependencia del pico estacional español.')]));
children.push(numItem([b('Lanzamiento del sistema SFPA. '), run('Convertir el SFPA (ver sección 4.5) en producto comercial —equipo, software y suscripción— una vez completadas su validación con AIR Institute y su solicitud de patente internacional.')]));
children.push(numItem([b('Comunidad y recompra. '), run('Explotar la aplicación Ekio Coach y la base de datos (unos 44.550 seguidores y más de 12.000 contactos) como motor de recompra y venta cruzada.')]));
children.push(numItem([b('Presencia en ferias. '), run('Startup OLÉ y Valencia Digital Summit en octubre de 2026 como puerta de entrada al canal profesional; en ejercicios siguientes, ferias europeas del sector, con presupuesto ordinario de marketing.')]));
children.push(h2('8.4. Propiedad industrial y software: la base de la ambición internacional'));
children.push(p('El esfuerzo en patentes y desarrollo propio es la condición para competir fuera de España con margen, sin quedar reducida a distribuidora de producto de terceros.'));
children.push(bullet([b('Modelo de Utilidad Nº U202532624 '), run('(panel multiespectral), registrado ante la OEPM; se acompaña el título del expediente.')]));
children.push(bullet([b('Patente internacional (PCT) del sistema SFPA, '), run('propia e independiente del Modelo de Utilidad, en preparación y pendiente de presentación. Es la pieza que permitiría proteger la tecnología en los mercados de destino antes de abordarlos. Mientras no esté presentada no se computa como activo en ninguna cifra de este plan.')]));
children.push(p('Según el resultado de la PCT se evaluará una extensión internacional selectiva a los mercados con mayor demanda. Los costes de tramitación se asumen con recursos propios.'));
children.push(h2('8.5. Divulgación y marca: publicación de un libro'));
children.push(p('Javier Andrés, fundador y administrador de la empresa, tiene en preparación el libro divulgativo «Guía de Higiene Electromagnética — El recetario de la energía perdida», que explica al público general cómo reducir la exposición electromagnética doméstica y cómo emplear la luz de forma saludable. Datos previstos de la edición:'));
children.push(table(
  ['Concepto', 'Previsión'],
  [
    ['Autor', 'Javier Andrés (fundador y administrador de EKIO BIOTECH, S.L.U.)'],
    ['Canal de publicación', 'Autopublicación en Amazon (KDP), con ISBN propio'],
    ['Fecha de lanzamiento prevista', '11 de noviembre de 2026'],
    ['Precio de lanzamiento previsto', '11,11 €'],
    ['Estado de redacción', 'En curso; guion cerrado y primeros capítulos redactados'],
  ],
  [4026, 5000],
));
children.push(spacer());
children.push(p('Su función no es la venta de ejemplares —marginal y no incorporada a ninguna proyección— sino actuar como activo de marca y captación: refuerza la autoridad de la empresa, se publica dos semanas antes del Black Friday y dirige lectores a la tienda. Su coste se asume con recursos propios.'));
children.push(h2('8.6. Estructura y encaje con esta financiación'));
children.push(p('La empresa mantendrá su estructura ligera mientras el margen no justifique incorporaciones; las primeras contrataciones previstas —operaciones y canal B2B— se ligarán a hitos de facturación, no a la financiación.'));
children.push(p('Gestionar con orden el circulante de esta campaña es el paso más inmediato de ese plan. Un buen comportamiento de la línea —disposición acotada y devolución dentro del ciclo— es la base sobre la que Ekio quiere construir una relación bancaria estable que acompañe el crecimiento descrito.'));

// ===== 9. USO DE LOS FONDOS =====
children.push(h1(9, 'Uso de los fondos solicitados'));
children.push(h2('9.1. Importe solicitado y destino'));
children.push(p([b('Importe solicitado: 250.000 €'), run(' como límite de una cuenta de crédito (línea de circulante) para la campaña del cuarto trimestre.')]));
children.push(p('El destino es la compra anticipada de existencias de tres grupos de producto para la campaña de ferias de octubre y de Black Friday, Navidad y Reyes:'));
children.push(bullet([b('Spiro '), run('(distribución): filtros y packs de protección electromagnética.')]));
children.push(bullet([b('Ekio Light '), run('(marca propia): paneles de fotobiomodulación y accesorios de iluminación.')]));
children.push(bullet([b('Accesorios de medición '), run('(medidores de campo, detectores de radiación, comprobadores de instalación), que acompañan a las dos líneas anteriores y tienen buena rotación en campaña.')]));
children.push(p('No se financia gasto corriente, ni circulante indefinido, ni activo fijo: se financia inventario concreto de un catálogo ya en venta, para un pico de demanda acotado en el tiempo. El inventario disponible a la fecha no cubre el volumen ni la velocidad de venta de la campaña: reponerlo por adelantado es precisamente el objeto de esta financiación.'));
children.push(p([b('Riesgos de aprovisionamiento asociados. '), run('La línea Spiro se importa desde Estados Unidos: la compra está expuesta al tipo de cambio EUR/USD, a los costes de transporte y a los derechos de importación. Ekio es distribuidor de Spiro en España (no en exclusiva), por lo que también existe el riesgo de que otros distribuidores concurran en el mercado; se mitiga con la comunidad, la marca y el servicio propios de Ekio, y con el mayor peso creciente de la marca propia Ekio Light. La empresa asume estos riesgos con su margen y los tiene en cuenta al fijar el precio de venta.')]));
children.push(h2('9.2. Por qué mejora la posición de la empresa'));
children.push(numItem([b('Evita la rotura de stock en el pico. '), run('La campaña de fin de año concentra más del 50 % de la facturación anual (275.000 € frente a 537.845 € de todo 2025). Quedarse sin las referencias más vendidas en ese momento es el mayor riesgo comercial del ejercicio.')]));
children.push(numItem([b('Mejora las condiciones de compra. '), run('Consolidar el pedido de campaña, en lugar de reponer a goteo, mejora la posición negociadora frente a los proveedores y reduce el coste unitario y logístico.')]));
children.push(numItem([b('Libera la caja para el marketing. '), run('Si el inventario se financia con la línea, la tesorería propia queda disponible para la inversión publicitaria que activa la demanda. La línea financia el producto; la caja propia, la venta.')]));
children.push(h2('9.3. De qué se compone el importe solicitado'));
children.push(p([b('Paso 1 — Objetivo de ventas de la campaña 2026. '), run('275.000 € el año anterior; objetivo para 2026: 350.000 € (+27 %), apoyado en el refuerzo de comunicación desde septiembre, la presencia en las dos ferias de octubre, el mayor peso de la marca propia y la incorporación de los accesorios de medición a la campaña.')]));
children.push(p([b('Paso 2 — Coste de la mercancía de campaña por grupo de producto.')]));
children.push(table(
  ['Grupo', 'Reparto', 'Ventas campaña (€)', 'Coste merc. (%)', 'Coste de la mercancía (€)'],
  [
    ['Spiro (distribución)', '65 %', '227.500', '60 %', '136.500'],
    ['Ekio Light (marca propia)', '25 %', '87.500', '45 %', '39.375'],
    ['Accesorios de medición', '10 %', '35.000', '55 %', '19.250'],
    ['Total campaña', '100 %', '350.000', '—', '195.125'],
  ],
  [2426, 1100, 1900, 1400, 2200],
  [undefined, C, R, C, R],
));
children.push(spacer());
children.push(p([b('Paso 3 — Del coste de la mercancía al importe solicitado.')]));
children.push(table(
  ['Concepto', 'Importe (€)'],
  [
    ['Coste total del stock de campaña (los tres grupos)', '195.125'],
    ['Margen adicional para reposición de referencias más vendidas durante la campaña y para el stock de arranque del primer trimestre de 2027', '≈ 54.875'],
    ['Importe solicitado de la línea', '250.000'],
  ],
  [6026, 3000],
  [undefined, R],
));
children.push(spacer());
children.push(p('Se solicita el importe como límite de una línea revolvente, no como deuda a plazo: la empresa dispone de él a medida que compra y lo devuelve a medida que vende y cobra. La disposición efectiva máxima prevista es sensiblemente inferior al límite (ver sección 10): con compra escalonada, el pico ronda los 72.000 €; incluso comprando todo el stock por adelantado en octubre, el pico ronda los 150.000 €. El margen entre esa disposición y el límite de 250.000 € da holgura para reponer sin volver a solicitar y para no agotar la línea si la campaña supera el objetivo.'));
children.push(note([
  it('Supuestos de esta sección: ', { bold: true }),
  it('objetivo de campaña 350.000 €; reparto 65 % Spiro / 25 % Ekio Light / 10 % accesorios; coste de mercancía 60 % / 45 % / 55 %, coherentes con los márgenes de gestión; fases de compra 60 % octubre / 30 % noviembre / 10 % diciembre, con pago al contado al realizar el pedido y cobro inmediato vía Stripe.'),
]));
children.push(h2('9.4. Estructura de la operación'));
children.push(p('La operación se plantea con la responsabilidad patrimonial de EKIO BIOTECH, S.L.U. La empresa aporta como respaldo su historial de cumplimiento: el préstamo de 80.000 € que mantiene con la propia entidad está al corriente de pago, la actividad ha cerrado en beneficios todos sus ejercicios y está al corriente con la Agencia Tributaria y la Seguridad Social. La estructura y las condiciones definitivas de la línea se acordarán con CaixaBank.'));

// ===== 10. CAPACIDAD DE DEVOLUCIÓN =====
children.push(h1(10, 'Capacidad de devolución'));
children.push(p('Al tratarse de una cuenta de crédito (línea revolvente), el reembolso no depende de un flujo futuro incierto: se produce con la propia liquidación de las ventas de la campaña que financia. La línea se dispone para comprar el stock antes del pico y se devuelve a medida que ese stock se vende y se cobra. Es circulante autoliquidable en un ciclo corto.'));
children.push(h2('10.1. Flujo de caja de campaña (escenario base, octubre 2026 – febrero 2027)'));
children.push(p([it('Objetivo de campaña 350.000 €. Ventas distribuidas 15 % / 35 % / 30 % / 15 % / 5 % (octubre a febrero). Cobro en el momento de la compra a través de la pasarela de pago (Stripe). Pago a proveedor al contado en el momento de realizar el pedido, con compra escalonada 60 % / 30 % / 10 % entre octubre y diciembre. Gastos de campaña (marketing y logística) al 12 % de las ventas. Cuota del préstamo con CaixaBank incluida en cada mes. El flujo se presenta antes del Impuesto sobre Sociedades; el beneficio de campaña quedará sujeto a IS (25 %, o el tipo reducido que corresponda) en la liquidación del ejercicio, que la empresa provisionará con la caja generada.', { italics: true })]));
children.push(table(
  ['Concepto (€)', 'Oct-26', 'Nov-26', 'Dic-26', 'Ene-27', 'Feb-27', 'Total'],
  [
    ['Cobros por ventas', '52.500', '122.500', '105.000', '52.500', '17.500', '350.000'],
    ['(−) Compra de stock', '−117.075', '−58.538', '−19.512', '0', '0', '−195.125'],
    ['(−) Gastos de campaña (12 %)', '−6.300', '−14.700', '−12.600', '−6.300', '−2.100', '−42.000'],
    ['(−) Cuota préstamo CaixaBank', '−1.350', '−1.350', '−1.350', '−1.350', '−1.350', '−6.750'],
    ['Flujo de caja libre del mes', '−72.225', '+47.912', '+71.538', '+44.850', '+14.050', '+106.125'],
    ['Disposición de la línea', '72.225', '0', '0', '0', '0', '—'],
    ['Devolución de la línea', '0', '−47.912', '−24.313', '0', '0', '−72.225'],
    ['Saldo vivo de la línea (fin de mes)', '72.225', '24.313', '0', '0', '0', '—'],
    ['Caja acumulada tras servicio de la línea', '0', '0', '+47.225', '+92.075', '+106.125', '—'],
  ],
  [2600, 1071, 1071, 1071, 1071, 1071, 1071],
  [undefined, R, R, R, R, R, R],
));
children.push(spacer());
children.push(p([b('Lectura: '), run('con compra escalonada, la línea se dispone hasta unos 72.000 € en octubre para comprar el primer y mayor tramo de stock, y queda totalmente devuelta a finales de diciembre con el cobro de las ventas de Black Friday y Navidad. A partir de ahí la campaña solo genera caja. El ciclo de vida de la disposición es de aproximadamente dos meses. La disposición máxima queda muy por debajo del límite solicitado (250.000 €).')]));
children.push(h2('10.2. Ratio de cobertura de la devolución'));
children.push(p([b('Ratio de cobertura = Flujo de caja operativo de campaña ÷ (Pico de disposición + Servicio del préstamo en el periodo)')]));
children.push(table(
  ['Concepto', 'Escenario base', 'Conservador (−25 %)'],
  [
    ['Ventas de campaña (€)', '350.000', '262.500'],
    ['Flujo de caja operativo de campaña (€)', '112.875', '84.656'],
    ['Pico de disposición de la línea (€)', '72.225', '54.506'],
    ['Servicio del préstamo en el periodo (€)', '6.750', '6.750'],
    ['Obligación total a cubrir (€)', '78.975', '61.256'],
    ['Ratio de cobertura', '1,43x', '1,38x'],
  ],
  [4026, 2500, 2500],
  [undefined, R, R],
));
children.push(spacer());
children.push(p([it('Flujo de caja operativo de campaña = cobros − compra de stock − gastos de campaña (antes del servicio de deuda). El escenario conservador aplica −25 % a las ventas y escala compras y gastos en la misma proporción; la cuota del préstamo se mantiene fija (es una obligación que no depende de las ventas).', { italics: true })]));
children.push(p('En ambos escenarios el flujo generado cubre en torno a 1,4 veces la devolución de la línea (medida sobre el pico de disposición) más el servicio del préstamo vivo. La cobertura no depende de que la campaña crezca: se sostiene sobre la conversión en caja de stock ya vendible.'));
children.push(h2('10.3. Casos extremos'));
children.push(p([b('a) Disposición máxima. '), run('Comprando de una vez todo el stock de campaña (195.125 €), la línea se dispondría hasta unos 150.000 € en octubre y quedaría igualmente amortizada a finales de diciembre: los cobros de noviembre y diciembre (227.500 €) superan con holgura esa disposición. El límite de 250.000 € cubre este caso con margen.')]));
children.push(p([b('b) Ventas un 40 % por debajo del objetivo. '), run('Solo el primer tramo de compra (≈ 117.000 €) está comprometido en octubre; las reposiciones de noviembre y diciembre son discrecionales y se recortarían. Con ventas de ≈ 210.000 €, la disposición llegaría a ≈ 90.000 € y quedaría devuelta a finales de enero de 2027 —un mes más tarde que en el escenario base— con la caja de campaña aún en positivo (≈ +22.000 €). Mitigan el riesgo la compra escalonada, el stock no vendido que se liquida en el primer trimestre y los ejercicios previos en beneficios.')]));
children.push(h2('10.4. Efecto del préstamo vivo con CaixaBank'));
children.push(p('EKIO BIOTECH mantiene un préstamo de 80.000 € formalizado con CaixaBank, en amortización y al corriente de pago. Su cuota mensual se ha incluido íntegra en el flujo de caja de campaña y en los ratios, de modo que la capacidad de devolución se mide después de atender esa deuda.'));
children.push(bullet('Cuota mensual utilizada en el modelo: 1.350 €/mes. La entidad dispone del cuadro de amortización y del saldo vivo actualizado.'));
children.push(bullet('Servicio del préstamo durante los cinco meses de campaña: ~6.750 €, absorbido por el flujo de campaña en todos los escenarios.'));
children.push(p('El historial de cumplimiento de ese préstamo con la propia entidad es, en sí mismo, el mejor antecedente disponible sobre el comportamiento de pago de la empresa.'));
children.push(h2('10.5. Conclusión sobre solvencia'));
children.push(bullet([b('Circulante autoliquidable. '), run('La línea financia existencias de un catálogo ya en venta y se devuelve con el cobro de esas mismas ventas: ciclo de ~2 meses en el escenario base (disposición en octubre, devolución completa en diciembre).')]));
children.push(bullet([b('Disposición muy por debajo del límite. '), run('El límite solicitado es 250.000 €; la disposición máxima prevista es de ~72.000 € con compra escalonada y ~150.000 € comprando todo por adelantado. El margen es holgura para reponer, no deuda prevista.')]));
children.push(bullet([b('Cobertura de 1,43x (base) y 1,38x (conservador), '), run('en ambos casos después de atender el préstamo vivo con CaixaBank. En un estrés de ventas −40 % con el primer pedido comprometido, el ciclo se alarga un mes hacia Q1 2027 sin llegar a impago.')]));
children.push(bullet([b('Riesgo acotado. '), run('No se financia gasto corriente ni proyectos de resultado incierto, sino inventario físico para un pico de demanda con precedente cuantificado (275.000 € el año anterior). El destino y la fuente de repago están directamente ligados.')]));

// ===== 10. ANEXOS =====
children.push(h1(11, 'Anexos'));
children.push(h2('11.1. Documentación que acompaña a este plan'));
children.push(bullet('Escritura de constitución de EKIO BIOTECH, S.L.U. y de aportación del negocio en funcionamiento, de 29 de julio de 2026, en la que constan el patrimonio aportado, el objeto social y el alta censal de la sociedad.'));
children.push(bullet('Certificados de estar al corriente de pago con la Agencia Tributaria y con la Tesorería General de la Seguridad Social.'));
children.push(bullet('Resoluciones de concesión de las tres subvenciones de la Junta de Castilla y León (digitalización, innovación e investigación y desarrollo).'));
children.push(bullet('Declaraciones de IRPF y modelos 130 y 390 de la actividad como empresario individual (ejercicios 2023, 2024 y 2025), y P&L de gestión de Holded.'));
children.push(bullet('Cuadro de amortización del préstamo de 80.000 € vivo con CaixaBank.'));
children.push(bullet('Anexo financiero con el detalle del modelo de campaña y los escenarios.'));

children.push(h2('11.2. Información complementaria'));
children.push(p('La empresa facilitará a la entidad cualquier detalle adicional sobre las cifras, los supuestos o la documentación de este plan que le sea requerido.'));

// ---------- document ----------
const doc = new Document({
  creator: 'EKIO BIOTECH, S.L.U.',
  title: 'Plan de empresa — Cuenta de crédito CaixaBank',
  description: 'Plan de empresa para solicitud de cuenta de crédito (línea de circulante para financiación de existencias)',
  styles: {
    default: {
      document: { run: { font: FONT, size: 22 } },
    },
  },
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 260 } } } }],
      },
      {
        reference: 'nums',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 260 } } } }],
      },
    ],
  },
  sections: [{
    properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: {
      default: new Footer({
        children: [
          // filete ámbar de separación
          new Paragraph({
            spacing: { before: 0, after: 60 },
            border: { top: { style: BorderStyle.SINGLE, size: 8, color: AMBER, space: 6 } },
            children: [new TextRun({ text: '', font: FONT, size: 2 })],
          }),
          new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            spacing: { before: 0, after: 0 },
            children: [
              // logotipo EKIO (marca denominativa)
              new TextRun({ text: 'EKIO', font: SERIF, bold: true, size: 19, color: INK, characterSpacing: 30 }),
              new TextRun({ text: '  ELECTROSMOG', font: FONT, bold: true, size: 12, color: AMBER_DK, characterSpacing: 30 }),
              new TextRun({ text: '   ·   EKIO BIOTECH, S.L.U.  ·  Plan de empresa', font: FONT, size: 15, color: MUTED }),
              new TextRun({ text: '\t', font: FONT, size: 15 }),
              new TextRun({ children: ['Pág. ', PageNumber.CURRENT, ' / ', PageNumber.TOTAL_PAGES], font: FONT, bold: true, size: 15, color: INK }),
            ],
          }),
        ],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log('written', OUT, buf.length, 'bytes');
});
