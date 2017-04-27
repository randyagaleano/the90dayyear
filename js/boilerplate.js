/* add browser info to HTML tag */
var doc = document.documentElement; doc.setAttribute('data-useragent', navigator.userAgent);

;(function ($) {
"use strict";

$('body').prepend('<div id="mobile-site-menu-overlay"></div>');

/* Install Responsive jPanel */
var jPM = $.jPanelMenu({
    menu: '#site-menu',
    trigger: '#mobile-site-menu-anchor a',
    animated: false,
    afterOpen: function(){$('#mobile-site-menu-overlay').addClass('active');},
    afterClose: function(){ setTimeout(function(){$('#mobile-site-menu-overlay').removeClass('active');}, 300);}
});

/* Setup breakpoints for responsive JS activations */
var jRes = jRespond([
    {
        label: 'small',
        enter: 0,
        exit: 759
    },{
        label: 'medium',
        enter: 760,
        exit: 979
    },{
        label: 'large',
        enter: 980,
        exit: 1219
    },{
        label: 'xlarge',
        enter: 1220,
        exit: 10000
    }
]);

jRes.addFunc({
    breakpoint: ['small','medium'],
    enter: function() {
        /* start jPanelMenu */
        jPM.on();
        $('.add-to-mobile').clone().appendTo($('#jPanelMenu-menu'));
    },
    exit: function() {
        jPM.off();
    }
});

$(window).resize();

}(jQuery));