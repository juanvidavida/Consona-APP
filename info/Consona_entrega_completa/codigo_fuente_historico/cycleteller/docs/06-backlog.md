# Backlog priorizado

El orden importa. Los bloques de arriba condicionan a los de abajo: hacer trabajo
del bloque 3 antes de cerrar el bloque 0 es construir encima de una decisión que
todavía puede cambiar.

---

## Bloque 0 — Decisiones de Juan. Nada de código.

- [ ] **ADR-001: elegir el modelo de titularidad de los datos.** Opción A (solo
      educación, sin datos de ella), B (ella invita desde su cuenta), C (ella
      introduce en el móvil de él) o D (el actual). **Todo lo demás depende de esto.**
- [ ] Decidir si se adopta el set de variables v2. *(Recomendado: sí. Ya está activo.)*
- [ ] Decidir la edad mínima: 16 o 18.
- [ ] Decidir si el producto mantiene la afirmación "no es predicción". Si la
      mantiene, hay que quitar el cálculo de fase.

## Bloque 1 — Legal. Bloquea el piloto.

- [ ] Revisión legal con un profesional. Llevarle `05-rgpd.md` ya redactado.
- [ ] Política de privacidad específica, en lenguaje llano apto para 16 años.
- [ ] Aviso descargable para la pareja: qué se guarda, dónde, cómo pedir el borrado.
- [ ] Registro de Actividades de Tratamiento (Art. 30 RGPD).
- [ ] Evaluación de Impacto (EIPD). Obligatoria si los datos del ciclo llegan
      alguna vez al servidor; recomendable igualmente.
- [ ] Verificar la lista de subencargados de Supabase y dónde residen backups y logs.

## Bloque 2 — Contenido. Se puede hacer en paralelo al bloque 1.

- [ ] Revisar todos los textos de Capa 2 con el mismo criterio que se aplicó a
      Capa 1: nada determinista, lenguaje probabilístico, sin predecir su interior.
- [ ] Escribir el módulo de consentimiento sexual, **no indexado por fase** (sustituye
      a la variable eliminada en ADR-006).
- [ ] Escribir el módulo de sesgo de atribución ("si piensas «está con la regla»…").
- [ ] Escribir el contenido para usuarias de anticoncepción hormonal, más allá
      del texto de marcador que hay ahora en `content.v2.js → sinFases`.
- [ ] Añadir señales de derivación médica: ciclos consistentemente menores de 21
      o mayores de 35 días, dolor incapacitante, ausencia de regla. Es contenido
      con respaldo clínico sólido y valor real: el SOP afecta al 10-13% de las
      mujeres y hasta el 70% está sin diagnosticar.

## Bloque 3 — Producto. Solo después del bloque 0.

- [ ] Onboarding completo (fases 1-3: registro → contexto → fuente de datos).
- [ ] Integrar los módulos educativos en la app.
- [ ] Calendario. **Replantear antes de construirlo:** un calendario con scroll
      infinito y predicciones es justo el "expediente" que ADR-011 quiere evitar.
      Si se hace, sin historial retrospectivo largo.
- [ ] Revisión de seguridad orientada a violencia de pareja, con una entidad
      especializada, antes de cualquier lanzamiento público.

## Bloque 4 — Infraestructura.

- [ ] Elegir hosting. Requisito: servidores en España o la UE. Se estaban
      evaluando LucusHost (Madrid), Webempresa y Raiola Networks; Hostinger
      quedó descartado por residencia de datos poco clara.
- [ ] Cabecera CSP restrictiva (`default-src 'self'`). Es seguridad y a la vez
      garantía técnica de que no se filtra nada a terceros.
- [ ] Si se activa la telemetría: proyecto Supabase en región UE **específica**
      (`eu-central-1` o `eu-west-3`, nunca la región genérica "Europe"), DPA
      firmado, IP truncada, sin identificador persistente.

## Deuda técnica menor

- [ ] `content.v1.js` puede borrarse cuando la decisión de variables esté cerrada.
- [ ] Los textos siguen dentro de archivos `.js`. Si en algún momento los edita
      alguien que no programa, conviene moverlos a JSON o a un CMS.
- [ ] No hay tests de la interfaz más allá de la prueba de humo.
