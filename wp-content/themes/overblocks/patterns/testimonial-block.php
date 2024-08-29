<?php

/**
 * Title: Testimonials Block
 * Slug: overblocks/testimonial-block
 * Categories: overblocks-patterns
 */
$overblocks_url = trailingslashit(get_stylesheet_directory_uri());
$overblocks_images = array(
    $overblocks_url . 'assets/images/ob_testimonials.jpg'
);
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"140px","bottom":"140px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"backgroundColor":"background-alt","layout":{"type":"constrained","contentSize":"980px"}} -->
<div class="wp-block-group has-background-alt-background-color has-background" style="padding-top:140px;padding-right:var(--wp--preset--spacing--50);padding-bottom:140px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.5"}},"fontSize":"large"} -->
    <p class="has-text-align-center has-large-font-size" style="line-height:1.5"><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'overblocks') ?></p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"style":{"spacing":{"margin":{"top":"60px"}}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
    <div class="wp-block-group" style="margin-top:60px"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|40"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
        <div class="wp-block-group"><!-- wp:image {"id":2415,"width":"100px","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
            <figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url($overblocks_images[0]) ?>" alt="" class="wp-image-2415" style="border-radius:100px;width:100px" /></figure>
            <!-- /wp:image -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|20"}},"layout":{"type":"flex","orientation":"vertical"}} -->
            <div class="wp-block-group"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"medium"} -->
                <h4 class="wp-block-heading has-medium-font-size" style="font-style:normal;font-weight:500"><?php echo esc_html_e('Robert Galson', 'overblocks') ?></h4>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p><?php echo esc_html_e('Author', 'overblocks') ?></p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->