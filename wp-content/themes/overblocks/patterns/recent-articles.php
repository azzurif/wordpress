<?php

/**
 * Title: Recent Articles Block
 * Slug: overblocks/recent-articles
 * Categories: overblocks-patterns
 */
$reshape_block_url = trailingslashit(get_stylesheet_directory_uri());
$reshape_block_images = array(
    $reshape_block_url . 'assets/images/header_bg.jpg'
);
?>
<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"100px","bottom":"80px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:100px;padding-right:var(--wp--preset--spacing--50);padding-bottom:80px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"80px"}}}} -->
    <div class="wp-block-columns"><!-- wp:column {"width":"35%"} -->
        <div class="wp-block-column" style="flex-basis:35%"><!-- wp:heading -->
            <h2 class="wp-block-heading"><?php echo esc_html_e('Recent Articles', 'overblocks') ?></h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph -->
            <p><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'overblocks') ?></p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons -->
            <div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"0px"},"spacing":{"padding":{"left":"30px","right":"30px","top":"15px","bottom":"15px"}}},"className":"is-style-button-hover-secondary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-secondary-bgcolor"><a class="wp-block-button__link wp-element-button" style="border-radius:0px;padding-top:15px;padding-right:30px;padding-bottom:15px;padding-left:30px"><?php echo esc_html_e('View All Articles', 'overblocks') ?></a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"65%"} -->
        <div class="wp-block-column" style="flex-basis:65%"><!-- wp:query {"queryId":28,"query":{"perPage":"5","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
            <div class="wp-block-query"><!-- wp:post-template -->
                <!-- wp:columns {"align":"wide"} -->
                <div class="wp-block-columns alignwide"><!-- wp:column {"width":"40%"} -->
                    <div class="wp-block-column" style="flex-basis:40%"><!-- wp:post-featured-image {"isLink":true,"height":"220px"} /--></div>
                    <!-- /wp:column -->

                    <!-- wp:column {"width":"60%"} -->
                    <div class="wp-block-column" style="flex-basis:60%"><!-- wp:post-title {"level":4,"isLink":true,"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading-color"},":hover":{"color":{"text":"var:preset|color|primary"}}}},"typography":{"fontStyle":"normal","fontWeight":"500","lineHeight":"1.5"}},"fontSize":"large"} /-->

                        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
                        <div class="wp-block-group"><!-- wp:post-date {"fontSize":"x-small"} /--></div>
                        <!-- /wp:group -->

                        <!-- wp:post-excerpt {"excerptLength":24,"style":{"typography":{"lineHeight":"1.5"}}} /-->
                    </div>
                    <!-- /wp:column -->
                </div>
                <!-- /wp:columns -->
                <!-- /wp:post-template -->
            </div>
            <!-- /wp:query -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->