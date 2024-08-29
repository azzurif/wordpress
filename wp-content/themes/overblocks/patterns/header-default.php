<?php

/**
 * Title: Default Header
 * Slug: overblocks/header-default
 * Categories: overblocks-patterns, header
 */
$overblocks_url = trailingslashit(get_stylesheet_directory_uri());
$overblocks_images = array(
    $overblocks_url . 'assets/images/ob_banner.jpg'
);
?>
<!-- wp:cover {"url":"<?php echo esc_url($overblocks_images[0]) ?>","id":2404,"dimRatio":50,"layout":{"type":"constrained"}} -->
<div class="wp-block-cover"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-2404" alt="" src="<?php echo esc_url($overblocks_images[0]) ?>" data-object-fit="cover" />
    <div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"var:preset|spacing|50","bottom":"20px","left":"var:preset|spacing|50"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
        <div class="wp-block-group" style="padding-top:20px;padding-right:var(--wp--preset--spacing--50);padding-bottom:20px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
            <div class="wp-block-group"><!-- wp:site-title {"level":3,"textAlign":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"700","letterSpacing":"2px","fontSize":"24px","textTransform":"uppercase","lineHeight":"1.1"},"elements":{"link":{"color":{"text":"var:preset|color|foregound-alt"},":hover":{"color":{"text":"var:preset|color|secondary"}}}}},"fontFamily":"plus-jakarta-sans"} /-->

                <!-- wp:navigation {"textColor":"foregound-alt","overlayBackgroundColor":"background-alt","overlayTextColor":"sub-heading-color","layout":{"type":"flex","justifyContent":"left"}} -->
                <!-- wp:page-list /-->
                <!-- /wp:navigation -->
            </div>
            <!-- /wp:group -->

            <!-- wp:spacer {"height":"190px"} -->
            <div style="height:190px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:post-title {"textAlign":"center","textColor":"foregound-alt"} /-->

            <!-- wp:spacer {"height":"96px"} -->
            <div style="height:96px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->