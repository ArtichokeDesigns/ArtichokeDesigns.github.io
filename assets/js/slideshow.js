$(document).ready(function(){
  $('.fan-art .content-thumbs, .print-design .content-thumbs').slick({
  	lazyLoad: 'ondemand',
	infinite: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    }
    ]
  });
});