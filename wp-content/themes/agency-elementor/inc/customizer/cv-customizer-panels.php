<?php
/**
 * Agency Elementor manage the Customizer panels.
 *
 * @subpackage agency-elementor
 * @since 1.0 
 */

/**
 * General Settings Panel
 */
Kirki::add_panel( 'agency_elementor_general_panel', array(
	'priority' => 10,
	'title'    => __( 'General Settings', 'agency-elementor' ),
) );

/**
 * Agency Elementor Options
 */
Kirki::add_panel( 'agency_elementor_options_panel', array(
	'priority' => 20,
	'title'    => __( 'Agency Elementor Theme Options', 'agency-elementor' ),
) );