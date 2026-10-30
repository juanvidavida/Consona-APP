#!/usr/bin/env python3
"""
Genera la landing de consonaapp.com en castellano, catalán e inglés.

Todas las páginas salen de las plantillas y los textos de este archivo, para
que las tres versiones no se descoordinen. No editar a mano lo generado en
landing/: cambiar aquí y volver a ejecutar.

    python3 landing-fuente/build.py

Escribe en landing/:
    index.php              portada en castellano, con detección de idioma
    gracias.html, baja.html, baja-hecha.html, error.html, privacidad.html
    ca/…, en/…             las mismas páginas en catalán e inglés

No toca suscribir.php, baja.php ni fonts/, que se mantienen a mano.
Solo usa la biblioteca estándar de Python.
"""

from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent / "landing"
DOMINIO = "https://consonaapp.com"
IDIOMAS = ["es", "ca", "en"]
ACTUALIZACION = {"es": "30 de octubre de 2026", "ca": "30 d’octubre de 2026", "en": "30 October 2026"}

# --- Rutas -------------------------------------------------------------------

def prefijo(l):
    """Carpeta de cada idioma: el castellano vive en la raíz."""
    return "/" if l == "es" else f"/{l}/"


def ruta(l, pagina):
    """Ruta pública de una página. pagina = "" es la portada."""
    return prefijo(l) + pagina


def href_selector(l, pagina):
    # La portada en castellano lleva ?idioma=es para que index.php no vuelva a
    # redirigir a quien eligió castellano a mano.
    if pagina == "" and l == "es":
        return "/?idioma=es"
    return ruta(l, pagina)


# --- Textos ------------------------------------------------------------------

T = {
    "es": dict(
        idioma_nombre="Castellano", selector="Idioma",
        prox="Próximamente",
        intro="Consona, educación sobre el ciclo menstrual para hombres que quieren acompañar a su pareja.",
        datos="Tus datos se quedan en tu dispositivo.",
        correo="Tu correo", ejemplo="nombre@ejemplo.com", trampa="No rellenes este campo",
        edad="Tengo 18 años o más.",
        cons='Acepto que uséis mi correo solo para avisarme cuando abra el piloto, según la <a href="{privacidad}">política de privacidad</a>.',
        boton="Avísame cuando abra el piloto",
        nota="Un único aviso, sin publicidad.",
        bajaq='¿Ya te apuntaste y quieres borrarte? <a href="{baja}">Date de baja</a>.',
        g_et="Apuntado", g_h="Gracias",
        g_p="Te avisaremos una sola vez, cuando abra el piloto de Consona.",
        g_s='Si cambias de opinión, puedes <a href="{baja}">darte de baja</a> cuando quieras.',
        volver="Volver a consonaapp.com",
        b_et="Baja", b_h="Darte de baja",
        b_p="Escribe el correo con el que te apuntaste y lo borraremos de la lista del aviso.",
        b_bt="Darme de baja",
        b_s="Si no recuerdas con qué correo te apuntaste, escríbenos a hola@consonaapp.com.",
        h_et="Baja", h_h="Listo",
        h_p="Si ese correo estaba en la lista, lo hemos borrado y no recibirás el aviso.",
        e_et="Error", e_h="No se ha podido enviar",
        e_p="Revisa que el correo esté bien escrito y, si te estabas apuntando, que hayas marcado las dos casillas. Vuelve a intentarlo dentro de un rato.",
        e_s="Si el problema sigue, escríbenos a hola@consonaapp.com.",
        t_inicio="Consona — Próximamente", t_gracias="Consona — Gracias", t_baja="Consona — Darte de baja",
        t_hecha="Consona — Baja hecha", t_error="Consona — No se ha podido enviar", t_priv="Consona — Política de privacidad",
        descripcion="Consona: educación sobre el ciclo menstrual para parejas. Próximamente.",
    ),
    "ca": dict(
        idioma_nombre="Català", selector="Idioma",
        prox="Properament",
        intro="Consona, educació sobre el cicle menstrual per a homes que volen acompanyar la seva parella.",
        datos="Les teves dades es queden al teu dispositiu.",
        correo="El teu correu", ejemplo="nom@exemple.com", trampa="No omplis aquest camp",
        edad="Tinc 18 anys o més.",
        cons='Accepto que feu servir el meu correu només per avisar-me quan obri el pilot, segons la <a href="{privacidad}">política de privacitat</a>.',
        boton="Avisa’m quan obri el pilot",
        nota="Un únic avís, sense publicitat.",
        bajaq='Ja t’hi vas apuntar i vols esborrar-te? <a href="{baja}">Dona’t de baixa</a>.',
        g_et="Apuntat", g_h="Gràcies",
        g_p="T’avisarem una sola vegada, quan obri el pilot de Consona.",
        g_s='Si canvies d’opinió, et pots <a href="{baja}">donar de baixa</a> quan vulguis.',
        volver="Tornar a consonaapp.com",
        b_et="Baixa", b_h="Donar-te de baixa",
        b_p="Escriu el correu amb què t’hi vas apuntar i l’esborrarem de la llista de l’avís.",
        b_bt="Donar-me de baixa",
        b_s="Si no recordes amb quin correu t’hi vas apuntar, escriu-nos a hola@consonaapp.com.",
        h_et="Baixa", h_h="Fet",
        h_p="Si aquest correu era a la llista, l’hem esborrat i no rebràs l’avís.",
        e_et="Error", e_h="No s’ha pogut enviar",
        e_p="Comprova que el correu estigui ben escrit i, si t’hi estaves apuntant, que hagis marcat les dues caselles. Torna-ho a provar d’aquí a una estona.",
        e_s="Si el problema continua, escriu-nos a hola@consonaapp.com.",
        t_inicio="Consona — Properament", t_gracias="Consona — Gràcies", t_baja="Consona — Donar-te de baixa",
        t_hecha="Consona — Baixa feta", t_error="Consona — No s’ha pogut enviar", t_priv="Consona — Política de privacitat",
        descripcion="Consona: educació sobre el cicle menstrual per a parelles. Properament.",
    ),
    "en": dict(
        idioma_nombre="English", selector="Language",
        prox="Coming soon",
        intro="Consona, education about the menstrual cycle for men who want to support their partner.",
        datos="Your data stays on your device.",
        correo="Your email", ejemplo="name@example.com", trampa="Leave this field empty",
        edad="I am 18 or older.",
        cons='I agree that you use my email only to let me know when the pilot opens, as set out in the <a href="{privacidad}">privacy policy</a>.',
        boton="Let me know when the pilot opens",
        nota="A single notice, no advertising.",
        bajaq='Already signed up and want to be removed? <a href="{baja}">Unsubscribe</a>.',
        g_et="Signed up", g_h="Thank you",
        g_p="We will let you know once, when the Consona pilot opens.",
        g_s='If you change your mind, you can <a href="{baja}">unsubscribe</a> at any time.',
        volver="Back to consonaapp.com",
        b_et="Unsubscribe", b_h="Unsubscribe",
        b_p="Enter the email you signed up with and we will remove it from the notice list.",
        b_bt="Unsubscribe me",
        b_s="If you don’t remember which email you used, write to hola@consonaapp.com.",
        h_et="Unsubscribe", h_h="Done",
        h_p="If that email was on the list, we have deleted it and you will not receive the notice.",
        e_et="Error", e_h="We could not send it",
        e_p="Check that your email is spelled correctly and, if you were signing up, that you ticked both boxes. Then try again in a while.",
        e_s="If the problem persists, write to us at hola@consonaapp.com.",
        t_inicio="Consona — Coming soon", t_gracias="Consona — Thank you", t_baja="Consona — Unsubscribe",
        t_hecha="Consona — Unsubscribed", t_error="Consona — We could not send it", t_priv="Consona — Privacy policy",
        descripcion="Consona: education about the menstrual cycle for couples. Coming soon.",
    ),
}

# Política de privacidad. {baja} se sustituye por la ruta de la baja del idioma.
# Fuentes de «Quién más interviene»: la ubicación del servidor la confirma el
# administrador del alojamiento (30-10-2026); la transferencia a EE. UU. de
# Namecheap, su soporte (30-10-2026), que remite a su Data Processing Addendum:
# https://www.namecheap.com/legal/universal/data-processing-addendum/
PRIVACIDAD = {
    "es": """      <p class="etiqueta">Privacidad</p>
      <h1>Política de privacidad</h1>
      <p class="suave">Última actualización: {fecha}</p>

      <p>Esta política cubre la web consonaapp.com, sus formularios de aviso y de baja, y el correo hola@consonaapp.com. Cuando exista la app, sus datos se quedarán en tu dispositivo y tendrá su propia política.</p>

      <h2>Responsable</h2>
      <p>Juan Vidaechea. Contacto: <a href="mailto:hola@consonaapp.com">hola@consonaapp.com</a>.</p>

      <h2>Qué datos tratamos</h2>
      <p>Si te apuntas en el formulario: tu dirección de correo, el idioma de la página y la fecha y hora en que te apuntaste. No te pedimos el nombre. Si nos escribes, también tu correo y el contenido del mensaje.</p>
      <p>Para evitar abusos, los formularios guardan una huella cifrada de la dirección IP desde la que se envían y la borran en 24 horas. La portada lee el idioma configurado en tu navegador para mostrarte la web en castellano, catalán o inglés, y no lo guarda. Esta web no usa cookies, analítica ni recursos de terceros.</p>

      <h2>Para qué</h2>
      <p>Para enviarte un único aviso cuando abra el piloto de Consona y para responder a lo que nos preguntes. No enviaremos publicidad ni cederemos tu correo a nadie.</p>

      <h2>Base jurídica</h2>
      <p>Tu consentimiento (artículo 6.1.a del RGPD), que das al marcar la casilla del formulario. Puedes retirarlo en cualquier momento con el <a href="{baja}">formulario de baja</a> o escribiendo a hola@consonaapp.com.</p>

      <h2>Edad</h2>
      <p>El piloto es solo para personas de 18 años o más, y el formulario te pide confirmarlo. Si eres menor de edad, no te apuntes; si lo haces, borraremos tus datos.</p>

      <h2>Si alguien te apuntó sin tu permiso</h2>
      <p>El formulario no comprueba que el correo sea de quien lo escribe. Si crees que alguien ha apuntado tu dirección, bórrala con el <a href="{baja}">formulario de baja</a> o escríbenos.</p>

      <h2>Cuánto tiempo</h2>
      <p>Conservamos tu correo hasta enviarte el aviso de apertura del piloto o hasta que te des de baja, lo que ocurra antes. Después lo eliminamos.</p>

      <h2>Quién más interviene</h2>
      <p>Dos proveedores tratan datos por cuenta del responsable, solo para prestar su servicio:</p>
      <ul>
        <li><strong>IONOS SE</strong>: esta web y los datos del formulario están en un servidor de un centro de datos de IONOS en la Unión Europea.</li>
        <li><strong>Namecheap, Inc.</strong>, con su servicio Private Email, gestiona el buzón hola@consonaapp.com, desde el que enviamos el aviso y respondemos.</li>
      </ul>
      <p>Namecheap puede tratar los datos en Estados Unidos. Esa transferencia se ampara en las cláusulas contractuales tipo de la Comisión Europea, incluidas en su acuerdo de tratamiento de datos. Puedes pedirnos más información en hola@consonaapp.com.</p>

      <h2>Tus derechos</h2>
      <p>Puedes pedir el acceso, la rectificación, la supresión, la limitación, la oposición y la portabilidad de tus datos escribiendo a hola@consonaapp.com. Si crees que no los hemos tratado bien, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es">aepd.es</a>).</p>
""",
    "ca": """      <p class="etiqueta">Privacitat</p>
      <h1>Política de privacitat</h1>
      <p class="suave">Darrera actualització: {fecha}</p>

      <p>Aquesta política cobreix el web consonaapp.com, els seus formularis d’avís i de baixa, i el correu hola@consonaapp.com. Quan existeixi l’app, les seves dades es quedaran al teu dispositiu i tindrà la seva pròpia política.</p>

      <h2>Responsable</h2>
      <p>Juan Vidaechea. Contacte: <a href="mailto:hola@consonaapp.com">hola@consonaapp.com</a>.</p>

      <h2>Quines dades tractem</h2>
      <p>Si t’apuntes al formulari: la teva adreça de correu, l’idioma de la pàgina i la data i l’hora en què t’hi vas apuntar. No et demanem el nom. Si ens escrius, també el teu correu i el contingut del missatge.</p>
      <p>Per evitar abusos, els formularis desen una empremta xifrada de l’adreça IP des de la qual s’envien i l’esborren en 24 hores. La portada llegeix l’idioma configurat al teu navegador per mostrar-te el web en castellà, català o anglès, i no el desa. Aquest web no fa servir galetes, analítica ni recursos de tercers.</p>

      <h2>Per a què</h2>
      <p>Per enviar-te un únic avís quan obri el pilot de Consona i per respondre al que ens preguntis. No enviarem publicitat ni cedirem el teu correu a ningú.</p>

      <h2>Base jurídica</h2>
      <p>El teu consentiment (article 6.1.a del RGPD), que dones en marcar la casella del formulari. El pots retirar en qualsevol moment amb el <a href="{baja}">formulari de baixa</a> o escrivint a hola@consonaapp.com.</p>

      <h2>Edat</h2>
      <p>El pilot és només per a persones de 18 anys o més, i el formulari et demana que ho confirmis. Si ets menor d’edat, no t’hi apuntis; si ho fas, esborrarem les teves dades.</p>

      <h2>Si algú t’ha apuntat sense el teu permís</h2>
      <p>El formulari no comprova que el correu sigui de qui l’escriu. Si creus que algú ha apuntat la teva adreça, esborra-la amb el <a href="{baja}">formulari de baixa</a> o escriu-nos.</p>

      <h2>Quant de temps</h2>
      <p>Conservem el teu correu fins que t’enviem l’avís d’obertura del pilot o fins que et donis de baixa, el que passi abans. Després l’eliminem.</p>

      <h2>Qui més hi intervé</h2>
      <p>Dos proveïdors tracten dades per compte del responsable, només per prestar el seu servei:</p>
      <ul>
        <li><strong>IONOS SE</strong>: aquest web i les dades del formulari són en un servidor d’un centre de dades d’IONOS a la Unió Europea.</li>
        <li><strong>Namecheap, Inc.</strong>, amb el seu servei Private Email, gestiona la bústia hola@consonaapp.com, des de la qual enviem l’avís i responem.</li>
      </ul>
      <p>Namecheap pot tractar les dades als Estats Units. Aquesta transferència s’empara en les clàusules contractuals tipus de la Comissió Europea, incloses en el seu acord de tractament de dades. Ens pots demanar més informació a hola@consonaapp.com.</p>

      <h2>Els teus drets</h2>
      <p>Pots demanar l’accés, la rectificació, la supressió, la limitació, l’oposició i la portabilitat de les teves dades escrivint a hola@consonaapp.com. Si creus que no les hem tractat bé, pots reclamar davant l’Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es">aepd.es</a>).</p>
""",
    "en": """      <p class="etiqueta">Privacy</p>
      <h1>Privacy policy</h1>
      <p class="suave">Last updated: {fecha}</p>

      <p>This policy covers the consonaapp.com website, its sign-up and unsubscribe forms, and the hola@consonaapp.com address. Once the app exists, its data will stay on your device and it will have its own policy.</p>

      <h2>Controller</h2>
      <p>Juan Vidaechea. Contact: <a href="mailto:hola@consonaapp.com">hola@consonaapp.com</a>.</p>

      <h2>What data we process</h2>
      <p>If you sign up through the form: your email address, the language of the page and the date and time you signed up. We do not ask for your name. If you write to us, also your email address and the content of your message.</p>
      <p>To prevent abuse, the forms store an encrypted fingerprint of the IP address they are sent from and delete it within 24 hours. The home page reads the language set in your browser to show you the site in Spanish, Catalan or English, and does not store it. This website uses no cookies, analytics or third-party resources.</p>

      <h2>Why</h2>
      <p>To send you a single notice when the Consona pilot opens and to answer your questions. We will not send you advertising or share your email with anyone.</p>

      <h2>Legal basis</h2>
      <p>Your consent (Article 6(1)(a) GDPR), which you give by ticking the box on the form. You can withdraw it at any time with the <a href="{baja}">unsubscribe form</a> or by writing to hola@consonaapp.com.</p>

      <h2>Age</h2>
      <p>The pilot is only for people aged 18 or over, and the form asks you to confirm this. If you are under 18, please do not sign up; if you do, we will delete your data.</p>

      <h2>If someone signed you up without your permission</h2>
      <p>The form does not check that the email address belongs to the person who enters it. If you think someone has signed up your address, remove it with the <a href="{baja}">unsubscribe form</a> or write to us.</p>

      <h2>How long</h2>
      <p>We keep your email until we send you the notice that the pilot has opened, or until you unsubscribe, whichever comes first. Then we delete it.</p>

      <h2>Who else is involved</h2>
      <p>Two providers process data on the controller’s behalf, only to provide their service:</p>
      <ul>
        <li><strong>IONOS SE</strong>: this website and the form data are on a server in an IONOS data centre in the European Union.</li>
        <li><strong>Namecheap, Inc.</strong>, through its Private Email service, runs the hola@consonaapp.com inbox, from which we send the notice and reply.</li>
      </ul>
      <p>Namecheap may process the data in the United States. This transfer is covered by the European Commission’s standard contractual clauses, included in its data processing agreement. You can ask us for more information at hola@consonaapp.com.</p>

      <h2>Your rights</h2>
      <p>You can request access to, rectification, erasure, restriction, portability of, or object to the processing of your data by writing to hola@consonaapp.com. If you think we have not handled them properly, you can complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es">aepd.es</a>).</p>
""",
}

# --- Estilos -----------------------------------------------------------------

ESTILO = """    /* Inter (SIL Open Font License 1.1, ver /fonts/LICENSE.txt), servida desde el propio sitio. */
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
      src: url("/fonts/inter-latin-wght-normal.woff2") format("woff2");
    }
    :root {
      --fondo: #faf7f4;
      --texto: #2b2622;
      --suave: #6b625b;
      --linea: #e4ddd6;
      --acento: #8a5a44;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --fondo: #1f1b19;
        --texto: #f1ebe6;
        --suave: #b8aca3;
        --linea: #3a3330;
        --acento: #d9a287;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: var(--fondo);
      color: var(--texto);
      font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      font-feature-settings: "cv11", "ss01";
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      text-align: center;
    }
    main {
      max-width: 32rem;
      margin: 0 auto;
      padding: 2.5rem 1.5rem 4rem;
    }
    /* Selector de idioma: cada idioma es una página propia, sin JavaScript ni cookies. */
    .idiomas {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin: 0 0 4rem;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      color: var(--suave);
    }
    .idiomas a {
      color: var(--suave);
      text-decoration: none;
      padding: 0.15rem 0.25rem;
      border-radius: 0.25rem;
    }
    .idiomas a:hover { color: var(--texto); }
    .idiomas a[aria-current="page"] {
      color: var(--texto);
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: var(--acento);
      text-underline-offset: 0.35em;
    }
    .idiomas a:focus-visible { outline: 2px solid var(--acento); outline-offset: 2px; }
    .etiqueta {
      color: var(--acento);
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      /* Compensa el espacio que letter-spacing añade tras la última letra. */
      padding-left: 0.18em;
      margin: 0 auto 1rem;
    }
    h1 {
      font-size: clamp(2.25rem, 7vw, 3rem);
      font-weight: 600;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin: 0 0 1.25rem;
    }
    .h1-corto { font-size: clamp(1.9rem, 6vw, 2.4rem); }
    p {
      margin: 0 auto 0.75rem;
      max-width: 26rem;
      font-weight: 400;
    }
    .suave { color: var(--suave); font-size: 0.9rem; }
    .suave a, .nota a, .casilla a, .pie a { color: inherit; }
    .nota { color: var(--suave); font-size: 0.8rem; }
    /* Formularios: los procesan suscribir.php y baja.php en el mismo servidor, sin terceros. */
    .aviso {
      max-width: 26rem;
      margin: 1.75rem auto 0.75rem;
      text-align: left;
    }
    .campo {
      display: block;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 0.35rem;
    }
    .correo {
      display: block;
      width: 100%;
      padding: 0.65rem 0.9rem;
      border: 1px solid var(--linea);
      border-radius: 0.6rem;
      background: transparent;
      color: inherit;
      font: inherit;
    }
    .correo:focus-visible { outline: 2px solid var(--acento); outline-offset: 2px; }
    .casilla {
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
      margin-top: 0.85rem;
      font-size: 0.85rem;
      color: var(--suave);
    }
    .casilla input {
      flex: none;
      width: 1.05rem;
      height: 1.05rem;
      margin: 0.2rem 0 0;
      accent-color: var(--acento);
    }
    /* Campo trampa contra el spam: invisible para las personas, los robots suelen rellenarlo. */
    .trampa {
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    .accion {
      display: block;
      margin: 1.25rem auto 0;
      padding: 0.7rem 1.4rem;
      border: 0;
      border-radius: 999px;
      background: var(--acento);
      color: var(--fondo);
      font: inherit;
      font-weight: 500;
      cursor: pointer;
    }
    .accion:hover { opacity: 0.9; }
    .accion:focus-visible { outline: 2px solid var(--acento); outline-offset: 3px; }
    .pie {
      margin-top: 3rem;
      color: var(--suave);
      font-size: 0.8rem;
      letter-spacing: 0.04em;
    }
    /* Política de privacidad: texto largo, alineado a la izquierda. */
    .legal { max-width: 38rem; text-align: left; }
    .legal p, .legal li { max-width: none; margin: 0 0 0.75rem; }
    .legal h2 { font-size: 1rem; font-weight: 600; margin: 2rem 0 0.4rem; }
    .legal h1 { font-size: clamp(1.75rem, 5vw, 2.25rem); letter-spacing: -0.02em; margin-bottom: 0.5rem; }
    .legal .etiqueta { padding-left: 0; margin-left: 0; }
    .legal ul { padding-left: 1.25rem; margin: 0 0 0.75rem; }
    .legal a { color: var(--acento); }
"""

CSP = "default-src 'none'; style-src 'unsafe-inline'; img-src 'self' data:; font-src 'self'; form-action 'self';"

# --- Plantilla ---------------------------------------------------------------

def selector(l, pagina):
    enlaces = []
    for o in IDIOMAS:
        actual = ' aria-current="page"' if o == l else ""
        enlaces.append(
            f'<a href="{href_selector(o, pagina)}" lang="{o}" hreflang="{o}" title="{T[o]["idioma_nombre"]}"{actual}>{o.upper()}</a>'
        )
    separador = '<span aria-hidden="true">·</span>'
    return f'    <nav class="idiomas" aria-label="{T[l]["selector"]}">{separador.join(enlaces)}</nav>'


def alternativas(pagina):
    lineas = [f'  <link rel="alternate" hreflang="{o}" href="{DOMINIO}{ruta(o, pagina)}">' for o in IDIOMAS]
    lineas.append(f'  <link rel="alternate" hreflang="x-default" href="{DOMINIO}{ruta("es", pagina)}">')
    return "\n".join(lineas)


def documento(l, pagina, titulo, contenido, indexar=True, clase_main=""):
    t = T[l]
    robots = "" if indexar else '\n  <meta name="robots" content="noindex">'
    main_cls = f' class="{clase_main}"' if clase_main else ""
    return f"""<!doctype html>
<html lang="{l}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{titulo}</title>
  <meta name="description" content="{t['descripcion']}">{robots}
  <meta http-equiv="Content-Security-Policy" content="{CSP}">
  <link rel="canonical" href="{DOMINIO}{ruta(l, pagina)}">
{alternativas(pagina)}
  <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <style>
{ESTILO}  </style>
</head>
<body>
  <main{main_cls}>
{selector(l, pagina)}

    <section>
{contenido}    </section>

    <p class="pie">consonaapp.com · <a href="mailto:hola@consonaapp.com">hola@consonaapp.com</a></p>
  </main>
</body>
</html>
"""

# --- Páginas -----------------------------------------------------------------

def enlaces(l):
    return dict(baja=ruta(l, "baja.html"), privacidad=ruta(l, "privacidad.html"))


def inicio(l):
    t = T[l]
    e = enlaces(l)
    return f"""      <p class="etiqueta">{t['prox']}</p>
      <h1>Consona</h1>
      <p>{t['intro']}</p>
      <p class="suave">{t['datos']}</p>
      <form class="aviso" action="/suscribir.php" method="post">
        <input type="hidden" name="idioma" value="{l}">
        <label class="campo" for="correo">{t['correo']}</label>
        <input class="correo" id="correo" type="email" name="correo" required maxlength="254" autocomplete="email" placeholder="{t['ejemplo']}">
        <div class="trampa" aria-hidden="true">
          <label for="web">{t['trampa']}</label>
          <input id="web" type="text" name="web" tabindex="-1" autocomplete="off">
        </div>
        <label class="casilla"><input type="checkbox" name="mayor_edad" value="1" required> <span>{t['edad']}</span></label>
        <label class="casilla"><input type="checkbox" name="consentimiento" value="1" required> <span>{t['cons'].format(**e)}</span></label>
        <button class="accion" type="submit">{t['boton']}</button>
      </form>
      <p class="nota">{t['nota']}<br>{t['bajaq'].format(**e)}</p>
"""


def gracias(l):
    t = T[l]
    return f"""      <p class="etiqueta">{t['g_et']}</p>
      <h1 class="h1-corto">{t['g_h']}</h1>
      <p>{t['g_p']}</p>
      <p class="suave">{t['g_s'].format(**enlaces(l))}</p>
      <p class="suave"><a href="{href_selector(l, '')}">{t['volver']}</a></p>
"""


def baja(l):
    t = T[l]
    return f"""      <p class="etiqueta">{t['b_et']}</p>
      <h1 class="h1-corto">{t['b_h']}</h1>
      <p>{t['b_p']}</p>
      <form class="aviso" action="/baja.php" method="post">
        <input type="hidden" name="idioma" value="{l}">
        <label class="campo" for="correo">{t['correo']}</label>
        <input class="correo" id="correo" type="email" name="correo" required maxlength="254" autocomplete="email" placeholder="{t['ejemplo']}">
        <div class="trampa" aria-hidden="true">
          <label for="web">{t['trampa']}</label>
          <input id="web" type="text" name="web" tabindex="-1" autocomplete="off">
        </div>
        <button class="accion" type="submit">{t['b_bt']}</button>
      </form>
      <p class="nota">{t['b_s']}</p>
"""


def baja_hecha(l):
    t = T[l]
    return f"""      <p class="etiqueta">{t['h_et']}</p>
      <h1 class="h1-corto">{t['h_h']}</h1>
      <p>{t['h_p']}</p>
      <p class="suave"><a href="{href_selector(l, '')}">{t['volver']}</a></p>
"""


def error(l):
    t = T[l]
    return f"""      <p class="etiqueta">{t['e_et']}</p>
      <h1 class="h1-corto">{t['e_h']}</h1>
      <p>{t['e_p']}</p>
      <p class="suave">{t['e_s']}</p>
      <p class="suave"><a href="{href_selector(l, '')}">{t['volver']}</a></p>
"""


def privacidad(l):
    return PRIVACIDAD[l].format(fecha=ACTUALIZACION[l], baja=ruta(l, "baja.html"))


# Cabecera PHP de la portada en castellano: elige idioma por Accept-Language.
DETECCION = """<?php
/**
 * Portada de consonaapp.com. Generada por landing-fuente/build.py: no editar a mano.
 *
 * Si el navegador prefiere catalán o inglés, redirige a /ca/ o /en/. Si no, o si
 * la persona eligió castellano en el selector (?idioma=es), muestra esta página.
 * Solo lee la cabecera Accept-Language; no guarda nada ni usa cookies.
 */

declare(strict_types=1);

function consona_idioma_navegador(string $cabecera): string
{
    $mejor = 'es';
    $mejorPeso = -1.0;
    foreach (explode(',', $cabecera) as $parte) {
        $trozos = explode(';', trim($parte));
        $base = strtolower(substr(trim($trozos[0]), 0, 2));
        if (!in_array($base, ['es', 'ca', 'en'], true)) {
            continue;
        }
        $peso = 1.0;
        foreach (array_slice($trozos, 1) as $parametro) {
            $parametro = trim($parametro);
            if (strncmp($parametro, 'q=', 2) === 0) {
                $peso = (float) substr($parametro, 2);
            }
        }
        // Con el mismo peso gana el que el navegador puso antes.
        if ($peso > $mejorPeso) {
            $mejor = $base;
            $mejorPeso = $peso;
        }
    }
    return $mejor;
}

header('Vary: Accept-Language');

if (!isset($_GET['idioma'])) {
    $idioma = consona_idioma_navegador($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '');
    if ($idioma !== 'es') {
        header('Location: /' . $idioma . '/', true, 302);
        exit;
    }
}
?>
"""

PAGINAS = [
    # (archivo, función, clave de título, indexable, clase de main)
    ("", inicio, "t_inicio", True, ""),
    ("gracias.html", gracias, "t_gracias", False, ""),
    ("baja.html", baja, "t_baja", False, ""),
    ("baja-hecha.html", baja_hecha, "t_hecha", False, ""),
    ("error.html", error, "t_error", False, ""),
    ("privacidad.html", privacidad, "t_priv", True, "legal"),
]


def main():
    escritos = []
    for l in IDIOMAS:
        carpeta = RAIZ if l == "es" else RAIZ / l
        carpeta.mkdir(parents=True, exist_ok=True)
        for archivo, fn, titulo, indexar, clase in PAGINAS:
            html = documento(l, archivo, T[l][titulo], fn(l), indexar, clase)
            if archivo == "":
                if l == "es":
                    destino, html = carpeta / "index.php", DETECCION + html
                else:
                    destino = carpeta / "index.html"
            else:
                destino = carpeta / archivo
            destino.write_text(html, encoding="utf-8")
            escritos.append(destino.relative_to(RAIZ))
    # La portada en castellano ya no es index.html: si quedara, el servidor la
    # serviría antes que index.php y se perdería la detección de idioma.
    antiguo = RAIZ / "index.html"
    if antiguo.exists():
        antiguo.unlink()
    for ruta_escrita in escritos:
        print(ruta_escrita)


if __name__ == "__main__":
    main()
