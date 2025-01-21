/* ----------------------------------

Name: main.js
Author: Peachline
Website: https://www.viana-beauty.com
Exclusively available here: https://themeforest.net/user/peachline

------------------------------------- */





/*====================================================


	Table of Contents

		01. Gallery Slider

			+ Fade Carousel
			+ Thumb Slider
      + Control Fade and Thumb Sliders



	
====================================================*/



/*======================

	01. Gallery Slider 

========================*/


/*-----------------------------------
  # hero-slider
  ------------------------------ */

  var heroSlider = new Swiper(".hero-slider .swiper-container", {
    loop: true,
    speed: 600,
    autoplay: false,
    lazy: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".hero-slider .swiper-pagination",
      clickable: true,
    },

    // navigation: {
    //   nextEl: ".hero-slider .swiper-button-next",
    //   prevEl: ".hero-slider .swiper-button-prev",
    // },
    navigation: false
  });





