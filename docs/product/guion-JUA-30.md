# Guion para la próxima sesión: JUA-30

Alinear el prototipo de «Hoy» y de consentimiento con la especificación del panel v1.1.0 y el mapa de pantallas.

## Antes de tocar código

1. Leer la especificación del panel «Hoy» v1.1.1 (JUA-25, PR #10; la v1.1.1 incorpora las duraciones de JUA-27), en especial §1, §3, §3.1, §3.2, §5 y §8.
2. Leer el mapa de pantallas (`docs/product/mapa-de-pantallas.md`), sección 5 de diferencias y las pantallas P-1, P-2 y C.1.
3. Revisar el estado actual del prototipo en `src/App.jsx` y `src/App.css`, y anotar qué diferencias siguen abiertas.

## Tareas de JUA-30

Implementar, en este orden:

| ID | Tarea | Referencia |
| -- | -- | -- |
| D-01 | Quitar los descargos repetidos del estado normal: solo ventana, «Actualizado» y «Cómo se calcula». | Panel §1 y §3 |
| D-03 | Añadir la barra de navegación P-1 (Hoy · Comprender · Datos), sin contadores, insignias ni notificaciones. | Mapa §2, P-1 |
| D-05 | Construir los estados excepcionales 1.2a–f, que sustituyen el bloque de fase y nunca muestran una fase como vigente. | Panel §5 |
| D-08 | Pantalla C.1 (consentimiento): lista por alcance con estados de retirada y mensajes C.2 deshabilitados. | CON-007 §2.1, §6 |
| D-11 | Rueda con segmentos proporcionales a la duración estimada de cada fase, ventana dibujada como arco y descripción accesible con día y ventana. | Panel §3.1, RU-05 a RU-07 y RU-12 |
| D-12 | Mostrar «Menstruación» durante la duración del sangrado declarada o, si no la hay, en los días 1 a 5 (antes 1 a 3; cambio de JUA-27); después, fase folicular. | Panel v1.1.1 §3.2, ME-01 a ME-06 |
| D-13 | Añadir «Días previos a la menstruación · estimación» en fase lútea, sin cambiar tarjetas, color ni tono. | Panel §3.2, IT-01 a IT-10 |

## Decisiones pendientes (no implementar sin decidir)

- **D-07:** cómo se muestra el margen («Margen 10 días») y la relación entre la fecha de hoy y la ventana. Panel §3 y §8.
- **D-19:** si la home muestra «Próxima menstruación». El wireframe P-2 la muestra; la especificación prohíbe cuentas atrás. Si se aprueba, añadirlo antes a la especificación.

Preguntar a Juan antes de aplicar cualquiera de las dos.

## Restricciones

- Todo con datos ficticios.
- Sin recursos externos, analítica ni almacenamiento de datos de ciclo.
- Los textos de las tarjetas solo con versiones aprobadas (JUA-23).
- Revisión de accesibilidad y móvil coordinada con JUA-8.

## Cierre

- Verificar la app en local (accesibilidad, móvil y estados 1.2a–f).
- Comentar en JUA-30 qué tareas quedan hechas y cuáles siguen abiertas.
- Abrir o actualizar el PR de la rama de trabajo, con la lista de tareas D-xx y sus estados.
- No marcar JUA-30 como completada si quedan D-07 o D-19 sin decidir.
