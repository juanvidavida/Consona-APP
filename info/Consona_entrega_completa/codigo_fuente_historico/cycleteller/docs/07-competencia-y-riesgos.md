# Competencia y riesgos de diseño

## 1. El mercado está partido en dos modelos, y la separación es nítida

### Modelo A — "Ella comparte desde su app" · dominante

Flo, Clue, Natural Cycles, Glow, Ovia. **Todas las apps con escala real usan
este modelo.** Ella es la titular, ella invita, ella revoca.

Cómo lo hacen exactamente, que sirve como referencia de buenas prácticas:

- **Flo for Partners.** La decisión más conservadora y la más reveladora: **la
  pareja NO ve sus datos de seguimiento. Recibe únicamente contenido educativo.**
  La app de ciclo más grande del mundo decidió que a la pareja se le da
  educación, no datos.
  https://flo.health/product-tour/flo-for-partners
- **Clue Connect.** Él ve solo días de regla, días fértiles, ovulación y SPM.
  **Ánimo, energía y dolor quedan ocultos siempre.** Ella debe aceptar una
  declaración explícita. Una sola persona a la vez.
- **Natural Cycles Partner View.** Granularidad campo a campo. Se comparten por
  defecto los días fértiles y las predicciones; **emociones, dolor, notas,
  actividad sexual y deseo sexual son opcionales y están desactivados por
  defecto**. Ella desactiva y el acceso se corta al instante.

**Denominador común:** los datos subjetivos (ánimo, deseo sexual, dolor) **nunca
se comparten por defecto**. Ninguna excepción.

### Modelo B — "Él registra los datos de ella" · nicho, con mal historial

**Generación 2010-2016, casi toda extinta:** Code Red (*"A Survival Guide to Her
Monthly Cycle"*, con un símbolo femenino con cuernos de diablo durante el SPM),
iAmAMan (permitía seguir a **varias mujeres a la vez**), PMS Buddy, uPMS,
Fredrick, TrackMyBitch, Period.Me.

**Generación 2025-2026, activa:** DuoSync, MoonM8, VibeCheck, PeriodBro,
Greenlight. Escala pequeña (DuoSync: 1.000+ descargas).

## 2. El hallazgo de mercado que más importa

**La generación nueva compite explícitamente en el eje del consentimiento.**

- **VibeCheck** vende: *"Tu pareja da permiso explícito antes de que se configure
  nada, y ella controla sus datos, incluido qué se comparte y si revocarlo. Eso
  es el fundamento, no una nota al pie."*
- **MoonM8** usa el modelo "hand-the-phone": él inicia la configuración pero
  **ella introduce sus propios datos**.

**El modelo sin consentimiento ya es el posicionamiento perdedor y heredado, no
el diferenciador.** Lanzar hoy una app en la que ella no participa sitúa al
producto, en percepción pública, junto a Code Red y uPMS — el linaje al que el
Washington Post dedicó *"también se podría decir que esto es asqueroso"*.

Y el nicho es pequeño. Se pagaría el coste reputacional por un mercado no demostrado.

*(Nota: las afirmaciones sobre consentimiento de VibeCheck, MoonM8, DuoSync y
PeriodBro proceden de sus propios sitios de marketing, no de verificación
independiente.)*

## 3. Riesgo de vigilancia en la pareja

**Levy y Schneier (2020), "Privacy Threats in Intimate Relationships".** Las
amenazas íntimas son una categoría distinta porque combinan motivaciones mixtas
(el mismo acto puede ser cuidado y control), copresencia física, diferenciales de
poder y conocimiento relacional. Dos conceptos aplicables aquí:

- **Consentimiento circular:** el agresor tiene a la vez la autoridad para
  consentir en nombre de la víctima.
- **"Blank slate problem":** cambiar los ajustes de privacidad es en sí mismo una
  señal de desconfianza que puede provocar escalada.

> Traducción directa a este producto: **que ella dijera que sí al principio no es
> consentimiento válido si retirarlo exige pedirle a él que borre algo de su móvil.**

https://par.nsf.gov/servlets/purl/10192797

**Freed et al. (CHI 2018, Cornell Tech), "A Stalker's Paradise".** Introduce el
**"UI-bound adversary"**: el agresor no hackea, usa la interfaz normal con
credenciales legítimas. Y las **apps de doble uso**: herramientas legítimas
convertidas en instrumentos de vigilancia, difíciles de detectar porque operan
dentro de funciones normales.

Su recomendación, aplicada en ADR-011: *degradar deliberadamente la usabilidad
para usuarios adversariales manteniendo la experiencia del usuario legítimo*.
https://nixdell.com/papers/stalkers-paradise-intimate.pdf

**eSafety Commissioner (Australia), Safety by Design:** ajustes más seguros por
defecto, evaluaciones de impacto continuas, y el principio rector: *"La carga de
la seguridad nunca debería recaer únicamente sobre el usuario."*

**Política de Google Play (2020):** las apps no pueden rastrear a cónyuges u
otras personas *"independientemente del consentimiento"*, salvo control parental
y gestión empresarial. *Matiz honesto: esa política apunta a código que recoge
datos de un dispositivo, y una webapp donde él teclea una fecha probablemente no
cae técnicamente dentro. Pero define la norma con la que un revisor de tienda o
un periodista juzgará el producto.*

## 4. El riesgo específico de la variable de intimidad

Escenario documentado en prensa: *"Puede ser un inconveniente cuando el tío usa
la información de la función para exigir sexo incluso cuando su pareja no se
siente con ganas."*

Contexto de prevalencia: 1 de cada 4 mujeres sufre violencia de pareja a lo largo
de su vida; entre clientas de planificación familiar con historial de violencia
física o sexual de pareja, el **15% reportó sabotaje anticonceptivo** por parte
de la pareja.

Ver ADR-006. La variable está eliminada.

## 5. Las cuatro críticas recurrentes desde 2010

Se repiten idénticas en toda la cobertura de prensa de este tipo de apps:

1. **La información es de ella y le corresponde a ella divulgarla.**
2. **Tono y encuadre sexistas.**
3. **Reducir sus emociones a hormonas, lo que permite desestimarlas.** Refinery29:
   estas apps *"permiten a los hombres desestimar preocupaciones laborales
   legítimas como si fueran cosa del SPM"*.
4. **Cisnormatividad:** no solo menstrúan mujeres cisgénero.

## 6. El estereotipo: la evidencia más incómoda para el diseño original

- **Roberts et al. (2002), el estudio del "tampon drop".** Una ayudante de
  investigación dejaba caer un tampón o una pinza de pelo. Quienes vieron el
  tampón la calificaron como **significativamente menos competente y menos
  agradable**, y se sentaron más lejos.
- **Forbes et al. (2003).** Estudiantes calificaron a las mujeres menstruantes
  como *"menos sexys, más impuras y más irritables que las mujeres en general"*.
- **Marván et al. (2008).** Asociación libre sobre mujeres menstruantes: **92
  descriptores negativos frente a 33 positivos**.
- **Kowalski y Chapple (2000).** Las mujeres entrevistadas por hombres **que
  sabían que estaban menstruando** creían haber causado peor impresión y estaban
  menos preocupadas por causar una buena. **El conocimiento del estatus menstrual
  por parte del hombre suprimió su autoafirmación.**

> El mecanismo dañino no es que él sepa que ella menstrúa. Es que la información
> **active la atribución antes de la interacción**. Una pantalla que dice "hoy
> está en fase lútea, espera irritabilidad" es ese mecanismo, entregado a diario.

## 7. Lo que sí funciona

**Ussher y Perz (2017), PLOS ONE.** Ensayo controlado aleatorizado, 83 mujeres
con trastornos premenstruales, tres brazos: terapia cognitivo-conductual **de
pareja**, individual y lista de espera.

- La condición de pareja logró **afrontamiento conductual activo
  significativamente mayor** que la individual.
- En resultados de relación: **84% frente al 39%** reportó mayor comprensión de
  la pareja y mejora de la relación.
- **El mecanismo:** técnicas de **diálogo de pareja** e implicación activa de él
  en desarrollar estrategias **conjuntas**. No transferencia de información sobre ella.

Y un dato que contradice una intuición común: la conducta de pareja que **más
empeora** el malestar premenstrual es la **evitación**. Cuando él se aparta
durante los síntomas, ella se siente rechazada y el estrés aumenta.
https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175068

**Educación menstrual con chicos:** un pilotaje en escuelas de Bangladesh (201
chicos, media 13,5 años) con currículo de cuatro módulos elevó el conocimiento
un 15% y el acuerdo con "puedo apoyar a las chicas durante la menstruación" del
29% al 47%. Funciona como **currículo**, no como app de seguimiento.

## 8. Lagunas declaradas

1. **No se localizó ninguna app en español dirigida a hombres.** Es hueco de
   mercado y también señal.
2. **No existe ningún estudio que evalúe la eficacia de una app para parejas
   masculinas.** La evidencia positiva es de terapia presencial y currículo
   escolar. Este formato es empíricamente virgen.
3. No se encontró ninguna retirada formal de tiendas de una app de este tipo. El
   riesgo demostrado es reputacional, no de retirada.
4. No se encontró cobertura crítica independiente de la generación 2025-2026.
   Puede significar que aún no ha llamado la atención, o que está por llegar.
