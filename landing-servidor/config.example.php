<?php
/**
 * Ejemplo de configuración. En el servidor, copiar como config.php en la misma
 * carpeta privada y rellenar los valores. config.php NUNCA se sube al
 * repositorio (está en .gitignore).
 */

return [
    // Base de datos creada en Plesk (Databases > Add Database), MariaDB 10.11.
    // Plesk antepone "admin_" al nombre de la base de datos; si también lo
    // antepone al usuario, poner aquí el nombre completo.
    'dsn' => 'mysql:host=localhost;port=3306;dbname=admin_consona_avisos;charset=utf8mb4',
    'usuario' => 'consona_avisos',
    'clave' => 'CAMBIAR',

    // Secreto para la huella de la IP. Generar con:
    //   php -r 'echo bin2hex(random_bytes(32)), PHP_EOL;'
    'secreto_ip' => 'CAMBIAR',
];
