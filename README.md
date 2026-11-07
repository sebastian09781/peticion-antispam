# Chao llamadas spam 📵

**¿Te llaman a toda hora para venderte un crédito, un plan o un seguro que nunca pediste?**
Esta página te ayuda a escribir, en unos tres minutos, un **derecho de petición** para que esa empresa borre tus datos y deje de contactarte.

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

Es un paso a paso con historia, tarjetas que se voltean y sonidos suaves (se pueden apagar). Son 7 pasos:

1. **¿Cómo consiguieron su número?** La tienda, el concurso, el exoperador, el call center.
2. **¿Qué puede hacer usted?** Las cuatro normas que lo respaldan, explicadas en una línea cada una.
3. **¿Quién es usted?** Nombre, documento, ciudad y correo.
4. **¿Cómo lo están molestando?** Llamadas, SMS, WhatsApp o correo, y qué relación tiene con la empresa.
5. **¿Qué empresa lo está llamando?** Con instrucciones para encontrar su correo de datos personales.
6. **Su carta está lista.** La revisa, la abre en su correo, adjunta su documento y la envía.
7. **¿Y ahora qué pasa?** Plazos, Registro de Números Excluidos, lista de chequeo y botón para escribirle a otra empresa sin volver a llenar sus datos.

## 🔎 Buscador de empresas

En el paso 5 la persona escribe "Claro" o "Bancolombia" y la página llena la empresa sola. Usa dos fuentes:

1. **[`empresas.js`](empresas.js): directorio propio** de las empresas que más llaman. Cada correo fue verificado en la política oficial de datos de la empresa, que va enlazada. Si la empresa no publica correo (algunos bancos solo atienden por chat o teléfono), la página lo dice y sugiere pegar la carta en ese canal.
2. **[RUES en datos.gov.co](https://www.datos.gov.co/d/c82u-588k): cualquier otra empresa activa** registrada en las Cámaras de Comercio. Trae la razón social y el NIT, pero no el correo: ese lo busca la persona.

¿Falta una empresa o cambió un correo? Abra un *issue* o un *pull request* en `empresas.js` con el enlace a la política oficial.

## 🔒 ¿Y mis datos?

**No se guardan en ningún lado.** Esta es una sola página HTML:

- no tiene servidor ni base de datos,
- no usa cookies, analítica ni librerías externas (solo descarga dos tipografías de Google Fonts, sin enviar nada de lo que usted escribe),
- el texto se arma dentro de tu navegador y se borra al cerrar la pestaña,
- lo único que sale a internet es **el nombre de la empresa** que escribes en el buscador, para consultarla en datos.gov.co.

No tienes que creernos: todo el código está en [`index.html`](index.html) y puedes revisarlo.

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

- **Registro de Números Excluidos (RNE):** es gratis y lo maneja la CRC. Inscribe tu número para frenar también a las empresas que aún no te han llamado. Se hace en el [Portal de Trámites de la CRC](https://tramitescrcom.gov.co/tramitesCRC/publico/index.xhtml).
- **Queja ante la SIC:** procede cuando ya enviaste la petición y no respondieron a tiempo o lo hicieron sin fundamento.

## Publicarla con GitHub Pages (2 minutos)

1. En el repositorio, entra a **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En uno o dos minutos la página queda en `https://<tu-usuario>.github.io/peticion-antispam/`.

## Aviso

Es una herramienta educativa y no reemplaza la asesoría de un abogado. Antes de enviar, verifica que el texto se ajuste a tu caso.

## Licencia

MIT. Úsala, cópiala y mejórala.
