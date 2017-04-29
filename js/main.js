//BROWSEHAPPY BROWSER NOTICE FUNCTION
function hidebrowsehappydiv() {
   document.getElementById('browsehappy-notice').style.display = 'none';
}

//jQuery Code
jQuery(document).ready(function($) {
    $('a.next').click(function(e){
        e.preventDefault();
        $('.form-section.step1').hide();
        $('.form-section.step2').show();
        $('#lightbox .bar-inner').css('width','75%');
        $('#lightbox .bar p span').text('75');
    }); 
});

window.onload = function(){
(function(){
    var counter = 10,
        countDown = document.getElementById("count"),
        videoLink = document.getElementById("videoLink").getAttribute("href");
    setInterval(function() {
    counter--;
    if (counter >= 0) {
      countDown.innerHTML = counter;
    }
    if (counter === 0) {
        window.location = videoLink;
        clearInterval(counter);
    }
  }, 1000);
})();
}

$('.popup').click(function(event) {
var width  = 575,
    height = 400,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    = this.href,
    opts   = 'status=1' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;
window.open(url, 'twitter', opts);
return false;
});

$('.fbpopup').click(function(event) {
var width  = 575,
    height = 400,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    = this.href,
    opts   = 'status=1' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;
window.open(url, 'facebook', opts);
return false;
});


