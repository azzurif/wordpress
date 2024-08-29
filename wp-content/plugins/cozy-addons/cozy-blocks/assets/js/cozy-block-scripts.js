(($) => {
  "use strict";
  window["cozyBlockSliderInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`slider_${n}`];
    const swiperClass = `#cozyBlock_${n}`;
    const cozySlider = document.querySelector(swiperClass);

    let swiperAttr = {
      init: true,
      loop: blockOptions.sliderOptions.loop,
      speed: blockOptions.sliderOptions.speed,
      slidesPerView: blockOptions.sliderOptions.slidesPerView,
      navigation: {
        nextEl: `${swiperClass} .cozy-block-button-next`,
        prevEl: `${swiperClass} .cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${swiperClass} .swiper-pagination`,
        dynamicBullets: blockOptions.pagination.dynamicBullets,
      },
      effect: blockOptions.sliderOptions.effect,
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView <= 2 ? blockOptions.sliderOptions.slidesPerView : 2,
        },
        1024: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView <= 3 ? blockOptions.sliderOptions.slidesPerView : 3,
        },
        1180: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView,
        },
      },
      // parallax: true,
    };

    if (blockOptions.sliderOptions.autoplay.status) {
      swiperAttr.autoplay = { ...blockOptions.sliderOptions.autoplay };
    }

    const slider = new Swiper(swiperClass, swiperAttr);
  };

  window["cozyBlockContainerInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyContainer_${n}`];
    const containerClass = `#cozyBlock_${n}`;
    const cozyContainer = document.querySelector(containerClass);

    if (blockOptions.animation.effect === "none") {
      cozyContainer.classList.remove("visibility-none");
    }
    const containerStyles = [
      {
        property: "--cozyContainerMargin",
        value: `${blockOptions.margin.top}px ${blockOptions.margin.right}px ${blockOptions.margin.bottom}px ${blockOptions.margin.left}px`,
      },
      {
        property: "--cozyContainerPadding",
        value: `${blockOptions.padding.top}px ${blockOptions.padding.right}px ${blockOptions.padding.bottom}px ${blockOptions.padding.left}px`,
      },
      {
        property: "--cozyContainerBorderRadius",
        value: `${blockOptions.borderRadius.topL}px ${blockOptions.borderRadius.topR}px ${blockOptions.borderRadius.bottomR}px ${blockOptions.borderRadius.bottomL}px`,
      },
      {
        property: "--cozyContainerBorderRadiusHover",
        value: `${
          blockOptions.borderRadiusHover.topL.length !== 0
            ? blockOptions.borderRadiusHover.topL
            : blockOptions.borderRadius.topL
        }px ${
          blockOptions.borderRadiusHover.topR.length !== 0
            ? blockOptions.borderRadiusHover.topR
            : blockOptions.borderRadius.topR
        }px ${
          blockOptions.borderRadiusHover.bottomR.length !== 0
            ? blockOptions.borderRadiusHover.bottomR
            : blockOptions.borderRadius.bottomR
        }px ${
          blockOptions.borderRadiusHover.bottomL.length !== 0
            ? blockOptions.borderRadiusHover.bottomL
            : blockOptions.borderRadius.bottomL
        }px`,
      },
      {
        property: "--cozyContainerZIndex",
        value: blockOptions.zIndex,
      },
      {
        property: "--cozyContainerEffectFade",
        value: `cozyFade ${blockOptions.animation.duration}s forwards ${blockOptions.animation.delay}s`,
      },
    ];

    if (blockOptions.backgroundColorHover.length > 0) {
      containerStyles.push({
        property: "--cozyContainerBgColorHover",
        value: blockOptions.backgroundColorHover,
      });
    } else {
      containerStyles.push({
        property: "--cozyContainerBgColorHover",
        value: blockOptions.backgroundColor,
      });
    }

    if (blockOptions.border.type !== "none") {
      containerStyles.push({
        property: "--cozyContainerBorderWidth",
        value: `${blockOptions.border.widthDimension.top}px ${blockOptions.border.widthDimension.right}px ${blockOptions.border.widthDimension.bottom}px ${blockOptions.border.widthDimension.left}px`,
      });
      containerStyles.push({
        property: "--cozyContainerBorderType",
        value: blockOptions.border.type,
      });
      containerStyles.push({
        property: "--cozyContainerBorderColor",
        value: blockOptions.border.color,
      });
    }

    if (blockOptions.borderHover.type !== "none") {
      containerStyles.push({
        property: "--cozyContainerBorderWidthHover",
        value: `${blockOptions.borderHover.widthDimension.top}px ${blockOptions.borderHover.widthDimension.right}px ${blockOptions.borderHover.widthDimension.bottom}px ${blockOptions.borderHover.widthDimension.left}px`,
      });
      containerStyles.push({
        property: "--cozyContainerBorderTypeHover",
        value: blockOptions.borderHover.type,
      });
      if (blockOptions.borderHover.color.length > 0) {
        containerStyles.push({
          property: "--cozyContainerBorderColorHover",
          value: blockOptions.borderHover.color,
        });
      } else {
        containerStyles.push({
          property: "--cozyContainerBorderColorHover",
          value: blockOptions.border.color,
        });
      }
    }

    if (blockOptions.boxShadow.position.length > 0) {
      containerStyles.push({
        property: "--cozyContainerBoxShadow",
        value: `${blockOptions.boxShadow.horizontal}px ${blockOptions.boxShadow.vertical}px ${blockOptions.boxShadow.blur}px ${blockOptions.boxShadow.spread}px ${blockOptions.boxShadow.color} inset`,
      });
    } else {
      containerStyles.push({
        property: "--cozyContainerBoxShadow",
        value: `${blockOptions.boxShadow.horizontal}px ${blockOptions.boxShadow.vertical}px ${blockOptions.boxShadow.blur}px ${blockOptions.boxShadow.spread}px ${blockOptions.boxShadow.color}`,
      });
    }

    if (blockOptions.boxShadowHover.position.length > 0) {
      containerStyles.push({
        property: "--cozyContainerBoxShadowHover",
        value: `${blockOptions.boxShadowHover.horizontal}px ${blockOptions.boxShadowHover.vertical}px ${blockOptions.boxShadowHover.blur}px ${blockOptions.boxShadowHover.spread}px ${blockOptions.boxShadowHover.color} inset`,
      });
    } else {
      containerStyles.push({
        property: "--cozyContainerBoxShadowHover",
        value: `${blockOptions.boxShadowHover.horizontal}px ${blockOptions.boxShadowHover.vertical}px ${blockOptions.boxShadowHover.blur}px ${blockOptions.boxShadowHover.spread}px ${blockOptions.boxShadowHover.color}`,
      });
    }

    if (blockOptions.animation.effect === "fade") {
      switch (blockOptions.animation.direction) {
        case "left":
          containerStyles.push({
            property: "--cozyContainerTransformFade",
            value: `translateX(-${blockOptions.animation.gap}px)`,
          });
          break;

        case "right":
          containerStyles.push({
            property: "--cozyContainerTransformFade",
            value: `translateX(${blockOptions.animation.gap}px)`,
          });
          break;

        case "top":
          containerStyles.push({
            property: "--cozyContainerTransformFade",
            value: `translateY(-${blockOptions.animation.gap}px)`,
          });
          break;

        case "bottom":
          containerStyles.push({
            property: "--cozyContainerTransformFade",
            value: `translateY(${blockOptions.animation.gap}px)`,
          });
          break;

        default:
          break;
      }
    }

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addFadeAnimation() {
      if (isElementInViewport(cozyContainer)) {
        if (blockOptions.animation.effect !== "none") {
          cozyContainer.classList.add(
            "effect-" + blockOptions.animation.effect
          );
          cozyContainer.classList.remove("visibility-none");
        }
      }
    }

    function observeCozyContainer(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cozyContainer.classList.add(
            "effect-" + blockOptions.animation.effect
          );
          cozyContainer.classList.remove("visibility-none");
        }
      });
    }
    // addFadeAnimation();
    const observer = new IntersectionObserver(observeCozyContainer, {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5,
    });

    function observeElement() {
      observer.observe(cozyContainer);
    }
    observeElement();

    const observerConfig = {
      childList: true, // Watch for changes in the children of the observed element
      subtree: true, // Watch for changes in the entire subtree
    };

    const domObserver = new MutationObserver(() => {
      // Disconnect the previous observer
      observer.disconnect();
      // Re-observe the target element
      observeElement();
    });

    // Start observing the document's DOM changes
    domObserver.observe(document, observerConfig);

    window.addEventListener("scroll", addFadeAnimation);

    containerStyles.forEach((style) => {
      cozyContainer.style.setProperty(style.property, style.value);
    });

    const stickyDiv = document.querySelector(
      ".cozy-block-wrapper.position-sticky " + containerClass
    );

    window.addEventListener("scroll", function () {
      const rect = stickyDiv.getBoundingClientRect();

      if (rect.top <= 0) {
        // The stickyDiv has touched or passed the top of the window
        cozyContainer.style.setProperty(
          "background",
          blockOptions.stickyStyles.bgColor
        );
      } else {
        cozyContainer.style.setProperty("background", "");
      }
    });
  };

  window["cozyBlockTeamsInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyTeams_${n}`];
    const teamsClass = `#cozyBlock_${n}`;
    const cozyTeams = document.querySelector(teamsClass);

    const teamsStyles = [
      {
        property: "--cozyTeamsGridTemplateColumns",
        value: blockOptions.gridOptions.displayColumn,
      },
      {
        property: "--cozyTeamsGridGap",
        value: `${blockOptions.gridOptions.columnGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
      {
        property: "--cozyPaginationWidth",
        value: `${blockOptions.carouselOptions.pagination.width}px`,
      },
      {
        property: "--cozyPaginationHeight",
        value: `${blockOptions.carouselOptions.pagination.height}px`,
      },
      {
        property: "--cozyPaginationBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.borderRadius}px`,
      },
      {
        property: "--cozyPaginationActiveWidth",
        value: `${blockOptions.carouselOptions.pagination.activeWidth}px`,
      },
      {
        property: "--cozyPaginationActiveBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.activeBorderRadius}px`,
      },
      {
        property: "--cozyPaginationColor",
        value: blockOptions.carouselOptions.pagination.color,
      },
      {
        property: "--cozyPaginationColorHover",
        value: blockOptions.carouselOptions.pagination.colorHover,
      },
      {
        property: "--cozyPaginationActiveColor",
        value: blockOptions.carouselOptions.pagination.activeColor,
      },
      {
        property: "--cozyPaginationActiveColorHover",
        value: blockOptions.carouselOptions.pagination.activeColorHover,
      },
      {
        property: "--cozyPaginationPositionVertical",
        value: `${blockOptions.carouselOptions.pagination.positionVertical}px`,
      },
    ];

    teamsStyles.forEach((style) => {
      cozyTeams.style.setProperty(style.property, style.value);
    });

    const carouselAttr = {
      init: true,
      loop: blockOptions.carouselOptions.sliderOptions.loop,
      speed: blockOptions.carouselOptions.sliderOptions.speed,
      autoplay: { ...blockOptions.carouselOptions.sliderOptions.autoplay },
      centeredSlides: blockOptions.carouselOptions.sliderOptions.centeredSlides,
      slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${teamsClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${teamsClass} .swiper-button-prev.cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${teamsClass} .swiper-pagination`,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 2
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 2,
        },
        1024: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 3
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 3,
        },
        1180: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView,
        },
      },
    };

    const carousel = new Swiper(teamsClass + ".swiper-container", carouselAttr);
  };

  window["cozyBlockTestimonialInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyTestimonial_${n}`];
    const testimonialClass = `#cozyBlock_${n}`;
    const cozyTestimonial = document.querySelector(testimonialClass);

    const testimonialStyles = [
      {
        property: "--cozyTestimonialGridTemplateColumns",
        value: blockOptions.gridOptions.displayColumn,
      },
      {
        property: "--cozyTestimonialGridGap",
        value: `${blockOptions.gridOptions.columnGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
      {
        property: "--cozyPaginationWidth",
        value: `${blockOptions.carouselOptions.pagination.width}px`,
      },
      {
        property: "--cozyPaginationHeight",
        value: `${blockOptions.carouselOptions.pagination.height}px`,
      },
      {
        property: "--cozyPaginationBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.borderRadius}px`,
      },
      {
        property: "--cozyPaginationActiveWidth",
        value: `${blockOptions.carouselOptions.pagination.activeWidth}px`,
      },
      {
        property: "--cozyPaginationActiveBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.activeBorderRadius}px`,
      },
      {
        property: "--cozyPaginationColor",
        value: blockOptions.carouselOptions.pagination.color,
      },
      {
        property: "--cozyPaginationColorHover",
        value: blockOptions.carouselOptions.pagination.colorHover,
      },
      {
        property: "--cozyPaginationActiveColor",
        value: blockOptions.carouselOptions.pagination.activeColor,
      },
      {
        property: "--cozyPaginationActiveColorHover",
        value: blockOptions.carouselOptions.pagination.activeColorHover,
      },
      {
        property: "--cozyPaginationPositionVertical",
        value: `${blockOptions.carouselOptions.pagination.positionVertical}px`,
      },
    ];

    testimonialStyles.forEach((style) => {
      cozyTestimonial.style.setProperty(style.property, style.value);
    });

    const carouselAttr = {
      init: true,
      loop: blockOptions.carouselOptions.sliderOptions.loop,
      speed: blockOptions.carouselOptions.sliderOptions.speed,
      autoplay: { ...blockOptions.carouselOptions.sliderOptions.autoplay },
      centeredSlides: blockOptions.carouselOptions.sliderOptions.centeredSlides,
      slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${testimonialClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${testimonialClass} .swiper-button-prev.cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${testimonialClass} .swiper-pagination`,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 2
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 2,
        },
        1024: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 3
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 3,
        },
        1180: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView,
        },
      },
    };

    const carousel = new Swiper(
      testimonialClass + ".swiper-container",
      carouselAttr
    );
  };

  window["cozyBlockModalInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyModal_${n}`];
    const modalClass = `#cozyBlock_${n}`;
    const cozyModal = document.querySelector(modalClass);

    function getCookieValue(cookieName) {
      const name = cookieName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return "";
    }
    //Add cozy-overlay-wrapper only if it does not exists
    const ancestorDiv = document.querySelector(".wp-site-blocks");
    const hasChildDiv = document.querySelector(
      ".wp-site-blocks > .cozy-overlay-wrapper"
    );
    const body = document.querySelector("body");
    if (hasChildDiv === null) {
      const overlayWrapper = document.createElement("div");
      overlayWrapper.className = "cozy-overlay-wrapper visibility-none";
      ancestorDiv.appendChild(overlayWrapper);
    }

    const cozyOverlay = document.querySelector(".cozy-overlay-wrapper");
    if (
      blockOptions.modalType === "default" &&
      blockOptions.modalEvent === "load"
    ) {
      const modalShown = getCookieValue(`cozyModal_${n}`);
      if (!blockOptions.loadOnRefresh && modalShown.length > 0) {
        return;
      }
      cozyOverlay.style.backgroundColor = blockOptions.backgroundOverlayColor;
      cozyOverlay.classList.remove("visibility-none");
      body.classList.add("overflow-hidden");
      cozyModal.classList.remove("display-none");

      if (!blockOptions.loadOnRefresh && modalShown.length <= 0) {
        const now = new Date();
        const expirationTime = new Date(now.getTime() + 30 * 60 * 1000);
        document.cookie = `cozyModal_${n}=true; expires=${expirationTime.toUTCString()}; path=/`;
      }
    }

    const closeButton = cozyModal.querySelector(`.modal-icon-wrapper`);
    if (closeButton !== null) {
      closeButton.addEventListener("click", function () {
        if (blockOptions.modalType === "default") {
          body.classList.remove("overflow-hidden");
          cozyOverlay.classList.add("visibility-none");
          cozyOverlay.style.backgroundColor = "#c3c3c3";
        }
        cozyModal.classList.add("display-none");
      });
    }

    if (
      blockOptions.modalType === "default" &&
      blockOptions.modalEvent === "click"
    ) {
      const openButton = cozyModal.previousSibling;
      openButton.addEventListener("click", function () {
        if (
          blockOptions.modalType === "default" &&
          blockOptions.modalEvent === "click"
        ) {
          cozyOverlay.style.backgroundColor =
            blockOptions.backgroundOverlayColor;

          body.classList.add("overflow-hidden");
          cozyOverlay.classList.remove("visibility-none");
        }
        cozyModal.classList.remove("display-none");
      });
    }

    //Overlay click closes modal for modal type default only
    if (blockOptions.modalType === "default") {
      cozyOverlay.addEventListener("click", function () {
        if (!cozyModal.classList.contains("display-none")) {
          body.classList.remove("overflow-hidden");
          this.classList.add("visibility-none");
          cozyModal.classList.add("display-none");
          cozyOverlay.style.backgroundColor = "#c3c3c3";
        }
      });
    }
  };

  window["cozyBlockDateTimeInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyDateTime_${n}`];
    const dateTimeClass = `#cozyBlock_${n}`;
    const cozyDateTime = document.querySelector(dateTimeClass);

    function updateTime(blockOptions, cozyDateTime) {
      var now = new Date();
      if (cozyDateTime) {
        const date = cozyDateTime.querySelector(".cozy-date");
        const time = cozyDateTime.querySelector(".cozy-time");

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const daysInWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        const month = months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
        const week = daysInWeek[now.getDay()];

        document.getElementsByClassName("cozy-date").innerHtml = "Amun Pote";
        if (blockOptions.date.enabled) {
          if (blockOptions.date.format === "m-d-y") {
            date.innerHTML = `${
              blockOptions.week.enabled
                ? blockOptions.abbr
                  ? week.slice(0, 3) + " "
                  : week + " "
                : ""
            }${blockOptions.abbr ? month.slice(0, 3) : month} ${day}, ${year}`;
          } else {
            date.innerHTML = `${
              blockOptions.week.enabled
                ? blockOptions.abbr
                  ? week.slice(0, 3) + " "
                  : week + " "
                : ""
            }${day} ${blockOptions.abbr ? month.slice(0, 3) : month}, ${year}`;
          }
        }

        if (blockOptions.time.enabled) {
          time.innerHTML = now.toLocaleTimeString("en-US", {
            hour12: blockOptions.time.timeFormat,
          });
        }
      }

      setTimeout(() => updateTime(blockOptions, cozyDateTime), 1000);
    }

    updateTime(blockOptions, cozyDateTime);
  };

  window["cozyBlockPostSliderInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyPostSlider_${n}`];
    const postSliderClass = `#cozyBlock_${n}`;
    const cozyPostSlider = document.querySelector(postSliderClass);

    const swiperSlides = cozyPostSlider.querySelectorAll(".wp-block-post");
    swiperSlides.forEach((slide) => {
      slide.classList.add("swiper-slide"); // Add your custom class here
    });

    const postSliderStyles = [
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
      {
        property: "--cozyPaginationWidth",
        value: `${blockOptions.carouselOptions.pagination.width}px`,
      },
      {
        property: "--cozyPaginationHeight",
        value: `${blockOptions.carouselOptions.pagination.height}px`,
      },
      {
        property: "--cozyPaginationBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.borderRadius}px`,
      },
      {
        property: "--cozyPaginationActiveWidth",
        value: `${blockOptions.carouselOptions.pagination.activeWidth}px`,
      },
      {
        property: "--cozyPaginationActiveBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.activeBorderRadius}px`,
      },
      {
        property: "--cozyPaginationColor",
        value: blockOptions.carouselOptions.pagination.color,
      },
      {
        property: "--cozyPaginationColorHover",
        value: blockOptions.carouselOptions.pagination.colorHover,
      },
      {
        property: "--cozyPaginationActiveColor",
        value: blockOptions.carouselOptions.pagination.activeColor,
      },
      {
        property: "--cozyPaginationActiveColorHover",
        value: blockOptions.carouselOptions.pagination.activeColorHover,
      },
      {
        property: "--cozyPaginationPositionVertical",
        value: `${blockOptions.carouselOptions.pagination.positionVertical}px`,
      },
    ];

    postSliderStyles.forEach((style) => {
      cozyPostSlider.style.setProperty(style.property, style.value);
    });

    const sliderAttr = {
      init: true,
      loop: blockOptions.carouselOptions.sliderOptions.loop,
      autoplay: { ...blockOptions.carouselOptions.sliderOptions.autoplay },
      speed: blockOptions.carouselOptions.sliderOptions.speed,
      centeredSlides: blockOptions.carouselOptions.sliderOptions.centeredSlides,
      slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${postSliderClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${postSliderClass} .swiper-button-prev.cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${postSliderClass} .swiper-pagination`,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView <= 2 ? blockOptions.carouselOptions.sliderOptions.slidesPerView : 2,
        },
        1024: {
          slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView <= 3 ? blockOptions.carouselOptions.sliderOptions.slidesPerView : 3,
        },
        1180: {
          slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
        },
      },
    };

    const postSlider = new Swiper(
      postSliderClass + " .swiper-container",
      sliderAttr
    );
  };

  window["cozyBlockPostInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyPost_${n}`];
    const postClass = `#cozyBlock_${n}`;
    const cozyPost = document.querySelector(postClass);

    const swiperSlides = cozyPost.querySelectorAll(".wp-block-post");
    swiperSlides.forEach((slide) => {
      slide.classList.add("swiper-slide"); // Add your custom class here
    });

    const postStyles = [
      {
        property: "--cozyGridTemplateColumns",
        value: blockOptions.gridOptions.displayColumn,
      },
      {
        property: "--cozyGridGap",
        value: `${blockOptions.gridOptions.columnGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
      {
        property: "--cozyPaginationWidth",
        value: `${blockOptions.carouselOptions.pagination.width}px`,
      },
      {
        property: "--cozyPaginationHeight",
        value: `${blockOptions.carouselOptions.pagination.height}px`,
      },
      {
        property: "--cozyPaginationBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.borderRadius}px`,
      },
      {
        property: "--cozyPaginationActiveWidth",
        value: `${blockOptions.carouselOptions.pagination.activeWidth}px`,
      },
      {
        property: "--cozyPaginationActiveBorderRadius",
        value: `${blockOptions.carouselOptions.pagination.activeBorderRadius}px`,
      },
      {
        property: "--cozyPaginationColor",
        value: blockOptions.carouselOptions.pagination.color,
      },
      {
        property: "--cozyPaginationColorHover",
        value: blockOptions.carouselOptions.pagination.colorHover,
      },
      {
        property: "--cozyPaginationActiveColor",
        value: blockOptions.carouselOptions.pagination.activeColor,
      },
      {
        property: "--cozyPaginationActiveColorHover",
        value: blockOptions.carouselOptions.pagination.activeColorHover,
      },
      {
        property: "--cozyPaginationPositionVertical",
        value: `${blockOptions.carouselOptions.pagination.positionVertical}px`,
      },
    ];

    postStyles.forEach((style) => {
      cozyPost.style.setProperty(style.property, style.value);
    });

    const carouselAttr = {
      init: true,
      autoplay: { ...blockOptions.carouselOptions.sliderOptions.autoplay },
      loop: blockOptions.carouselOptions.sliderOptions.loop,
      speed: blockOptions.carouselOptions.sliderOptions.speed,
      centeredSlides: blockOptions.carouselOptions.sliderOptions.centeredSlides,
      slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${postClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${postClass} .swiper-button-prev.cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${postClass} .swiper-pagination`,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 2
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 2,
        },
        1024: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView <= 3
              ? blockOptions.carouselOptions.sliderOptions.slidesPerView
              : 3,
        },
        1180: {
          slidesPerView:
            blockOptions.carouselOptions.sliderOptions.slidesPerView,
        },
      },
    };

    const carousel = new Swiper(postClass + " .swiper-container", carouselAttr);
  };

  window["cozyBlockNewsTickerInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyNewsTicker_${n}`];
    const newsTickerClass = `#cozyBlock_${n}`;
    const cozyNewsTicker = document.querySelector(newsTickerClass);

    const swiperSlides = cozyNewsTicker.querySelectorAll(".wp-block-post");
    swiperSlides.forEach((slide) => {
      slide.classList.add("swiper-slide"); // Add your custom class here
    });

    const newsTickerStyles = [
      {
        property: "--cozyHeight",
        value: `${blockOptions.height}px`,
      },
      {
        property: "--cozyNavVerticalGap",
        value: `${blockOptions.carouselOptions.navigation.verticalGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
    ];

    newsTickerStyles.forEach((style) => {
      cozyNewsTicker.style.setProperty(style.property, style.value);
    });

    const carouselAttr = {
      init: true,
      direction: "vertical",
      loop: blockOptions.carouselOptions.sliderOptions.loop,
      autoplay: blockOptions.carouselOptions.sliderOptions.autoplay,
      speed: blockOptions.carouselOptions.sliderOptions.speed,
      slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${newsTickerClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${newsTickerClass} .swiper-button-prev.cozy-block-button-prev`,
      },
    };

    const carousel = new Swiper(
      newsTickerClass + " .swiper-container",
      carouselAttr
    );
  };

  window["cozyBlockPopularPostsInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyPopularPosts_${n}`];
    const popularPostsClass = `#cozyBlock_${n}`;
    const cozyPopularPosts = document.querySelector(popularPostsClass);

    const tickerStyles = [
      {
        property: "--cozyHeight",
        value: `${blockOptions.carouselOptions.height}px`,
      },
      {
        property: "--cozyNavVerticalGap",
        value: `${blockOptions.carouselOptions.navigation.verticalGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
    ];

    tickerStyles.forEach((style) => {
      cozyPopularPosts.style.setProperty(style.property, style.value);
    });

    if (blockOptions.layout === "ticker") {
      const swiperSlides = cozyPopularPosts.querySelectorAll(".wp-block-post");
      swiperSlides.forEach((slide) => {
        slide.classList.add("swiper-slide"); // Add your custom class here
      });

      const tickerAttr = {
        init: true,
        direction: "vertical",
        loop: blockOptions.carouselOptions.sliderOptions.loop,
        autoplay: blockOptions.carouselOptions.sliderOptions.autoplay,
        speed: blockOptions.carouselOptions.sliderOptions.speed,
        slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
        spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
        navigation: {
          nextEl: `${popularPostsClass} .swiper-button-next.cozy-block-button-next`,
          prevEl: `${popularPostsClass} .swiper-button-prev.cozy-block-button-prev`,
        },
      };

      const ticker = new Swiper(
        popularPostsClass + ".layout-ticker .swiper-container",
        tickerAttr
      );
    }
  };

  window["cozyBlockTrendingPostsInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyTrendingPosts_${n}`];
    const trendingPostsClass = `#cozyBlock_${n}`;
    const cozyTrendingPosts = document.querySelector(trendingPostsClass);

    const tickerStyles = [
      {
        property: "--cozyHeight",
        value: `${blockOptions.carouselOptions.height}px`,
      },
      {
        property: "--cozyNavVerticalGap",
        value: `${blockOptions.carouselOptions.navigation.verticalGap}px`,
      },
      {
        property: "--cozyNavIconSize",
        value: `${blockOptions.carouselOptions.navigation.iconSize}px`,
      },
      {
        property: "--cozyNavWidth",
        value: `${blockOptions.carouselOptions.navigation.iconBoxWidth}px`,
      },
      {
        property: "--cozyNavHeight",
        value: `${blockOptions.carouselOptions.navigation.iconBoxHeight}px`,
      },
      {
        property: "--cozyNavBorderRadius",
        value: `${blockOptions.carouselOptions.navigation.borderRadius}px`,
      },
      {
        property: "--cozyNavIconColor",
        value: blockOptions.carouselOptions.navigation.color,
      },
      {
        property: "--cozyNavIconColorHover",
        value: blockOptions.carouselOptions.navigation.colorHover,
      },
      {
        property: "--cozyNavBgColor",
        value: blockOptions.carouselOptions.navigation.backgroundColor,
      },
      {
        property: "--cozyNavBgColorHover",
        value: blockOptions.carouselOptions.navigation.backgroundColorHover,
      },
    ];

    tickerStyles.forEach((style) => {
      cozyTrendingPosts.style.setProperty(style.property, style.value);
    });

    if (blockOptions.layout === "ticker") {
      const swiperSlides = cozyTrendingPosts.querySelectorAll(".wp-block-post");
      swiperSlides.forEach((slide) => {
        slide.classList.add("swiper-slide"); // Add your custom class here
      });

      const tickerAttr = {
        init: true,
        direction: "vertical",
        loop: blockOptions.carouselOptions.sliderOptions.loop,
        autoplay: blockOptions.carouselOptions.sliderOptions.autoplay,
        speed: blockOptions.carouselOptions.sliderOptions.speed,
        slidesPerView: blockOptions.carouselOptions.sliderOptions.slidesPerView,
        spaceBetween: blockOptions.carouselOptions.sliderOptions.spaceBetween,
        navigation: {
          nextEl: `${trendingPostsClass} .swiper-button-next.cozy-block-button-next`,
          prevEl: `${trendingPostsClass} .swiper-button-prev.cozy-block-button-prev`,
        },
      };

      const ticker = new Swiper(
        trendingPostsClass + ".layout-ticker .swiper-container",
        tickerAttr
      );
    }
  };

  window["cozyBlockRelatedPostsInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyRelatedPosts_${n}`];
    const relatedPostsClass = `#cozyBlock_${n}`;
    const cozyRelatedPosts = document.querySelector(relatedPostsClass);

    const gridStyles = [
      {
        property: "--cozyGridTemplateColumns",
        value: blockOptions.gridOptions.displayColumn,
      },
      {
        property: "--cozyGridGap",
        value: `${blockOptions.gridOptions.columnGap}px`,
      },
    ];

    gridStyles.forEach((style) => {
      cozyRelatedPosts.style.setProperty(style.property, style.value);
    });
  };

  window["cozyBlockScrollTopInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyScrollTop_${n}`];
    const scrollTopClass = `#cozyBlock_${n}`;
    const cozyScrollTop = document.querySelector(scrollTopClass);

    function scrollFunction() {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        cozyScrollTop.classList.add("visibility-visible");
        cozyScrollTop.classList.remove("visibility-hidden");
      } else {
        cozyScrollTop.classList.add("visibility-hidden");
        cozyScrollTop.classList.remove("visibility-visible");
      }
    }

    scrollFunction();
    window.onscroll = function () {
      scrollFunction();
    };

    cozyScrollTop.addEventListener("click", function () {
      jQuery("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  };

  window["cozyBlockCounterInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyCounter_${n}`];
    const counterClass = `#cozyBlock_${n}`;
    const cozyCounter = document.querySelector(counterClass);

    const counter = cozyCounter.querySelector("span");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    let animationTriggered = false;

    function addCounterAnimation() {
      if (!animationTriggered && isElementInViewport(cozyCounter)) {
        animationTriggered = true;

        const time =
          blockOptions.animationDuration &&
          Math.floor(Math.abs(blockOptions.animationDuration)) > 499
            ? Math.floor(Math.abs(blockOptions.animationDuration)) - 200
            : 300;

        const endTarget = blockOptions.endNumber
          ? Math.floor(Math.abs(blockOptions.endNumber))
          : 0;

        let cleanStartValue = 0;

        const increaseBy = ((endTarget - cleanStartValue) / time) * 53;
        let timeoutIdInside;

        const timeoutId = setTimeout(() => {
          function updateCount() {
            cleanStartValue += increaseBy;
            counter.innerHTML = Math.floor(cleanStartValue).toLocaleString();
            if (cleanStartValue < endTarget) {
              timeoutIdInside = setTimeout(() => {
                updateCount();
              }, 53);
            } else {
              counter.innerHTML = Math.floor(endTarget).toLocaleString();
            }
          }
          updateCount();
        }, 200);

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(timeoutIdInside);
        };
      }
    }
    addCounterAnimation();

    window.addEventListener("scroll", addCounterAnimation);
  };

  window["cozyBlockSidebarPanelInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozySidebarPanel_${n}`];
    const sidebarClass = `#cozyBlock_${n}`;
    const cozySidebar = document.querySelector(sidebarClass);

    //Add cozy-overlay-wrapper only if it does not exists
    const ancestorDiv = document.querySelector(".wp-site-blocks");
    const hasChildDiv = document.querySelector(
      ".wp-site-blocks > .cozy-overlay-wrapper"
    );
    const body = document.querySelector("body");
    if (hasChildDiv === null) {
      const overlayWrapper = document.createElement("div");
      overlayWrapper.className = "cozy-overlay-wrapper visibility-none";
      ancestorDiv.appendChild(overlayWrapper);
    }
    const cozyOverlay = document.querySelector(".cozy-overlay-wrapper");

    const sidebarOpenBtn = cozySidebar.querySelector(".open-icon-wrapper");
    sidebarOpenBtn.addEventListener("click", function () {
      cozyOverlay.style.backgroundColor = blockOptions.overlayBgColor;
      cozySidebar.classList.toggle("sidebar-panel-active");
      if (cozySidebar.classList.contains("sidebar-panel-active")) {
        cozyOverlay.classList.remove("visibility-none");
        body.classList.add("overflow-hidden");
      }
    });

    const sidebarCloseBtn = cozySidebar.querySelector(".close-icon-wrapper");
    sidebarCloseBtn.addEventListener("click", function () {
      cozySidebar.classList.remove("sidebar-panel-active");
      cozyOverlay.classList.add("visibility-none");
      body.classList.remove("overflow-hidden");
      cozyOverlay.style.backgroundColor = "#c3c3c3";
    });

    cozyOverlay.addEventListener("click", function () {
      cozySidebar.classList.remove("sidebar-panel-active");
      cozyOverlay.classList.add("visibility-none");
      body.classList.remove("overflow-hidden");
      cozyOverlay.style.backgroundColor = "#c3c3c3";
    });
  };

  window["cozyBlockProgressBarInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyProgressBar_${n}`];
    const progressBarClass = `#cozyBlock_${n}`;
    const cozyProgressBar = document.querySelector(progressBarClass);

    let progress = cozyProgressBar.querySelector(".progress");

    if (progress === null) {
      const prevSiblingDiv = cozyProgressBar.previousElementSibling;
      progress = prevSiblingDiv.querySelector(".progress");
    }

    const progressBar = cozyProgressBar.querySelector(".cozy-progress-bar");

    let animationTriggered = false;

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addCounterAnimation() {
      if (
        blockOptions.layout === "default" &&
        !animationTriggered &&
        isElementInViewport(cozyProgressBar)
      ) {
        progressBar.style.width = `${blockOptions.progress}%`;
        progressBar.style.height = ``;
      }

      if (
        blockOptions.layout === "vertical" &&
        !animationTriggered &&
        isElementInViewport(cozyProgressBar)
      ) {
        progressBar.style.height = `${blockOptions.progress}%`;
        progressBar.style.width = ``;
      }

      if (
        blockOptions.layout === "circle" &&
        !animationTriggered &&
        isElementInViewport(cozyProgressBar)
      ) {
        const circleProgressBarStyles = [
          {
            property: "--circleProgressPercentage",
            value: blockOptions.progress + "%",
          },
        ];

        function animateProgressBar() {
          let currentProgress = 0;

          function updateProgressBar() {
            if (currentProgress >= blockOptions.progress) {
              cozyProgressBar.style.setProperty(
                circleProgressBarStyles[0].property,
                blockOptions.progress + "%"
              );
              progressBar.style.setProperty(
                "background",
                `conic-gradient(${blockOptions.layoutCircle.primaryColor} ${blockOptions.progress}%, ${blockOptions.layoutCircle.secondaryColor} ${blockOptions.progress}%)`
              );
            } else {
              cozyProgressBar.style.setProperty(
                circleProgressBarStyles[0].property,
                currentProgress + "%"
              );
              progressBar.style.setProperty(
                "background",
                `conic-gradient(${blockOptions.layoutCircle.primaryColor} ${currentProgress}%, ${blockOptions.layoutCircle.secondaryColor} ${blockOptions.progress}%)`
              );

              currentProgress += 1; // You can adjust the increment value
              requestAnimationFrame(updateProgressBar);
            }
          }

          updateProgressBar();
        }

        // Call the function to start the animation
        animateProgressBar();
      }

      if (
        progress &&
        !animationTriggered &&
        isElementInViewport(cozyProgressBar)
      ) {
        animationTriggered = true;

        const time = 500;

        const endTarget = blockOptions.progress
          ? parseFloat(blockOptions.progress).toFixed(1)
          : 0;

        let cleanStartValue = 0;

        const increaseBy = ((endTarget - cleanStartValue) / time) * 53;
        let timeoutIdInside;

        const timeoutId = setTimeout(() => {
          function updateCount() {
            cleanStartValue += increaseBy;
            progress.innerHTML =
              parseFloat(cleanStartValue).toFixed(1).toLocaleString() + "%";
            if (cleanStartValue < endTarget) {
              timeoutIdInside = setTimeout(() => {
                updateCount();
              }, 53);
            } else {
              progress.innerHTML = endTarget.toLocaleString() + "%";
            }
          }
          updateCount();
        }, 200);

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(timeoutIdInside);
        };
      }
    }
    addCounterAnimation();

    window.addEventListener("scroll", addCounterAnimation);
  };

  window["cozyBlockAccordionInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyAccordion_${n}`];
    const accordionClass = `#cozyBlock_${n}`;
    const cozyAccordion = document.querySelector(accordionClass);

    const accordionStyles = [
      {
        property: "--cozyIconRotate",
        value: `${blockOptions.icon.rotate}deg`,
      },
      {
        property: "--cozyIconRotateActive",
        value: `${blockOptions.icon.rotateActive}deg`,
      },
    ];

    const cozyAccordionItem = cozyAccordion.querySelectorAll(
      ".cozy-block-accordion-item"
    );

    cozyAccordionItem.forEach((item) => {
      const title = item.querySelector(".cozy-accordion-title");

      const icon = item.querySelector(".accordion-icon-wrapper svg");
      const iconPath = item.querySelector(".accordion-icon-wrapper svg path");

      title.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content) {
          this.classList.toggle("active");
          content.classList.toggle("display-block");
          if (this.classList.contains("active")) {
            icon.setAttribute(
              "viewBox",
              `${blockOptions.icon.activeViewBox.vx} ${blockOptions.icon.activeViewBox.vy} ${blockOptions.icon.activeViewBox.vw} ${blockOptions.icon.activeViewBox.vh}`
            );
            iconPath.setAttribute("d", blockOptions.icon.activePath);
          }

          if (!this.classList.contains("active")) {
            icon.setAttribute(
              "viewBox",
              `${blockOptions.icon.viewBox.vx} ${blockOptions.icon.viewBox.vy} ${blockOptions.icon.viewBox.vw} ${blockOptions.icon.viewBox.vh}`
            );
            iconPath.setAttribute("d", blockOptions.icon.path);
          }
        }
      });
    });

    accordionStyles.forEach((style) => {
      cozyAccordion.style.setProperty(style.property, style.value);
    });
  };

  window["cozyBlockAdvancedTabInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyAdvancedTab_${n}`];
    const advancedTabClass = `#cozyBlock_${n}`;
    const cozyAdvancedTab = document.querySelector(advancedTabClass);

    function openTab(childClientId) {
      const tabContents = cozyAdvancedTab.querySelectorAll(
        ".cozy-block-advanced-tab-item"
      );
      tabContents.forEach((tab) => {
        tab.classList.remove("show");
      });
      // Deactivate all tab buttonsattributes
      const tabButtons = cozyAdvancedTab.querySelectorAll(".cozy-tab-button");
      tabButtons.forEach((button) => {
        button.classList.remove("active");
      });

      const selectedTab = cozyAdvancedTab.querySelector(
        `[data-client-id="${childClientId}"]`
      );
      if (selectedTab) {
        selectedTab.classList.add("show");
      }

      // Activate the clicked tab button
      const activeTab = cozyAdvancedTab.querySelector(
        `[id="${childClientId}"]`
      );
      if (activeTab) {
        activeTab.classList.add("active");
      }
    }

    const defaultTab = cozyAdvancedTab.querySelector(
      ".cozy-tab-button:first-child"
    );
    if (defaultTab) {
      const tabId = defaultTab.getAttribute("id"); // Assuming you have a data attribute for tab name
      openTab(tabId);
    }

    //Adding Click Event to tab button
    const tabButtons = cozyAdvancedTab.querySelectorAll(".cozy-tab-button");
    tabButtons.forEach((button) => {
      const childClientId = button.getAttribute("id");
      button.addEventListener("click", function () {
        openTab(childClientId);
      });
    });
  };

  window["cozyBlockProductSliderInit"] = (e) => {
    const n = e.replace(/-/gi, "_");
    const blockOptions = window[`cozyProductSlider_${n}`];
    const productSliderClass = `#cozyBlock_${n}`;
    const cozyProductSlider = document.querySelector(productSliderClass);

    const swiperSlides = cozyProductSlider.querySelectorAll(".wp-block-post");
    swiperSlides.forEach((slide) => {
      slide.classList.add("swiper-slide"); // Add your custom class here
    });

    const sliderAttr = {
      init: true,
      loop: blockOptions.sliderOptions.loop,
      // autoplay: { ...blockOptions.sliderOptions.autoplay },
      speed: blockOptions.sliderOptions.speed,
      centeredSlides: blockOptions.sliderOptions.centeredSlides,
      slidesPerView: blockOptions.sliderOptions.slidesPerView,
      spaceBetween: blockOptions.sliderOptions.spaceBetween,
      navigation: {
        nextEl: `${productSliderClass} .swiper-button-next.cozy-block-button-next`,
        prevEl: `${productSliderClass} .swiper-button-prev.cozy-block-button-prev`,
      },
      pagination: {
        clickable: true,
        el: `${productSliderClass} .swiper-pagination`,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView <= 2 ? blockOptions.sliderOptions.slidesPerView : 2,
        },
        1024: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView <= 3 ? blockOptions.sliderOptions.slidesPerView : 3,
        },
        1180: {
          slidesPerView: blockOptions.sliderOptions.slidesPerView,
        },
      },
    };

    if (blockOptions.sliderOptions.autoplay.status) {
      sliderAttr.autoplay = { ...blockOptions.sliderOptions.autoplay };
    }

    const productSlider = new Swiper(
      productSliderClass + " .cozy-product-slider__swiper-container",
      sliderAttr
    );
  };
})(jQuery);
