# Chao llamadas spam 📵

**¿Te llaman a toda hora para venderte un crédito, un plan o un seguro que nunca pediste?**
Esta página te ayuda a escribir, en unos cinco minutos, un **reclamo** para que esa empresa borre tus datos y deje de contactarte. Y si no cumple, te arma la **queja ante la Superintendencia de Industria y Comercio (SIC)**.

👉 **Úsala aquí: https://sebastian09781.github.io/peticion-antispam/**

---

## ¿Qué problema resuelve?

Muchas empresas compran, comparten o heredan bases de datos con tu número. Tienes derecho a decirles: *"bórrenme y no me vuelvan a llamar"*. El problema es que casi nadie sabe:

- qué ley invocar,
- cómo redactar la carta,
- a quién enviarla,
- y qué hacer si no responden.

Esta herramienta resuelve esos cuatro pasos.

## ¿Cómo funciona? (en cristiano)

Sigue el mismo camino que recomienda la SIC en su guía oficial (pregunta 9). Al entrar, la persona elige uno de dos recorridos cortos, pensados para el celular:

**A. Escribir mi carta a la empresa** (4 pantallas)
1. **Sus derechos:** cuatro tarjetas (pueden borrarlo, 15 días hábiles, horarios permitidos, multas), cada una con su fuente.
2. **Sus datos:** quién es y cómo lo contactan.
3. **La empresa:** buscador que llena la razón social y el correo.
4. **Su carta:** se envía con un toque, con la fecha límite calculada.

**B. Ya envié la carta y no respondieron → queja ante la SIC** (3 pantallas)
1. **Sus datos** y 2. **La empresa** (los mismos de arriba).
3. **Queja:** pregunta cuándo envió la carta y qué pasó, revisa si ya se venció el plazo y arma la queja dirigida a `contactenos@sic.gov.co` con el asunto que exige la SIC.

Tiene tarjetas que se voltean y sonidos suaves, que se pueden apagar.

## 📚 Fuentes verificadas dentro de la página

Cada dato legal tiene un botón **"Ver fuente"** que abre, sin salir de la página, la captura real o el texto oficial, con un enlace al documento original:

| Dato | Fuente |
|---|---|
| Primero se reclama a la empresa y luego a la SIC; correo y asunto de la queja | [SIC, Preguntas frecuentes de Protección de Datos, pregunta 9](https://www.sic.gov.co/sites/default/files/files/2022/Preguntas%20frecuentes%20Delegatura%20Datos%20Personales%202022.pdf) (captura en `img/sic-pregunta-9.png`) |
| Requisito de procedibilidad: 15 días hábiles sin respuesta o respuesta inadecuada | [SIC, Consultas y reclamos](https://www.sic.gov.co/consultas-y-reclamos-pdp) (captura en `img/sic-requisito.png`) |
| Canales de atención de la SIC | Misma página (captura en `img/sic-canales.png`) |
| 15 días hábiles más 8 de prórroga; requisito previo; multas de hasta 2.000 SMMLV | [Ley 1581 de 2012, arts. 15, 16 y 23](https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1581_2012.htm) |
| Horarios permitidos para contactos | [Ley 2300 de 2023, art. 3 y art. 5, par. 3](https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_2300_2023.htm) |
| Correo de denuncias y Registro de Números Excluidos | [SIC, Circular Externa 001 de 2024](https://normograma.mintic.gov.co/mintic/compilacion/docs/circular_superindustria_0001_2024.htm) |

Fuentes revisadas el 7 de noviembre de 2026.

## 🔎 Buscador de empresas

En la pantalla "La empresa" la persona escribe "Claro" o "Bancolombia" y la página llena la empresa sola. Usa dos fuentes:

1. **[`empresas.js`](empresas.js): directorio propio** de las empresas que más llaman. Cada correo fue verificado en la política oficial de datos de la empresa, que va enlazada. Si la empresa no publica correo (algunos bancos solo atienden por chat o teléfono), la página lo dice y sugiere pegar la carta en ese canal.
2. **[RUES en datos.gov.co](https://www.datos.gov.co/d/c82u-588k): cualquier otra empresa activa** registrada en las Cámaras de Comercio. Trae la razón social y el NIT, pero no el correo: ese lo busca la persona.

¿Falta una empresa o cambió un correo? Abra un *issue* o un *pull request* en `empresas.js` con el enlace a la política oficial.

## 🔒 ¿Y mis datos? Código abierto y auditable

**No se guardan en ningún lado.** Esta es una sola página HTML:

- no tiene servidor propio, base de datos, cuentas, cookies ni analítica,
- el texto se arma dentro de tu navegador y se borra al cerrar la pestaña,
- el correo sale desde **tu propio correo**: tú decides si lo envías.

Servicios externos que usa, y qué reciben:

| Servicio | Para qué | Qué recibe |
|---|---|---|
| [datos.gov.co, RUES](https://www.datos.gov.co/d/c82u-588k) | Buscar la empresa | Solo el nombre de la empresa que escribes |
| [datos.gov.co, DIVIPOLA (DANE)](https://www.datos.gov.co/d/gdxc-w37w) | Lista oficial de los 1.122 municipios | Nada tuyo |
| [Nager.Date](https://date.nager.at) | Festivos de Colombia para contar los días hábiles | Solo el año |
| Google Fonts | Tipografías | Nada tuyo |
| GitHub Pages | Aloja la página | Nada tuyo |

No tienes que creernos: todo el código está en [`index.html`](index.html) y cualquiera puede auditarlo. La página tiene además una ventana de **Privacidad y condiciones** escrita en lenguaje sencillo.

## ⏱️ Plazos con festivos

La página cuenta los 15 días hábiles **descontando los festivos de Colombia** (incluido el nuevo festivo de la Virgen de Chiquinquirá, Ley 2578 de 2026). Si la API de festivos no responde, cuenta de lunes a viernes y lo advierte en pantalla.

## ¿En qué normas se apoya?

| Norma | Para qué sirve aquí |
|---|---|
| Constitución, arts. 15 y 23 | Derecho a la intimidad (habeas data) y derecho de petición |
| Ley 1581 de 2012 | Te deja revocar la autorización y pedir que borren tus datos. El art. 15 da a la empresa **15 días hábiles** para responder, prorrogables 8 más |
| Decreto 1074 de 2015, cap. 25 | Reglamenta la Ley 1581 |
| Ley 1755 de 2015 | Regula el derecho de petición |
| Ley 2300 de 2023 ("Dejen de fregar") | Limita los contactos comerciales y publicitarios. Creó el Registro de Números Excluidos |

**¿Eres cliente actual de la empresa?** La carta cambia sola: en vez de pedir que borren todo (necesitan tus datos para el contrato), pide que **no los usen para publicidad ni ventas**.

## Pasos complementarios

- **Registro de Números Excluidos (RNE):** es gratis y lo maneja la CRC. Inscribe tu número para frenar también a las empresas que aún no te han llamado. Se hace en el [formulario de la CRC](https://tramitescrcom.gov.co/tramites/comun/guia.xhtml?tit=&subt=&tram=ebhrEbS9qKn04bkBEBApXQ==&pr1=3578LkxQ3TO3y3t5FY9/BQ==&onA=S0etv8CCdHqPI8wYF9h5dtdTbijZh1Ii32LohKmsEd6aN1b0ia4DPDtKgFkbFjDn).
- **Recordatorio en el calendario:** después de enviar la carta, la página ofrece agendar (Google Calendar o archivo `.ics` para cualquier calendario) el día en que vence el plazo. El evento trae el enlace `…/peticion-antispam/#sic=AAAA-MM-DD`, que abre directo la queja ante la SIC con la fecha de envío ya puesta. Solo incluye el nombre de la empresa, ningún dato personal.
- **Queja ante la SIC:** está en la misma página (botón "Ya envié la carta").

## Publicarla con GitHub Pages (2 minutos)

1. En el repositorio, entra a **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En uno o dos minutos la página queda en `https://<tu-usuario>.github.io/peticion-antispam/`.

## Aviso

Es una herramienta educativa y no reemplaza la asesoría de un abogado. Antes de enviar, verifica que el texto se ajuste a tu caso.

## Licencia

MIT. Úsala, cópiala y mejórala.
