// HEADER TRANSFORMER FUNCTION
var welcomeHeight = $('.welcome').height();
var navSections = $('.nav-bar .section');
var navSectionsFull = $('.nav-sections .section');

$(window).scroll(function() {
    var portfolioSecPosition = $('.portfolio-section').position().top - 50,
        aboutSecPosition = $('.about-section').position().top - 50,
        contactSecPosition = $('.contact-section').position().top - 50,
	    header = $('.nav-bar'),
	    scroll = $(window).scrollTop();

    if (scroll >= welcomeHeight + 36) {
        header.css({
        	'height': '36px',
        	'padding-top': '12px'
        });
        $('.logo-header').addClass('active');
        $('.nav-sections').addClass('mini');  
    } else if (scroll < welcomeHeight + 36 && $(window).innerWidth() >= 758){
        header.css({
        	'height': '50px',
        	'padding-top': '24px'
        });
        $('.logo-header').removeClass('active');  
        $('.nav-sections').removeClass('mini');    
    } else {
        $('.logo-header').removeClass('active');
        $('.nav-sections').removeClass('mini');  
    }

    var sectionLoopAndRemove = function(array) {
        $.each(array, function(i) {
            $(array[i]).removeClass('active');
        });
    }

    if (scroll >= portfolioSecPosition && scroll <= aboutSecPosition) {
        sectionLoopAndRemove(navSectionsFull);
        $('#portfolio').addClass('active');
    } else if (scroll >= aboutSecPosition && scroll <= contactSecPosition) {
        sectionLoopAndRemove(navSectionsFull);
        $('#about').addClass('active');
    } else if (scroll >= contactSecPosition) {
        sectionLoopAndRemove(navSectionsFull);
        $('#contact').addClass('active');
    } else {
        sectionLoopAndRemove(navSectionsFull);
    }
});

// NAV EVENTS
var navMenuButton = $('.nav-menu, .nav-menu-close');
var navMenuOpen = $('.nav-menu');
var navMenuClose = $('.nav-menu-close');
var miniSections = $('.nav-sections-mini');
var miniSection = $('.nav-sections-mini .section');

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

navSectionsFull.hover(
    function() {
        $.each(navSectionsFull, function(i) {
            $(navSectionsFull[i]).removeClass('active');
        });
        $(this).addClass('active');
    },
    function() {
        var secName = $(this).attr('id');
        var secClassName = secName+'-section';
        var scroll = $(window).scrollTop();
        if(scroll < $('.'+secClassName).position().top) {
            $(this).removeClass('active');
        }      
    }
);

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
// $('.fan-art .content-thumbs .content').on('click', function() {
//     var comicPosters = postersJSON.posters.comicPosters;
//     var moviePosters = postersJSON.posters.moviePosters;
//     imgName = $(this).attr('data-target');
//     imgSrc = "./assets/images/portfolio-images/posters/"+imgName+".jpg";
//     $('body').append('<div class="modal in" id="'+imgName+'" aria-hidden="false" tabindex="-1" role="dialog" style="display: block; padding-left: 0px;"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img src="'+imgSrc+'" alt="content"></div></div></div></div></div>');
// });

// STATIONARY
var stationary = stationaryJSON.stationary.items;
var stationaryThumbContainer = $('.stationary .content-thumbs');
var stationaryModals = $('.stationary .modals');
$.each(stationary, function(k, v) {
    stationaryThumbContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.thumbSrc+'" alt="content"></div>');
    stationaryModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.src+'" alt="content"></div></div></div></div></div>');    
});

// LOGOS
var logos = logosJSON.logos.items;
var logosThumbContainer = $('.logos .content-thumbs');
var logoModals = $('.logos .modals');
$.each(logos, function(k, v) {
    logosThumbContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.thumbSrc+'" alt="content"></div>');
    logoModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.src+'" alt="content"></div></div></div></div></div>');    
});

// PRINTS
var prints = printsJSON.prints.items;
var printsThumbContainer = $('.print-design .content-thumbs');
var printModals = $('.print-design .modals');
$.each(prints, function(k, v) {
    printsThumbContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.thumbSrc+'" alt="content"></div>');
    if (v.portrait) {
        printModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.src+'" alt="content"></div></div></div></div></div>');
    } else {
        printModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.src+'" alt="content"></div></div></div></div></div>');
    }   
});

// POSTERS
var featuredPosters = postersJSON.posters.featuredPosters;
var featuredPostersContainer = $('.fan-art .content-featured');
var posterModals = $('.fan-art .modals');
$.each(featuredPosters, function(k, v) {
    featuredPostersContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.posterSrc+'" alt="content"></div>');
    posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"><a href="'+v.buyLink+'" target="_blank"><div class="buy-button"><span>Buy Now</span></div></a></div></div></div></div></div>');     
});

var comicPosters = postersJSON.posters.comicPosters;
var comicThumbContainer = $('.fan-art .content-thumbs.comics');
$.each(comicPosters, function(k, v) {
    comicThumbContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.posterThumbSrc+'" alt="content"></div>');
    posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"><a href="'+v.buyLink+'" target="_blank"><div class="buy-button"><span>Buy Now</span></div></a></div></div></div></div></div>');  
});

var moviePosters = postersJSON.posters.moviePosters;
var movieThumbContainer = $('.fan-art .content-thumbs.movies');
$.each(moviePosters, function(k, v) {
    movieThumbContainer.append('<div class="content" data-toggle="modal" data-target="#'+v.name+'"><img src="./images/artichoke-small.png" data-src="'+v.posterThumbSrc+'" alt="content"></div>');
    if (v.landscape) {
        posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"><a href="'+v.buyLink+'" target="_blank"><div class="buy-button"><span>Buy Now</span></div></a></div></div></div></div></div>');
    } else if (v.buyLink == "na") {
        posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.posterSrc+'" alt="content"></div></div></div></div></div>');
    } else {
        posterModals.append('<div class="modal" id="'+v.name+'" aria-hidden="true" tabindex="-1" role="dialog"><div class="modal-dialog portrait" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img class="lazy" src="'+v.posterSrc+'" alt="content"></div><div class="modal-footer"><a href="'+v.buyLink+'" target="_blank"><div class="buy-button"><span>Buy Now</span></div></a></div></div></div></div></div>');
    }  
});

// LAZY LOADING
$("img").unveil();

// FEATURED POSTER POSITIONING
var featuredPosterObjs = $('.fan-art .content-featured .content');
if (innerWidth > 768) {
    for (i=0; i < featuredPosterObjs.length; i++) {
        $(featuredPosterObjs[i]).css('float', 'none');
    } 
} else {
    for (i=0; i < featuredPosterObjs.length; i++) {
        if (i % 2 == 0) {
            $(featuredPosterObjs[i]).css('float', 'left');
        } else {
            $(featuredPosterObjs[i]).css('float', 'right');
        }
    }
}

$(window).on('resize', function() {
    var innerWidth = window.innerWidth;
    if (innerWidth > 768) {
        for (i=0; i < featuredPosterObjs.length; i++) {
            $(featuredPosterObjs[i]).css('float', 'none');
        } 
    } else {
        for (i=0; i < featuredPosterObjs.length; i++) {
            if (i % 2 == 0) {
                $(featuredPosterObjs[i]).css('float', 'left');
            } else {
                $(featuredPosterObjs[i]).css('float', 'right');
            }
        }
    }
});

// var populateMediaThumbs = function(array, container, modals) {
//     $.each(array, function(k, v) {
//         container.append('<div class="content"><a href="#'+v.name+'"><img src="'+v.thumbSrc+'" alt="content"></a></div>');
//         modals.append('<div class="modal" id="'+v.name+'" aria-hidden="true"><div class="modal-dialog"><div class="modal-header"><a href="#close" class="btn-close" aria-hidden="true">×</a></div><div class="modal-body"><img src="'+v.src+'" alt="content"></div><div class="modal-footer"></div></div></div></div>');  
//     });
// }