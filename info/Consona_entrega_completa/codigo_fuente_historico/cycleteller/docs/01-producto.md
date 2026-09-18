# El producto

## Qué es

Webapp educativa en español que explica el ciclo menstrual a hombres en relación
de pareja. Solo el hombre tiene cuenta; la mujer no se registra.

- **Público objetivo declarado:** hombres y parejas de 16 a 66 años.
- **Filosofía declarada:** educación, empatía, consentimiento. No predicción, no rastreo.
- **Idioma:** 100% español.
- **Sin chatbot de IA.**

## Personas de usuario

| Persona | Edad | Objetivo |
|---|---|---|
| Lucas | 16 | Aprender de forma preventiva |
| Carlos | 24 | Entender los cambios de su pareja |
| Diego | 35 | Resolver conflictos de pareja |
| Luis | 42 | Mejorar la relación |
| Sofía | — | La pareja menstruante. Su objetivo es sentirse entendida. No usa la app. |

**Observación de la auditoría sobre las personas.** Sofía está definida como
persona pero no como usuaria. Es coherente con el diseño actual y es, a la vez,
exactamente el problema: la única persona cuyos datos de salud están en juego es
la única que no tiene ninguna forma de intervenir. Ver ADR-001.

Sobre Lucas: un usuario de 16 años implica que su pareja probablemente también
tenga 16. En España un menor puede consentir sobre sus **propios** datos desde
los 14 años (Art. 7 LOPDGDD), lo que significa que no hace falta verificación
parental. Pero eso no le habilita para tratar datos de salud de otra persona.
Una app comparable (Greenlight) se clasifica 18+.

## Estado del trabajo previo

**Completado antes de esta auditoría:** investigación científica (~12.000
palabras), benchmarking de más de 14 apps, 5 personas con escenarios de
conflicto, pantalla principal ejecutable, variables por fase, contenido
educativo de Capa 2, filosofía y arquitectura.

**Advertencia importante:** la investigación científica original **no está en
este paquete** y no ha podido verificarse. La auditoría de septiembre de 2026
encontró que varias afirmaciones que circulaban en el proyecto (ovulación el día
14, fase lútea de 14 días fijos, irritabilidad lútea como norma) no se sostienen
frente a la evidencia. Si aparecen esos documentos, hay que contrastarlos con
`04-auditoria-cientifica.md` antes de reutilizarlos.

## La tensión central del producto, en una frase

La filosofía dice "no predicción". Calcular la fase a partir de la fecha de la
última regla **es** una predicción, y de las poco fiables. O se abandona la
afirmación, o se abandona el cálculo. Mantener las dos cosas a la vez es lo que
hace que el producto no se pueda describir con honestidad.

## Dónde está el hueco real de mercado

No se localizó **ninguna app en español dirigida a hombres** de este tipo. El
hueco existe, y la necesidad está documentada: en España el 56% de las personas
encuestadas puntúa 5 o menos sobre 10 en conocimiento menstrual.

Lo que también está documentado es que ese hueco se llena con educación y
diálogo. Ver `03-variables-pantalla-inicio.md`, sección 4.
