$(document).ready(function(){
  $('.fan-art .content-thumbs, .print-design .content-thumbs').slick({
  	lazyLoad: 'ondemand',
	infinite: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	responsive: [
	    {
	      breakpoint: 758,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
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