<?php

/**
 * Title: Header with Banner
 * Slug: overblocks/header-with-banner
 * Categories: overblocks-patterns
 */
$overblocks_url = trailingslashit(get_stylesheet_directory_uri());
$overblocks_images = array(
    $overblocks_url . 'assets/images/ob_banner.jpg'
);
?>
<!-- wp:cover {"url":"<?php echo esc_url($overblocks_images[0]) ?>","id":2404,"hasParallax":true,"dimRatio":60,"minHeight":960,"layout":{"type":"constrained"}} -->
<div class="wp-block-cover has-parallax" style="min-height:960px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-60 has-background-dim"></span>
    <div role="img" class="wp-block-cover__image-background wp-image-2404 has-parallax" style="background-position:50% 50%;background-image:url(<?php echo esc_url($overblocks_images[0]) ?>)"></div>
    <div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"var:preset|spacing|50","bottom":"20px","left":"var:preset|spacing|50"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
        <div class="wp-block-group" style="padding-top:20px;padding-right:var(--wp--preset--spacing--50);padding-bottom:20px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
            <div class="wp-block-group"><!-- wp:site-title {"level":3,"textAlign":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"600","letterSpacing":"2px","textTransform":"uppercase","lineHeight":"1.1"},"elements":{"link":{":hover":{"color":{"text":"var:preset|color|secondary"}}}}},"fontSize":"large","fontFamily":"plus-jakarta-sans"} /-->

                <!-- wp:navigation {"textColor":"foregound-alt","overlayBackgroundColor":"background-alt","overlayTextColor":"sub-heading-color","layout":{"type":"flex","justifyContent":"left"}} -->
                <!-- wp:page-list /-->
                <!-- /wp:navigation -->
            </div>
            <!-- /wp:group -->

            <!-- wp:spacer -->
            <div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:group {"style":{"dimensions":{"minHeight":"560px"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"center","justifyContent":"center"}} -->
            <div class="wp-block-group" style="min-height:560px"><!-- wp:group {"layout":{"type":"constrained","contentSize":"1080px"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","style":{"typography":{"lineHeight":"1.5","fontSize":"64px"}}} -->
                    <h2 class="wp-block-heading has-text-align-center" style="font-size:64px;line-height:1.5"><?php echo esc_html_e('Crafting Tomorrow\'s Technology Solutions Today', 'overblocks') ?></h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
                    <p class="has-text-align-center has-medium-font-size"><?php echo esc_html_e('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', 'overblocks') ?></p>
                    <!-- /wp:paragraph -->

                    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"52px"}}}} -->
                    <div class="wp-block-buttons" style="margin-top:52px"><!-- wp:button {"backgroundColor":"primary","textColor":"foregound-alt","style":{"spacing":{"padding":{"top":"17px","bottom":"17px"}},"typography":{"fontSize":"18px"},"border":{"radius":"0px"}},"className":"is-style-button-hover-secondary-bgcolor"} -->
                        <div class="wp-block-button has-custom-font-size is-style-button-hover-secondary-bgcolor" style="font-size:18px"><a class="wp-block-button__link has-foregound-alt-color has-primary-background-color has-text-color has-background wp-element-button" style="border-radius:0px;padding-top:17px;padding-bottom:17px"><?php echo esc_html_e('Schedule Quick Call', 'overblocks') ?></a></div>
                        <!-- /wp:button -->

                        <!-- wp:button {"backgroundColor":"background","textColor":"heading-color","style":{"typography":{"fontSize":"18px"},"border":{"radius":"0px","width":"0px","style":"none"},"spacing":{"padding":{"top":"18px","bottom":"18px"}}},"className":"is-style-button-hover-secondary-bgcolor"} -->
                        <div class="wp-block-button has-custom-font-size is-style-button-hover-secondary-bgcolor" style="font-size:18px"><a class="wp-block-button__link has-heading-color-color has-background-background-color has-text-color has-background wp-element-button" style="border-style:none;border-width:0px;border-radius:0px;padding-top:18px;padding-bottom:18px"><?php echo esc_html_e('Request Demo', 'overblocks') ?></a></div>
                        <!-- /wp:button -->
                    </div>
                    <!-- /wp:buttons -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->

            <!-- wp:spacer {"height":"138px"} -->
            <div style="height:138px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->