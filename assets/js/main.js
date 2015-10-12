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

    // NAV EVENTS
    var navMenuButton = $('.nav-menu, .nav-menu-close');
    var navMenuOpen = $('.nav-menu');
    var navMenuClose = $('.nav-menu-close');
    var miniSections = $('.nav-sections-mini');
    var miniSection = $('.nav-sections-mini .section');
    var navSections = $('.nav-bar .section');

    navMenuButton.on('click', function() {
        if (miniSections.hasClass('active')) {
            navMenuClose.fadeOut().promise().done(function() {
                navMenuOpen.fadeIn();
            });
            miniSection.removeClass('active');
            setTimeout(function() {
                miniSections.removeClass('active');
            }, 300);
        } else {
            navMenuOpen.fadeOut().promise().done(function() {
                navMenuClose.fadeIn();
            });
            miniSections.addClass('active');
            setTimeout(function() {
                miniSection.addClass('active');
            }, 300);
        }
    });

    var scrollDest;
    var secClassName;

    $.each(navSections, function(i) {
        $(navSections[i]).on('click', function() {
            secClassName = '.'+this.id+'-section';
            scrollDest = $(secClassName).position().top;
            if ($(window).innerWidth() >= 786) {
                $('html, body').animate({ scrollTop: scrollDest - 36 + 'px' });
            } else {
                $('html, body').animate({ scrollTop: scrollDest - 70 + 'px' });
            }
        });
    });


});