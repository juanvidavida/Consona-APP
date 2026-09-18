# Análisis RGPD

> Esto no es asesoramiento legal. Es un análisis técnico documentado para llevar
> a un abogado y ahorrar tiempo y dinero en esa consulta. Lo que no se pudo
> verificar está marcado como tal.

---

## 1. Los datos del ciclo son datos de salud (Art. 9 RGPD)

Sí, sin ambigüedad razonable. El criterio del Grupo del Artículo 29 es que unos
datos son de salud cuando **se extraen de ellos conclusiones sobre el estado de
salud de la persona**, y textualmente *"irrespective of whether these conclusions
are accurate or inaccurate, legitimate or illegitimate"*. Calcular una fase del
ciclo a partir de la fecha de la regla es exactamente eso.

Confirmaciones de autoridades:

- **Autoridad neerlandesa (AP), agosto 2026:** clasifica expresamente los datos
  de apps de menstruación como categoría especial y no descarta abrir investigación.
- **ICO (Reino Unido):** tras revisar apps de menstruación y fertilidad, los
  trata como categoría especial y exige consentimiento *"explicit, unambiguous
  and involve a clear action"*.
  https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/02/ico-urges-all-app-developers-to-prioritise-privacy/
- **AEPD:** no se localizó pronunciamiento específico sobre apps de ciclo
  menstrual *(no verificado)*. Su doctrina general sí es clara: datos de salud =
  categoría especial, prohibidos salvo excepción del Art. 9.2, siendo la primera
  el consentimiento explícito **del interesado**.

**Consecuencia:** hacen falta dos capas a la vez, base del Art. 6 **y** excepción
del Art. 9.2. Y **la interesada es ella, no él**.

---

## 2. El punto crítico: la exención doméstica protege al usuario, no al desarrollador

Hay que separar dos responsables.

### El usuario (el hombre)

La exención del Art. 2.2.c ("actividad exclusivamente personal o doméstica")
probablemente le ampara mientras use la app solo en su dispositivo y no comparta
nada. Pero es de interpretación **estricta**: el TJUE en *Ryneš* (C-212/13)
estableció que las excepciones *"must apply only in so far as is strictly necessary"*.

Y se cae en cuanto la app añada **compartir, exportar o sincronizar**. Entonces
él pasa a ser responsable de tratar datos de salud de otra persona, y necesita
consentimiento explícito de ella.

### El desarrollador — y esto es texto expreso del Reglamento

**Considerando 18 RGPD:** el Reglamento no se aplica a la persona física en
actividad doméstica, **pero sí se aplica *"a los responsables o encargados del
tratamiento que proporcionen los medios para tratar datos personales
relacionados con tales actividades personales o domésticas"***.
https://gdpr-info.eu/recitals/no-18/

Y no hace falta acceder a los datos para ser responsable: las Directrices
07/2020 del EDPB confirman que *"a party can be a controller even where it does
not have actual access to the data"*.

**Traducción:** que los datos no salgan del navegador reduce mucho el riesgo,
pero no convierte al desarrollador en un tercero ajeno. La app está diseñada
deliberadamente para que alguien introduzca datos de salud de otra persona que
no participa. Ese diseño es del desarrollador.

---

## 3. Qué sí cambia con la arquitectura local

**Desaparece:** el tratamiento de datos de salud en servidores propios, y con él
las obligaciones que presuponen tenencia (registro sobre esos datos,
notificación de brechas del lado servidor, encargados, transferencias
internacionales de esos datos).

**Permanece:**

1. Responsabilidad como proveedor de los medios (Considerando 18).
2. **Art. 22.2 LSSI**: la guía de cookies de la AEPD cubre *"cualquier tipo de
   dispositivo de almacenamiento y recuperación de datos"*, no solo cookies —
   incluye localStorage. Guardar los datos del ciclo ahí es **estrictamente
   necesario para el servicio solicitado** → exento de consentimiento previo,
   pero **no exento de informar**.
3. Transparencia (Arts. 12-14): hay que decir explícitamente que los datos se
   quedan en el navegador, qué pasa si se borra la caché, y qué **no** se envía.
4. Privacidad desde el diseño (Art. 25) y seguridad (Art. 32).

---

## 4. Google Fonts: riesgo real, solución trivial

**LG München I, 20/01/2022, 3 O 17493/20.** Condenó a un operador web a
indemnizar por transmitir la IP del visitante a Google al cargar fuentes. El
tribunal consideró la IP dinámica dato personal y **rechazó el interés legítimo
porque la misma funcionalidad se obtiene alojando las fuentes localmente**.

Matiz honesto: desde julio de 2023 existe la decisión de adecuación del EU-US
Data Privacy Framework (confirmada por el Tribunal General el 3/09/2025 en
*Latombe*), así que el argumento puro de "transferencia ilícita" es más débil que
en 2022. Pero **subsisten dos riesgos independientes**: la falta de base del Art.
6 para revelar la IP a un tercero, que es lo que condenó Múnich; y el requisito
del propio proyecto de que los datos no salgan de Europa — **una decisión de
adecuación no es residencia en Europa**.

No se localizó resolución de la AEPD sobre Google Fonts *(no verificado)*. El
precedente español aplicable es eDreams / Google Analytics, donde la AEPD apreció
infracción del Art. 44 RGPD por transferencia a Google LLC sin garantías.

**Solución: auto-alojar.** Ya está aplicado en el código (ADR-008).

---

## 5. Supabase

- **Regiones UE: sí.** `eu-west-1` (Irlanda), `eu-west-3` (París), `eu-central-1`
  (Frankfurt), `eu-north-1` (Estocolmo).
- **Trampa:** la agrupación genérica "Europe" **incluye Londres y Zúrich, que no
  están en la UE/EEE**. Hay que elegir región específica.
- **DPA: sí**, con cláusulas contractuales tipo incorporadas.
- **Advertencia del propio DPA (cláusula 6.1):** *"Supabase may Process Covered
  Data anywhere that Supabase or its Sub-processors maintain facilities"*. Es
  decir, **elegir región no equivale contractualmente a garantía de no salida de
  Europa**. Hay que revisar la lista de subencargados. *(No verificado: esa lista
  no fue accesible durante la investigación. Queda pendiente en el backlog.)*

---

## 6. Analítica: cuándo un evento es realmente anónimo

Dos preguntas separadas, y es donde más se equivoca la gente.

**(a) ¿Se escribe algo en el dispositivo?** Si se genera un `visitor_id` o
`session_id` y se guarda, se activa el Art. 22.2 LSSI y hace falta consentimiento
previo, salvo que se cumplan **todos** los requisitos acumulativos de la exención
de medición de audiencia de la AEPD (solo estadísticas anónimas, solo para el
editor, sin cotejo ni cesión ni seguimiento entre sitios, cookie ≤ 13 meses,
datos ≤ 25 meses).

**Vía segura: no escribir ningún identificador de analítica.**

**(b) ¿El evento es anónimo de verdad?** Casi nunca. Deja de serlo si lleva un ID
persistente, un timestamp de precisión alta, o huella de navegador. Y hay un
punto que casi todo el mundo pasa por alto: **aunque el payload no lleve nada, la
petición HTTP transmite la IP y queda en los logs del servidor**. La AEPD ya
rechazó a eDreams el argumento de "IP anonimizada" sin prueba técnica.

**Regla absoluta para este proyecto:** nunca enviar en un evento la fecha de
regla, la duración del ciclo, la fase calculada, el método anticonceptivo ni nada
derivado. Eso convertiría la telemetría en datos del Art. 9.

---

## 7. Menores

En España la edad de consentimiento digital es **14 años** (Art. 7 LOPDGDD), no
16. Con público objetivo desde los 16, **no hace falta verificación parental**.

Pero sí hay dos implicaciones de diseño: la pareja también puede ser menor, y el
lenguaje de la política de privacidad debe ser apto para 16 años (Art. 12.1).
Conviene una declaración de edad mínima en el alta, sin recoger fecha de
nacimiento (minimización).

---

## 8. Evaluación de Impacto (EIPD)

La AEPD la exige cuando concurren **dos o más** de sus 11 criterios. Aquí:

- **Criterio 4** (categorías especiales del Art. 9): **se cumple**.
- **Criterio 9** (sujetos vulnerables, incluidos menores): **se cumple** si el
  público empieza en 16.

**Conclusión:** con arquitectura estrictamente local probablemente **no sea
obligatoria**, porque el tratamiento propio del desarrollador se reduce a cuenta
y telemetría. **Pero si los datos del ciclo tocan el servidor alguna vez —
sincronización, backup, "cuenta de pareja", soporte, logs — pasa a ser
obligatoria.** Recomendación: hacerla igualmente. Es la mejor prueba de
responsabilidad proactiva (Art. 5.2) y es barata comparada con el riesgo.

---

## 9. Qué falló en el caso de referencia (Flo Health)

La FTC sancionó a Flo en 2021: prometía en su política mantener privados los
datos de salud y sin embargo los compartía con Facebook Analytics, Google
Analytics, Google Fabric, AppsFlyer y Flurry. En agosto de 2025, un jurado de
California declaró además que Meta violó la ley estatal de privacidad al
recopilar datos de salud menstrual de usuarias de Flo.

**Los cuatro fallos, como lista de comprobación inversa:**

1. Discrepancia entre lo prometido en la política y la realidad técnica.
2. SDKs de terceros que exfiltraban eventos con nombres autoexplicativos.
3. Ausencia de consentimiento explícito para categoría especial.
4. **El vector del daño fue el evento de analítica, no la base de datos.**

En Europa **no se localizó ninguna multa firme contra una app de ciclo
menstrual** *(no verificado)*. El patrón hoy es supervisión y advertencia. Eso
puede cambiar.

---

## 10. Requisitos accionables

### Arquitectura
1. Datos del ciclo estrictamente locales. Sin sincronización, sin backup, sin cuenta de pareja. **Ya implementado.**
2. Cero recursos externos: fuentes, CDN, iconos, píxeles. **Ya implementado.**
3. Cabecera CSP restrictiva (`default-src 'self'`). *Pendiente: depende del hosting.*
4. Supabase en región UE específica, DPA firmado, revisar subencargados, backups y logs. *Pendiente.*

### Analítica
5. Ningún identificador de analítica en el dispositivo.
6. Payload mínimo; timestamp truncado a la hora.
7. IP truncada o descartada en servidor, con prueba técnica.
8. **Nunca** datos del ciclo en eventos. **Ya implementado** (telemetría desactivada).

### El problema de la pareja
9. Puerta de consentimiento con casilla no premarcada. **Ya implementado.**
10. Aviso descargable para la pareja. *Pendiente.*
11. Borrado total de un clic. **Ya implementado.**
12. **No introducir compartir, exportar ni sincronizar sin rehacer este análisis.**

### Documentación
13. Política de privacidad específica, en lenguaje llano. *Pendiente.*
14. Registro de Actividades (Art. 30). *Pendiente.*
15. EIPD. *Pendiente.*
16. Declaración de edad mínima sin recoger fecha de nacimiento. *Pendiente.*
17. Procedimiento de brecha y contacto de privacidad publicado. *Pendiente.*

---

## Puntos no verificados

- Pronunciamiento de la AEPD sobre apps de ciclo menstrual: no encontrado.
- Resolución de la AEPD sobre Google Fonts: no encontrada.
- Multa RGPD firme contra una app de ciclo menstrual en la UE: no encontrada.
- Lista actual de subencargados de Supabase y sus ubicaciones: no accesible.
