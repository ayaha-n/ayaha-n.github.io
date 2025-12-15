console.log("JS loaded:", new Date().toISOString());
$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // ===== scroll indicator → about =====
  var $indicator = $(".scroll-indicator");
  var headerH = $(".header").outerHeight() || 0;
  var aboutTop = $("#about").offset().top - headerH;

  // click → about
  $indicator.on("click", function () {
    $("html, body").animate(
      { scrollTop: aboutTop },
      500,
      "swing"
    );
  });

  // scroll → hide
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $indicator.fadeOut(300);
    } else {
      $indicator.fadeIn(300);
    }
  });
});

