# Landing de consonaapp.com: formulario de aviso y despliegue en Plesk (IONOS)

La landing tiene una página por idioma (castellano en la raíz, catalán en `/ca/` e inglés en `/en/`). La portada detecta el idioma del navegador. El formulario de aviso y el de baja envían los datos a `suscribir.php` y `baja.php`, en el mismo servidor. No hay terceros, JavaScript, cookies ni doble opt-in.

| Carpeta del repositorio | Qué contiene | Dónde va |
|---|---|---|
| `landing-fuente/build.py` | Plantillas y textos de las páginas en los tres idiomas | No se despliega |
| `landing/` | Lo que genera `build.py`, más `suscribir.php`, `baja.php` y `fonts/` | `httpdocs/` (público) |
| `landing-servidor/` | `lib.php`, el esquema y el ejemplo de configuración | `consona-privado/` (privado) |

## Cambiar un texto

Los textos están en `landing-fuente/build.py`. No se editan las páginas de `landing/` a mano:

```
python3 landing-fuente/build.py
```

Después se suben al servidor las páginas que hayan cambiado.

## Estructura en el servidor

```
/var/www/vhosts/consonaapp.com/
├── httpdocs/                  ← contenido de landing/ (público)
│   ├── index.php              portada en castellano; redirige a /ca/ o /en/ según el navegador
│   ├── gracias.html  baja.html  baja-hecha.html  error.html  privacidad.html
│   ├── ca/                    las mismas páginas en catalán (con index.html)
│   ├── en/                    las mismas páginas en inglés (con index.html)
│   ├── suscribir.php  baja.php
│   └── fonts/
└── consona-privado/           ← lib.php y config.php (privado)
```

En la raíz de `httpdocs` **no puede haber un `index.html`**. Si lo hubiera, el servidor lo serviría antes que `index.php` y se perdería la detección de idioma.

`suscribir.php` y `baja.php` cargan `../consona-privado/lib.php`. Plesk lo permite porque `open_basedir` vale `/var/www/vhosts/consonaapp.com/:/tmp/`.

## Instalación desde cero

1. **Requisitos en Plesk** (comprobados el 30-10-2026): PHP 8.3 FPM con `pdo_mysql`, MariaDB 10.11 y certificado SSL con redirección a HTTPS.
2. **Base de datos:** en *Databases › Add Database*:
   - nombre `admin_consona_avisos`, con el prefijo `admin_` que pone Plesk;
   - usuario `consona_avisos`, con contraseña generada y guardada en un gestor de contraseñas;
   - desmarcar «User has access to all databases within the selected subscription».

   Después, en la pestaña SQL de phpMyAdmin, ejecutar `schema.sql`.
3. **Carpeta privada:** crear `consona-privado/` al lado de `httpdocs/`. Subir `lib.php` y `config.php` (a partir de `config.example.php`), y poner la contraseña en `config.php` con el editor de Plesk. `config.php` nunca va al repositorio.
4. **Parte pública:** subir el contenido de `landing/` a `httpdocs/`, con las carpetas `ca/` y `en/`.

## Actualización del 30-10-2026 (idiomas y baja por correo)

Para pasar de la primera versión (una página con los tres idiomas y baja con token) a esta:

1. En `consona-privado/`, sustituir `lib.php`. `config.php` no cambia.
2. En `httpdocs/`:
   - **borrar `index.html`**;
   - subir `index.php`, `gracias.html`, `baja.html`, `baja-hecha.html`, `error.html`, `privacidad.html`, `suscribir.php` y `baja.php`, reemplazando los que ya existan;
   - subir las carpetas `ca/` y `en/`.
3. En phpMyAdmin, pestaña SQL, sobre `admin_consona_avisos`:

   ```sql
   ALTER TABLE suscripciones DROP COLUMN token_baja;
   ```

   Hay que hacerlo justo después del paso 2: el `suscribir.php` nuevo ya no rellena esa columna y las altas fallarían mientras exista.

## Pruebas después de desplegar

En una ventana privada:

1. **Idioma:** con el navegador en castellano, `consonaapp.com` muestra la portada en castellano. Con el navegador en catalán o en inglés, lleva a `/ca/` o `/en/`. El selector ES · CA · EN cambia de idioma, y ES no vuelve a redirigir.
2. **Alta:** apuntarse con un correo propio. Debe llevar a «Gracias» en el idioma de la página, y en phpMyAdmin debe aparecer la fila en `suscripciones`.
3. **Duplicado:** repetir con el mismo correo. También debe llevar a «Gracias», sin crear otra fila.
4. **Baja:** en «Date de baja», escribir ese correo. Debe llevar a «Listo» y la fila debe desaparecer. Con un correo que no esté apuntado, la respuesta debe ser la misma.
5. **Error:** un correo mal escrito (quitando `required` con las herramientas del navegador) debe llevar a «No se ha podido enviar».
6. **Externos:** en la pestaña Red del navegador, nada se carga desde fuera de `consonaapp.com`.

## Enviar el aviso (cuando abra el piloto)

Todavía no está automatizado. Cada aviso es un correo individual desde `hola@consonaapp.com`, en el idioma de la fila. **Nunca** se envía un correo con todas las direcciones en copia. Después de enviarlo, la política obliga a borrar la lista:

```sql
DELETE FROM suscripciones;
```

## Compromisos de la política de privacidad

El código y el mantenimiento deben cumplir lo que dice `privacidad.html`:

- Solo se guardan el correo, el idioma y la fecha del alta.
- La IP se guarda como huella HMAC y se borra a las 24 horas. Lo hacen `suscribir.php` y `baja.php` en cada envío.
- La portada lee el idioma del navegador y no lo guarda.
- Cualquiera puede borrarse con el formulario de baja, que responde igual esté o no el correo.
- Se envía un único aviso y después se borra la lista.
