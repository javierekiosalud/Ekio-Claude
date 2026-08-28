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
    children: [new TextRun({ text: '26 de agosto de 2026', font: FONT, size: 22, color: '595959' })] }),
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
    ['Actividad', 'Venta de tecnología de protección electromagnética (línea Spiro, en distribución exclusiva) y de equipos de fotobiomodulación de marca propia (línea Ekio Light, fabricados / ensamblados por proveedor especializado). Canales directo al consumidor (D2C) y empresa (B2B).'],
    ['Socio único y administrador', 'Francisco Javier Andrés Andrés (NIF 09338115T)'],
    ['Marca comercial', 'Ekio · Ekio Electrosmog España · Ekio Light'],
    ['Tienda online', 'electrosmogespana.com (plataforma Shopify)'],
    ['Alta censal y CNAE de la sociedad', '[PENDIENTE: confirmar que la SLU tiene alta censal y CNAE asignado a fecha de solicitud]'],
    ['Fecha del documento', '26 de agosto de 2026'],
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
children.push(p([b('Quiénes somos. '), run('Ekio es un negocio de venta de tecnología para el bienestar que opera desde 2023. Empezó como distribuidor exclusivo en España de la tecnología de protección electromagnética Spiro (fabricante Noxtak / SG Labs, Miami). Desde 2025 ha dado el salto a marca propia con la línea Ekio Light, equipos de fotobiomodulación fabricados / ensamblados por un proveedor especializado bajo diseño y especificación de Ekio, con propiedad industrial propia (Modelo de Utilidad registrado y solicitud de patente internacional del sistema SFPA en curso) y con software propio de gestión y de uso para clientes. La actividad se ha desarrollado hasta 2026 bajo la figura de empresario individual (Francisco Javier Andrés Andrés) y en 2026 se aporta como negocio en funcionamiento a la sociedad EKIO BIOTECH, S.L.U., que la continúa. La venta es mayoritariamente digital, a través de electrosmogespana.com, sin necesidad de llamada comercial.')]));
children.push(p([b('Qué solicitamos. '), run('Una cuenta de crédito para financiar la compra anticipada de stock de las dos líneas de producto de cara a la campaña del cuarto trimestre (ferias de octubre y campaña de Black Friday, Navidad y Reyes). El importe y el límite de la línea los dimensiona CaixaBank; la empresa aporta el detalle de la compra prevista y la relación de proveedores para justificar el uso de los fondos.')]));
children.push(p([b('Por qué la operación es solvente. '), run('Tres ejes:')]));
children.push(numItem([b('Trayectoria de crecimiento y en beneficios. '), run('De 390.000 € en el arranque (jun–dic 2023) a un ritmo anual de ~535.000 € en 2024 y 2025, ambos con resultado positivo (+52.493 € y +19.301 €); primer semestre de 2026 con +78.738 €. Facturación acumulada 2023 – junio 2026: 1,67 M€ (cifra acumulada, no anual). La única deuda financiera es un préstamo institucional de 70.000 €, en amortización y al corriente de pago; no hay capital de terceros. El detalle de ese préstamo se aporta en la sección 6 y en la documentación de soporte.')]));
children.push(numItem([b('Ingresos recurrentes y canal digital maduro. '), run('Base de clientes y de contactos construida a lo largo de tres años, tienda online operativa con pasarela propia y un conjunto de herramientas de venta y marketing digital en funcionamiento (Shopify, Klaviyo, ManyChat, Meta Ads, Google Search Console, Microsoft Clarity). La venta se cierra en la ficha de producto, sin intervención de un comercial.')]));
children.push(numItem([b('Destino de los fondos claro y controlado. '), run('Los fondos se destinan a existencias —producto físico de un catálogo ya en venta— para un pico de demanda concreto. No se financia circulante indefinido ni gasto corriente. La campaña equivalente del año anterior (Black Friday, Navidad y Reyes) generó 275.000 € de facturación, más de la mitad de todo lo facturado en 2025.')]));
children.push(p([it('En volumen, la facturación del primer semestre de 2026 (207.815 €) anualiza por debajo del ritmo de 2024 y 2025: durante la transición a producto propio y la migración de tienda (de WooCommerce a Shopify, completada en noviembre de 2025) la actividad ha priorizado margen sobre volumen. La campaña de Q4 es el punto de inflexión previsto para recuperar volumen sin renunciar al margen ganado.', { italics: true })]));

// ===== 3. TRAYECTORIA Y EQUIPO =====
children.push(h1(3, 'Trayectoria y equipo'));
children.push(h2('3.1. Tres años de construcción'));
children.push(p([b('2023–2024: distribución de Spiro en España. '), run('El negocio nace en 2023 con la distribución exclusiva en España de la tecnología Spiro. En 2024, año de consolidación de esa distribución, la actividad factura 534.504 €, con un margen bruto del 38,4 % y un resultado de +52.493 €. Se construye desde cero la base de clientes, la comunidad y el canal de venta digital.')]));
children.push(p([b('2025: inversión deliberada para lanzar marca propia. '), run('En 2025 la facturación se mantiene (537.845 €). El resultado (+19.301 €) baja respecto a 2024 por una inversión extraordinaria de explotación —34.316 € adicionales en publicidad y 18.264 € adicionales en servicios profesionales— para lanzar la línea Ekio Light. Es una inversión de un ejercicio con retorno en el siguiente.')]));
children.push(p([b('2026: el giro a producto propio. '), run('En el primer semestre de 2026 la actividad factura 207.815 € con un margen bruto del 55,9 % y un resultado de +78.738 €. La mejora del margen es coherente con el mayor peso de la línea Ekio Light (margen bruto superior al 50 %) y con un mix de producto de mayor valor. La línea Ekio Light acumula unos 76.000 € de ventas desde su lanzamiento (repartidas entre la tienda anterior en WooCommerce hasta octubre de 2025 y Shopify desde noviembre de 2025); el tramo ya en Shopify (noviembre de 2025 a junio de 2026) suma unos 18.760 € netos y 116 unidades.')]));
children.push(note([
  it('Sobre el margen bruto por ejercicio: ', { bold: true }),
  it('las cifras de 2024, 2025 y 2026 (H1) proceden del mismo P&L de gestión de Holded de la tienda Ekio completa. La variación del margen bruto entre ejercicios (38,4 % → 24,5 % → 55,9 %) está pendiente de conciliación con el desglose de coste de ventas de Holded y con las declaraciones fiscales: refleja cambios de mix de producto y, probablemente, diferencias en el criterio de imputación de costes entre periodos. Se conciliará antes de la presentación formal. '),
  it('[PENDIENTE: conciliación del margen bruto por ejercicio con el desglose de Holded; facturación del ejercicio 2023 y cierre provisional a julio/agosto de 2026; extracto o informe de Holded actualizado para adjuntar como anexo.]', { bold: true }),
]));

children.push(h2('3.2. Continuidad jurídica: de empresario individual a sociedad'));
children.push(p('La actividad se ha desarrollado desde 2023 como empresario individual (autónomo): Francisco Javier Andrés Andrés, NIF 09338115T. En 2026, ese negocio en funcionamiento se aporta a la sociedad EKIO BIOTECH, S.L.U. (CIF B93860096), de reciente constitución, que pasa a ser el vehículo jurídico de la misma actividad económica.'));
children.push(p('Consecuencias para el análisis bancario, expuestas con transparencia:'));
children.push(bullet('El track record de ventas, comunidad y márgenes descrito en este plan corresponde a la misma actividad económica bajo el titular anterior (el autónomo). La SLU la continúa sin ruptura de negocio.'));
children.push(bullet('La SLU es nueva y todavía no tiene cuentas anuales propias depositadas. El histórico se acredita con la documentación del autónomo: declaraciones de IRPF, modelos 130 y 390, y P&L de gestión de Holded.'));
children.push(bullet([it('[PENDIENTE: fecha exacta de la escritura de constitución de la SLU y de la aportación del negocio; confirmación de alta censal y CNAE de la sociedad a fecha de solicitud.]', { bold: true })]));
children.push(bullet([it('[PENDIENTE: confirmar situación de estar al corriente de pago con la AEAT y con la Seguridad Social. Si existe algún aplazamiento o fraccionamiento de deuda con la AEAT o la TGSS, se declarará expresamente su importe, calendario y estado de cumplimiento, por ser información relevante para el análisis. CaixaBank exigirá los certificados correspondientes.]', { bold: true })]));

children.push(h2('3.3. Equipo'));
children.push(p('Ekio opera con una estructura ligera: una persona en plantilla (responsable de operaciones) y una red de profesionales externos que cubren las funciones especializadas —email marketing, contenido, publicidad digital, asesoría legal y asesoría científica—. Este modelo mantiene los costes fijos bajos y permite escalar el gasto variable (sobre todo publicidad e inventario) en función de la campaña.'));
children.push(note([it('[PENDIENTE: confirmar el número exacto de personas en plantilla y de colaboradores externos habituales.]', { bold: true })]));

children.push(h2('3.4. Perfil del fundador'));
children.push(p('Francisco Javier Andrés Andrés es socio único y administrador de EKIO BIOTECH, S.L.U. Ha dirigido la actividad desde su inicio en 2023, primero como empresario individual y ahora a través de la sociedad, y ha conducido personalmente el paso de la distribución de terceros a la marca propia.'));
children.push(note([it('[PENDIENTE: reseña profesional del fundador (formación, trayectoria previa, años de experiencia en el sector) para completar este apartado.]', { bold: true })]));

// ===== 4. MODELO DE NEGOCIO =====
children.push(h1(4, 'Modelo de negocio y líneas de producto'));
children.push(h2('4.1. Línea Spiro — distribución exclusiva en España'));
children.push(p('Ekio es distribuidor en exclusiva para España de la tecnología de protección electromagnética Spiro, fabricada por Noxtak / SG Labs (Miami). Es la línea con la que nació el negocio y la que aporta el volumen y la base de clientes histórica.'));
children.push(bullet('Catálogo de producto individual y packs, con precio de venta al público entre 147 € (producto de entrada) y 825 € (pack más completo) en el catálogo actual.'));
children.push(bullet('Venta directa en la ficha de producto, sin llamada comercial.'));
children.push(bullet('Comunidad de clientes y seguidores construida en torno a la línea.'));
children.push(p([it('Catálogo Spiro a la venta (extracción de Shopify, 26 de agosto de 2026):', { italics: true })]));
children.push(table(
  ['Producto / Pack', 'PVP (€)'],
  [
    ['SPIRO SQUARE', '147,00'],
    ['SPIRO SQUARE X', '257,00'],
    ['STROOM MASTER PRO', '219,99'],
    ['Pack Protección Hogar y Oficina', '350,00'],
    ['Pack Protección Personal', '350,00'],
    ['Pack Infantil', '420,00'],
    ['Pack Familia', '445,00'],
    ['Pack Oficina', '470,00'],
    ['Pack Sueño', '470,00'],
    ['Pack Protección Stroom Master', '655,00'],
    ['Pack Oasis Electromagnético', '825,00'],
  ],
  [7026, 2000],
  [undefined, R],
));
children.push(spacer());

children.push(h2('4.2. Línea Ekio Light — marca propia'));
children.push(p('Ekio Light es la línea de equipos de fotobiomodulación (terapia de luz) de marca propia, fabricados / ensamblados por un proveedor especializado bajo diseño y especificación de Ekio. Es el eje de crecimiento del negocio y de la mejora de margen de 2026.'));
children.push(bullet('Gama de paneles con precio de venta al público entre 650 € (Deep 5) y 2.500 € (Bio Spectrum 11, equipo de gama alta y único con emisión UV-A/UV-B), más el equipo portátil Core (147 €) y accesorios de iluminación (bombillas y packs) de menor importe.'));
children.push(bullet('Margen bruto de la línea superior al 50 %. El margen bruto global de la tienda en el primer semestre de 2026 fue del 55,9 % (pendiente de conciliación por ejercicio, ver sección 6).'));
children.push(bullet([b('Propiedad industrial: '), run('Modelo de Utilidad español Nº U202532624 (panel multiespectral), registrado ante la OEPM (solicitud de 25 de diciembre de 2025). Es un elemento diferenciador frente a competidores. [PENDIENTE: adjuntar el título / certificado de registro de la OEPM.]')]));
children.push(p([it('Catálogo Ekio Light a la venta (extracción de Shopify, 26 de agosto de 2026):', { italics: true })]));
children.push(table(
  ['Producto', 'PVP (€)', 'Estado'],
  [
    ['BIO SPECTRUM 11 (buque insignia; único con UV-A/UV-B)', '2.500,00', 'Activo'],
    ['BIO REGEN 7 (luz roja y cyan)', '950,00', 'Activo'],
    ['DEEP 5', '650,00', 'Activo'],
    ['CORE (portátil, terapia local)', '147,00', 'Activo'],
    ['IGNIS (luz + protección electromagnética)', '120,00', 'Activo'],
    ['Bombilla LED roja / Bombilla LED ámbar 1800K', '17,50', 'Activo'],
    ['Pack Salón y Dormitorio (bombilla roja + ámbar)', '29,70', 'Activo'],
  ],
  [5626, 2000, 1400],
  [undefined, R, C],
));
children.push(spacer());
children.push(p('Existen además versiones B2B en borrador (Deep 5 B2B 600 €, Deep 7 B2B 650 €, Full Spectrum 10 B2B 2.500 €), pendientes de publicación.'));
children.push(note([it('El catálogo de ambas líneas está operativo y a la venta. Las unidades en inventario a fecha de hoy no cubren el volumen ni la velocidad de venta de la campaña de Q4: reponer ese stock por adelantado es precisamente el objeto de esta financiación (ver sección 9). [PENDIENTE: unidades de inventario realmente disponibles y comprometidas a fecha de solicitud, y rotación (vueltas) por referencia de campaña.]', { bold: true })]));

children.push(h2('4.3. Líneas complementarias'));
children.push(p('Accesorios de medición (detector de radiación 49 €, comprobador de enchufe 20,66 €, medidor de electricidad sucia 216,37 €) y suplementos de la marca Laittin (vitamina C, vitamina B, vitamina D3+K2 y packs). No son objeto de esta financiación.'));

children.push(h2('4.4. Canales de venta'));
children.push(bullet([b('D2C (venta directa): '), run('electrosmogespana.com. Es el canal principal y la base de todo el histórico de facturación. Venta cerrada en la ficha de producto, sin comercial.')]));
children.push(bullet([b('Renting / suscripción: '), run('opción de pago por uso para el consumidor a través de Sharpei (integrada en Shopify) y planteamiento B2B para clínicas, centros de estética y gimnasios. Línea incipiente. [PENDIENTE: volumen real de contratos de renting vivos a la fecha.]')]));
children.push(bullet([b('B2B / wholesale: '), run('canal en desarrollo (alta en el marketplace Ankorstore en preparación; fichas B2B en borrador en Shopify). Todavía sin volumen consolidado.')]));

children.push(h2('4.5. Activos tecnológicos propios'));
children.push(p('Además del catálogo físico, Ekio ha desarrollado software propio que refuerza la relación con el cliente y eleva la barrera de entrada:'));
children.push(bullet([b('Aplicación de gestión interna. '), run('Herramienta propia para la operativa del negocio (pedidos, inventario, atención al cliente).')]));
children.push(bullet([b('Aplicación para clientes «Ekio Coach». '), run('Guía de uso de los equipos, seguimiento de sesiones y protocolos personalizados; ya con usuarios registrados. Genera recurrencia (relación continuada con el cliente) y datos de uso.')]));
children.push(bullet([b('Sistema SFPA (Sistema de Fotobiomodulación Personalizada con IA). '), run('Plataforma propia que integra hardware, software y algoritmos de inteligencia artificial para adaptar los parámetros de tratamiento (longitud de onda, dosis y tiempo) al perfil de cada usuario y a su respuesta. En desarrollo con AIR Institute (Salamanca). Cuenta con una solicitud de patente internacional (PCT) propia, independiente del Modelo de Utilidad, actualmente en fase de finalización. Todavía sin producto comercial; su lanzamiento se describe en la sección 8.2.')]));

// ===== 5. MERCADO Y VALIDACIÓN =====
children.push(h1(5, 'Mercado y validación externa'));
children.push(h2('5.1. Contexto de mercado'));
children.push(p('Ekio opera en dos segmentos del mercado del bienestar y la salud preventiva de consumo:'));
children.push(bullet([b('Protección frente a la exposición electromagnética. '), run('Segmento de nicho, con demanda impulsada por la preocupación creciente de una parte de la población por la exposición a campos electromagnéticos (instalaciones eléctricas domésticas, telefonía móvil, redes inalámbricas). Ekio cubre esta demanda con la línea Spiro.')]));
children.push(bullet([b('Fotobiomodulación (terapia de luz roja e infrarroja). '), run('Categoría de producto de consumo dentro del bienestar, la recuperación deportiva y el cuidado de la piel, con oferta creciente de equipos domésticos. Ekio compite en ella con producto propio (Ekio Light), propiedad industrial propia y software propio como elementos diferenciadores.')]));
children.push(note([it('El plan no cuantifica el tamaño ni el crecimiento de estos mercados. [PENDIENTE: si se desea incluir una cifra de mercado (tamaño o tasa de crecimiento), debe aportarse una fuente citable.]', { bold: true })]));

children.push(h2('5.2. Reconocimiento institucional y validación externa'));
children.push(bullet([b('Wolaria / ICECYL (Instituto para la Competitividad Empresarial de Castilla y León). '), run('Ekio ha sido invitada a participar con stand propio en Startup OLÉ (Salamanca, 13–15 de octubre de 2026) y en el Valencia Digital Summit (día asignado: 22 de octubre de 2026, con pitch a inversores). [PENDIENTE: carta o email de Wolaria/ICECYL que acredite la invitación, para adjuntar como anexo.]')]));
children.push(bullet([b('AIR Institute (Salamanca). '), run('Colaboración científica para el desarrollo del sistema SFPA (ver sección 4.5).')]));
children.push(bullet([b('Comunidad y base de datos. '), run('Activos de marketing construidos a lo largo de tres años: unos 44.550 seguidores en Instagram (Spiro y Ekio), más de 12.000 contactos en la base de datos y más de 7.600 clientes históricos de la línea Spiro. Son datos de gestión interna; el recuento exacto se aportará mediante exportación de las plataformas. [PENDIENTE: exportaciones de Klaviyo y Shopify con los recuentos exactos.]')]));
children.push(bullet([b('Software propio. '), run('Aplicación de gestión interna y aplicación para clientes «Ekio Coach», ambas en uso (ver sección 4.5).')]));
children.push(bullet([b('Herramientas digitales en funcionamiento. '), run('Shopify, Klaviyo, ManyChat, Meta Ads, Google Search Console y Microsoft Clarity, todas operativas.')]));

// ===== 6. RESULTADOS HISTÓRICOS =====
children.push(h1(6, 'Resultados históricos'));
children.push(p('La actividad económica de Ekio —desarrollada desde 2023 como empresario individual y continuada en 2026 por EKIO BIOTECH, S.L.U.— presenta una trayectoria de crecimiento y de resultados positivos. La cuenta de resultados simplificada, con el coste de ventas deducido de forma implícita a partir del margen bruto de gestión, es la siguiente:'));
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
children.push(h2('6.2. Lectura de gestión'));
children.push(bullet([b('Trayectoria de crecimiento y en beneficios. '), run('De 390.000 € en el arranque (jun–dic 2023) a un ritmo anual estabilizado en el entorno de 535.000 € en 2024 y 2025, ambos ejercicios con resultado positivo (+52.493 € y +19.301 €). El primer semestre de 2026 cierra con +78.738 €. La facturación acumulada entre 2023 y junio de 2026 asciende a 1,67 M€ (cifra acumulada del periodo, no anual).')]));
children.push(bullet([b('Volumen y margen. '), run('En 2026 la actividad ha priorizado el margen sobre el volumen: la facturación de H1 (207.815 €) anualiza por debajo del ritmo de 2024 y 2025, mientras el margen bruto de gestión mejora hasta el 55,9 %. La variación del margen bruto entre ejercicios (38,4 % → 24,5 % → 55,9 %) está pendiente de conciliación con el desglose de coste de ventas de Holded: es coherente con un mayor peso de Ekio Light y un mix de mayor valor, pero también con diferencias de criterio de imputación entre periodos. El descenso del resultado en 2025 se explica por una inversión extraordinaria de explotación (34.316 € de publicidad y 18.264 € de servicios profesionales para lanzar Ekio Light), que son gastos operativos y no de aprovisionamiento.')]));
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
children.push(bullet([b('Octubre: '), run('presencia con stand propio en Startup OLÉ (Salamanca, 13–15 de octubre) y en el Valencia Digital Summit (22 de octubre, con pitch a inversores), ambas por invitación de Wolaria / ICECYL.')]));
children.push(h2('7.2. Noviembre – enero: campaña de fin de año'));
children.push(p('El periodo Black Friday → Navidad → Reyes es el pico de demanda del año. La campaña equivalente del año anterior generó 275.000 € de facturación, cifra que supera el 50 % de todo lo facturado en 2025 (537.845 €). Q4 concentra, por tanto, una parte muy alta de la actividad anual.'));
children.push(note([it('[PENDIENTE: periodo exacto (fechas de inicio y fin) al que corresponden esos 275.000 € y si es venta bruta o neta.]', { bold: true })]));
children.push(h2('7.3. Papel de la línea de crédito'));
children.push(p('El riesgo operativo de esta campaña es la rotura de inventario en el pico de demanda: quedarse sin stock de las referencias más vendidas justo cuando se concentra la mayor parte de la facturación del año. Los plazos de aprovisionamiento (línea Spiro importada desde Miami; línea Ekio Light fabricada / ensamblada por proveedor especializado) obligan a comprar el stock con varias semanas de antelación, antes de haber cobrado las ventas de la campaña.'));
children.push(p('La cuenta de crédito cubre exactamente ese desfase temporal: permite comprar por adelantado el inventario de Spiro y de Ekio Light necesario para toda la campaña, y se amortiza con el cobro de las ventas de esos mismos productos durante los meses de noviembre a enero. El detalle de la compra prevista (referencias, unidades, proveedores e importes) y el calendario de aprovisionamiento se aportan en la sección 9.'));

// ===== 8. ESTRATEGIA Y OBJETIVOS A MEDIO PLAZO =====
children.push(h1(8, 'Estrategia y objetivos a medio plazo (2026–2028)'));
children.push(p('Esta solicitud se circunscribe a financiar el circulante de una campaña concreta, pero se enmarca en un plan a medio plazo que da contexto a la operación y a la capacidad de la empresa para generar ingresos recurrentes con los que sostener una relación bancaria estable.'));
children.push(h2('8.1. Objetivo financiero'));
children.push(p('El objetivo para el cierre de 2026 es situar la facturación anual en el entorno de la de 2024 y 2025 (aproximadamente 530.000 – 550.000 €), recuperando volumen en la campaña de Q4 sin ceder el margen bruto ganado en 2026 (superior al 50 %). A partir de 2027, la empresa persigue un crecimiento moderado apoyado en líneas de ingreso recurrente, no en un salto de ventas puntual.'));
children.push(note([it('[PENDIENTE: proyección financiera plurianual detallada (cuenta de resultados, balance y tesorería 2026–2028). La empresa dispone de un modelo económico a cinco años elaborado para otras líneas de financiación, que puede aportarse a CaixaBank a petición.]', { bold: true })]));
children.push(h2('8.2. Palancas de crecimiento'));
children.push(numItem([b('Mayor peso del producto propio. '), run('Aumentar la proporción de Ekio Light sobre el total de ventas frente a la distribución de Spiro, por su margen bruto más alto y por el control sobre precio, catálogo y propiedad industrial.')]));
children.push(numItem([b('Ingresos recurrentes: B2B y renting. '), run('Activar el canal mayorista / B2B (marketplace Ankorstore, clínicas, centros de estética y gimnasios) y el renting al consumidor (Sharpei), que aportan facturación repetida y previsible y reducen la dependencia del pico estacional.')]));
children.push(numItem([b('Lanzamiento del sistema SFPA. '), run('Convertir el SFPA (ver sección 4.5) en producto comercial —equipo, software y suscripción— una vez completadas su validación con AIR Institute y su solicitud de patente internacional.')]));
children.push(numItem([b('Software propio y comunidad. '), run('Ampliar la aplicación para clientes Ekio Coach y explotar la base de datos (más de 44.500 seguidores en redes y más de 12.000 contactos) como motor de recompra y de venta cruzada de accesorios y suplementos.')]));
children.push(h2('8.3. Propiedad industrial'));
children.push(p('Consolidar el Modelo de Utilidad ya registrado (Nº U202532624) y completar la solicitud de patente internacional (PCT) del sistema SFPA, actualmente en fase de finalización. En función de su resultado, se evaluará una extensión internacional selectiva a los mercados con mayor demanda de fotobiomodulación de consumo.'));
children.push(h2('8.4. Estructura y organización'));
children.push(p('Mantener la estructura ligera actual (una persona en plantilla más una red de profesionales externos) mientras el margen no justifique incorporaciones. Las primeras contrataciones clave previstas —operaciones y desarrollo del canal B2B— se ligarán a hitos de facturación, no a la financiación.'));
children.push(h2('8.5. Encaje con esta financiación'));
children.push(p('Gestionar de forma ordenada el circulante de la campaña de Q4 mediante esta cuenta de crédito es el primer paso operativo de ese plan. Un buen comportamiento de la línea —disposición acotada y devolución en el ciclo de campaña— es la base sobre la que la empresa desea construir una relación bancaria a más largo plazo que acompañe el crecimiento descrito.'));

// ===== 9. USO DE LOS FONDOS =====
children.push(h1(9, 'Uso de los fondos solicitados'));
children.push(h2('9.1. Destino: exclusivamente compra de existencias'));
children.push(p('Los fondos de la cuenta de crédito se destinan únicamente a la compra anticipada de existencias de las dos líneas de producto —Spiro y Ekio Light— para atender la campaña del cuarto trimestre (ferias de octubre y campaña de Black Friday, Navidad y Reyes). No se financia gasto corriente, ni circulante indefinido, ni activo fijo: se financia inventario concreto, de un catálogo ya en venta, para un pico de demanda concreto y acotado en el tiempo. La compra se soportará con presupuestos o pedidos pro-forma de ambos proveedores (ver sección 11).'));
children.push(h2('9.2. Por qué mejora la posición de la empresa'));
children.push(numItem([b('Evita la rotura de stock en el pico de Q4. '), run('La campaña de fin de año concentra más del 50 % de la facturación anual (275.000 € el año anterior frente a 537.845 € de todo 2025). Quedarse sin las referencias más vendidas en ese momento es el mayor riesgo comercial del ejercicio. Comprar el inventario por adelantado lo elimina.')]));
children.push(numItem([b('Permite comprar volumen al proveedor en mejores condiciones. '), run('Consolidar el pedido de campaña —en lugar de reponer a goteo— mejora la posición negociadora frente a los proveedores (Spiro: Noxtak / SG Labs, Miami; Ekio Light: fabricante / ensamblador especializado) y reduce el coste unitario y de logística.')]));
children.push(numItem([b('Libera la caja propia para el marketing de campaña. '), run('Si el inventario se financia con la línea, la tesorería propia queda disponible para la inversión publicitaria y de comunicación que activa la demanda en las mismas fechas. La línea financia el producto; la caja propia financia la venta.')]));
children.push(h2('9.3. Necesidad estimada de circulante para la campaña Q4'));
children.push(p('La empresa no fija el importe de la línea: lo dimensiona CaixaBank. Lo que se aporta es la necesidad operativa estimada de financiación de existencias, construida a partir de la facturación de campaña del año anterior (275.000 €), un objetivo de campaña 2026 y el porcentaje de coste de mercancía de cada línea.'));
children.push(p([b('Paso 1 — Objetivo de ventas de campaña 2026 (escenario base). '), run('Se parte de los 275.000 € del año anterior y se aplica un crecimiento prudente del +15 %, apoyado en la mejora de margen ya observada en 2026, el refuerzo de comunicación desde septiembre y la presencia en las dos ferias de octubre, pero moderado y sin certeza: 275.000 € × 1,15 = 316.250 € [PENDIENTE: sustituir por el objetivo de campaña 2026 confirmado por Javier].')]));
children.push(p([b('Paso 2 — Coste de la mercancía de campaña por línea.')]));
children.push(table(
  ['Línea', 'Reparto', 'Ventas campaña (€)', 'Coste merc. (%)', 'Coste de la mercancía (€)'],
  [
    ['Spiro (distribución)', '60 %', '189.750', '60 %', '113.850'],
    ['Ekio Light (marca propia)', '40 %', '126.500', '45 %', '56.925'],
    ['Total campaña (base)', '100 %', '316.250', '—', '170.775'],
  ],
  [2626, 1200, 1900, 1400, 1900],
  [undefined, C, R, C, R],
));
children.push(spacer());
children.push(p([b('Paso 3 — De coste de mercancía a necesidad de financiación. '), run('No es preciso financiar de golpe los 170.775 € de coste total: la compra se escalona (el grueso en octubre, reposiciones en noviembre y diciembre) y las ventas de la propia campaña van generando cobro casi inmediato (venta D2C con pago en el momento). El desfase temporal máximo entre pagar el stock y cobrar las ventas —el pico de disposición de la línea— es lo que realmente hay que financiar. Según el flujo de caja de campaña (sección 10), ese pico se produce en octubre.')]));
children.push(p([b('Rango de necesidad estimada de financiación de existencias (escenario base):')]));
children.push(table(
  ['Referencia', 'Importe (€)', 'Lectura'],
  [
    ['Pico de disposición de la línea (compra escalonada)', '~62.000', 'Mínimo operativo: financia solo el desfase pago-cobro'],
    ['Coste total de la mercancía de campaña', '~171.000', 'Máximo: si se adquiere todo el inventario por adelantado'],
    ['Banda operativa recomendada', '~100.000 – 120.000', 'Punto medio prudente: compra anticipada del grueso del stock con margen de reposición, dejando la caja propia para marketing'],
  ],
  [3226, 1800, 4000],
  [undefined, R, undefined],
));
children.push(spacer());
children.push(p('En el escenario conservador (−25 % sobre las ventas de campaña base), el coste total de la mercancía baja a ~128.000 € y el pico de disposición a ~47.000 €. El límite final de la línea queda a criterio de CaixaBank. La empresa recomienda dimensionarla en la banda operativa (~100.000–120.000 €) para poder comprar el grueso del stock de campaña por adelantado sin comprometer la tesorería de marketing.'));
children.push(note([
  it('Supuestos de esta sección: ', { bold: true }),
  it('crecimiento de campaña base +15 % sobre 275.000 € [PENDIENTE: objetivo real]; reparto 60 % Spiro / 40 % Ekio Light [PENDIENTE: confirmar]; coste de mercancía Spiro 60 % y Ekio Light 45 %, supuestos prudentes coherentes con los márgenes de gestión [PENDIENTE: coste real por línea]; fases de compra 60 % octubre / 30 % noviembre / 10 % diciembre, pago a proveedor en el mes de compra [PENDIENTE: plazo de pago real a cada proveedor]. Los parámetros se recogen en la hoja «Supuestos» del anexo Excel. El importe de la línea no es una petición de la empresa: es una necesidad estimada y el límite lo fija CaixaBank.'),
]));

children.push(h2('9.4. Garantías y estructura de la operación'));
children.push(p('La empresa ofrece, en primera instancia, la responsabilidad patrimonial de EKIO BIOTECH, S.L.U. Es consciente de que se trata de una sociedad de reciente constitución y de que CaixaBank puede requerir cobertura adicional; queda abierta a estudiar con la entidad las fórmulas habituales para este tipo de operación de circulante:'));
children.push(bullet('Aval de la Sociedad de Garantía Recíproca de Castilla y León (Iberaval).'));
children.push(bullet('Pignoración del stock financiado con la línea, o de la propia cuenta de crédito.'));
children.push(bullet('Garantía personal del administrador y socio único.'));
children.push(note([it('[PENDIENTE: decisión de la empresa sobre qué garantías está dispuesta a aportar. La posición de partida comunicada es «solo responsabilidad de la sociedad»; este apartado recoge las alternativas para la negociación con CaixaBank.]', { bold: true })]));

// ===== 9. CAPACIDAD DE DEVOLUCIÓN =====
children.push(h1(10, 'Capacidad de devolución'));
children.push(p('Al tratarse de una cuenta de crédito (línea revolvente), el reembolso no depende de un flujo futuro incierto: se produce con la propia liquidación de las ventas de la campaña que financia. La línea se dispone para comprar el stock antes del pico y se devuelve a medida que ese stock se vende y se cobra. Es circulante autoliquidable en un ciclo corto.'));
children.push(h2('10.1. Flujo de caja de campaña (escenario base, octubre 2026 – febrero 2027)'));
children.push(p([it('Objetivo de campaña base 316.250 €. Ventas distribuidas 15 % / 35 % / 30 % / 15 % / 5 % (octubre a febrero). Cobro D2C en el mismo mes de la venta (las pasarelas de pago liquidan con retención y reservas; el supuesto de cobro íntegro en el mes es conservador solo en apariencia y se ajustará con el dato real). Compra de stock escalonada 60 % / 30 % / 10 % (octubre a diciembre), pagada en el mes de compra. Gastos de campaña (marketing y logística) al 12 % de las ventas. Cuota del préstamo de 70.000 € incluida en cada mes. El flujo se presenta antes del Impuesto sobre Sociedades; el beneficio de campaña quedará sujeto a IS (25 %, o el tipo reducido que corresponda) en la liquidación del ejercicio, que la empresa provisionará con la caja generada.', { italics: true })]));
children.push(table(
  ['Concepto (€)', 'Oct-26', 'Nov-26', 'Dic-26', 'Ene-27', 'Feb-27', 'Total'],
  [
    ['Cobros por ventas', '47.438', '110.688', '94.875', '47.438', '15.813', '316.250'],
    ['(−) Compra de stock', '−102.465', '−51.233', '−17.078', '0', '0', '−170.775'],
    ['(−) Gastos de campaña (12 %)', '−5.693', '−13.283', '−11.385', '−5.693', '−1.898', '−37.950'],
    ['(−) Cuota préstamo 70k', '−1.350', '−1.350', '−1.350', '−1.350', '−1.350', '−6.750'],
    ['Flujo de caja libre del mes', '−62.070', '+44.822', '+65.062', '+40.395', '+12.565', '+100.774'],
    ['Disposición de la línea', '62.070', '0', '0', '0', '0', '—'],
    ['Devolución de la línea', '0', '−44.822', '−17.248', '0', '0', '−62.070'],
    ['Saldo vivo de la línea (fin de mes)', '62.070', '17.248', '0', '0', '0', '—'],
    ['Caja acumulada tras servicio de la línea', '0', '0', '+47.814', '+88.209', '+100.774', '—'],
  ],
  [2600, 1071, 1071, 1071, 1071, 1071, 1071],
  [undefined, R, R, R, R, R, R],
));
children.push(spacer());
children.push(p([b('Lectura: '), run('la línea se dispone íntegra en octubre (~62.000 €) para comprar el stock antes del pico, y queda totalmente devuelta a finales de diciembre, con el cobro de las ventas de Black Friday y Navidad. A partir de ahí la campaña solo genera caja. El ciclo de vida de la disposición es de aproximadamente dos meses.')]));
children.push(p([it('El total de «flujo de caja libre del mes» (+100.774 €) es el flujo operativo de campaña de la sección 10.2 (107.525 €) menos el servicio del préstamo de 70.000 € en el periodo (6.750 €); la diferencia de 1 € es redondeo.', { italics: true })]));
children.push(h2('10.2. Ratio de cobertura de la devolución'));
children.push(p('El ratio compara el flujo de caja operativo generado por la campaña con lo que hay que devolver (pico de la línea) más el servicio del préstamo de 70.000 € durante el periodo:'));
children.push(p([b('Ratio de cobertura = Flujo de caja operativo de campaña ÷ (Pico de la línea + Servicio del préstamo 70k)')]));
children.push(table(
  ['Concepto', 'Escenario base', 'Escenario conservador (−25 %)'],
  [
    ['Ventas de campaña (€)', '316.250', '237.188'],
    ['Flujo de caja operativo de campaña (€)', '107.525', '80.644'],
    ['Pico de disposición de la línea (€)', '62.070', '46.890'],
    ['Servicio del préstamo 70k en el periodo (€)', '6.750', '6.750'],
    ['Obligación total a cubrir (€)', '68.820', '53.640'],
    ['Ratio de cobertura', '1,56x', '1,50x'],
  ],
  [4026, 2500, 2500],
  [undefined, R, R],
));
children.push(spacer());
children.push(p([it('El flujo de caja operativo de campaña es cobros − compras de stock − gastos de campaña (antes del servicio de deuda). El escenario conservador aplica −25 % a las ventas de campaña, manteniendo constantes los % de coste, el reparto y el gasto de campaña como porcentaje de ventas.', { italics: true })]));
children.push(p('El escenario conservador reduce en un 25 % las ventas y, con ellas, el gasto de campaña; la compra de stock se supone ajustable a la baja al mismo ritmo. En esas condiciones el flujo generado cubre 1,5 veces la devolución de la línea más el servicio del préstamo vivo.'));
children.push(h2('10.3. Estrés severo: pedido comprometido y ventas −40 %'));
children.push(p('El riesgo relevante para el comité es distinto: que el pedido de campaña ya esté comprometido (170.775 € de coste de mercancía) y las ventas caigan con fuerza. Con ventas un 40 % por debajo del objetivo base (≈ 189.750 €), gasto de campaña al 12 % de esas ventas (≈ 22.770 €) y el servicio del préstamo de 70k (6.750 €), el flujo neto de los cinco meses de campaña sería aproximadamente −10.500 €:'));
children.push(table(
  ['Concepto', 'Importe (€)'],
  [
    ['Cobros por ventas (−40 %)', '≈ 189.750'],
    ['(−) Compra de stock (comprometida)', '−170.775'],
    ['(−) Gastos de campaña (12 % de ventas)', '≈ −22.770'],
    ['(−) Servicio del préstamo 70k (5 meses)', '−6.750'],
    ['Flujo neto de campaña', '≈ −10.545'],
  ],
  [6026, 3000],
  [undefined, R],
));
children.push(spacer());
children.push(p('En ese caso la línea se dispondría igualmente (~62.000 €) pero no quedaría amortizada al cierre de la campaña: su cancelación se completaría con las ventas de Q1 2027 y, si fuera necesario, con la tesorería propia, alargando el ciclo de la línea de ~2 meses a ~4–5 meses. Mitigantes: (a) la compra es escalonada 60 % / 30 % / 10 %, de modo que las reposiciones de noviembre y diciembre pueden reducirse en función del ritmo real de ventas, y solo el primer tramo (~102.000 €) está realmente comprometido en octubre; (b) el stock no vendido no se pierde: se liquida en el primer trimestre; (c) la empresa mantiene tres ejercicios en beneficios como colchón. [PENDIENTE: previsión de tesorería de la sociedad a 12 meses para acreditar la cobertura del tramo que se prolongaría a Q1 2027.]'));
children.push(h2('10.4. Efecto del préstamo de 70.000 €'));
children.push(p('La cuota mensual del préstamo de 70.000 € se ha incluido íntegra en el flujo de caja de campaña y en los ratios, de modo que la capacidad de devolución se mide después de atender esa deuda.'));
children.push(bullet([run('Cuota mensual utilizada en el modelo (provisional): 1.350 €/mes. '), it('[PENDIENTE: prestamista, cuota mensual exacta, saldo vivo a la fecha, vencimiento y condiciones del préstamo de 70.000 €.]', { bold: true })]));
children.push(bullet('Servicio del préstamo durante los cinco meses de campaña: ~6.750 €, absorbido por el flujo de campaña en los escenarios base y conservador.'));
children.push(h2('10.5. Conclusión sobre solvencia'));
children.push(bullet([b('Circulante autoliquidable. '), run('La línea financia existencias de un catálogo ya en venta y se devuelve con el cobro de esas mismas ventas: ciclo de ~2 meses en el escenario base (disposición en octubre, devolución completa en diciembre).')]));
children.push(bullet([b('Cobertura superior a 1,5x en base y conservador. '), run('1,56x y 1,50x respectivamente, en ambos casos después de atender el préstamo de 70.000 €. En un estrés severo (ventas −40 % con la primera compra ya comprometida) el ciclo de la línea se alarga a Q1 2027 sin llegar a impago, con la compra escalonada como principal mitigante.')]));
children.push(bullet([b('Riesgo acotado. '), run('No se financia gasto corriente ni proyectos de resultado incierto, sino inventario físico para un pico de demanda con precedente cuantificado (275.000 € el año anterior). El destino y la fuente de repago están directamente ligados.')]));

// ===== 10. ANEXOS =====
children.push(h1(11, 'Anexos'));
children.push(h2('11.1. Anexo financiero (Excel)'));
children.push(p('Se acompaña el archivo anexo-financiero.xlsx, con seis hojas y fórmulas reales enlazadas a una hoja de supuestos editable (al cambiar un supuesto se recalcula todo el modelo):'));
children.push(bullet('Portada — identificación del anexo y advertencia sobre las cifras históricas.'));
children.push(bullet('Histórico — cuenta de resultados 2024 / 2025 / 2026 H1 con gráfico de facturación y margen. [PENDIENTE de actualización: añadir la columna 2023 (390.000 €) y el desglose de margen y resultado de ese ejercicio.]'));
children.push(bullet('Supuestos — todos los parámetros editables (objetivo de campaña, % coste por línea, reparto Spiro/Ekio Light, crecimiento, plazos de cobro y pago, cuota del préstamo de 70k).'));
children.push(bullet('Necesidad circulante — cálculo de la necesidad estimada de financiación de existencias por línea y total.'));
children.push(bullet('Flujo de caja campaña — mensual octubre 2026 – febrero 2027, con disposición y devolución de la línea.'));
children.push(bullet('Escenarios — base frente a conservador (−25 % de ventas de campaña) y ratio de cobertura resultante.'));
children.push(h2('11.2. Documentación de soporte a aportar con la solicitud'));
children.push(p('Documentos que acompañan o completan este plan al presentarlo en CaixaBank:'));
children.push(bullet('Escritura de constitución de EKIO BIOTECH, S.L.U. y escritura / documento de aportación no dineraria del negocio en funcionamiento.'));
children.push(bullet('Balance de apertura de la SLU (resultante de la aportación) y previsión de balance y de tesorería 2026–2027.'));
children.push(bullet('Previsión de tesorería de la sociedad a 12 meses, no solo la ventana de campaña.'));
children.push(bullet('Declaraciones de IRPF y modelos 130 y 390 de la actividad como empresario individual (ejercicios 2023, 2024 y 2025).'));
children.push(bullet('P&L de gestión actualizado de Holded con desglose de coste de ventas por ejercicio (conciliación del margen bruto) y, cuando estén disponibles, cuentas anuales de la sociedad.'));
children.push(bullet('Certificados de estar al corriente de pago con la AEAT y con la Tesorería General de la Seguridad Social; en su caso, detalle de aplazamientos o fraccionamientos vigentes.'));
children.push(bullet('Contrato e identificación del préstamo de 70.000 € (prestamista, tipo, saldo vivo, cuadro de amortización, covenants) e informe CIRBE.'));
children.push(bullet('Contrato de distribución en exclusiva con Noxtak / SG Labs y condiciones de pago a proveedor.'));
children.push(bullet('Contrato de fabricación / ensamblaje de Ekio Light e identificación del fabricante; marcado CE, declaración de conformidad y seguro de responsabilidad civil de producto (en especial de los equipos con emisión UV-A/UV-B).'));
children.push(bullet('Título / certificado de registro del Modelo de Utilidad Nº U202532624 (OEPM) y estado de la solicitud de patente internacional (PCT) del sistema SFPA.'));
children.push(bullet('Carta o comunicación de Wolaria / ICECYL acreditando la invitación a Startup OLÉ y Valencia Digital Summit.'));
children.push(bullet('Presupuestos o pedidos pro-forma en firme de ambos proveedores que soporten el importe de la compra de stock de campaña (~170.775 €).'));
children.push(bullet('Cálculo del Impuesto sobre Sociedades previsto sobre el resultado de campaña.'));

children.push(h2('11.3. Lista consolidada de datos pendientes de aportar por la empresa'));
children.push(p('Puntos marcados como [PENDIENTE] a lo largo del documento, para que la empresa los complete antes de la presentación formal:'));
[
  'Persona de contacto para el banco (nombre, email, teléfono) — resolver antes de enviar.',
  'Alta censal y CNAE de la SLU a fecha de solicitud (CIF activo) — resolver antes de enviar.',
  'Fecha de la escritura de constitución de la SLU y de la aportación del negocio.',
  'Balance de apertura de la SLU y previsión de balance 2026–2027.',
  'Previsión de tesorería de la sociedad a 12 meses.',
  'Situación de estar al corriente con AEAT y Seguridad Social; detalle de cualquier aplazamiento/fraccionamiento vigente.',
  'Decisión sobre garantías: aval SGR (Iberaval), pignoración del stock o de la cuenta de crédito, o aval del administrador.',
  'Identificación completa del préstamo de 70.000 € (prestamista, tipo, saldo vivo, cuota real, vencimiento, covenants); informe CIRBE.',
  'Conciliación del margen bruto por ejercicio (38,4 % / 24,5 % / 55,9 %) con el desglose de coste de ventas de Holded.',
  'Margen bruto y resultado del ejercicio 2023 (facturación ya confirmada: 390.000 €); cierre provisional a julio/agosto de 2026; informe de Holded actualizado.',
  'Título/certificado del Modelo de Utilidad U202532624 y estado de la solicitud PCT del sistema SFPA.',
  'Objetivo financiero plurianual 2026–2028 (o traslado del modelo a 5 años ya existente).',
  'Número exacto de personas en plantilla y de colaboradores externos habituales.',
  'Reseña profesional del fundador (formación, trayectoria, años en el sector).',
  'Unidades de inventario realmente disponibles y comprometidas a fecha de solicitud, y rotación (vueltas) por referencia de campaña.',
  'Volumen real de contratos de renting vivos.',
  'Fuente citable si se desea incluir tamaño o crecimiento de mercado.',
  'Carta/email de Wolaria/ICECYL acreditando la invitación.',
  'Exportaciones de Klaviyo y Shopify con recuentos exactos de contactos y clientes.',
  'Periodo exacto (fechas) de los 275.000 € de la campaña anterior y si es venta bruta o neta.',
  'Objetivo de ventas de campaña 2026 (sustituye al +15 % provisional).',
  'Coste de mercancía real por línea de las referencias de campaña (sustituye a Spiro 60 % / Ekio Light 45 %).',
  'Reparto objetivo Spiro / Ekio Light de la campaña (sustituye al 60 / 40).',
  'Presupuesto de marketing y logística de campaña (sustituye al 12 % de ventas).',
  'Plazo de pago real a cada proveedor y plazo de cobro real de las pasarelas de pago.',
  'Estacionalidad real de la campaña octubre–febrero (sustituye al 15/35/30/15/5).',
  'Nombre del fabricante / ensamblador de los paneles Ekio Light y grado real de integración (diseño propio, ensamblaje, fabricación subcontratada).',
  'Presupuestos o pedidos pro-forma de ambos proveedores que soporten los ~170.775 € de compra de campaña.',
].forEach((t) => children.push(bullet([it(t)])));

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
