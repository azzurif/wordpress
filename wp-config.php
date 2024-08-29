<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
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
define( 'DB_NAME', 'wordpress_db' );

/** Database username */
define( 'DB_USER', 'wordpress_user' );

/** Database password */
define( 'DB_PASSWORD', 'password' );

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
define( 'AUTH_KEY',         'm2@qT?!nw`SDZFf=zRLD9_0m0/]qUnhc0Trf`-%m=[PTIxn7q>I*9f<,l>piPUI7' );
define( 'SECURE_AUTH_KEY',  'ct`I,ejc&?]ozN^PuJJ+Vvc6l<mJT/d#X`M-NZl]d@RP*hC^ELrgXI}6Zz}2=QrI' );
define( 'LOGGED_IN_KEY',    'yNBk%:s)r>i%tkPSCL_%1?rSWM=?CG]T=Ojgmn$u>>9N]l`A2$$;dvnKpW7n1.U5' );
define( 'NONCE_KEY',        '8Y-o-o$`Q|+Q`FCcXH_@e|E/]GH{gfc0%zL,fiR@z3+^MKH4N.#nwv<l*N$fH@``' );
define( 'AUTH_SALT',        '7s%Opv-]&5Rz#n8}0~nyAhWQ?Q!B~I<rv}f(/td@=nT,UV;8G~4CabBDWr@{cl@6' );
define( 'SECURE_AUTH_SALT', 'R`V2HGoTH(-c<vcil>i#i&pDr85!mdNv0k(m2mw#[j%p7N81W;2wNz/mSwJf1z:A' );
define( 'LOGGED_IN_SALT',   'umDc*v`m5?!H@[)b;H0}7 |u=?.Vt#*qt mn|RS+YV[(ls]6%Ak0eL?@LD(R]?Ya' );
define( 'NONCE_SALT',       '[D`Z9Wv`2q54&-!wUEZ|?kf@i000Qx(7d@}W>yM,AomCd9IQk=w?RvL$]--]r]JI' );

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
