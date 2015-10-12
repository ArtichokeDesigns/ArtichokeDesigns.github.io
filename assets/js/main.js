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

    // MODALS
    $('.modal').on('click', function() {
        thumbPosition = $(this).position().top;
        reposition = thumbPosition - $(window).height();
        $('html, body').animate({ scrollTop: reposition + 36 + 'px' });    
    });

    // STATIONARY
    var stationary = stationaryJSON.stationary.items;
    var stationaryThumbContainer = $('.stationary .content-thumbs');
    var stationaryModals = $('.stationary .modals');
    $.each(stationary, function(k, v) {
        stationaryThumbContainer.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.thumbSrc+'" alt="content"></a></div>');
        stationaryModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.src+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');
        
    });

    // LOGOS
    var logos = logosJSON.logos.items;
    var logosThumbContainer = $('.logos .content-thumbs');
    var logoModals = $('.logos .modals');
    $.each(logos, function(k, v) {
        logosThumbContainer.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.thumbSrc+'" alt="content"></a></div>');
        logoModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.src+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');
        
    });

    // PRINTS
    var prints = printsJSON.prints.items;
    var printsThumbContainer = $('.print-design .content-thumbs');
    var printModals = $('.print-design .modals');
    $.each(prints, function(k, v) {
        printsThumbContainer.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.thumbSrc+'" alt="content"></a></div>');
        printModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.src+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');
        
    });

    // POSTERS
    var comicPosters = postersJSON.posters.comicPosters;
    var comicThumbContainer = $('.fan-art .content-thumbs.comics');
    var posterModals = $('.fan-art .modals');
    $.each(comicPosters, function(k, v) {
        comicThumbContainer.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.posterThumbSrc+'" alt="content"></a></div>');
        posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');
        
    });

    var moviePosters = postersJSON.posters.moviePosters;
    console.log(moviePosters)
    var movieThumbContainer = $('.fan-art .content-thumbs.movies');
    $.each(moviePosters, function(k, v) {
        movieThumbContainer.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.posterThumbSrc+'" alt="content"></a></div>');
        posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');
        
    });



});