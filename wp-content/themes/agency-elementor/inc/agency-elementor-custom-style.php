<?php 
/**
 * Custom Style for Agency Elementor theme.
 * @package     Agency Elementor
 * @author      wptexture
 * @copyright   Copyright (c) 2021, Agency Elementor
 * @since       Agency Elementor1.0.0
 */
function agency_elementor_custom_style(){
$agency_elementor_style=""; 
$agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_logo_width', 'agency_elementor_logo_width_responsive');

/**********************/
//Scheme Color
/**********************/
$agency_elementor_color_scheme = esc_html(get_theme_mod('agency_elementor_color_scheme','opn-light'));


/**************************/
// Above Header
/**************************/
    $agency_elementor_above_brdr_clr = esc_html(get_theme_mod('agency_elementor_above_brdr_clr','#fff'));  
    $agency_elementor_style.=".top-header,body.agency-elementor-dark .top-header{border-bottom-color:{$agency_elementor_above_brdr_clr}}";
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_abv_hdr_hgt', 'agency_elementor_top_header_height_responsive');
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_abv_hdr_botm_brd', 'agency_elementor_abv_hdr_botm_brd_responsive');

/**************************/
// Above Fooetr
/**************************/
    $agency_elementor_above_frt_brdr_clr = esc_html(get_theme_mod('agency_elementor_above_frt_brdr_clr','#fff'));  
    $agency_elementor_style.=".top-footer,body.agency-elementor-dark .top-footer{border-bottom-color:{$agency_elementor_above_frt_brdr_clr}}";
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_above_ftr_hgt', 'agency_elementor_top_footer_height_responsive');
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_abv_ftr_botm_brd', 'agency_elementor_top_footer_border_responsive');

/**************************/
// Below Fooetr
/**************************/
    $agency_elementor_bottom_frt_brdr_clr = esc_html(get_theme_mod('agency_elementor_bottom_frt_brdr_clr'));  
    $agency_elementor_style.=".below-footer,body.agency-elementor-dark .below-footer{border-top-color:{$agency_elementor_bottom_frt_brdr_clr}}";
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_btm_ftr_hgt', 'agency_elementor_below_footer_height_responsive');
    $agency_elementor_style.= agency_elementor_responsive_slider_funct( 'agency_elementor_btm_ftr_botm_brd', 'agency_elementor_below_footer_border_responsive');
/*********************/
// Global Color Option
/*********************/ 
  $agency_elementor_theme_clr = esc_html(get_theme_mod('agency_elementor_theme_clr','#FF5151'));

  $agency_elementor_style.=".single_add_to_cart_button.button.alt, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce #respond input#submit, .woocommerce button.button, .woocommerce input.button,.cat-list a:after,.tagcloud a:hover, .texture-tags-wrapper a:hover,.ribbon-btn,.btn-main-header,.page-contact .leadform-show-form input[type='submit'],.woocommerce .widget_price_filter .agency-elementor-widget-content .ui-slider .ui-slider-range,
.woocommerce .widget_price_filter .agency-elementor-widget-content .ui-slider .ui-slider-handle,.entry-content form.post-password-form input[type='submit'],#bizEcommerce-mobile-bar a,#bizEcommerce-mobile-bar,.post-slide-widget .owl-carousel .owl-nav button:hover,.woocommerce div.product form.cart .button,#search-button,#search-button:hover, .woocommerce ul.products li.product .button:hover,.slider-content-caption a.slide-btn,.page-template-frontpage .owl-carousel button.owl-dot, .woocommerce #alm-quick-view-modal .alm-qv-image-slider .flex-control-paging li a,.button.return.wc-backward,.button.return.wc-backward:hover,.woocommerce .texture-product-hover a.add_to_cart_button:hover,
.woocommerce .texture-product-hover .texture-wishlist a.add_to_wishlist:hover,
.texture-wishlist .yith-wcwl-wishlistaddedbrowse:hover,
.texture-wishlist .yith-wcwl-wishlistexistsbrowse:hover,
.texture-quickview a:hover, .texture-compare .compare-button a.compare.button:hover,
.texture-woo-product-list .texture-quickview a:hover,.woocommerce .texture-product-hover a.th-button:hover,#alm-quick-view-modal .alm-qv-image-slider .flex-control-paging li a.flex-active,.menu-close-btn:hover:before, .menu-close-btn:hover:after,.cart-close-btn:hover:after,.cart-close-btn:hover:before,.cart-contents .count-item,[type='submit']:hover,.comment-list .reply a,.nav-links .page-numbers.current, .nav-links .page-numbers:hover,.woocommerce .texture-product-image-tab-section .texture-product-hover a.add_to_cart_button:hover,.woocommerce .texture-product-slide-section .texture-product-hover a.add_to_cart_button:hover,.woocommerce .texture-compare .compare-button a.compare.button:hover,.texture-product .woosw-btn:hover,.texture-product .wooscp-btn:hover,.woosw-copy-btn input{background:{$agency_elementor_theme_clr}}
  .open-cart p.buttons a:hover,
  .woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit:hover, .woocommerce button.button:hover, .woocommerce input.button:hover,.texture-slide .owl-nav button.owl-prev:hover, .texture-slide .owl-nav button.owl-next:hover, .agency-elementor-slide-post .owl-nav button.owl-prev:hover, .agency-elementor-slide-post .owl-nav button.owl-next:hover,/*.texture-list-grid-switcher a.selected,*/ .texture-list-grid-switcher a:hover,.woocommerce .woocommerce-error .button:hover, .woocommerce .woocommerce-info .button:hover, .woocommerce .woocommerce-message .button:hover,#searchform [type='submit']:hover,article.texture-post-article .texture-readmore.button:hover,.agency-elementor-load-more button:hover,.woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current,.texture-top2-slide.owl-carousel .owl-nav button:hover,.product-slide-widget .owl-carousel .owl-nav button:hover, .texture-slide.texture-brand .owl-nav button:hover,.texture-heading-wrap:before,.woocommerce ul.products li.product .texture-product-hover a.add_to_cart_button:hover{background-color:{$agency_elementor_theme_clr} !important;} 
  .texture-product-hover .th-button.add_to_cart_button, .woocommerce ul.products .texture-product-hover .add_to_cart_button, .woocommerce .texture-product-hover a.th-butto, .woocommerce ul.products li.product .product_type_variable, .woocommerce ul.products li.product a.button.product_type_grouped,.open-cart p.buttons a:hover,.texture-slide .owl-nav button.owl-prev:hover, .texture-slide .owl-nav button.owl-next:hover, .agency-elementor-slide-post .owl-nav button.owl-prev:hover, .agency-elementor-slide-post .owl-nav button.owl-next:hover,body .woocommerce-tabs .tabs li a::before,/*.texture-list-grid-switcher a.selected,*/ .texture-list-grid-switcher a:hover,.woocommerce .woocommerce-error .button, .woocommerce .woocommerce-info .button, .woocommerce .woocommerce-message .button,#searchform [type='submit']:hover,article.texture-post-article .texture-readmore.button,.woocommerce .texture-product-hover a.th-button,.agency-elementor-load-more button,.texture-top2-slide.owl-carousel .owl-nav button:hover,.product-slide-widget .owl-carousel .owl-nav button:hover, .texture-slide.texture-brand .owl-nav button:hover,.page-contact .leadform-show-form input[type='submit'],.woocommerce .texture-product-hover a.product_type_simple,.post-slide-widget .owl-carousel .owl-nav button:hover{border-color:{$agency_elementor_theme_clr}} .loader {
    border-right: 4px solid {$agency_elementor_theme_clr};
    border-bottom: 4px solid {$agency_elementor_theme_clr};
    border-left: 4px solid {$agency_elementor_theme_clr};}
    .woocommerce .texture-product-image-cat-slide .texture-woo-product-list:hover .texture-product,.woocommerce .texture-product-image-cat-slide .texture-woo-product-list:hover .texture-product,[type='submit']{border-color:{$agency_elementor_theme_clr}} .agency-elementor-off-canvas-sidebar-wrapper .menu-close-btn:hover,.main-header .cart-close-btn:hover{color:{$agency_elementor_theme_clr};}";
   //text
   $agency_elementor_text_clr = esc_html(get_theme_mod('agency_elementor_text_clr'));
   $agency_elementor_style.="body,.woocommerce-error, .woocommerce-info, .woocommerce-message {color: {$agency_elementor_text_clr}}";
   //title
   $agency_elementor_title_clr = esc_html(get_theme_mod('agency_elementor_title_clr'));
   $agency_elementor_style.=".site-title span a,.sprt-tel b,.widget.woocommerce .widget-title, .open-widget-content .widget-title, .widget-title,.texture-title .title,.texture-hglt-box h6,h2.texture-post-title a, h1.texture-post-title ,#reply-title,h4.author-header,.page-head h1,.woocommerce div.product .product_title, section.related.products h2, section.upsells.products h2, .woocommerce #reviews #comments h2,.woocommerce table.shop_table thead th, .cart-subtotal, .order-total,.cross-sells h2, .cart_totals h2,.woocommerce-billing-fields h3,.page-head h1 a{color: {$agency_elementor_title_clr}}";
   //link
   $agency_elementor_link_clr = esc_html(get_theme_mod('agency_elementor_link_clr'));
   $agency_elementor_link_hvr_clr = esc_html(get_theme_mod('agency_elementor_link_hvr_clr'));
   $agency_elementor_style.="a,#open-above-menu.agency-elementor-menu > li > a{color:{$agency_elementor_link_clr}} #open-above-menu.agency-elementor-menu > li > a:hover,#open-above-menu.agency-elementor-menu li a:hover{color:{$agency_elementor_link_hvr_clr}}";

  // loader
   $agency_elementor_loader_bg_clr = esc_html(get_theme_mod('agency_elementor_loader_bg_clr','#9c9c9'));
   $agency_elementor_style.=".agency_elementor_overlayloader{background-color:{$agency_elementor_loader_bg_clr}}";
  

//Move to top 
$agency_elementor_move_to_top_bg_clr      = esc_html(get_theme_mod('agency_elementor_move_to_top_bg_clr'));
$agency_elementor_move_to_top_icon_clr    = esc_html(get_theme_mod('agency_elementor_move_to_top_icon_clr'));
$agency_elementor_style.="#move-to-top{background:{$agency_elementor_move_to_top_bg_clr};color:{$agency_elementor_move_to_top_icon_clr}}";

// Slider BG 
   $agency_elementor_lay3_bg_img_ovrly = esc_html(get_theme_mod('agency_elementor_lay3_bg_img_ovrly','#eaeaea'));
   $agency_elementor_lay3_bg_background_image_url          = esc_url(get_theme_mod('agency_elementor_lay3_bg_background_image_url',''));
   
   $agency_elementor_lay3_bg_background_repeat         = esc_html(get_theme_mod('agency_elementor_lay3_bg_background_repeat','no-repeat'));
   $agency_elementor_lay3_bg_background_position       = esc_html(get_theme_mod('agency_elementor_lay3_bg_background_position','center center'));
   $agency_elementor_lay3_bg_background_size           = esc_html(get_theme_mod('agency_elementor_lay3_bg_background_size','auto'));
   $agency_elementor_lay3_bg_background_attach         = esc_html(get_theme_mod('agency_elementor_lay3_bg_background_attach','scroll'));
   $agency_elementor_style.=".texture-slider-section.slide-layout-3:before{background:{$agency_elementor_lay3_bg_img_ovrly}}";
   $agency_elementor_style.=".texture-slider-section.slide-layout-3{background-image:url($agency_elementor_lay3_bg_background_image_url);
    background-repeat:{$agency_elementor_lay3_bg_background_repeat};
    background-position:{$agency_elementor_lay3_bg_background_position};
    background-size:{$agency_elementor_lay3_bg_background_size};
    background-attachment:{$agency_elementor_lay3_bg_background_attach};}";

    // ribbon
   $agency_elementor_ribbon_bg_img_url          = esc_url(get_theme_mod('agency_elementor_ribbon_bg_img_url',AGENCY_ELEMENTOR_THEME_URI .'assets/img/ribbon.jpg'));
   $agency_elementor_ribbon_bg_background_repeat        = esc_html(get_theme_mod('agency_elementor_ribbon_bg_background_repeat','no-repeat'));
   $agency_elementor_ribbon_bg_background_position       = esc_html(get_theme_mod('agency_elementor_ribbon_bg_background_position','center center'));
   $agency_elementor_ribbon_bg_background_size           = esc_html(get_theme_mod('agency_elementor_ribbon_bg_background_size','cover'));
   $agency_elementor_ribbon_bg_background_attach         = esc_html(get_theme_mod('agency_elementor_ribbon_bg_background_attach','scroll'));
   
   $agency_elementor_style.="section.texture-ribbon-section{background-image:url($agency_elementor_ribbon_bg_img_url);
    background-repeat:{$agency_elementor_ribbon_bg_background_repeat};
    background-position:{$agency_elementor_ribbon_bg_background_position};
    background-size:{$agency_elementor_ribbon_bg_background_size};}";


  /**************************/
  //Above Header Color Option
  /**************************/
   $agency_elementor_above_hd_bg_clr = esc_html(get_theme_mod('agency_elementor_above_hd_bg_clr','#1f4c94'));
   $agency_elementor_abv_header_background_image = esc_html( get_theme_mod('header_image'));
   $agency_elementor_style.=".top-header:before{background:{$agency_elementor_above_hd_bg_clr}}";
   $agency_elementor_style.= ".top-header{background-image:url($agency_elementor_abv_header_background_image);
   }";
   
    $agency_elementor_abv_content_txt_clr = esc_html(get_theme_mod('agency_elementor_abv_content_txt_clr','#fff'));
    $agency_elementor_abv_content_link_clr = esc_html(get_theme_mod('agency_elementor_abv_content_link_clr','#fff'));
    $agency_elementor_style.= ".top-header .top-header-bar{color:{$agency_elementor_abv_content_txt_clr}} .top-header .top-header-bar a{color:{$agency_elementor_abv_content_link_clr}}";

  /**************************/
  //Main Header Color Option
  /**************************/
   $agency_elementor_main_hd_bg_clr = esc_html(get_theme_mod('agency_elementor_main_hd_bg_clr','#2457AA'));
   $agency_elementor_main_content_txt_clr = esc_html(get_theme_mod('agency_elementor_main_content_txt_clr','#888'));
   $agency_elementor_main_content_link_clr = esc_html(get_theme_mod('agency_elementor_main_content_link_clr','#fff'));
   $agency_elementor_style.=".main-header:before,.sticky-header:before, .search-wrapper:before{background:{$agency_elementor_main_hd_bg_clr}}
    .site-description,main-header-col1,.header-support-content,.mhdrthree .site-description p{color:{$agency_elementor_main_content_txt_clr}} .mhdrthree .site-title span a,.header-support-content a, .texture-icon .count-item,.main-header a,.texture-icon .cart-icon a.cart-contents,.sticky-header .site-title a{color:{$agency_elementor_main_content_link_clr}}";

  /**************************/
  //Below Header Color Option
  /**************************/
   $agency_elementor_below_hd_bg_clr = esc_html(get_theme_mod('agency_elementor_below_hd_bg_clr','#1f4c94'));
   $agency_elementor_category_text_clr = esc_html(get_theme_mod('agency_elementor_category_text_clr',''));
   $agency_elementor_category_icon_clr = esc_html(get_theme_mod('agency_elementor_category_icon_clr',''));
   $agency_elementor_style.=".below-header:before{background:{$agency_elementor_below_hd_bg_clr}}
      .menu-category-list .toggle-title,.toggle-icon{color:{$agency_elementor_category_text_clr}}
      .below-header .cat-icon span{background:{$agency_elementor_category_icon_clr}}
   ";

  /**************************/
  //Header Square Icon Option
  /**************************/
   $agency_elementor_sq_icon_bg_clr = esc_html(get_theme_mod('agency_elementor_sq_icon_bg_clr','#1f4c94'));
   $agency_elementor_sq_icon_clr = esc_html(get_theme_mod('agency_elementor_sq_icon_clr','#fff'));
   $agency_elementor_style.=".header-icon a ,.header-support-icon a.whishlist ,.texture-icon .cart-icon a.cart-contents i,.cat-icon,.sticky-header .header-icon a , .sticky-header .texture-icon .cart-icon a.cart-contents,.responsive-main-header .header-support-icon a,.responsive-main-header .texture-icon .cart-icon a.cart-contents,.responsive-main-header .menu-toggle .menu-btn,.sticky-header-bar .menu-toggle .menu-btn,.header-icon a.account,.header-icon a.prd-search {background:{$agency_elementor_sq_icon_bg_clr};color:{$agency_elementor_sq_icon_clr}} .cat-icon span,.menu-toggle .icon-bar{background:{$agency_elementor_sq_icon_clr}}";
   /**************************/
  //Main Menu
  /**************************/
  $agency_elementor_menu_link_clr = esc_html(get_theme_mod('agency_elementor_menu_link_clr'));
  $agency_elementor_menu_link_hvr_clr = esc_html(get_theme_mod('agency_elementor_menu_link_hvr_clr'));
  $agency_elementor_style.=".agency-elementor-menu > li > a,.menu-category-list .toggle-title,.toggle-icon{color:{$agency_elementor_menu_link_clr}} .agency-elementor-menu > li > a:hover,.agency-elementor-menu .current-menu-item a{color:{$agency_elementor_menu_link_hvr_clr}}";

  $agency_elementor_sub_menu_bg_clr      = esc_html(get_theme_mod('agency_elementor_sub_menu_bg_clr'));
  $agency_elementor_sub_menu_lnk_clr     = esc_html(get_theme_mod('agency_elementor_sub_menu_lnk_clr'));
  $agency_elementor_sub_menu_lnk_hvr_clr = esc_html(get_theme_mod('agency_elementor_sub_menu_lnk_hvr_clr'));
  $agency_elementor_style.=".agency-elementor-menu li ul.sub-menu li a{color:{$agency_elementor_sub_menu_lnk_clr}} .agency-elementor-menu li ul.sub-menu li a:hover{color:{$agency_elementor_sub_menu_lnk_hvr_clr}}   .agency-elementor-menu ul.sub-menu{background:{$agency_elementor_sub_menu_bg_clr}}";
if((bool)get_theme_mod('agency_elementor_shadow_header')==true){
$agency_elementor_style.="header{
    box-shadow: 0 .125rem .3rem -.0625rem rgba(0,0,0,.03),0 .275rem .75rem -.0625rem rgba(0,0,0,.06)!important;
position: relative;
 }";
}
//Product title in single line
$agency_elementor_color_scheme = (bool)get_theme_mod('agency_elementor_prdct_single',true);
if($agency_elementor_color_scheme==false){
   $agency_elementor_style.=".texture-woo-product-list .woocommerce-loop-product__title {
    overflow: hidden;
    text-overflow: inherit;
    display: inherit;
    -webkit-box-orient: inherit;
    -webkit-line-clamp: inherit;
    line-height: 24px;
    max-height: inherit;}";
}
//Hide yith if WPC SMART Icon 

if( (class_exists( 'YITH_WCWL' )) ){
$agency_elementor_style.=" .woocommerce .entry-summary .woosw-btn{
  display:none;
}";
}elseif((class_exists( 'WPCleverWoosw' ))){
$agency_elementor_style.=" .woocommerce .entry-summary .yith-wcwl-add-to-wishlist{
  display:none;
}";
}

if( (class_exists( 'YITH_Woocompare' )) ){
$agency_elementor_style.=" .woocommerce .entry-summary .woosc-btn, .woocommerce-shop .woosc-btn{
  display:none;
}";
}elseif((class_exists( 'WPCleverWoosc' ))){
$agency_elementor_style.=" .woocommerce .entry-summary a.compare.button{
  display:none;
}";
}

  return $agency_elementor_style;
}

//start logo width
function agency_elementor_logo_width_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.texture-logo img,.sticky-header .logo-content img{
    max-width: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}
// top header height
function agency_elementor_top_header_height_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.top-header .top-header-bar{
    line-height: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}
function agency_elementor_abv_hdr_botm_brd_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.top-header{
    border-bottom-width: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}

// top footer height
function agency_elementor_top_footer_height_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.top-footer .top-footer-bar{
    line-height: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}
function agency_elementor_top_footer_border_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.top-footer{
    border-bottom-width: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}

// below footer height
function agency_elementor_below_footer_height_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.below-footer .below-footer-bar{
    line-height: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}
function agency_elementor_below_footer_border_responsive( $value, $dimension = 'desktop' ){
    $custom_css = '';
    switch ( $dimension ){
    case 'desktop':
      $v3 = $value;
      break;
    case 'tablet':
      $v3 = $value;
      break;
    case 'mobile':
      $v3 = $value;
      break;
  }
  $custom_css .= '.below-footer{
    border-top-width: ' . $v3 . 'px;
  }';
  $custom_css = agency_elementor_add_media_query( $dimension, $custom_css );
  return $custom_css;
}