$(document).ready(function(){
    // HEADER TRANSFORMER FUNCTION
	$(window).scroll(function() {
		var header = $('.nav-bar');
		var scroll = $(window).scrollTop();
        var welcomeHeight = $('.welcome').height()

        if (scroll >= welcomeHeight + 36) {
            header.css({
            	'height': '36px',
            	'padding-top': '12px'
            });
            $('.logo-header').addClass('active');  
        } else if (scroll < welcomeHeight + 36 && $(window).innerWidth() >= 758){
            header.css({
            	'height': '50px',
            	'padding-top': '24px'
            });
            $('.logo-header').removeClass('active');    
        } else {
            $('.logo-header').removeClass('active');
        }

	});

    // MINI NAV EVENTS
    var navMenu = $('.nav-menu');
    var miniSections = $('.nav-sections-mini');
    var miniSection = $('.section-mini');

    navMenu.on('click', function() {
        if (miniSections.hasClass('active')) {
            miniSection.removeClass('active');
            setTimeout(function() {
                miniSections.removeClass('active');
            }, 300);
        } else {
            miniSections.addClass('active');
            setTimeout(function() {
                miniSection.addClass('active');
            }, 300);
        }
    });
});