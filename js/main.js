$(document).ready(function () {
  $(window).on("scroll", function () {
    const Y = window.scrollY;
    if (Y > 500) {
      $("#nav").addClass("nav-scroll");
    } else {
      $("#nav").removeClass("nav-scroll");
    }
  });

  /*- slick-slider -*/
  $(".slick").slick({
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
  /*- slick-slider -*/
});
