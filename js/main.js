(function ($) {
  "use strict";

  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  $(document).ready(function () {
    var audio = new Audio("wedding-audio.mp3");
    audio.loop = true;
    // audio.muted = true; // Ban đầu tắt tiếng
    // Phát nhạc ngay khi trang được tải lại
    audio.play().then(() => {
      setTimeout(() => {
        audio.muted = false; // Bật lại âm thanh sau khi đã phát thành công
      }, 500);
    }).catch(() => console.log("Trình duyệt chặn tự động phát."));
  
    $(".audio-btn").html("🔊"); // Mặc định là đang phát
    $(".audio-btn").click(function () {
      if (audio.paused) {
        audio.play();
        $(this).html("🔊");
      } else {
        audio.pause();
        $(this).html("🔇");
      }
    });
  });

  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Mở popup "Mừng cưới"
  $("#open-popup").click(function () {
    $("#popup").fadeIn();
  });

  // Đóng popup khi nhấn dấu X
  $(".popup-close").click(function () {
    $("#popup").fadeOut();
  });

  // Đóng popup khi nhấn nền mờ
  $("#popup").click(function (e) {
    if (e.target.id === "popup") {
      $("#popup").fadeOut();
    }
  });

  // Xử lý popup cảm ơn khi gửi lời chúc
  $("#sendWish").click(function () {
    $("#thankYouPopup").fadeIn(); // Hiện popup cảm ơn
    $("#wishForm")[0].reset(); // Xóa nội dung form
  });

  // Đóng popup cảm ơn khi nhấn dấu X
  $(".close-popup-thank").click(function () {
    $("#thankYouPopup").fadeOut();
  });

  // Đóng popup cảm ơn khi click ra ngoài
  $("#thankYouPopup").click(function (e) {
    if (e.target.id === "thankYouPopup") {
      $("#thankYouPopup").fadeOut();
    }
  });

  // Gallery carousel
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    // autoplayTimeout: 2000,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
})(jQuery);
