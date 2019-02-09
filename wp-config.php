<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'exhibitions');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I$q]T:`}4:M2vv>5}8p33to>I5-#KI/}~{yqkp3hl/OG!Fne`(Ic+B13Fy:^&zW1');
define('SECURE_AUTH_KEY',  'YY#3{qXvHtMH6fvf1;w7LQ{gjSnc$C#2[H384>/dzj6]U-*:qA2@];T1v`O,)ql>');
define('LOGGED_IN_KEY',    'D%oX?R-U9S(Qnfb.3.|Vp$@64m|q$4 A[AEjQ|.msiO>{m/A00]+/,`h<//s#/z!');
define('NONCE_KEY',        'qdcX;XR:YB/9,*<AiFweb2f|psVgTzzltptwJ@s5BosT|2Dme%6G[2EHM][7~Fg(');
define('AUTH_SALT',        ']_j-7#Iz.|?p+JQkY]]eDjy&/;~2r/~#TbZP>qM#b2KMsyKw2*;VayK&^Q7YERcF');
define('SECURE_AUTH_SALT', 'Yq;W[&Pc~kT#3(~Qfn(p<3p?grL6q%@z=bnCO2FXwd6O,kOJ*l1@:<g.i2?XUMy&');
define('LOGGED_IN_SALT',   't6*%SYT2K426_0]CULYk+C`,RRu.S1MV.Bl?*t;$+^9AGhl`zFXpOb?6Xe?JfR+g');
define('NONCE_SALT',       'k,xGm(cq6UIr%bcF#`[9^boNgDR,u:R?!9)/.}Tx/<BmUVH2*xU@f<X;fBZw]2(^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ex_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
