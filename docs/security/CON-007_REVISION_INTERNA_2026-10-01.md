# CON-007 — Revisión registrada de producto, privacidad/seguridad e ingeniería

**Fecha:** 1 de octubre de 2026
**Incidencia:** JUA-20 / CON-007
**Artefactos revisados:**

- [`CON-007_AUTORIZACION_REVOCACION_Y_OFFLINE.md`](./CON-007_AUTORIZACION_REVOCACION_Y_OFFLINE.md)
- [`CON-007_MATRIZ_DE_PRUEBAS.md`](./CON-007_MATRIZ_DE_PRUEBAS.md)
- [`con-007-estados.mmd`](./con-007-estados.mmd)
- ADR-001 y ADR-002 vigentes.

**Naturaleza de la revisión:** revisión interna de diseño asistida, basada en los ADR y en los artefactos versionados. **No es** un dictamen jurídico, una EIPD, una evaluación independiente de violencia tecnológica, una prueba de implementación ni una autorización de piloto. Los responsables formales de producto, privacidad/seguridad e ingeniería deben registrar su aprobación o sus objeciones en JUA-20 o en el PR antes de cerrar la incidencia.

---

## 1. Decisión de revisión

| Disciplina | Resultado del análisis interno | Alcance de la decisión |
|---|---|---|
| Producto | **Conforme con condiciones** | El diseño respeta control directo, granularidad, conversación y límites no diagnósticos. Aún no valida comprensión real con personas ni habilita interfaz funcional. |
| Privacidad y seguridad | **Conforme con condiciones** | El protocolo es consistente con la regla local tras la corrección F-01. Quedan obligatorios CON-008, CON-010, CON-013, CON-015, JUA-17 y JUA-18 antes de datos reales. |
| Ingeniería | **Conforme con condiciones** | El modelo de estados y la matriz son implementables como especificación. La conformidad de código requiere futuras pruebas de almacenamiento, caché, red, reinicio e idempotencia. |

**Conclusión:** el paquete puede servir como insumo para CON-008 y para la revisión jurídica preparatoria de CON-010. **JUA-20 permanece en `In Progress`**: esta revisión no prueba C3–C5 en un flujo real ni permite cerrar JUA-13.

---

## 2. Hallazgo material y corrección aplicada

### F-01 — Un alcance semántico no puede llegar al servicio mínimo

**Severidad inicial:** alta.
**Origen:** el primer borrador podía interpretarse como que `categoría × fuente` —por ejemplo, una variable física y `self_report`— era parte de una señal que el servicio de coordinación pudiera procesar.

Eso contradice ADR-001: el estado de consentimiento remoto no puede incorporar alcance clínico, variables, síntomas, fases ni historial. Aunque un nombre de alcance no contenga una fecha, revelaría información sensible sobre qué tipo de dato se intenta gestionar.

**Corrección aplicada en esta revisión:**

- `scope` se define explícitamente como **alcance local**;
- la coordinación solo puede usar una **referencia opaca, efímera o rotable**, que no codifica categoría, fuente, fase, variable ni finalidad;
- el significado de la referencia solo vive en los dispositivos de control y receptor;
- el protocolo exige que CON-008 rechace el campo remoto `scope` y cualquier categoría o fuente;
- la matriz incorpora A-07 y amplía A-05, O-05 y S-01 para comprobar opacidad, orden e inspección de cargas/logs.

**Estado:** corregido en la rama de JUA-20; debe verificarse técnicamente en CON-008 y JUA-17.

---

## 3. Revisión de producto

| Criterio | Evidencia revisada | Resultado | Condición o seguimiento |
|---|---|---|---|
| La persona afectada decide directamente. | Protocolo §§ 1, 3 y 4; prueba A-01. | Conforme. | El flujo funcional futuro debe impedir que la pareja active permisos desde su interfaz. |
| La explicación precede a aceptación o rechazo. | Protocolo § 3, invariante 2; prueba A-02. | Conforme. | Revisar accesibilidad y comprensión de copy al diseñar P2 funcional. |
| El consentimiento no es global. | Protocolo §§ 2.1 y 3; pruebas A-04/A-05. | Conforme. | La lista de alcances locales sigue sujeta a la taxonomía y a futuras decisiones de ADR-002. |
| Retirada con efecto comprensible. | Protocolo §§ 5–6; pruebas R-01 a R-07 y O-01 a O-04. | Conforme. | La interfaz no podrá mostrar “borrado completado” fuera del dispositivo que realmente lo haya ejecutado. |
| Lenguaje evita vigilancia, diagnóstico y sexualización. | Límites del protocolo; prueba S-03. | Conforme. | Mantener revisión clínica/editorial y no convertir educación en inferencia sobre otra persona. |

### Observaciones de producto abiertas

1. La validación de comprensión, accesibilidad y lenguaje final requiere una interfaz funcional posterior; no se infiere de un documento.
2. La experiencia de reautorización debe explicar que empieza un ciclo nuevo y no restaura información antigua.
3. Ninguna futura pantalla de control debe exponer categorías, fuentes o estados de otra persona a quien consulta la aplicación sin una decisión de producto, privacidad y seguridad posterior.

---

## 4. Revisión de privacidad y seguridad

| Control | Evidencia revisada | Resultado | Límite / dependencia |
|---|---|---|---|
| Localidad de datos de ciclo y derivados. | Protocolo §§ 1, 3, 5 y 7. | Conforme de diseño. | JUA-17 debe demostrarlo en red, dependencias, errores y logs reales. |
| Rechazo por defecto y decisión directa. | Invariantes 1–3; A-01 a A-06. | Conforme de diseño. | Requiere P2 funcional, pruebas y revisión de UX. |
| Borrado, caché, claves y derivados. | Protocolo §§ 5 y 7; R-01 a R-07. | Conforme de especificación. | JUA-18 debe probarlo en almacenamiento real, Service Worker, reinicio y recomputación. |
| Límite offline. | Protocolo § 6; O-01 a O-05. | Conforme de transparencia. | EIPD, revisión jurídica y modelo de amenazas deben decidir medidas adicionales para periodos sin conexión. |
| Sin vigilancia periódica. | Invariante 7; S-02. | Conforme de diseño. | CON-008 y la arquitectura deben impedir sondeo, analítica y telemetría incidentales. |
| Opacidad del servicio mínimo. | Corrección F-01; A-05, A-07, S-01. | Conforme condicionado. | CON-008 debe concretar esquema cerrado, rotación, retención, purga, errores y rechazo de campos semánticos. |
| Resistencia a coerción, suplantación y dispositivo comprometido. | Referencias a CON-013 y CON-015. | **Pendiente fuera de alcance.** | No se interpreta el protocolo como mitigación suficiente. Puede vetar el modelo E o funciones de pareja. |
| Revisión jurídica y EIPD. | CON-010 y CON-013 pendientes. | **Pendiente fuera de alcance.** | Ninguna conclusión de este documento las sustituye. |

### Riesgos residuales registrados

- Una retirada no puede borrar un receptor sin conexión, apagado, desinstalado o comprometido antes de que reciba la señal.
- La seguridad del vínculo técnico y la protección frente a reenvío/suplantación siguen sin diseñarse; pertenecen a CON-015 y CON-008.
- Incluso una referencia opaca puede generar metadatos de correlación; CON-008 debe minimizar, rotar, expirar y purgar, y CON-013 debe valorar su riesgo.
- Una PWA puede retener caché o claves; JUA-18 deberá verificar eliminación con la arquitectura real.

---

## 5. Revisión de ingeniería

| Criterio | Resultado | Condición de implementación posterior |
|---|---|---|
| Máquina de estados por alcance local. | Conforme. | Codificar transiciones explícitas y negar operaciones desde cualquier estado salvo `autorizado_activo`. |
| Bloqueo antes de borrar. | Conforme. | La transición de retirada debe ser atómica frente a lecturas, escrituras y cálculos concurrentes. |
| Idempotencia y orden de eventos. | Conforme de especificación. | CON-008 deberá definir versión/nonce/referencia opaca; las pruebas O-05 y R-06 deben ejecutarse con entrega duplicada y fuera de orden. |
| Borrado de derivados y caché. | Conforme de inventario. | Inventariar las tecnologías reales de almacenamiento y evitar que Service Worker o errores conserven datos. |
| Testabilidad. | Conforme. | Implementar los escenarios A, R, O y S solo con fixtures sintéticos y un mock local de CON-008. |
| Observabilidad. | Conforme condicionado. | La evidencia técnica no puede contener payloads o estados sensibles; el diseño de logs corresponde a CON-008. |

### Decisiones de ingeniería vinculantes

1. El adaptador entre estado local y cualquier red futura debe ser **unidireccional y de lista permitida**: recibe una referencia opaca y operación técnica; rechaza objetos con `scope`, categorías, fuentes, fechas, fases, variables, contenido, identidad o propiedades adicionales.
2. La ruta de retirada debe bloquear en memoria antes de tocar almacenamiento y solo completar tras invalidar todos los derivados identificados.
3. Las pruebas deben cubrir recarga, reapertura, Service Worker, caché, IndexedDB/almacenamiento que se adopte y mensajes duplicados/fuera de orden.
4. No se añade backend, endpoint operativo ni dependencia de observabilidad hasta que CON-008, CON-010, CON-013, CON-015 y la arquitectura local-first lo permitan.

---

## 6. Condiciones para pasar de revisión a cierre de CON-007

Para poder proponer `Done` en JUA-20 deberán coexistir:

- aprobación o ausencia de objeciones registradas por los responsables de producto, privacidad/seguridad e ingeniería sobre esta revisión y el PR;
- trazabilidad de la corrección F-01 hacia el contrato cerrado de CON-008;
- confirmación de que la matriz de pruebas será implementada con fixtures sintéticos, no con datos personales;
- no introducir una función de captura, persistencia, emparejamiento, sincronización, cálculo o piloto como consecuencia de esta revisión;
- mantener JUA-18 bloqueada hasta disponer de flujos implementados y evidencia de borrado real.

El cierre de CON-007 seguirá sin cerrar C1, C2, C6–C10 de ADR-001 ni P1–P8 de ADR-002; JUA-13 conserva su carácter de puerta acumulativa.

## 7. Registro de firmas / objeciones formales

| Función | Revisión interna asistida | Aprobación formal humana o responsable designado |
|---|---|---|
| Producto | Conclusión documentada en §3. | Pendiente de registrar en JUA-20 o PR #5. |
| Privacidad/seguridad | Conclusión documentada en §4; no es revisión jurídica ni EIPD. | Pendiente de registrar en JUA-20 o PR #5. |
| Ingeniería | Conclusión documentada en §5. | Pendiente de registrar en JUA-20 o PR #5. |

---

## Referencias

- ADR-001, §§ 2–5.
- ADR-002, §§ 3–7.
- JUA-20 / CON-007 y [PR #5](https://github.com/juanvidavida/Consona-APP/pull/5).
- JUA-17 / P8, JUA-18 / P5, JUA-21 / CON-008, JUA-22 / CON-010 y JUA-13.
