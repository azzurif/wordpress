<?php
/**
 * Theme functions and definitions
 *
 * @package Growth_Business
 */

/**
 * After setup theme hook
 */
function growth_business_theme_setup(){
    /*
     * Make chile theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    load_child_theme_textdomain( 'growth-business', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'growth_business_theme_setup' );

/**
 * Load assets.
 *
 */
function growth_business_enqueue_styles_and_scripts() {
    $my_theme = wp_get_theme();
    $version = $my_theme['Version'];
    
    wp_enqueue_style( 'rara-business-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'growth-business-style', get_stylesheet_directory_uri() . '/style.css', array( 'rara-business-style' ), $version );
}
add_action( 'wp_enqueue_scripts', 'growth_business_enqueue_styles_and_scripts' );

/**
 * Register custom fonts.
 */
function rara_business_fonts_url() {
    $fonts_url = '';

    /* 
     * Translators: If there are characters in your language that are not
     * supported by DM Sans fonts, translate this to 'off'. Do not translate
     * into your own language.
    */
    $dm_sans = _x( 'on', 'DM Sans: on or off', 'growth-business' );
    
    /* 
     * Translators: If there are characters in your language that are not
     * supported by Red Hat Display fonts, translate this to 'off'. Do not translate
     * into your own language.
    */
    $red_hat = _x( 'on', 'Red Hat Display: on or off', 'growth-business' );

    if ( 'off' !== $dm_sans || 'off' !== $red_hat ) {
        $font_families = array();

        if ( 'off' !== $dm_sans ) {
            $font_families[] = 'DM Sans:100,100i,300,300i,400,400i,700,700i,900,900i';

        }

        if ( 'off' !== $red_hat ) {
            $font_families[] = 'Red Hat Display:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i';

        }

        $query_args = array(
            'family'  => urlencode( implode( '|', $font_families ) ),
            'subset'  => urlencode( 'latin,latin-ext' ),
            'display' => urlencode( 'fallback' ),
        );

        $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
    }

    return esc_url( $fonts_url );
}

/**
 * Growth Business Header Image
 */
function growth_business_custom_header_args_callback(){
    $default_image = array(
        'default-image'    => get_stylesheet_directory_uri().'/images/banner-image.jpg',
        'width'            => 1920,
        'height'           => 780,
        'header-text'      => false,
        'video'            => true,
    ); 
    return $default_image;
}
add_filter( 'rara_business_custom_header_args', 'growth_business_custom_header_args_callback' );

function rara_business_header(){
    $default_options   = rara_business_default_theme_options();
    $ed_header_contact = get_theme_mod( 'ed_header_contact_details', $default_options['ed_header_contact_details'] );
    $phone             = get_theme_mod( 'header_phone', $default_options['header_phone'] );
    $address           = get_theme_mod( 'header_address', $default_options['header_address'] );
    $email             = get_theme_mod( 'header_email', $default_options['header_email'] );
    $ed_header_social  = get_theme_mod( 'ed_header_social_links', $default_options['ed_header_social_links'] );
    $social_links      = get_theme_mod( 'header_social_links', $default_options['header_social_links'] );
    $icon              = get_theme_mod( 'custom_link_icon', $default_options['custom_link_icon'] );
    $label             = get_theme_mod( 'custom_link_label', $default_options['custom_link_label'] );
    $link              = get_theme_mod( 'custom_link', $default_options['custom_link'] ); ?>

    <header class="site-header nav-fullwidth-layout" itemscope itemtype="https://schema.org/WPHeader">
        <?php 
            if( ! ( ( $phone || $address || $email ) && $ed_header_contact ) &&  ! ( $ed_header_social && ! empty( $social_links ) ) ){ 
                $class = ' hide-header-top';
            } else {
                $class ='';
            }
        ?>
        <div class="header-t<?php echo esc_attr( $class ); ?>">
			<div class="container">
				<?php 
                if( ( $phone || $address || $email ) && $ed_header_contact ){ ?>
                    <div class="contact-info">
                        <?php 
                            if( $phone ) rara_business_header_phone( $phone );
                            if( $address ) rara_business_header_address( $address );
                            if( $email ) rara_business_header_email( $email ); 
                        ?>
                    </div>
                    <?php 
                } 
                
                rara_business_social_links( $ed_header_social, $social_links );
                ?>
                
				<button id="primary-toggle-button" data-toggle-target=".main-menu-modal" data-toggle-body-class="showing-main-menu-modal" aria-expanded="false" data-set-focus=".close-main-nav-toggle">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
            
			<div class="responsive-menu-holder">
				<div class="container">
                    <nav id="mobile-site-navigation" class="main-navigation mobile-navigation">        
                        <div class="primary-menu-list main-menu-modal cover-modal" data-modal-target-string=".main-menu-modal">
                            <button class="close close-main-nav-toggle" data-toggle-target=".main-menu-modal" data-toggle-body-class="showing-main-menu-modal" aria-expanded="false" data-set-focus=".main-menu-modal"><i class="fas fa-times"></i></button>
                            <div class= "social-networks-holder">
                                <div class="container">
                                    <?php rara_business_social_links( $ed_header_social, $social_links ); ?>
                                </div>
                            </div>
                            <div class="mobile-menu" aria-label="<?php esc_attr_e( 'Mobile', 'growth-business' ); ?>">
                                <?php
                                    wp_nav_menu( array(
                                        'theme_location' => 'primary',
                                        'menu_id'        => 'mobile-primary-menu',
                                        'menu_class'     => 'nav-menu main-menu-modal',
                                        'container'      => false,
                                        'fallback_cb'    => 'rara_business_primary_menu_fallback',
                                    ) );
                                ?>
                                <?php 
                                if( $link && $label ) rara_business_custom_link( $icon, $link, $label );
                                
                                if( $phone || $address || $email ){ ?>
                                    <div class="contact-info">
                                        <?php 
                                            if( $phone ) rara_business_header_phone( $phone );
                                            if( $address ) rara_business_header_address( $address );
                                            if( $email ) rara_business_header_email( $email ); 
                                        ?>
                                    </div>
                                    <?php 
                                } 
                                ?>
                            </div>
                        </div>
                    </nav><!-- #mobile-site-navigation -->
				</div>
			</div>
		</div>

        <div class="main-header">
            <div class="container">
                <div class="right">
                    <?php 
                    $display_header_text = get_theme_mod( 'header_text', 1 );
                    $site_title          = get_bloginfo( 'name', 'display' );
                    $description         = get_bloginfo( 'description', 'display' );

                    if( ( function_exists( 'has_custom_logo' ) && has_custom_logo() ) && $display_header_text && ( ! empty( $site_title ) || ! empty(  $description  ) ) ){
                        $branding_class = 'logo-with-site-identity';                                                                                                                          
                    } else {
                        $branding_class = '';
                    }
                    ?>
                    <div class="site-branding <?php echo esc_attr( $branding_class ); ?>" itemscope itemtype="https://schema.org/Organization">
                        <?php 
                            if( function_exists( 'has_custom_logo' ) && has_custom_logo() ){
                                the_custom_logo();
                            } 

                            echo '<div class="text-logo">';
                                if( is_front_page() ){ ?>
                                    <h1 class="site-title" itemprop="name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" itemprop="url"><?php bloginfo( 'name' ); ?></a></h1>
                                    <?php } else { ?>
                                    <p class="site-title" itemprop="name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" itemprop="url"><?php bloginfo( 'name' ); ?></a></p>
                                <?php
                                }

                                if ( $description || is_customize_preview() ){ ?>
                                    <p class="site-description" itemprop="description"><?php echo esc_html( $description ); ?></p>
                                <?php
            
                                }
                            echo '</div><!-- .text-logo -->';
                            ?>
                    </div>
                    <?php if( $link && $label ) rara_business_custom_link( $icon, $link, $label ); ?>
                </div>
            </div>
            <div class="nav-wrap">
                <div class="container">
                    <nav id="site-navigation" class="main-navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                    <?php
                        wp_nav_menu( array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'fallback_cb'    => 'rara_business_primary_menu_fallback',
                        ) );?>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <?php
}

/**
 * Filter to add bg color of cta section widget
 */    
function rara_business_cta_section_bgcolor_filter(){
    return '#3452FF';
}

/**
 * Footer Bottom
*/
function rara_business_footer_bottom(){ ?>
    <div class="footer-b">      
        <?php
            rara_business_get_footer_copyright();
            echo '<span class="by">';
            echo esc_html__( 'Growth Business | Developed By ', 'growth-business' ); 
            echo '<a href="' . esc_url( 'https://rarathemes.com/' ) .'" rel="nofollow" target="_blank">' . esc_html__( 'Rara Themes', 'growth-business' ) . '</a>.';
            echo '</span>';
            
            /* translators: 1: poweredby, 2: link, 3: span tag closed  */
            printf( esc_html__( ' %1$sPowered by %2$s%3$s', 'growth-business' ), '<span class="powered-by">', '<a href="'. esc_url( __( 'https://wordpress.org/', 'growth-business' ) ) .'" target="_blank">WordPress</a>.', '</span>' );

            if ( function_exists( 'the_privacy_policy_link' ) ) {
                the_privacy_policy_link( '<span class="policy_link">', '</span>');
            }
        ?>      
    </div>
    <?php
}

