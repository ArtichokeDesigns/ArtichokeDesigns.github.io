$(document).ready(function(){
  $('.slideshow-container').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: false,
	respondTo: window,
	prevArrow: $('.prev-arrow'),
	nextArrow: $('.next-arrow')

  });
});