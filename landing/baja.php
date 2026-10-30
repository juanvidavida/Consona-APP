<?php
/**
 * Recibe el formulario de baja de baja.html: borra el correo de la lista.
 *
 * Responde siempre igual (baja-hecha.html), estuviera o no el correo en la
 * lista, para que nadie pueda usarlo para averiguar quién está apuntado.
 */

declare(strict_types=1);

require dirname(__DIR__) . '/consona-privado/lib.php';

consona_cabeceras();

$idioma = consona_idioma($_POST['idioma'] ?? null);

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    consona_redirigir('baja.html', $idioma);
}

// Campo trampa relleno: casi seguro un robot. Se le responde como si nada.
if (($_POST['web'] ?? '') !== '') {
    consona_redirigir('baja-hecha.html', $idioma);
}

$correo = consona_correo($_POST['correo'] ?? null);
if ($correo === null) {
    consona_redirigir('error.html', $idioma);
}

try {
    $db = consona_db();

    if (consona_limite_superado($db)) {
        consona_redirigir('error.html', $idioma);
    }

    $db->prepare('DELETE FROM suscripciones WHERE correo = ?')->execute([$correo]);
} catch (Throwable $e) {
    error_log('consona baja: ' . $e->getMessage());
    consona_redirigir('error.html', $idioma);
}

consona_redirigir('baja-hecha.html', $idioma);
