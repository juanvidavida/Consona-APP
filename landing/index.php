<?php
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
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Consona — Próximamente</title>
  <meta name="description" content="Consona: educación sobre el ciclo menstrual para parejas. Próximamente.">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src 'self' data:; font-src 'self'; form-action 'self';">
  <link rel="canonical" href="https://consonaapp.com/">
  <link rel="alternate" hreflang="es" href="https://consonaapp.com/">
  <link rel="alternate" hreflang="ca" href="https://consonaapp.com/ca/">
  <link rel="alternate" hreflang="en" href="https://consonaapp.com/en/">
  <link rel="alternate" hreflang="x-default" href="https://consonaapp.com/">
  <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <style>
    /* Inter (SIL Open Font License 1.1, ver /fonts/LICENSE.txt), servida desde el propio sitio. */
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
  </style>
</head>
<body>
  <main>
    <nav class="idiomas" aria-label="Idioma"><a href="/?idioma=es" lang="es" hreflang="es" title="Castellano" aria-current="page">ES</a><span aria-hidden="true">·</span><a href="/ca/" lang="ca" hreflang="ca" title="Català">CA</a><span aria-hidden="true">·</span><a href="/en/" lang="en" hreflang="en" title="English">EN</a></nav>

    <section>
      <p class="etiqueta">Próximamente</p>
      <h1>Consona</h1>
      <p>Consona, educación sobre el ciclo menstrual para hombres que quieren acompañar a su pareja.</p>
      <p class="suave">Tus datos se quedan en tu dispositivo.</p>
      <form class="aviso" action="/suscribir.php" method="post">
        <input type="hidden" name="idioma" value="es">
        <label class="campo" for="correo">Tu correo</label>
        <input class="correo" id="correo" type="email" name="correo" required maxlength="254" autocomplete="email" placeholder="nombre@ejemplo.com">
        <div class="trampa" aria-hidden="true">
          <label for="web">No rellenes este campo</label>
          <input id="web" type="text" name="web" tabindex="-1" autocomplete="off">
        </div>
        <label class="casilla"><input type="checkbox" name="mayor_edad" value="1" required> <span>Tengo 18 años o más.</span></label>
        <label class="casilla"><input type="checkbox" name="consentimiento" value="1" required> <span>Acepto que uséis mi correo solo para avisarme cuando abra el piloto, según la <a href="/privacidad.html">política de privacidad</a>.</span></label>
        <button class="accion" type="submit">Avísame cuando abra el piloto</button>
      </form>
      <p class="nota">Un único aviso, sin publicidad.<br>¿Ya te apuntaste y quieres borrarte? <a href="/baja.html">Date de baja</a>.</p>
    </section>

    <p class="pie">consonaapp.com · <a href="mailto:hola@consonaapp.com">hola@consonaapp.com</a></p>
  </main>
</body>
</html>
