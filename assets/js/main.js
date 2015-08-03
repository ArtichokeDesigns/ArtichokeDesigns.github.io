$(document).ready(function(){
  // HEADER TRANSFORMER FUNCTION
	$(window).scroll(function() {
		var header = $('.nav-bar');
		var scroll = $(window).scrollTop();

        if (scroll >= 380) {
            header.css({
            	'height': '36px',
            	'padding-top': '12px'
            });  
        } else {
            header.css({
            	'height': '50px',
            	'padding-top': '24px'
            });   
        }

	});
});