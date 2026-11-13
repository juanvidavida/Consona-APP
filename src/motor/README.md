# Motor local de Consona

Módulos puros para las dos apps (la de quien acompaña y la app mínima de ella). Por ahora contiene solo:

- `fechas.js`: fechas de calendario `AAAA-MM-DD`, sin hora. Se cuentan como días enteros sobre `Date.UTC`, así que la zona horaria y el cambio de hora no desplazan ningún día. Los instantes de registro, envío y recepción son ISO UTC y no se tratan aquí.
- `sugerencia.js`: decide qué sugerencia de actualización ve ella dentro de su app.
  - Entrada: el estado del motor de estimación (CON-032, JUA-48, todavía sin portar), la fecha de hoy inyectada, si comparte las fechas y su aplazamiento.
  - Salida: `null` o `{ tipo, bloque, ultimoInicio }`. Los bloques SUG-01 a SUG-04 son los textos de la app de ella.

No calcula nada del ciclo: reutiliza las reglas del motor. No hay avisos con la app cerrada ni servidor de notificaciones. La app evalúa la sugerencia:

- al cargar;
- al volver a primer plano (`visibilitychange`, `pageshow`);
- después de cualquier cambio de fechas o de permisos.

El aplazamiento («Ahora no») se guarda solo en el dispositivo de ella y se borra con sus datos (CON-007).

| Estado del motor | Sugerencia |
|---|---|
| `retirado`, `anticoncepcion`, o no comparte las fechas | Ninguna |
| `insuficiente`, o sin último inicio | `registrar_primera` (SUG-01) |
| `normal`, antes de `ventana.desde` | Ninguna |
| `normal`, desde `ventana.desde` | `discreta` (SUG-02) |
| `menstruacion_estimada`, `estimacion`, `datos_antiguos` | `recordar_ultima` (SUG-03) |
| `fuera_de_vigencia`, 21 días o más desde el último inicio | `neutral` (SUG-04) |

`diasNeutral` (21) y `diasAplazar` (7) son parámetros de experiencia de uso, no umbrales clínicos.

**Límite.** Este código no habilita datos reales. Solo se usa con fechas ficticias hasta que se cumplan las condiciones de ADR-001 y de JUA-13.

## Pruebas

```sh
npm run test:motor
# Independencia de la zona horaria: la misma suite en los extremos (UTC+14 y UTC−8)
TZ=Pacific/Kiritimati npm run test:motor
TZ=America/Los_Angeles npm run test:motor
TZ=Europe/Madrid npm run test:motor
```

Las pruebas cubren:

- cada fila de la tabla y sus límites;
- el aplazamiento;
- que no se modifican las entradas;
- las fechas no válidas;
- el cambio de hora europeo del 25-10-2026.
