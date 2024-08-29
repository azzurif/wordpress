<?php

$client_id      = ! empty( $attributes['blockClientId'] ) ? $attributes['blockClientId'] : '';
$cozy_block_var = 'cozyScrollTop_' . str_replace( '-', '_', $client_id );
wp_localize_script( 'cozy-block-scripts', $cozy_block_var, $attributes );
wp_add_inline_script( 'cozy-block-scripts', 'document.addEventListener("DOMContentLoaded", function(event) { window.cozyBlockScrollTopInit( "' . $client_id . '" ) }) ' );

$output  = '<div class="cozy-block-wrapper position-fixed">';
$output .= $content;
$output .= '</div>';

echo $output;
