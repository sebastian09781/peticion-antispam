<p align="center">
  <img src="img/logo.svg" alt="Logo de Chao Spam" width="96">
</p>

<h1 align="center">Chao Spam</h1>

<p align="center">
  <b>Pida que borren su número y dejen de llamarlo, con la ley de su lado.</b><br>
  Servicio gratuito · Sin abogado · 5 minutos · Nada se guarda
</p>

<p align="center">
  👉 <a href="https://sebastian09781.github.io/peticion-antispam/"><b>sebastian09781.github.io/peticion-antispam</b></a>
</p>

<p align="center">
  <img src="img/og-image.jpg" alt="Chao Spam: pida que borren su número y dejen de llamarlo" width="600">
</p>

---

## ¿Qué resuelve?

En Colombia las empresas compran, comparten o heredan bases de datos, y a muchas personas las llaman a toda hora para venderles créditos, planes o seguros que nunca pidieron. La ley permite exigir que borren esos datos, pero casi nadie sabe qué norma invocar, cómo redactar la carta, a quién enviarla ni qué hacer si no responden.

**Chao Spam** resuelve los cuatro pasos desde el celular, en lenguaje sencillo.

## ¿Cómo funciona?

Sigue el camino que recomienda la propia Superintendencia de Industria y Comercio (SIC) en su guía oficial: primero se reclama ante la empresa y, si no cumple, se presenta la queja ante la SIC.

**A. Escribir mi carta a la empresa**
1. **Sus derechos:** cuatro tarjetas (pueden borrarlo, 15 días hábiles, horarios permitidos, multas).
2. **Sus datos:** nombre, documento, municipio (lista oficial del DANE) y cómo lo contactan.
3. **La empresa:** buscador que llena la razón social y el correo de datos personales.
4. **Su carta:** primero se lee, después se envía y por último se agenda el plazo en el calendario del teléfono.

**B. Ya envié mi carta y no me respondieron**
1. **Sus datos** y 2. **La empresa**.
3. **Queja ante la SIC:** revisa si ya venció el plazo (contando los festivos) y arma la queja dirigida a `contactenos@sic.gov.co` con el asunto que exige la SIC.

Al final aparece una pantalla de **gracias** con el recordatorio para el calendario y la opción de compartir el servicio.

## ⚖️ Sustento jurídico

La carta pide la **supresión** de los datos, la **revocatoria** de la autorización, **copia de la autorización** que la empresa dice tener y que la orden **se extienda a los encargados**: *call centers*, agencias y aliados que llaman a nombre de la empresa. Si la empresa que recibe la carta no es la responsable, debe **trasladarla en 2 días hábiles**. Cada dato legal tiene en la página un botón **⚖ Normas** que muestra el texto o la captura oficial.

| Qué se afirma | Fuente oficial |
|---|---|
| Primero se reclama a la empresa y luego a la SIC; correo y asunto de la queja | [SIC, Preguntas frecuentes de Protección de Datos, pregunta 9](https://www.sic.gov.co/sites/default/files/files/2022/Preguntas%20frecuentes%20Delegatura%20Datos%20Personales%202022.pdf) |
| Requisito de procedibilidad (15 días hábiles sin respuesta o respuesta inadecuada) | [SIC, Consultas y reclamos](https://www.sic.gov.co/consultas-y-reclamos-pdp) |
| Plazo de 15 días hábiles más 8 de prórroga; traslado en 2 días; deberes del responsable frente a sus encargados; multas hasta 2.000 SMMLV | [Ley 1581 de 2012, arts. 3, 15, 16, 17 y 23](https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1581_2012.htm) |
| Horarios permitidos para contactos comerciales | [Ley 2300 de 2023, art. 3 y art. 5, par. 3](https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_2300_2023.htm) |
| Correo de denuncias y Registro de Números Excluidos | [SIC, Circular Externa 001 de 2024](https://normograma.mintic.gov.co/mintic/compilacion/docs/circular_superindustria_0001_2024.htm) |
| La autorización debe ser previa, expresa e informada; el silencio no es autorización | [Corte Constitucional, Sentencia C-748 de 2011](https://www.corteconstitucional.gov.co/relatoria/2011/C-748-11.htm) |
| Las llamadas y los mensajes comerciales sin autorización vulneran el hábeas data | [SIC, Resolución 78138 de 2025](https://sedeelectronica.sic.gov.co/sites/default/files/normativa/2025078138RE0000000001.pdf) |

Fuentes revisadas el 7 de noviembre de 2026. Las citas se comprobaron textualmente en los documentos oficiales.

## 🔒 Privacidad: código abierto y auditable

**Nada se guarda.** Es una sola página HTML, sin servidor propio, base de datos, cuentas, cookies ni analítica. La carta se arma en el navegador y se borra al cerrar la pestaña. El correo sale desde el correo de la propia persona.

| Servicio externo | Para qué | Qué recibe |
|---|---|---|
| [datos.gov.co, RUES](https://www.datos.gov.co/d/c82u-588k) | Buscar la empresa | Solo el nombre de la empresa que se escribe |
| [datos.gov.co, DIVIPOLA (DANE)](https://www.datos.gov.co/d/gdxc-w37w) | Lista oficial de los 1.122 municipios | Nada de la persona |
| [Nager.Date](https://date.nager.at) | Festivos de Colombia para contar días hábiles | Solo el año |
| Google Fonts · GitHub Pages | Tipografías · alojamiento | Nada de la persona |

## ♿ Accesibilidad

- **Guía por voz:** una voz recorre cada pantalla y explica cada caso. Solo lee instrucciones, nunca los datos de la persona.
- **Botón "Aa":** letra más grande (hasta 150 %), alto contraste y modo sin animaciones.
- Campos con validación y mensajes claros (por ejemplo, el nombre solo admite letras y la cédula solo números), navegación con teclado y respeto por la preferencia de "reducir movimiento" del teléfono.

## 🏢 Directorio de empresas

[`empresas.js`](empresas.js) reúne las empresas que más llaman. Para cada una registra su razón social, su NIT y el correo de datos personales, **verificado en su política oficial** (con enlace). Si la empresa no publica un correo, lo dice. Para cualquier otra empresa, el buscador consulta el RUES.

¿Falta una empresa o cambió un correo? Abra un *issue* o un *pull request* con el enlace a la política oficial.

## 📁 Estructura

```
index.html            La aplicación completa (HTML, CSS y JavaScript sin dependencias)
empresas.js           Directorio verificado de empresas
manifest.webmanifest  Datos para instalarla como aplicación en el celular
sitemap.xml           Mapa del sitio para buscadores
favicon.ico
img/                  Logo, íconos, imagen para compartir y capturas oficiales de la SIC
```

## Aviso

Chao Spam es un servicio gratuito que facilita el trámite. No es asesoría jurídica ni tiene relación con la SIC ni con las empresas mencionadas. Antes de enviar, verifique que el texto se ajuste a su caso.

## Autor y licencia

Creado por [Juan Sebastián Rodríguez Casas](https://sebastian-09781.blogspot.com/). Licencia [MIT](LICENSE). Los íconos del teléfono del logo son de Material Icons (Apache 2.0).
