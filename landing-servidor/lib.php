<?php
/**
 * Lógica compartida del formulario de aviso de la landing.
 *
 * Este archivo y config.php viven FUERA de la carpeta pública (httpdocs):
 * ver landing-servidor/README.md. Las páginas públicas suscribir.php y baja.php
 * solo lo incluyen.
 *
 * Compromisos de la política de privacidad (landing/privacidad.html) que este
 * código debe cumplir:
 *  - Solo se guardan el correo, el idioma y la fecha del alta. Sin nombre.
 *  - La IP se guarda solo para limitar envíos y se borra en 24 horas. Se guarda
 *    como huella HMAC, no en claro.
 *  - Cualquiera puede borrar su correo con el formulario de baja.
 *
 * Compatible con PHP 7.4 o superior.
 */

declare(strict_types=1);

const CONSONA_IDIOMAS = ['es', 'ca', 'en'];

/** Envíos permitidos por IP en una hora. */
const CONSONA_LIMITE_POR_HORA = 5;

/** Horas que se conserva la huella de la IP (la política dice 24). */
const CONSONA_HORAS_IP = 24;

function consona_config(): array
{
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }
    return $config;
}

function consona_db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $c = consona_config();
        $pdo = new PDO($c['dsn'], $c['usuario'], $c['clave'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    }
    return $pdo;
}

/** Devuelve un idioma admitido; cualquier otro valor cae en español. */
function consona_idioma($valor): string
{
    return in_array($valor, CONSONA_IDIOMAS, true) ? $valor : 'es';
}

/** Fecha y hora UTC en formato DATETIME. */
function consona_ahora(int $desplazamientoSegundos = 0): string
{
    return gmdate('Y-m-d H:i:s', time() + $desplazamientoSegundos);
}

/** Cabeceras de seguridad para las respuestas generadas por PHP. */
function consona_cabeceras(): void
{
    header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; font-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer');
    header('Cache-Control: no-store');
}

/** Redirige a una página estática del idioma: /pagina en castellano, /ca/pagina o /en/pagina. */
function consona_redirigir(string $pagina, string $idioma): void
{
    $carpeta = $idioma === 'es' ? '/' : '/' . $idioma . '/';
    header('Location: ' . $carpeta . $pagina, true, 303);
    exit;
}

/** Huella de la IP: HMAC con un secreto del servidor, para no guardarla en claro. */
function consona_huella_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    return hash_hmac('sha256', $ip, consona_config()['secreto_ip']);
}

/**
 * Borra las huellas de IP con más de 24 horas, registra este intento y dice si
 * la IP ha superado el límite de la última hora.
 */
function consona_limite_superado(PDO $db): bool
{
    $db->prepare('DELETE FROM intentos WHERE creado < ?')
        ->execute([consona_ahora(-CONSONA_HORAS_IP * 3600)]);

    $huella = consona_huella_ip();
    $consulta = $db->prepare('SELECT COUNT(*) FROM intentos WHERE huella = ? AND creado >= ?');
    $consulta->execute([$huella, consona_ahora(-3600)]);
    $recientes = (int) $consulta->fetchColumn();

    $db->prepare('INSERT INTO intentos (huella, creado) VALUES (?, ?)')
        ->execute([$huella, consona_ahora()]);

    return $recientes >= CONSONA_LIMITE_POR_HORA;
}

/** Normaliza y valida un correo. Devuelve null si no es válido. */
function consona_correo($valor): ?string
{
    if (!is_string($valor)) {
        return null;
    }
    $correo = strtolower(trim($valor));
    if ($correo === '' || strlen($correo) > 254) {
        return null;
    }
    return filter_var($correo, FILTER_VALIDATE_EMAIL) !== false ? $correo : null;
}

/** Escapa texto para HTML. */
function consona_e(string $texto): string
{
    return htmlspecialchars($texto, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}
