$(document).ready(function() {
  // Initialize the carousel
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Typing animation for "I'm Harsh Kumar Pal"
  var typed = new Typed('#typing-animation', {
    strings: ["Software Engineer", "Web Developer", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  // Animate numbers on scroll
  var counter = function() {
    $('.number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-number');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  };

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      counter();
    }
  });
});
