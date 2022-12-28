$(function () {
  $(".slider").slick({
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
      '<div><img src="prev-arrow.png" class="prev-arrow cursor-pointer" /></div>;',
    nextArrow:
      '<div><img src="next-arrow.png" class="next-arrow cursor-pointer"/></div>;',
  });

  $(".img-slider").slick({
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
      '<div><img src="prev-arrow.png" class="prev-arrow2 cursor-pointer"/></div>;',
    nextArrow:
      '<div><img src="next-arrow.png" class="next-arrow2 cursor-pointer"/></div>;',
  });
});
