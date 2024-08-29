<?php

/**
 * Title: Services Block
 * Slug: overblocks/services-section
 * Categories: overblocks-patterns
 */
$overblocks_url = trailingslashit(get_stylesheet_directory_uri());
$overblocks_images = array(
    $overblocks_url . 'assets/images/ob_startup_idea.jpg',
    $overblocks_url . 'assets/images/ob_business_strategy.jpg',
    $overblocks_url . 'assets/images/ob_branding.png'
);
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"backgroundColor":"background-alt","layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group has-background-alt-background-color has-background" style="padding-top:80px;padding-right:var(--wp--preset--spacing--50);padding-bottom:80px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"40px"}}}} -->
    <div class="wp-block-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:group {"layout":{"type":"constrained"}} -->
            <div class="wp-block-group"><!-- wp:image {"id":2411,"width":"auto","height":"280px","aspectRatio":"1.3333333333333333","scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url($overblocks_images[0]) ?>" alt="" class="wp-image-2411" style="aspect-ratio:1.3333333333333333;object-fit:cover;width:auto;height:280px" /></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"padding":{"left":"20px"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
                <div class="wp-block-group" style="padding-left:20px"><!-- wp:heading {"level":3,"fontSize":"large"} -->
                    <h3 class="wp-block-heading has-large-font-size"><?php echo esc_html_e('StartUp Ideas', 'overblocks') ?></h3>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.5"}}} -->
                    <p style="line-height:1.5"><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.', 'overblocks') ?></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:group {"layout":{"type":"constrained"}} -->
            <div class="wp-block-group"><!-- wp:image {"id":2412,"width":"auto","height":"280px","aspectRatio":"1.3333333333333333","scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url($overblocks_images[1]) ?>" alt="" class="wp-image-2412" style="aspect-ratio:1.3333333333333333;object-fit:cover;width:auto;height:280px" /></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"padding":{"left":"20px"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
                <div class="wp-block-group" style="padding-left:20px"><!-- wp:heading {"level":3,"fontSize":"large"} -->
                    <h3 class="wp-block-heading has-large-font-size"><?php echo esc_html_e('Business Strategy', 'overblocks') ?></h3>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.5"}}} -->
                    <p style="line-height:1.5"><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 'overblocks') ?></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:group {"layout":{"type":"constrained"}} -->
            <div class="wp-block-group"><!-- wp:image {"id":2413,"width":"auto","height":"280px","aspectRatio":"1.3333333333333333","scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url($overblocks_images[2]) ?>" alt="" class="wp-image-2413" style="aspect-ratio:1.3333333333333333;object-fit:cover;width:auto;height:280px" /></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"padding":{"left":"20px"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
                <div class="wp-block-group" style="padding-left:20px"><!-- wp:heading {"level":3,"fontSize":"large"} -->
                    <h3 class="wp-block-heading has-large-font-size"><?php echo esc_html_e('Branding', 'overblocks') ?></h3>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.5"}}} -->
                    <p style="line-height:1.5"><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', 'overblocks') ?></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->