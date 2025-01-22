/* ----------------------------------

Name: main.js
Author: Alissio
Website: https://www.affa-slider.com
Exclusively available here: https://themeforest.net/user/alissio

------------------------------------- */





/*====================================================


	Table of Contents

		01. Hero Slider



	
====================================================*/



/*======================

	01. Hero Slider 

========================*/

  var heroSlider = new Swiper(".hero-slider .swiper-container", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 6000,
    },
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





