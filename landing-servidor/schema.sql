-- Esquema de la lista de aviso de la landing (MySQL 5.7+ o MariaDB 10.2+).
-- Se importa una vez desde phpMyAdmin en Plesk.

CREATE TABLE IF NOT EXISTS suscripciones (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  correo VARCHAR(254) NOT NULL,
  idioma CHAR(2) NOT NULL,
  creado DATETIME NOT NULL COMMENT 'UTC',
  PRIMARY KEY (id),
  UNIQUE KEY uq_correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Huellas HMAC de IP para limitar envíos. Se borran a las 24 horas.
CREATE TABLE IF NOT EXISTS intentos (
  huella CHAR(64) NOT NULL,
  creado DATETIME NOT NULL COMMENT 'UTC',
  KEY idx_huella_creado (huella, creado),
  KEY idx_creado (creado)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Migración desde la primera versión (con enlace de baja por token), ya
-- aplicada en consonaapp.com el 30-10-2026. No hace falta en una instalación nueva:
--   ALTER TABLE suscripciones DROP COLUMN token_baja;
