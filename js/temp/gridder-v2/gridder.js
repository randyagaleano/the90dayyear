;(function ($) {
"use strict";

$('head').append('<link rel="stylesheet" href="js/temp/gridder-v2/gridder.css" type="text/css" />');
$('body').append('<div class=gridder-bar><a href=javascript:void(0);><i class="fa fa-check-circle fa-fw"></i> Enable Grid</a></div><div class=gridder><div class=container><div class="grid-1 col-1"></div><div class="grid-1 col-2"></div><div class="grid-1 col-3"></div><div class="grid-1 col-4"></div><div class="grid-1 col-5"></div><div class="grid-1 col-6"></div><div class="grid-1 col-7"></div><div class="grid-1 col-8"></div><div class="grid-1 col-9"></div><div class="grid-1 col-10"></div><div class="grid-1 col-11"></div><div class="grid-1 col-12"></div></div></div>');
$(document).keydown(function(e){
    //CTRL + V keydown combo
    if(e.keyCode == 71){
        $('.gridder').fadeToggle();
        $('.gridder-bar a').html(function(i, html){
            return html === '<i class="fa fa-check-circle fa-fw"></i> Enable Grid' ? '<i class="fa fa-times-circle fa-fw"></i> Disable Grid' : '<i class="fa fa-check-circle fa-fw"></i> Enable Grid';
        });
        $('.gridder-bar a').toggleClass('active');
    }
});
$('.gridder-bar a').click(function() {
    $(this).toggleClass('active');
    $(this).html(function(i, html){
        return html === '<i class="fa fa-check-circle fa-fw"></i> Enable Grid' ? '<i class="fa fa-times-circle fa-fw"></i> Disable Grid' : '<i class="fa fa-check-circle fa-fw"></i> Enable Grid';
    });
    $('.gridder').fadeToggle();
});

$(window).resize();

}(jQuery));