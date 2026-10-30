<?php
/**
 * Recibe el formulario de aviso de index.html.
 *
 * Responde siempre con una redirección a gracias.html o error.html, en la
 * carpeta del idioma. No revela si un correo ya estaba apuntado.
 */

declare(strict_types=1);

require dirname(__DIR__) . '/consona-privado/lib.php';

consona_cabeceras();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /', true, 303);
    exit;
}

$idioma = consona_idioma($_POST['idioma'] ?? null);

// Campo trampa relleno: casi seguro un robot. Se le responde como si nada.
if (($_POST['web'] ?? '') !== '') {
    consona_redirigir('gracias.html', $idioma);
}

$correo = consona_correo($_POST['correo'] ?? null);
$mayorEdad = ($_POST['mayor_edad'] ?? '') === '1';
$consentimiento = ($_POST['consentimiento'] ?? '') === '1';

if ($correo === null || !$mayorEdad || !$consentimiento) {
    consona_redirigir('error.html', $idioma);
}

try {
    $db = consona_db();

    if (consona_limite_superado($db)) {
        consona_redirigir('error.html', $idioma);
    }

    $alta = $db->prepare('INSERT INTO suscripciones (correo, idioma, creado) VALUES (?, ?, ?)');
    $alta->execute([$correo, $idioma, consona_ahora()]);
} catch (PDOException $e) {
    // 23000: el correo ya estaba apuntado. Se trata como un alta correcta.
    if ($e->getCode() !== '23000') {
        error_log('consona suscribir: ' . $e->getMessage());
        consona_redirigir('error.html', $idioma);
    }
} catch (Throwable $e) {
    error_log('consona suscribir: ' . $e->getMessage());
    consona_redirigir('error.html', $idioma);
}

consona_redirigir('gracias.html', $idioma);
