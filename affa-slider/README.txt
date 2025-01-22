
============================================================
                    Affa Slider
============================================================

Thank you for purchasing Affa Slider! This lightweight and responsive slider template will help you create beautiful sliders for your projects with ease.

------------------------------------------------------------
1. FOLDER STRUCTURE
------------------------------------------------------------
After extracting the downloaded zip file, you will see the following structure:

affa-slider/
├── documentation/   # Full Documentation in HTML format
├── index.html       # Example slider file
├── assets/          # CSS, SASS, SCSS, JS, and Images
│   ├── css/         # Stylesheets
│   ├── sass/        # SASS supported files
│   ├── scss/        # SCSS supported files
│   ├── js/          # JavaScript files
│   ├── img/         # Images used in the demo
├── source/          # Unminified source files (CSS/JS)
└── README.txt       # This file

------------------------------------------------------------
2. INSTALLATION
------------------------------------------------------------
To use Affa Slider in your project:

1. Add the CSS and JS files from the "assets" folder into your project:


<link rel="stylesheet" href="assets/css/swiper.min.css">
<link rel="stylesheet" href="assets/css/style.min.css">
<link rel="stylesheet" href="assets/css/animate.min.css">
<link rel="stylesheet" href="assets/css/responsive.min.css">

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/swiper.js"></script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="assets/js/main.min.js"></script>

2. Include the following HTML structure for your slider:


<!-- Slider Section Start -->
<div class="section slider-section">

    <div class="slider-active">
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <!-- Single Slider Start  -->
          <div class="single-slider swiper-slide animation-style-01" style="background-color: #f4f7e1;">
            <div class="slider-shape" style="background-color: #ffffe5;"></div>
            <div class="container">

              <!-- Slider Content Start -->
              <div class="slider-content">
                  <h2 class="title">
                    Discover Your Next Favorite Product                    
                  </h2>
                  <p>
                    Explore Our Exclusive Collection of Handpicked Products Designed to Elevate Your Lifestyle.
                  </p>
                  <a href="#" class="btn btn-primary btn-hover-dark btn-margin">purchase now</a>
              </div>
              <!-- Slider Content End -->

              <!-- Slider images Start -->
              <div class="slider-images">
                  <img src="assets/images/slider/slider-item-1.png" width="707" height="477" alt="Slider item 1">
              </div>
              <!-- Slider images End -->
              </div>
          </div>
          <!-- Single Slider End  -->

        </div>
      </div>

        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</div>
<!-- Slider Section End -->

3. Initialize the slider using JavaScript:

<script>
document.addEventListener('DOMContentLoaded', function() {
  (".slider-active .swiper-container").init({
    slidesPerView: 1,
    effect: "fade",
    loop: false,
    speed: 600,
    pagination: {
        el: ".slider-active .swiper-pagination",
        clickable: true,
    },
    //   navigation: {
    //       nextEl: ".slider-active .swiper-button-next",
    //       prevEl: ".slider-active .swiper-button-prev",
    //   }, 
    autoplay: {
      delay: 6000,
    },
  });  
});
</script>

------------------------------------------------------------
3. FEATURES
------------------------------------------------------------
- Lightweight and responsive slider
- Autoplay functionality
- Navigation arrows
- Dots navigation (pagination)
- Customizable slide speed and behavior
- Modern design with clean code

------------------------------------------------------------
4. CUSTOMIZATION OPTIONS
------------------------------------------------------------
You can customize the slider using the following options when initializing it:

| Option               | Type       | Default   | Description                                                       |
|----------------------|------------|-----------|-------------------------------------------------------------------|
| slidesPerView        | Number     | 1         | Number of slides per view                                         |
| centeredSlides       | Boolean    | true      | Active slide will be centered, not always on the left side        |
| spaceBetween         | Number     | 0         | Distance between slides in px                                     |
| loop                 | Boolean    | true      | To enable continuous loop mode                                    |
| speed                | Number     | 1500      | Duration of transition between slides                             |
| slideToClickedSlide  | Boolean    | true      | Click on this slide will produce transition to this slide         |
| pagination           | Boolean    | true      | Object with pagination parameters to enable with default settings |
| navigation           | Boolean    | true      | Object with pagination parameters to enable with default settings |


Example:
<script>
    ('.slider-active .swiper-container').init({
        slidesPerView: 1,
        effect: "fade",
        loop: false,
        speed: 600,
        autoplay: {
          delay: 6000,
        },
    });
</script>

------------------------------------------------------------
5. SUPPORT
------------------------------------------------------------
If you encounter any issues or have questions about Affa Slider, please contact our support team:

Email: alissioteam@gmail.com  
Support Hours: Monday - Friday, 9 AM - 11 PM (GMT)

Thank you for choosing Affa Slider! We hope it adds great value to your project.

============================================================
                        END OF FILE
============================================================
