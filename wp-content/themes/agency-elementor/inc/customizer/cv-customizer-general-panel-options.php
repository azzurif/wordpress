<?php
/**
 * Agency Elementor manage the Customizer options of general panel.
 *
 * @subpackage agency-elementor
 * @since 1.0 
 */
Kirki::add_field(
	'agency_elementor_config', array(
		'type'        => 'checkbox',
		'settings'    => 'agency_elementor_home_posts',
		'label'       => esc_attr__( 'Checked to hide latest posts in homepage.', 'agency-elementor' ),
		'section'     => 'static_front_page',
		'default'     => true,
	)
);
