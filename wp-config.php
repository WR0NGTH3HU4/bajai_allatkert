<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '12a_bajai_allatkert' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm0BNHJHjr% QIx4RFV8l#%GLS.N#V!y`p&>;I|FR9Ne4!Wnb%Wc!)[AQXZ@fG?p:' );
define( 'SECURE_AUTH_KEY',  'fg(|Qv6D8iPi5`4?/|YRtq ;/pI4M8bf^bGo8WGgQ%@&~i^=8Mnda/Q9EhPkU<av' );
define( 'LOGGED_IN_KEY',    'uV3=$/P%<{*V8~Wzz~+m3A!vnc-T8MkwFAxx$[9VwPFI[_UbcDig]=+h^c:mZS2C' );
define( 'NONCE_KEY',        '3M]CciL2tr_LhX|E>zqgq7oMV=X@c#G8~Cz,{mk<fUznvWgN~hAG8MBV2-fNIky~' );
define( 'AUTH_SALT',        '?9[].b.7Iy/5{i#!@&6!`^y:=w5C,sf#<} 2323c8YV_=:gAF!;ng(uP|vk35/P]' );
define( 'SECURE_AUTH_SALT', 'P+U4YJ6SvIz{~z&,yBcx_FBt0{TMN,WjE2xC?n&dp:>ah`R54qc]`yVq^ wSwPaH' );
define( 'LOGGED_IN_SALT',   '}U!y]:Y[Q{#(CJ3?VWhr0:*`g2JpZMp554S7+w|5;`WtYTw}d{QhJ) P$#++8ADT' );
define( 'NONCE_SALT',       '`r/tny$G&z `Gz~TG+32VDBakO@0#SxW+|24}Y[.FlmeT?k&w(wC4<f0P4+ FX*c' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
