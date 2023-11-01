/* TOP Menu Stick*/
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $(".header-sticker").removeClass("stick");
  } else {
    $(".header-sticker").addClass("stick");
  }
});



/* AOS Animation on scroll */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});


/* Back to top button */
let backtotop = $('.back-to-top');

// Check if the backtotop element exists
if (backtotop.length) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.addClass('active');
    } else {
      backtotop.removeClass('active');
    }
  };

  // Run the toggleBacktotop function when the page loads
  $(document).ready(function () {
    toggleBacktotop();
  });

  // Add a scroll event listener to toggle the button
  $(window).scroll(function () {
    toggleBacktotop();
  });

  // Add a click event listener to scroll to the top when the button is clicked
  backtotop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
}

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $('.navbar-toggler span').toggleClass('bx-bar-chart bx-x');
    $('#mobile-nav-overlay').toggleClass('active');

  });
  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide'); // This will hide the navbar-collapse.
    $('.navbar-toggler span').toggleClass('bx-bar-chart bx-x');
    $('#mobile-nav-overlay').toggleClass('active');
  });
});


/* Testimonials */
$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
    autoPlay: false,
    items: 1,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: { items: 1 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 }
    }
  });


});



/** Navbar links active state on scroll */
function updateNavbarLinks() {
  let position = window.scrollY + 200;

  $('.scrollto').each(function () {
    let target = $(this.hash);
    if (target.length) {
      let top = target.offset().top;
      let bottom = top + target.outerHeight();

      if (position >= top && position <= bottom) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    }
  });
}

function scrollToElement(element) {
  let header = $('#header');
  let offset = header.outerHeight();
  let target = $(element);

  if (target.length) {
    let elementPos = target.offset().top;
    $('html, body').animate({
      scrollTop: elementPos - offset
    }, 500);
  }
}

/** Scroll with offset on links with a class name .scrollto */
$(document).on('click', '.scrollto', function (e) {
  if ($(this.hash).length) {
    e.preventDefault();
    scrollToElement(this.hash);
  }
});

/** Scroll with offset on page load with hash links in the url */
$(window).on('load', function () {
  if (window.location.hash && $(window.location.hash).length) {
    scrollToElement(window.location.hash);
  }
});

$(window).on('scroll', updateNavbarLinks);

// Initialize the active state on load
updateNavbarLinks();


/* preloader */
window.addEventListener("load", function () {
  document.querySelector("#preloader").style.display = "none";
});



















