$(document).ready(function () {
  $(".dd").click(function (e) {
    e.preventDefault();
    $(".nav_menu--open").removeClass("active");
  });
  $(".header_menu--down").on("click", function (e) {
    e.preventDefault();
    $(".header_link").toggleClass("header_link--active");
  });

  $(".header_menu--down").on("click", function (e) {
    e.preventDefault();
    $(".nav").toggleClass("nav--active");
  });

  $(".nav_menu > li > a").click(function (event) {
    event.preventDefault();
    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
  });

  $(".top ").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
