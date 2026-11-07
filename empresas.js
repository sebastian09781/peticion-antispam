// Directorio de empresas con su canal oficial de datos personales (verificado el 7 de noviembre de 2026).
// Regla: cada correo debe aparecer en la política oficial enlazada en "fuente". Si la empresa no publica correo, correo: null.
// ¿Falta una empresa o cambió un correo? Abra un issue o un pull request con el enlace a la política.
window.EMPRESAS = [
  // --- Telecomunicaciones ---
  { marca: 'Claro', razon_social: 'Comunicación Celular S.A. - Comcel S.A.', nit: null, correo: 'solucionesclaro@claro.com.co',
    fuente: 'https://www.claro.com.co/portal/co/legal-regulatorio/pdf/Politicas_Seguridad_Inf_Claro.pdf',
    nota: 'También recibe reclamos en la línea *611 y en el formulario web de claro.com.co.' },
  { marca: 'Movistar', razon_social: 'Colombia Telecomunicaciones S.A. E.S.P. BIC', nit: '830.122.566-1', correo: null,
    fuente: 'https://descubre.movistar.co/atencion-cliente/politicas-de-privacidad/politica.html',
    nota: 'Su política indica radicar la solicitud con el enlace "Radicar PQR" de movistar.co. Copie la carta y péguela allí.' },
  { marca: 'Tigo', razon_social: 'Colombia Móvil S.A. E.S.P.', nit: '830.114.921-1', correo: null,
    fuente: 'https://assets.tigocloud.net/j1bxozgharz5/6MW3dWFqogVDjbXjMjNMCm/f6adcfbf29ed0a4e4615a400e627cde6/politica-proteccion-datos-personales-_22.pdf',
    nota: 'No publica correo de datos personales. Canales: atención al cliente en tigo.com.co, línea 018000 42 22 22 u oficinas. Para servicios fijos la empresa es UNE EPM Telecomunicaciones S.A.' },
  { marca: 'ETB', razon_social: 'Empresa de Telecomunicaciones de Bogotá S.A. E.S.P.', nit: '899.999.115-8', correo: 'oficialdatospersonales@etb.com.co',
    fuente: 'https://etb.com/docs/Pol%C3%ADtica_tratamiento_datos_personales_ETB.pdf', nota: null },

  // --- Bancos y financieras ---
  { marca: 'Bancolombia', razon_social: 'Bancolombia S.A.', nit: '890.903.938-8', correo: null,
    fuente: 'https://www.bancolombia.com/personas/documentos-legales/proteccion-datos/bancolombia-sa',
    nota: 'No publica correo de datos personales. Canales: chat o formato virtual en bancolombia.com, la app, sucursales o la línea 018000 912345.' },
  { marca: 'Davivienda', razon_social: 'Banco Davivienda S.A.', nit: '860.034.313-7', correo: null,
    fuente: 'https://www.davivienda.com/wps/wcm/connect/personas/ae1f2020-68f2-4ba3-b176-2441d5c17b5a/DAV+politica+tratamiento+datos+personales+-.pdf?MOD=AJPERES&CVID=o0zUsOf',
    nota: 'No publica correo para clientes. Canales: chat en la web o la app, oficinas y línea 01 8000 123 838.' },
  { marca: 'Banco de Bogotá', razon_social: 'Banco de Bogotá', nit: null, correo: 'servicioalcliente@bancodebogota.com.co',
    fuente: 'https://www.bancodebogota.com/documents/d/guest/politica-proteccion-y-privacidad-datos-personales', nota: null },
  { marca: 'BBVA', razon_social: 'BBVA Colombia', nit: null, correo: null,
    fuente: 'https://www.bbva.com.co/content/dam/public-web/colombia/documents/home/prefooter/politicas-informacion/DO-01-Politica-tratamiento-datos-personales.pdf',
    nota: 'No publica correo de datos personales. Use los canales de atención de bbva.com.co o la línea 3471600.' },
  { marca: 'Scotiabank Colpatria', razon_social: 'Scotiabank Colpatria S.A.', nit: '860.034.594-1', correo: 'servicliente@colpatria.com',
    fuente: 'https://cdn.aglty.io/scotiabank-colombia/scotiabank-colpatria/pdf/Politica-proteccion-de-datos-personales.pdf', nota: null },
  { marca: 'Banco Falabella', razon_social: 'Banco Falabella S.A.', nit: '900.047.981-8', correo: 'datospersonales@bancofalabella.com.co',
    fuente: 'https://www.bancofalabella.com.co/proteccion-datos', nota: null },
  { marca: 'Banco Popular', razon_social: 'Banco Popular S.A.', nit: null, correo: 'asesor@bancopopular.com.co',
    fuente: 'https://www.bancopopular.com.co/wps/wcm/connect/bancopopular/f87a3701-a2bc-4de3-bf63-653ddeec026f/politica-privacidad-proteccion-datos-personales.pdf?MOD=AJPERES&CVID=orM3n3I', nota: null },
  { marca: 'Banco de Occidente', razon_social: 'Banco de Occidente S.A.', nit: '890.300.279-4', correo: 'datospersonales@bancodeoccidente.com.co',
    fuente: 'https://www.bancodeoccidente.com.co/legal-politicas/tratamiento-datos', nota: null },
  { marca: 'Banco AV Villas', razon_social: 'Banco Comercial AV Villas S.A.', nit: '860.035.827-5', correo: null,
    fuente: 'https://www.avvillas.com.co/documents/37648/600392/20210928+Politica-Proteccion-Datos-Personales-def+%282%29.pdf/ee5bedc8-e82d-b86f-63da-878e402c7eee?t=1646948027839',
    nota: 'No publica correo. Su dirección de notificaciones es la Cra. 13 n.° 26A-47, piso 1, Bogotá: puede imprimir la carta y radicarla allí.' },
  { marca: 'Banco Caja Social', razon_social: 'Banco Caja Social S.A.', nit: '860.007.335-4', correo: 'contactenos@bancocajasocial.com',
    fuente: 'https://www.bancocajasocial.com/content/dam/bcs/documentos/informacion-de-interes/informacion-legal/transparencia-y-acceso-a-la-informacion-publica/Politica-de-Proteccion-de-Datos-Personales.pdf', nota: null },
  { marca: 'Itaú', razon_social: 'Itaú Colombia S.A.', nit: '890.903.937-0', correo: 'servicioalcliente@itau.co',
    fuente: 'https://banco.itau.co/documents/d/personas/politica-de-tratamiento-de-datos-personales-vf', nota: null },
  { marca: 'Nu', razon_social: 'Nu Colombia Compañía de Financiamiento S.A.', nit: '901.658.107-2', correo: 'ayuda@nu.com.co',
    fuente: 'https://contracts.nu.com.co/legal-documents/nu-CF-data-policy-version-3.pdf', nota: null },
  { marca: 'Nequi', razon_social: 'Nequi S.A. Compañía de Financiamiento', nit: '901.633.276-0', correo: null,
    fuente: 'https://www.nequi.com.co/legal/informacion/politica-para-el-tratamiento-de-datos-personales-de-nequi-s-a',
    nota: 'No publica correo de datos personales. Canales: chat del botón "Ayuda" en la app o la web y la línea 300 600 0100.' },
  { marca: 'Tuya', razon_social: 'Compañía de Financiamiento Tuya S.A.', nit: null, correo: null,
    fuente: 'https://www.tuya.com.co/proteccion-de-datos-personales',
    nota: 'No publica correo para clientes. Canales: formulario "Contáctanos" o chat en tuya.com.co y línea 01 8000 97 8888.' },

  // --- Cobranzas ---
  { marca: 'Covinoc', razon_social: 'Covinoc S.A.', nit: null, correo: 'atencion.cliente@covinoc.com',
    fuente: 'https://www.covinoc.com/#/politicas/tratamiento-de-datos', nota: null },
  { marca: 'System Group (Sistemcobro)', razon_social: 'Sistemcobro S.A.S.', nit: '800.161.568-3', correo: 'buzonpqr@sistemcobro.com',
    fuente: 'https://www.systemgroupglobal.com/politicas-de-privacidad/', nota: null }
];
