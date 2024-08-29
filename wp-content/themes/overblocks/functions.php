<?php
/*
 * Disallow direct access
 */
if (!defined('ABSPATH')) {
    die('Forbidden.');
}
function overblocks_scripts()
{
    // enqueue parent style
    wp_enqueue_style('overblocks-parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'overblocks_scripts');

/**
 * Registers pattern categories.
 *
 * @since overblocks 1.0.0
 *
 * @return void
 */
function overblocks_register_pattern_category()
{

    $patterns = array();

    $block_pattern_categories = array(
        'overblocks-patterns' => array('label' => __('Overblocks Patterns', 'overblocks'))
    );

    $block_pattern_categories = apply_filters('overblocks_block_pattern_categories', $block_pattern_categories);

    foreach ($block_pattern_categories as $name => $properties) {
        if (!WP_Block_Pattern_Categories_Registry::get_instance()->is_registered($name)) {
            register_block_pattern_category($name, $properties);
        }
    }
}
add_action('init', 'overblocks_register_pattern_category', 9);
