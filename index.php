<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Opt-in page</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,300italic,300,600,600italic,700,700italic' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/fonts.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
    	<!--[if lt IE 9]>
            <div class="browsehappy" id="browsehappy-notice"> <h3>Your Browser is Out Of Date!</h3> <p>Update your browser to view this website correctly.</p><a href="http://browsehappy.com/" class="update" target="_blank">Update Your Browser Now</a> <a href="javascript:hidebrowsehappydiv();" class="close" id="browsehappy-close">I don't care. Hide this message.</a> </div>
        <![endif]-->
        
        <!-- ** CONTENT ** -->
        <div id="content-wrap">
            <div class="overlay"></div>
            <div id="content">
                <h1>Spread the word!</h1>
                <div class="buttons">
                    <a href="#" class="fb" target="_blank"><span class="fa fa-facebook"></span> Share on Facebook</a>

                    <a href="https://twitter.com/share?text=Turns%20out%20there%27s%20a%20%27brain%20type%27%20for%20achieving%20goals.%20Thx%20@todd_herman%20for%20the%20guide%20-%20" class="tw" target="_blank"><span class="fa fa-twitter"></span> Share on Twitter</a>

                </div>
                <a href="video.html<?php echo createUrl(); ?>" class="link">Take me to the video.</a>
            
                <p>You will be redirected to the video in <span id="count">10</span> seconds...</p>
            </div><!-- end #content -->
        </div><!-- end #content-wrap -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/boilerplate.js"></script>

    
    </body>
</html>

<?php
function createUrl() {
    $url_parameters = '?';

    if ( $_GET['v'] ) {
        $url_parameters .= "v=" . $_GET['v'];
    } 
    else {
        $url_parameters .= "v=" . '0';
    }

    if ( $_GET['option'] ) {
        $url_parameters .= "&option=" . $_GET['option'];
    } 
    else {
        $url_parameters .= "&option=" . '0';
    }

    if ( $_GET['wemail'] ) {
        $url_parameters .= "&wemail=" . $_GET['wemail'];
    } 
    else {
        $url_parameters .= "&wemail=" . '0';
    }
    return $url_parameters;
};
?>




