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
  var counter = 10;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        alert('REDIRECT HERE');
        clearInterval(counter);
    }

  }, 1000);

})();

}

