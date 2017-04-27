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
