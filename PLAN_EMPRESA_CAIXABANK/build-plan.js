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
function it(text, o = {}) { return new TextRun({ text, font: FONT, size: 20, italics: true, color: '595959', ...o }); }

function h1(num, text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text: `${num}. ${text}`, font: FONT, bold: true, size: 30, color: '1F3864' })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 220, after: 120 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 24, color: '2F5496' })],
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
    shading: { type: ShadingType.CLEAR, fill: 'F2F2F2' },
    border: {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' },
      left: { style: BorderStyle.SINGLE, size: 12, color: '8EAADB' },
      right: { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' },
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
    shading: { type: ShadingType.CLEAR, fill: '1F3864' },
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: [new Paragraph({
      alignment: align,
      spacing: { after: 0, line: 264 },
      children: [new TextRun({ text, font: FONT, size: 20, bold: true, color: 'FFFFFF' })],
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
      children: r.map((c, i) => bodyCell(c, widths[i], aligns[i], ri % 2 ? 'F2F5FA' : undefined)),
    }));
  return new Table({
    width: { size: widths.reduce((a, x) => a + x, 0), type: WidthType.DXA },
    columnWidths: widths,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: 'BFBFBF' },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: 'BFBFBF' },
      left: { style: BorderStyle.SINGLE, size: 2, color: 'BFBFBF' },
      right: { style: BorderStyle.SINGLE, size: 2, color: 'BFBFBF' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'D9D9D9' },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'D9D9D9' },
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
  new Paragraph({ spacing: { before: 2400, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'PLAN DE EMPRESA', font: FONT, bold: true, size: 56, color: '1F3864' })] }),
  new Paragraph({ spacing: { before: 200, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Solicitud de cuenta de crédito', font: FONT, size: 32, color: '2F5496' })] }),
  new Paragraph({ spacing: { before: 80, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Línea de circulante para financiación de existencias · CaixaBank Now', font: FONT, size: 24, color: '595959' })] }),
  new Paragraph({ spacing: { before: 1600, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'EKIO BIOTECH, S.L.U.', font: FONT, bold: true, size: 32 })] }),
  new Paragraph({ spacing: { before: 80, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'CIF B93860096', font: FONT, size: 24 })] }),
  new Paragraph({ spacing: { before: 40, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Barrio de Arriba 39 · 49327 Cubo de Benavente (Zamora)', font: FONT, size: 22, color: '595959' })] }),
  new Paragraph({ spacing: { before: 1800, after: 0 }, alignment: C,
    children: [new TextRun({ text: '30 de agosto de 2026', font: FONT, size: 22, color: '595959' })] }),
  new Paragraph({ spacing: { before: 40, after: 0 }, alignment: C,
    children: [new TextRun({ text: 'Documento confidencial — uso exclusivo para evaluación de riesgos de CaixaBank', font: FONT, size: 18, italics: true, color: '808080' })] }),
  new Paragraph({ children: [new PageBreak()] }),
);

// ===== TOC =====
children.push(
  new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { after: 160 },
    children: [new TextRun({ text: 'Índice', font: FONT, bold: true, size: 30, color: '1F3864' })] }),
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
    ['Alta censal y CNAE de la sociedad', '[PENDIENTE: confirmar que la SLU tiene alta censal y CNAE asignado a fecha de solicitud]'],
    ['Fecha del documento', '30 de agosto de 2026'],
    ['Persona de contacto para el banco', '[PENDIENTE: nombre, email y teléfono de contacto]'],
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
children.push(numItem([b('Trayectoria estable y en beneficios. '), run('Arranque en 2023 (390.000 € en siete meses) y facturación anual estable en 2024 y 2025 (534.504 € y 537.845 €), ambos ejercicios con resultado positivo (+52.493 € y +19.301 €); primer semestre de 2026 con +78.738 €. Facturación acumulada 2023 – junio 2026: 1,67 M€ (cifra acumulada, no anual). La única deuda financiera es un préstamo institucional de 70.000 €, en amortización y al corriente de pago; no hay capital de terceros. El detalle de ese préstamo se aporta en la sección 6 y en la documentación de soporte.')]));
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
children.push(p('La actividad se ha desarrollado desde 2023 como empresario individual (autónomo): Francisco Javier Andrés Andrés, NIF 09338115T. En 2026, ese negocio en funcionamiento se aporta a la sociedad EKIO BIOTECH, S.L.U. (CIF B93860096), de reciente constitución, que pasa a ser el vehículo jurídico de la misma actividad económica.'));
children.push(p('El track record de ventas, comunidad y márgenes de este plan corresponde a esa misma actividad económica bajo el titular anterior; la SLU la continúa sin ruptura de negocio. La sociedad es nueva y aún no tiene cuentas anuales depositadas: el histórico se acredita con las declaraciones de IRPF, los modelos 130 y 390 y el P&L de gestión de Holded.'));
children.push(bullet([it('[PENDIENTE: fecha exacta de la escritura de constitución de la SLU y de la aportación del negocio; confirmación de alta censal y CNAE de la sociedad a fecha de solicitud.]', { bold: true })]));
children.push(bullet([it('[PENDIENTE: confirmar situación de estar al corriente de pago con la AEAT y con la Seguridad Social. Si existe algún aplazamiento o fraccionamiento de deuda con la AEAT o la TGSS, se declarará expresamente su importe, calendario y estado de cumplimiento, por ser información relevante para el análisis. CaixaBank exigirá los certificados correspondientes.]', { bold: true })]));

children.push(h2('3.3. Equipo'));
children.push(p('Ekio opera con una estructura ligera: una persona en plantilla (responsable de operaciones) y una red de profesionales externos que cubren las funciones especializadas —email marketing, contenido, publicidad digital, asesoría legal y asesoría científica—. Este modelo mantiene los costes fijos bajos y permite escalar el gasto variable (sobre todo publicidad e inventario) en función de la campaña.'));
children.push(note([it('[PENDIENTE: confirmar el número exacto de personas en plantilla y de colaboradores externos habituales.]', { bold: true })]));

children.push(h2('3.4. Reseña profesional del fundador'));
children.push(p('Francisco Javier Andrés Andrés (NIF 09338115T) es fundador, socio único y administrador de EKIO BIOTECH, S.L.U.'));
children.push(bullet([b('Creación y dirección del negocio (2023–actualidad). '), run('Puso en marcha la actividad en 2023 y la ha dirigido de forma continuada, primero como empresario individual y desde 2026 a través de la sociedad. Bajo su dirección la actividad ha superado 1,6 M€ de facturación acumulada y ha cerrado en beneficios todos sus ejercicios.')]));
children.push(bullet([b('Paso a marca propia. '), run('Diseñó y ejecutó la transición desde la distribución de producto de terceros (Spiro) a la marca propia Ekio Light, con desarrollo de propiedad industrial (Modelo de Utilidad Nº U202532624) y de software propio (aplicación de cliente Ekio Coach y sistema SFPA).')]));
children.push(bullet([b('Dirección del departamento de I+D de Ekio. '), run('Está al frente del área de investigación y desarrollo de la empresa, que coordina la revisión de la evidencia científica que respalda las afirmaciones de producto (fotobiomodulación y exposición electromagnética), la relación con AIR Institute y la agenda de patentes.')]));
children.push(bullet([b('Divulgación. '), run('Autor del libro «Guía de Higiene Electromagnética — El recetario de la energía perdida» (en preparación, ver sección 8.5), y responsable de la comunicación de marca en podcast y medios.')]));
children.push(bullet([b('Relación institucional. '), run('Ha situado a la empresa dentro del ecosistema de apoyo de la Junta de Castilla y León: tres subvenciones concedidas (digitalización, innovación e I+D), participación en el Plan ESG de Sostenibilidad 2025–2027 y en el Plan de Internacionalización a través de Marketplace de ICECYL, y acceso al programa Wolaria (sección 5.2).')]));
children.push(bullet([b('Reconocimiento institucional. '), run('Impulsó la incorporación de Ekio al programa de Wolaria / ICECYL y su presencia como stand propio en Startup OLÉ y Valencia Digital Summit 2026.')]));
children.push(note([it('[PENDIENTE: completar con formación académica, trayectoria profesional previa a 2023 y años de experiencia en el sector, para una reseña curricular completa.]', { bold: true })]));

// ===== 4. MODELO DE NEGOCIO =====
children.push(h1(4, 'Modelo de negocio y líneas de producto'));
children.push(h2('4.1. Línea Spiro — distribución en España'));
children.push(p('Ekio es distribuidor en España de la tecnología de protección electromagnética Spiro, fabricada por Noxtak Corp. / SG Labs (Miami). No es una distribución en exclusiva. Es la línea con la que nació el negocio y la que aporta el volumen y la base de clientes histórica.'));
children.push(bullet('Catálogo de producto individual y packs, con precio de venta al público entre 147 € (producto de entrada) y 825 € (pack más completo) en el catálogo actual.'));
children.push(bullet('Venta directa en la ficha de producto, sin llamada comercial.'));
children.push(bullet('Comunidad de clientes y seguidores construida en torno a la línea.'));
children.push(bullet([b('Respaldo del fabricante. '), run('Según Noxtak, la tecnología SPIRO está protegida por 14 patentes. Su familia de patente principal —neutralización de contaminación electromagnética, con prioridad de 2016— figura como concedida en registros públicos (EPO / Google Patents) en Estados Unidos, la Unión Europea, España, Japón, Corea del Sur, Australia y Canadá. Noxtak ha recibido el German Innovation Award 2021 del German Design Council y un Edison Award 2020 en ciencia de materiales, y las propiedades físicas del filtro han sido medidas por laboratorios acreditados. SPIRO no es un producto sanitario y no se le atribuyen efectos de prevención, tratamiento o curación; su validación clínica independiente está pendiente y forma parte de la agenda de I+D de Ekio. [PENDIENTE: relación de patentes y de premios facilitada por Noxtak, para adjuntar.]')]));
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
children.push(bullet([b('Propiedad industrial: '), run('Modelo de Utilidad español Nº U202532624 (panel multiespectral), registrado ante la OEPM; solicitud de 25 de diciembre de 2025. Es un elemento diferenciador frente a competidores. Se adjuntará el título expedido por la OEPM. [PENDIENTE: certificado/título de la OEPM que acredite el estado exacto del expediente a la fecha.]')]));
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
children.push(note([it('El catálogo de ambas líneas está operativo y a la venta. Las unidades en inventario a fecha de hoy no cubren el volumen ni la velocidad de venta de la campaña de Q4: reponer ese stock por adelantado es precisamente el objeto de esta financiación (ver sección 9). [PENDIENTE: unidades de inventario realmente disponibles y comprometidas a fecha de solicitud, y rotación (vueltas) por referencia de campaña.]', { bold: true })]));

children.push(h2('4.3. Líneas complementarias'));
children.push(p('Accesorios de medición (detector de radiación 49 €, comprobador de enchufe 20,66 €, medidor de electricidad sucia 216,37 €): acompañan a las dos líneas principales, tienen buena rotación en campaña y SÍ forman parte del stock que se financia con esta línea (ver sección 9). Los suplementos de la marca Laittin (vitamina C, B, D3+K2 y packs) no son objeto de esta financiación.'));

children.push(h2('4.4. Canales de venta'));
children.push(bullet([b('D2C (venta directa): '), run('electrosmogespana.com. Es el canal principal y la base de todo el histórico de facturación. Venta cerrada en la ficha de producto, sin comercial.')]));
children.push(bullet([b('Renting / suscripción: '), run('opción de pago por uso para el consumidor a través de Sharpei (integrada en Shopify) y planteamiento B2B para clínicas, centros de estética y gimnasios. Línea incipiente. [PENDIENTE: volumen real de contratos de renting vivos a la fecha.]')]));
children.push(bullet([b('B2B / mayorista europeo: '), run('venta iniciada en el marketplace Ankorstore dentro del Plan de Internacionalización de ICECYL, con foco en Alemania, Austria, Suiza, Países Bajos y Bélgica (sección 5.3). En fase inicial, sin volumen consolidado.')]));

children.push(h2('4.5. Activos tecnológicos propios'));
children.push(p('Además del catálogo físico, Ekio ha desarrollado tecnología propia que refuerza la relación con el cliente y eleva la barrera de entrada:'));
children.push(bullet([b('Aplicación de gestión interna. '), run('Herramienta propia para pedidos, inventario y atención al cliente.')]));
children.push(bullet([b('Aplicación de cliente «Ekio Coach». '), run('Guía de uso, seguimiento de sesiones y protocolos personalizados, ya con usuarios registrados. Convierte la venta de un equipo en una relación continuada y genera datos de uso propios.')]));
children.push(bullet([b('Sistema SFPA (Sistema de Fotobiomodulación Personalizada con IA). '), run('Plataforma propia que integra hardware, software y algoritmos de inteligencia artificial para adaptar los parámetros de tratamiento (longitud de onda, dosis y tiempo) al perfil de cada usuario y a su respuesta. En desarrollo con AIR Institute (Salamanca). Tiene una solicitud de patente internacional (PCT) propia e independiente del Modelo de Utilidad, actualmente en preparación con el agente de la propiedad industrial y pendiente de presentación. [PENDIENTE: número y fecha de presentación de la solicitud PCT cuando se registre.] Todavía sin producto comercial; su lanzamiento se describe en la sección 8.2.')]));

// ===== 5. MERCADO Y VALIDACIÓN =====
children.push(h1(5, 'Mercado y validación externa'));
children.push(h2('5.1. Contexto de mercado'));
children.push(p('Ekio opera en dos segmentos del mercado del bienestar y la salud preventiva de consumo:'));
children.push(bullet([b('Protección frente a la exposición electromagnética. '), run('Segmento de nicho, con demanda impulsada por la preocupación creciente de una parte de la población por la exposición a campos electromagnéticos (instalaciones eléctricas domésticas, telefonía móvil, redes inalámbricas). Ekio cubre esta demanda con la línea Spiro.')]));
children.push(bullet([b('Fotobiomodulación (terapia de luz roja e infrarroja). '), run('Categoría de producto de consumo dentro del bienestar, la recuperación deportiva y el cuidado de la piel, con oferta creciente de equipos domésticos. Ekio compite en ella con producto propio (Ekio Light), propiedad industrial propia y software propio como elementos diferenciadores.')]));
children.push(p([b('Un cruce poco disputado. '), run('El valor diferencial de Ekio está en atender los dos segmentos a la vez y con criterio propio. Los fabricantes de equipos de fotobiomodulación no diseñan pensando en bajo campo electromagnético ni en la ausencia de parpadeo (flicker); los fabricantes de soluciones de protección electromagnética no fabrican luz. Ekio ocupa esa intersección —"tecnología que cuida"— con producto propio (Ekio Light), propiedad industrial (Modelo de Utilidad y solicitud PCT del SFPA), software propio (Ekio Coach) y una comunidad construida durante tres años. Son activos que un competidor no obtiene comprando producto, y que la empresa quiere reforzar para consolidarse como referente del nicho, primero en España y por etapas en Europa (ver sección 8).')]));
children.push(note([it('El plan no cuantifica el tamaño ni el crecimiento de estos mercados. [PENDIENTE: si se desea incluir una cifra de mercado (tamaño o tasa de crecimiento), debe aportarse una fuente citable.]', { bold: true })]));

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
children.push(note([it('[PENDIENTE: resoluciones de concesión de las tres subvenciones, con organismo, expediente, importe y calendario de justificación; y acreditación de la participación en el Plan ESG y en el Plan de Internacionalización, para adjuntar como anexo.]', { bold: true })]));
children.push(h2('5.3. Salida a Europa a través de Ankorstore'));
children.push(p('Dentro del Plan de Internacionalización de Empresas a través de Marketplace de ICECYL, Ekio ha iniciado la venta mayorista en Europa a través de la plataforma B2B Ankorstore (es.ankorstore.com), que conecta marcas con comercios minoristas de toda Europa.'));
children.push(bullet([b('Mercados objetivo: '), run('Alemania, Austria, Suiza, Países Bajos y Bélgica, por su mayor sensibilidad y gasto en producto de bienestar y salud preventiva.')]));
children.push(bullet([b('Qué aporta al negocio: '), run('acceso a comercio minorista europeo sin abrir filial ni red comercial propia, pedidos de mayor volumen unitario que el canal directo, y facturación menos dependiente del pico estacional español.')]));
children.push(bullet([b('Estado: '), run('canal en fase inicial, con el catálogo de lanzamiento en preparación. Todavía sin volumen consolidado, por lo que no se ha incorporado a ninguna proyección de ingresos de este documento.')]));
children.push(h2('5.4. Otros activos de la empresa'));
children.push(bullet([b('Colaboración científica. '), run('AIR Institute (Salamanca), para el desarrollo del sistema SFPA (ver sección 4.5).')]));
children.push(bullet([b('Comunidad y base de datos. '), run('Unos 44.550 seguidores en redes, más de 12.000 contactos y más de 7.600 clientes históricos de la línea Spiro (datos de gestión a agosto de 2026). [PENDIENTE: exportaciones de Klaviyo y Shopify con los recuentos exactos.]')]));
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
children.push(bullet([b('Sin capital de terceros. '), run('La única deuda financiera de la actividad es un préstamo institucional de 70.000 €, en amortización y al corriente de pago. No hay inversores en el capital ni otras líneas vivas.')]));
children.push(bullet([b('Préstamo de 70.000 € — identificación. '), it('[PENDIENTE: prestamista y naturaleza del préstamo (p. ej. Iberaval / ENISA / ICO / préstamo participativo), saldo vivo a la fecha de solicitud, cuota, vencimiento y eventuales condiciones o limitaciones a nueva financiación. El detalle figurará en la CIRBE; la empresa lo adjunta con el contrato y el cuadro de amortización.]', { bold: true })]));
children.push(note([
  it('Supuestos y advertencias de esta sección: ', { bold: true }),
  it('(a) el margen bruto en € y el coste de ventas están calculados a partir de la facturación y el margen bruto (%) de gestión; no son partidas independientes tomadas de Holded. (b) Cifras históricas sujetas a contraste con el Holded actualizado y las declaraciones fiscales (IRPF, modelos 130 y 390) antes de la presentación formal; el resultado histórico es el de la actividad como empresario individual, antes de IRPF (impuesto personal); la SLU tributará por el Impuesto sobre Sociedades. (c) [PENDIENTE: margen bruto y resultado del ejercicio 2023; conciliación del margen bruto por ejercicio con el desglose de Holded; cierre provisional a julio/agosto de 2026; balance de apertura de la SLU y previsión de balance 2026–2027.] (d) Referencia: hoja «Histórico» del anexo anexo-financiero.xlsx.'),
]));

// ===== 7. PLAN COMERCIAL =====
children.push(h1(7, 'Plan comercial para los próximos 6 meses (septiembre 2026 – febrero 2027)'));
children.push(h2('7.1. Septiembre – octubre: refuerzo de comunicación y ferias'));
children.push(bullet([b('Desde septiembre: '), run('refuerzo de la comunicación de marca a través de podcast, radio y medios, para llegar a la campaña de fin de año con mayor notoriedad.')]));
children.push(bullet([b('Octubre — ferias. '), run('Stand propio en Startup OLÉ (Salamanca, 13–15 de octubre) y en el Valencia Digital Summit (22 de octubre, con pitch a inversores), por invitación de Wolaria / ICECYL. Sirven a tres fines: venta y captación en el stand, apertura del canal B2B y contacto con inversores y compradores internacionales. Su coste va en el presupuesto ordinario de marketing, no en la línea solicitada.')]));
children.push(bullet([b('11 de noviembre — publicación del libro. '), run('Lanzamiento de la obra divulgativa de la empresa (ver sección 8.5), que refuerza la notoriedad justo antes del Black Friday.')]));
children.push(h2('7.2. Noviembre – enero: campaña de fin de año'));
children.push(p('El periodo Black Friday → Navidad → Reyes es el pico de demanda del año. La campaña equivalente del año anterior generó 275.000 € de facturación, cifra que supera el 50 % de todo lo facturado en 2025 (537.845 €). Q4 concentra, por tanto, una parte muy alta de la actividad anual.'));
children.push(note([it('[PENDIENTE: periodo exacto (fechas de inicio y fin) al que corresponden esos 275.000 € y si es venta bruta o neta.]', { bold: true })]));
children.push(h2('7.3. Papel de la línea de crédito'));
children.push(p('El riesgo operativo de esta campaña es la rotura de inventario en el pico de demanda: quedarse sin stock de las referencias más vendidas justo cuando se concentra la mayor parte de la facturación del año. Los plazos de aprovisionamiento (línea Spiro importada desde Miami; línea Ekio Light fabricada / ensamblada por proveedor especializado) obligan a comprar el stock con varias semanas de antelación, antes de haber cobrado las ventas de la campaña.'));
children.push(p('La cuenta de crédito cubre exactamente ese desfase temporal: permite comprar por adelantado el inventario de Spiro y de Ekio Light necesario para toda la campaña, y se amortiza con el cobro de las ventas de esos mismos productos durante los meses de noviembre a enero. El detalle de la compra prevista (referencias, unidades, proveedores e importes) y el calendario de aprovisionamiento se aportan en la sección 9.'));

// ===== 8. ESTRATEGIA Y OBJETIVOS A MEDIO PLAZO =====
children.push(h1(8, 'Visión, estrategia y objetivos a medio plazo (2026–2028)'));
children.push(p('Esta solicitud financia el circulante de una campaña concreta, pero conviene exponer hacia dónde va la empresa: explica por qué invierte en propiedad industrial y software, y por qué esos activos sostienen el margen que hace viable la devolución.'));
children.push(h2('8.1. Visión'));
children.push(p('La ambición de EKIO BIOTECH a largo plazo es posicionar su marca propia Ekio Light como referente europeo, y posteriormente en el mercado estadounidense, en el segmento de la tecnología de bienestar personal —«tecnología que cuida»—: equipos de fotobiomodulación diseñados con criterios de seguridad electromagnética y respaldados por propiedad industrial y software propios.'));
children.push(p([b('Por qué la empresa cree que puede liderar ese nicho. '), run('El segmento en el que compite —equipos de bienestar personal diseñados a la vez con criterio de fotobiomodulación y de seguridad electromagnética— está hoy poco disputado: los fabricantes de terapia de luz no incorporan el criterio de bajo campo electromagnético ni de ausencia de parpadeo, y los especialistas en protección electromagnética no fabrican equipos de luz. Ekio ya opera en ese cruce, con producto propio, propiedad industrial, software y comunidad. La estrategia de los próximos años es defender esa posición ("blindar" el producto) antes de que el nicho se pueble: registrar y extender la propiedad industrial, acumular datos de uso propios a través de la aplicación Ekio Coach, y consolidar la relación con la comunidad de clientes. Son ventajas acumulativas, difíciles de replicar comprando producto.')]));
children.push(p([b('El primer paso ya está dado. '), run('La salida a Europa no es una intención: Ekio está dentro del Plan de Internacionalización de Empresas a través de Marketplace de ICECYL y ha empezado a vender en Ankorstore hacia Alemania, Austria, Suiza, Países Bajos y Bélgica (sección 5.3). El recorrido es gradual y autofinanciado con el margen del negocio: consolidación del mercado nacional y del canal B2B, expansión europea vía marketplace, y solo más adelante —condicionada a la extensión efectiva de la protección industrial (fases nacionales de la solicitud PCT) y a la certificación aplicable— la entrada en Estados Unidos.')]));
children.push(note([it('Delimitación expresa: la cuenta de crédito solicitada NO financia esta expansión internacional. Financia exclusivamente la compra de existencias para la campaña nacional del cuarto trimestre de 2026 (ver sección 9).', { bold: true })]));
children.push(h2('8.2. Objetivo financiero'));
children.push(p('Cerrar 2026 en el entorno de 530.000 – 550.000 € de facturación, recuperando volumen en la campaña de Q4 sin ceder el margen bruto ganado (superior al 50 %). Desde 2027, crecimiento moderado apoyado en ingresos recurrentes —canal mayorista europeo y renting— y no en un salto de ventas puntual.'));
children.push(note([it('[PENDIENTE: proyección financiera plurianual detallada (cuenta de resultados, balance y tesorería 2026–2028). La empresa dispone de un modelo económico a cinco años elaborado para otras líneas de financiación, que puede aportarse a CaixaBank a petición.]', { bold: true })]));
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
children.push(note([it('[PENDIENTE: confirmar fecha de publicación, precio final y coste de edición e ilustración del libro.]', { bold: true })]));
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
children.push(p('No se financia gasto corriente, ni circulante indefinido, ni activo fijo: se financia inventario concreto de un catálogo ya en venta, para un pico de demanda acotado en el tiempo. La compra se soportará con presupuestos o pedidos pro-forma de los proveedores (ver sección 11).'));
children.push(p([b('Riesgos de aprovisionamiento asociados. '), run('La línea Spiro se importa desde Estados Unidos: la compra está expuesta al tipo de cambio EUR/USD, a los costes de transporte y a los derechos de importación. Ekio es distribuidor de Spiro en España (no en exclusiva), por lo que también existe el riesgo de que otros distribuidores concurran en el mercado; se mitiga con la comunidad, la marca y el servicio propios de Ekio, y con el mayor peso creciente de la marca propia Ekio Light. La empresa asume estos riesgos con su margen y los tiene en cuenta al fijar el precio de venta. [PENDIENTE: vigencia y preaviso del contrato de distribución con Noxtak, moneda y condiciones de pago al proveedor, y exposición estimada al tipo de cambio en la compra de campaña.]')]));
children.push(h2('9.2. Por qué mejora la posición de la empresa'));
children.push(numItem([b('Evita la rotura de stock en el pico. '), run('La campaña de fin de año concentra más del 50 % de la facturación anual (275.000 € frente a 537.845 € de todo 2025). Quedarse sin las referencias más vendidas en ese momento es el mayor riesgo comercial del ejercicio.')]));
children.push(numItem([b('Mejora las condiciones de compra. '), run('Consolidar el pedido de campaña, en lugar de reponer a goteo, mejora la posición negociadora frente a los proveedores y reduce el coste unitario y logístico.')]));
children.push(numItem([b('Libera la caja para el marketing. '), run('Si el inventario se financia con la línea, la tesorería propia queda disponible para la inversión publicitaria que activa la demanda. La línea financia el producto; la caja propia, la venta.')]));
children.push(h2('9.3. De qué se compone el importe solicitado'));
children.push(p([b('Paso 1 — Objetivo de ventas de la campaña 2026. '), run('275.000 € el año anterior; objetivo para 2026: 350.000 € (+27 %), apoyado en el refuerzo de comunicación desde septiembre, la presencia en las dos ferias de octubre, el mayor peso de la marca propia y la incorporación de los accesorios de medición a la campaña. [PENDIENTE: confirmación del objetivo de campaña 2026 por la dirección.]')]));
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
  it('Supuestos de esta sección (recogidos en la hoja «Supuestos» del anexo Excel): ', { bold: true }),
  it('objetivo de campaña 350.000 € [PENDIENTE: confirmar]; reparto 65 % Spiro / 25 % Ekio Light / 10 % accesorios [PENDIENTE: confirmar]; coste de mercancía 60 % / 45 % / 55 %, supuestos prudentes coherentes con los márgenes de gestión [PENDIENTE: coste real por grupo]; fases de compra 60 % octubre / 30 % noviembre / 10 % diciembre, pago a proveedor en el mes de compra [PENDIENTE: plazo de pago real a cada proveedor].'),
]));
children.push(h2('9.4. Garantías y estructura de la operación'));
children.push(p('La empresa ofrece, en primera instancia, la responsabilidad patrimonial de EKIO BIOTECH, S.L.U. Es consciente de que se trata de una sociedad de reciente constitución y de que CaixaBank puede requerir cobertura adicional; queda abierta a estudiar con la entidad las fórmulas habituales para este tipo de operación de circulante:'));
children.push(bullet('Aval de la Sociedad de Garantía Recíproca de Castilla y León (Iberaval).'));
children.push(bullet('Pignoración del stock financiado con la línea, o de la propia cuenta de crédito.'));
children.push(bullet('Garantía personal del administrador y socio único.'));
children.push(note([it('[PENDIENTE: decisión de la empresa sobre qué garantías está dispuesta a aportar. Recomendación: aval SGR Iberaval o pignoración del stock, dado el importe solicitado y la reciente constitución de la sociedad.]', { bold: true })]));

// ===== 10. CAPACIDAD DE DEVOLUCIÓN =====
children.push(h1(10, 'Capacidad de devolución'));
children.push(p('Al tratarse de una cuenta de crédito (línea revolvente), el reembolso no depende de un flujo futuro incierto: se produce con la propia liquidación de las ventas de la campaña que financia. La línea se dispone para comprar el stock antes del pico y se devuelve a medida que ese stock se vende y se cobra. Es circulante autoliquidable en un ciclo corto.'));
children.push(h2('10.1. Flujo de caja de campaña (escenario base, octubre 2026 – febrero 2027)'));
children.push(p([it('Objetivo de campaña 350.000 €. Ventas distribuidas 15 % / 35 % / 30 % / 15 % / 5 % (octubre a febrero). Cobro D2C en el mismo mes de la venta (las pasarelas de pago liquidan con retención y reservas; el supuesto de cobro íntegro en el mes se ajustará con el dato real). Compra de stock escalonada 60 % / 30 % / 10 % (octubre a diciembre), pagada en el mes de compra. Gastos de campaña (marketing y logística) al 12 % de las ventas. Cuota del préstamo de 70.000 € incluida en cada mes. El flujo se presenta antes del Impuesto sobre Sociedades; el beneficio de campaña quedará sujeto a IS (25 %, o el tipo reducido que corresponda) en la liquidación del ejercicio, que la empresa provisionará con la caja generada.', { italics: true })]));
children.push(table(
  ['Concepto (€)', 'Oct-26', 'Nov-26', 'Dic-26', 'Ene-27', 'Feb-27', 'Total'],
  [
    ['Cobros por ventas', '52.500', '122.500', '105.000', '52.500', '17.500', '350.000'],
    ['(−) Compra de stock', '−117.075', '−58.538', '−19.512', '0', '0', '−195.125'],
    ['(−) Gastos de campaña (12 %)', '−6.300', '−14.700', '−12.600', '−6.300', '−2.100', '−42.000'],
    ['(−) Cuota préstamo 70k', '−1.350', '−1.350', '−1.350', '−1.350', '−1.350', '−6.750'],
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
children.push(p([b('Ratio de cobertura = Flujo de caja operativo de campaña ÷ (Pico de disposición + Servicio del préstamo 70k en el periodo)')]));
children.push(table(
  ['Concepto', 'Escenario base', 'Conservador (−25 %)'],
  [
    ['Ventas de campaña (€)', '350.000', '262.500'],
    ['Flujo de caja operativo de campaña (€)', '112.875', '84.656'],
    ['Pico de disposición de la línea (€)', '72.225', '54.506'],
    ['Servicio del préstamo 70k en el periodo (€)', '6.750', '6.750'],
    ['Obligación total a cubrir (€)', '78.975', '61.256'],
    ['Ratio de cobertura', '1,43x', '1,38x'],
  ],
  [4026, 2500, 2500],
  [undefined, R, R],
));
children.push(spacer());
children.push(p([it('Flujo de caja operativo de campaña = cobros − compra de stock − gastos de campaña (antes del servicio de deuda). El escenario conservador aplica −25 % a las ventas y escala compras y gastos en la misma proporción; la cuota del préstamo de 70k se mantiene fija (es una obligación que no depende de las ventas).', { italics: true })]));
children.push(p('En ambos escenarios el flujo generado cubre en torno a 1,4 veces la devolución de la línea (medida sobre el pico de disposición) más el servicio del préstamo vivo. La cobertura no depende de que la campaña crezca: se sostiene sobre la conversión en caja de stock ya vendible.'));
children.push(h2('10.3. Casos extremos'));
children.push(p([b('a) Disposición máxima. '), run('Comprando de una vez todo el stock de campaña (195.125 €), la línea se dispondría hasta unos 150.000 € en octubre y quedaría igualmente amortizada a finales de diciembre: los cobros de noviembre y diciembre (227.500 €) superan con holgura esa disposición. El límite de 250.000 € cubre este caso con margen.')]));
children.push(p([b('b) Ventas un 40 % por debajo del objetivo. '), run('Solo el primer tramo de compra (≈ 117.000 €) está comprometido en octubre; las reposiciones de noviembre y diciembre son discrecionales y se recortarían. Con ventas de ≈ 210.000 €, la disposición llegaría a ≈ 90.000 € y quedaría devuelta a finales de enero de 2027 —un mes más tarde que en el escenario base— con la caja de campaña aún en positivo (≈ +22.000 €). Mitigan el riesgo la compra escalonada, el stock no vendido que se liquida en el primer trimestre y los ejercicios previos en beneficios.')]));
children.push(h2('10.4. Efecto del préstamo de 70.000 €'));
children.push(p('La cuota mensual del préstamo de 70.000 € se ha incluido íntegra en el flujo de caja de campaña y en los ratios, de modo que la capacidad de devolución se mide después de atender esa deuda.'));
children.push(bullet([run('Cuota mensual utilizada en el modelo (provisional): 1.350 €/mes. '), it('[PENDIENTE: prestamista, cuota mensual exacta, saldo vivo a la fecha, vencimiento y condiciones del préstamo de 70.000 €.]', { bold: true })]));
children.push(bullet('Servicio del préstamo durante los cinco meses de campaña: ~6.750 €, absorbido por el flujo de campaña en todos los escenarios.'));
children.push(h2('10.5. Conclusión sobre solvencia'));
children.push(bullet([b('Circulante autoliquidable. '), run('La línea financia existencias de un catálogo ya en venta y se devuelve con el cobro de esas mismas ventas: ciclo de ~2 meses en el escenario base (disposición en octubre, devolución completa en diciembre).')]));
children.push(bullet([b('Disposición muy por debajo del límite. '), run('El límite solicitado es 250.000 €; la disposición máxima prevista es de ~72.000 € con compra escalonada y ~150.000 € comprando todo por adelantado. El margen es holgura para reponer, no deuda prevista.')]));
children.push(bullet([b('Cobertura de 1,43x (base) y 1,38x (conservador), '), run('en ambos casos después de atender el préstamo de 70.000 €. En un estrés de ventas −40 % con el primer pedido comprometido, el ciclo se alarga un mes hacia Q1 2027 sin llegar a impago.')]));
children.push(bullet([b('Riesgo acotado. '), run('No se financia gasto corriente ni proyectos de resultado incierto, sino inventario físico para un pico de demanda con precedente cuantificado (275.000 € el año anterior). El destino y la fuente de repago están directamente ligados.')]));

// ===== 10. ANEXOS =====
children.push(h1(11, 'Anexos'));
children.push(h2('11.1. Anexo financiero (Excel)'));
children.push(p('Se acompaña el archivo anexo-financiero.xlsx, con seis hojas y fórmulas enlazadas a una hoja de supuestos editable: al cambiar un supuesto se recalcula todo el modelo.'));
children.push(bullet('Portada — identificación del anexo y advertencia sobre las cifras históricas.'));
children.push(bullet('Histórico — cuenta de resultados 2023–2026 H1, con acumulado del periodo (1,67 M€) y gráfico. Margen y resultado de 2023, pendientes de las declaraciones fiscales.'));
children.push(bullet('Supuestos — parámetros editables: objetivo de campaña 350.000 €, reparto 65/25/10 (Spiro/Ekio Light/accesorios), % de coste por grupo, calendario de compra y de cobro, cuota del préstamo de 70k.'));
children.push(bullet('Necesidad de circulante — importe solicitado 250.000 €, coste del stock de campaña por grupo (~195.125 €) y holgura de reposición (~54.875 €).'));
children.push(bullet('Flujo de caja de campaña — mensual octubre 2026 – febrero 2027, con disposición y devolución de la línea (escenario base).'));
children.push(bullet('Escenarios — base, conservador (−25 %) y disposición máxima (compra por adelantado), con pico de disposición y ratio de cobertura de cada uno.'));
children.push(h2('11.2. Documentación de soporte a aportar con la solicitud'));
children.push(p('Documentos que acompañan o completan este plan al presentarlo en CaixaBank:'));
children.push(bullet('Escritura de constitución de EKIO BIOTECH, S.L.U. y escritura / documento de aportación no dineraria del negocio en funcionamiento.'));
children.push(bullet('Balance de apertura de la SLU (resultante de la aportación) y previsión de balance y de tesorería 2026–2027.'));
children.push(bullet('Previsión de tesorería de la sociedad a 12 meses, no solo la ventana de campaña.'));
children.push(bullet('Declaraciones de IRPF y modelos 130 y 390 de la actividad como empresario individual (ejercicios 2023, 2024 y 2025).'));
children.push(bullet('P&L de gestión actualizado de Holded con desglose de coste de ventas por ejercicio (conciliación del margen bruto) y, cuando estén disponibles, cuentas anuales de la sociedad.'));
children.push(bullet('Certificados de estar al corriente de pago con la AEAT y con la Tesorería General de la Seguridad Social; en su caso, detalle de aplazamientos o fraccionamientos vigentes.'));
children.push(bullet('Contrato e identificación del préstamo de 70.000 € (prestamista, tipo, saldo vivo, cuadro de amortización, covenants) e informe CIRBE.'));
children.push(bullet('Contrato de distribución con Noxtak / SG Labs y condiciones de pago a proveedor.'));
children.push(bullet('Contrato de fabricación / ensamblaje de Ekio Light e identificación del fabricante; marcado CE, declaración de conformidad y seguro de responsabilidad civil de producto (en especial de los equipos con emisión UV-A/UV-B).'));
children.push(bullet('Título / certificado de registro del Modelo de Utilidad Nº U202532624 (OEPM) y estado de la solicitud de patente internacional (PCT) del sistema SFPA.'));
children.push(bullet('Carta o comunicación de Wolaria / ICECYL acreditando la invitación a Startup OLÉ y Valencia Digital Summit.'));
children.push(bullet('Presupuestos o pedidos pro-forma en firme de ambos proveedores que soporten el importe de la compra de stock de campaña (~170.775 €).'));
children.push(bullet('Cálculo del Impuesto sobre Sociedades previsto sobre el resultado de campaña.'));

children.push(h2('11.3. Información complementaria'));
children.push(p('Algunos apartados de este documento incluyen marcas [PENDIENTE] que señalan datos que la empresa aportará junto con la documentación de soporte. La empresa dispone de un checklist interno con la relación completa y facilitará cualquiera de esos extremos a requerimiento de la entidad.'));

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
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'EKIO BIOTECH, S.L.U. · Plan de empresa — cuenta de crédito · ', font: FONT, size: 16, color: '808080' }),
            new TextRun({ children: ['Página ', PageNumber.CURRENT, ' de ', PageNumber.TOTAL_PAGES], font: FONT, size: 16, color: '808080' }),
          ],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log('written', OUT, buf.length, 'bytes');
});
