/* ----------------------------------

Name: main.js
Author: Peachline
Website: https://www.viana-beauty.com
Exclusively available here: https://themeforest.net/user/peachline

------------------------------------- */





/*====================================================


	Table of Contents

		01. Image Slider

      + Synchronize Control Image and Quote Sliders
      + Stop on Hover Image Slider



	
====================================================*/



/*======================

	01. Image Slider 

========================*/

/*--
        Slider
    -----------------------------------*/
    var slider = new Swiper(".slider-active .swiper-container", {
      speed: 600,
      effect: "fade",
      loop: false,
      pagination: {
          el: ".slider-active .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".slider-active .swiper-button-next",
          prevEl: ".slider-active .swiper-button-prev",
      },
      // autoplay: {
      //     delay: 8000,
      // },
  })








